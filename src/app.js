import express from "express"
import "dotenv/config"
import { connectDb } from "./db/config.js";

const app = express();

app.listen(process.env.PORT,console.log(`Server Started on Port: ${process.env.PORT}`));

connectDb();