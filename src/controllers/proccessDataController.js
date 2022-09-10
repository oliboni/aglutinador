import ProccessData from "../models/ProccessData.js"

class ProccessDataController{
    static getProccessData = (req, res) => {
        const proccessId = req.params.proccessId

        ProccessData.find({proccess_id: proccessId},(err, proccessData) => {
            if (err){ 
                res.status(500).send(err.message)
            }

            res.status(200).send(proccessData)
        })
    }

    static createProccessData = (req, res) => {
        const proccessId = req.params.proccessId

        const proccessData = new ProccessData(req.body)
        proccessData.proccess_id = proccessId

        proccessData.save((err) => {
            if (err) {
                res.status(500).send({message: `Error on save new proccess - ${err.message}`})
            }
            
            res.status(201).send({message: `Proccess add`})
        })
    }
}

export default ProccessDataController