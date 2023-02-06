import express from "express";
// @ts-ignore
import clientController from '../controllers/client.controller.ts'
// @ts-ignore
import clientMidleware from "../midleware/client.midleware.ts";


const router = express.Router()

router.get('/', clientMidleware.ordering, clientMidleware.filtering, clientController.getAllClients)

// router.post('/', clientController.createClients)

export {router}