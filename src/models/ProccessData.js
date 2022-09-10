import mongoose from "mongoose";
import currentDate from "../config/timezoneConfig.js";

const proccessDataSchema = mongoose.Schema(
    {
        id: {type: String},
        temperatures: {type: [Number], alias: 'temp'},
        inverter_status: {type: Boolean, alias: 'st'},
        chain: {type: Number, alias: 'cor'},
        frequency_sp: {type: Number, alias: 'fsp'},
        frequency_pv: {type: Number, alias: 'fpv'},
        motor_start: {type: Number, alias: 'step1'},
        water_valves: {type: Number, alias: 'step2'},
        wait_to_stop: {type: Number, alias: 'step3'},
        temp_max: {type: Number, alias: 'tempmax'},
        created_at: {type: Date, default: currentDate},
        proccess_id: {type: mongoose.Schema.Types.ObjectId, ref: 'proccess'}
    }
)

const proccessData = mongoose.model('proccess_data', proccessDataSchema)

export default proccessData