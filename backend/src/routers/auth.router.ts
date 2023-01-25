import express from "express";
// @ts-ignore
import userMidleware from "../midleware/user.midleware.ts";
// @ts-ignore
import authController from "../controllers/auth.controller.ts";

const router = express.Router()

router.post('/login', userMidleware.getUserDynamically('email'), authController.login)

export {router}