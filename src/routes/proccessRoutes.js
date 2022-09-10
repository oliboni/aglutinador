import express from 'express'
import ProccessController from '../controllers/proccessController.js'

const router = express.Router()

router
    .get("/proccess", ProccessController.getProccess)
    .post('/proccess', ProccessController.createProccess)
    .put('/proccess/:id/end', ProccessController.endProccess)

export default router