import express from "express"
import db from "./config/dbConnect.js"
import routes from "./routes/index.js"
import parser from "./config/seriaPortConfig.js"

const app = express()
app.use(express.json())

routes(app)

parser.on('data', console.log)

export default app