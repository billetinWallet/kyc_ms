import express from "express";
import { verification } from "../controllers/verificationController";

const verificationRoutes = express.Router();

verificationRoutes.route("/").post(verification);

export default verificationRoutes;
