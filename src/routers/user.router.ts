import express from "express";
// @ts-ignore
import userController from "../controllers/user.controller.ts";

const router = express.Router()

router.get('/', userController.getAllUsers)

export {router}