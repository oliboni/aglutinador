import Proccess from "../models/Proccess.js";
import currentDate from "../config/timezoneConfig.js";

class ProccessController {
    static getProccess = (req, res) => {
        Proccess.find((err, proccess) => {
            if (err) {
                res.status(500).send(err.message)
            }

            res.status(200).send(proccess)
        })
    }

    static createProccess = (req, res) => {
        const proccess = new Proccess()

        proccess.save((err) => {
            if (err) {
                res.status(500).send({message: `Error on save new proccess - ${err.message}`})
            }
            
            res.status(201).send({message: `Proccess started at ${proccess.started_date.toISOString()}`})
        })
    }

    static endProccess = async (req, res) => {
        const id  = req.params.id

        const currentProccess = await Proccess.findById(id).exec()

        currentProccess.finished_date = currentDate()
        currentProccess.total_time = Math.abs(currentProccess.finished_date - currentProccess.started_date)
        
        currentProccess.save((err) => {
            if(err){ 
                console.log('caiu')
                res.status(500).send({message: `Error on update proccess - ${err.message}`})
            } else {
                console.log('Passou')
                res.status(200).send({message: `proccess finished, total_time: ${getTotalTime(currentProccess.total_time)}`})
            }
        })
    }
}

function getTotalTime(total_time) {
    let diffMilliSeconds = total_time/1000

    //Calc days
    const days = Math.floor(diffMilliSeconds/86400)
    diffMilliSeconds -= days * 86400
    
    //calc hours
    const hours = Math.floor(diffMilliSeconds/3600) % 24
    diffMilliSeconds -= hours * 3600
    
    // calc minutes
    const minutes = Math.floor(diffMilliSeconds/60) % 60
    diffMilliSeconds -= minutes * 60
    
    let difference = ''
    
    if (days > 0) {
        difference += (days === 1) ? `${days} dia, ` : `${days} dias, `
    }

    difference += hours + ':' + minutes + ':' + diffMilliSeconds

    return difference
}

export default ProccessController