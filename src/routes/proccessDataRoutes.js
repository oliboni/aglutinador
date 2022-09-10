import express from 'express'
import ProccessDataController from '../controllers/proccessDataController.js'

const router = express.Router()

router
    .get("/proccess-data/:proccessId", ProccessDataController.getProccessData)
    .post('/proccess-data/:proccessId', ProccessDataController.createProccessData)
    
export default router