import expresss from "express"
import config from "./configsRouter.js"
import proccess from "./proccessRoutes.js"
import proccessData from "./proccessDataRoutes.js"

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("server is online!")
    })

    app.use(
        expresss.json(),
        config,
        proccess,
        proccessData
    )
}

export default routes