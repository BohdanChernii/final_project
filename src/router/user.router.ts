import express from "express";
// @ts-ignore
import userController from '../controller/user.controller.ts'

const router = express.Router()

router.get('/', userController.getAllClients)

router.post('/', userController.createClients)

export {router}