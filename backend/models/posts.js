import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  images: String,
  category: String,
  name: String,
  opis: String,
  datum: { type: Date, default: Date.now },
});

const Posts = mongoose.model("Posts", postSchema);
export default Posts;
