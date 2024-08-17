import express from "express";
import "dotenv/config";
import { connectDb } from "./db/config.js";
import AllRoutes from "./routers/index.js";

const app = express();

app.listen(
  process.env.PORT,
  console.log(`Server Started on Port: ${process.env.PORT}`)
);

connectDb();
app.use(express.json());
app.use(AllRoutes);
