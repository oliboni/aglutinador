import mongoose from "mongoose"
import currentDate from "../config/timezoneConfig.js"

const configsSchema = mongoose.Schema(
    {
        id: {type: String},
        frequencia_sp: {type: String},
        temp_max: {type: String},
        motor_start: {tpye: Number},
        motor_valves: {type: Number},
        wait_to_stop: {type: Number},
        lastUpdate: {type: Date, default: currentDate()}
    }
)

const configs = mongoose.model("configs", configsSchema)

export default configs;