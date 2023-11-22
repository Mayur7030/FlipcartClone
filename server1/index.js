import express from "express";
import Connection from "./database/db.js";
import dotenv from 'dotenv';
import Defaultdata from "./default.js"; 


const app = express();

const PORT = 8000;

dotenv.config()
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username,password);


app.listen(PORT, () =>
  console.log(`server is running successfully on PORT ${PORT}`)
);

Defaultdata()
