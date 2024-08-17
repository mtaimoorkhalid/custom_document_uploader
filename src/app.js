import express from "express"
import "dotenv/config"

const app = express();
console.log(process.env.PORT);

app.listen(process.env.PORT,console.log(`Server Started on Port: ${process.env.PORT}`))