import mongoose from "mongoose"


mongoose.connect("mongodb://localhost/aglutinador")
    .then(() => console.log('connecting to database successful'))
    .catch(err => console.error('could not connect to mongo DB', err))

let db = mongoose.connection

export default db;