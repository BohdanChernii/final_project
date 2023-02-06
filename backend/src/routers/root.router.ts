import express from "express";
// @ts-ignore
import userController from "../controllers/user.controller.ts";
// @ts-ignore
import clientMidleware from "../midleware/client.midleware.ts";
// @ts-ignore
import clientController from "../controllers/client.controller.ts";
// @ts-ignore
import userMidleware from "../midleware/user.midleware.ts";
// @ts-ignore
import authController from "../controllers/auth.controller.ts";

const router = express.Router()

router.get('/user', userController.getAllUsers)
router.get('/clients', clientMidleware.ordering, clientMidleware.filtering, clientController.getAllClients)
router.post('/auth/login', userMidleware.getUserDynamically('email'), authController.login)

export {router}