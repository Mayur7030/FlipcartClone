import express from "express";
import { usersignup, userlogin } from "../controller/user-controller.js";
const router = express.Router();

router.post("/signup", usersignup);

router.post("/login", userlogin);
export default router;
