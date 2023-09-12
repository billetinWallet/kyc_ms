import express from "express";
import {
  getAllStatus,
  createStatus,
  getStatus,
  updateStatus,
  deleteStatus,
} from "../controllers/statusController";

const statusRoutes = express.Router();

statusRoutes.route("/").get(getAllStatus).post(createStatus);

statusRoutes
  .route("/:id")
  .get(getStatus)
  .put(updateStatus)
  .delete(deleteStatus);

export default statusRoutes;
