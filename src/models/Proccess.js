import mongoose from "mongoose";
import currentDate from "../config/timezoneConfig.js";

const proccessSchema = mongoose.Schema(
    {
        id: {type: String},
        started_date: {type: Date, default: currentDate},
        finished_date: {type: Date},
        total_time: {type: Number}
    }
)

const proccess = mongoose.model('proccess', proccessSchema)
export default proccess