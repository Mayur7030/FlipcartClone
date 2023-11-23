import express from "express";
import { usersignup, userlogin } from "../controller/user-controller.js";
import getProducts from "../../client/src/components/redux/actions/productActions.js";
const router = express.Router();

router.post("/signup", usersignup);

router.post("/login", userlogin);

router.get("/products", getProducts);
export default router;
