import express from "express"
import ConfigsController from "../controllers/configsController.js"

const router = express.Router()

router
    .get("/configs", ConfigsController.getConfigs)
    .put("/configs", ConfigsController.updateConfigs)

export default router