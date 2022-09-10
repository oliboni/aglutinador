import Moment from "moment"

function currentDate() {
    return new Date(Moment().format('YYYY-MM-DDTHH:mm:ss')+'Z')
}

export default currentDate