import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
const router = express.Router();
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

import Post from "../models/posts.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
// INIT Upload
var upload = multer({ storage: storage }).single("file");

router.get("/", (req, res) => {
  Post.find()
    .then((slika) => {
      res.json(slika);
      console.log(slika);
    })
    .catch((err) => console.log(err));
});

router.get("/:cat", async (req, res) => {
  var perPage = 3;
  const skip =
    req.query.skip && /^\d+$/.test(req.query.skip) ? Number(req.query.skip) : 0;
  console.log(skip);
  try {
    console.log("USLI SMO U GET OD CAT:  " + req.params.cat);
    const skip =
      req.query.skip && /^\d+$/.test(req.query.skip)
        ? Number(req.query.skip)
        : 0;
    console.log(skip);
    const slike = await Post.find({ category: req.params.cat })
      //.sort({ images: -1 })
      .skip(skip)
      .limit(perPage);
    console.log(slike);
    res.status(200).json(slike);
  } catch (error) {
    res.status(500).send();
  }
});

//Brisanje slike iz baze
router.delete("/:id", async (req, res) => {
  const postremove = Post.findById(req.params.id);

  if (postremove) {
    console.log("brisanje");
    await postremove.remove();
    res.json({ message: "Slika izbrisana" });
  } else {
    res.status(404);
    throw new Error("Slika nije izbrisana");
  }
});

router.post("/upload", protect, admin, (req, res) => {
  upload(req, res, (err) => {
    console.log("KATEGORIJA ARTIKLA: " + req.body.name);
    if (err) {
      console.log("GREŠKA KOD FILE-a");
      console.log(err);
    } else {
      if (req.file == undefined) {
        console.log("GRESKETINA UNDEFINDE");
      } else {
        console.log(req.file);
        const newPost = new Post({
          images: req.file.filename,
          category: req.body.category,
          name: req.body.name,
          opis: req.body.opis,
          datum: new Date(),
        });

        newPost
          .save()
          .then((res) => {
            console.log(`Uspjesno spremljeno u bazu  ${req.body.name}`);
          })
          .catch((err) => {
            console.log("GREŠKA KOD SPREMANJA U BAZU");
            console.log(err);
          });
      }
    }
  });
});
export default router;
