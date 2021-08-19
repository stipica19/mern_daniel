import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import mg from "nodemailer-mailgun-transport";
import mailgun from "mailgun-js";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();
const app = express();
import {
  authUser,
  registerUser,
  getUserProfile,
  getUsers,
  getUserById,
} from "../controllers/userController.js";

app.use(bodyParser.urlencoded({ extended: true }));

import CoverPhoto from "../models/posts.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.get("/", async (req, res) => {
  console.log("Usli u index");
  const pod = await CoverPhoto.find({ category: "coverPhoto" });
  console.log("haloooooooo" + pod);
  return res.send(pod);
});

const apiKey = process.env.API_KEY;
const domain = process.env.DOMAIN;

// email, subject, text
router.post("/email", (req, res) => {
  const { name, email, message } = req.body;

  sendMail(email, name, message, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal Error :(" });
    } else {
      res.json({ message: "Email sent :D" });
    }
  });
});

const auth = {
  auth: {
    apiKey: apiKey,
    domain: domain,
  },
};

const transporter = nodemailer.createTransport(mg(auth));
const sendMail = (email, name, message, cb) => {
  const mailOptions = {
    from: email,
    to: "stipica.klepic1@gmail.com",
    subject: name,
    text: message,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

router.route("/register").post(registerUser).get(protect, admin, getUsers);
router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

router.route("/:id").get(protect, admin, getUserById);

/* router.route("/register").post(registerUser);
router.route("/tokenIsValid").post(tokenIsValid);
router.route("/login").post(authUser);
router.route("/profile").get(authh, getUserProfile);
 */
export default router;
