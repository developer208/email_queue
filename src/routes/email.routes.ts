import express from "express";
import { sendEmail } from "../controllers/sendEmail";

const route = express.Router();

route.post("/email", sendEmail);

export default route;
