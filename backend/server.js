import express from "express";
import mongoose from "mongoose";
import https from "https";
import http from "http";
import fs from "fs";
import bodyParser from "body-parser";
const app = express();
import Cors from "cors";
import dotenv from "dotenv";
import postSlike from "./routes/post.js";
import pocetna from "./routes/index.js";
import path from "path";
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));

const connection_url =
  "mongodb+srv://stipica11:stipo123@cluster0.ielh6.mongodb.net/kandija?retryWrites=true&w=majority";

//Middleware
app.use(express.json());
app.use(Cors());

//DB CONFIG
mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
mongoose.connection.once("open", () => {
  console.log("DB connected");
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const __dirname = path.resolve();
app.use(express.static("public"));

app.use("/galerija", postSlike);
app.use("/", pocetna);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "humac-web/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "../humac-web", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.listen(5000, (req, res) => {
  console.log("SERVER JE STARTOVAN NA PORTU 5000");
});
