import configs from "../models/Configs.js";
import currentDate from "../config/timezoneConfig.js"

class ConfigsController {
    static getConfigs = (req, res) => {
        configs.find((err, configs) => {
            res.status(200).send(configs)
        })
    }
    
    static createConfigs = (req, res) => {
        let config = new configs(req.body)
        
        config.save((err) => {
            if (err) {
                res.status(500).send({message: `Error on save configs - ${err.message}`})
            }
            
            res.status(201).send(config.toJSON())
        })
    }
    
    static updateConfigs = (req, res) => {
        configs.findOneAndUpdate({}, {$set: req.body, $set: {lastUpdate: currentDate()}}, (err, result) => {
            if(!err){ 
                if(!result){
                    result = new configs(req.body)
                }
                
                result.save((err) => {
                    if(err) {
                        res.status(500).send({message: `Error on save configs - ${err.message}`})
                    }
                })

                res.status(200).send("Configs saved successfully")
            } else {
                res.status(500).send({message: `Error on save configs - ${err.message}`})
            }
        })
    }
}

export default ConfigsController