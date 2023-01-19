import express from "express";
// @ts-ignore
import clientController from '../controllers/client.controller.ts'

const router = express.Router()

router.get('/', clientController.getAllClients)

router.post('/', clientController.createClients)

export {router}