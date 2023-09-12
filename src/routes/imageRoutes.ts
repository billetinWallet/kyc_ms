import express from "express";
import {
  getImage,
  getImages,
  createImage,
  updateImage,
  deleteImage,
} from "../controllers/imageController";

const imageRoutes = express.Router();

imageRoutes.route("/").get(getImages).post(createImage);

imageRoutes.route("/:id").get(getImage).put(updateImage).delete(deleteImage);

export default imageRoutes;
