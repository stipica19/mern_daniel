import express from "express";
import bodyParser from "body-parser";

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

console.log("object");

router.get("/", async (req, res) => {
  console.log("Usli u index");
  const pod = await CoverPhoto.find({ category: "coverPhoto" });
  console.log(pod);
  return res.send(pod);
});

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
