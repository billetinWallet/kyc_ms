import express from "express";
import { connect } from "mongoose";
import Status from "./models/status";
import Image from "./models/image";
import imageRoutes from "./routes/imageRoutes";
import statusRoutes from "./routes/statusRoutes";

const app = express();
app.use(express.json());

const PORT = 5000;

app.use("/images", imageRoutes);
app.use("/status", statusRoutes);

async function connectDB() {
  const db = await connect("mongodb://localhost:27017/kyc_db");
  console.log("database is conected to", db.connection.db.databaseName);
}

connectDB();

app.listen(PORT, () => {
  console.log("server running on port", PORT);
});
