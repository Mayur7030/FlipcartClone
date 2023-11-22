import express from "express";
import { usersignup } from "../controller/user-controller.js";
const router = express.Router();

router.post("/signup", usersignup);
export default router;
