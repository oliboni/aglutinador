import {ReadlineParser, SerialPort} from "serialport"

const port = new SerialPort({
    path: '/dev/tty.Bluetooth-Incoming-Port',
    baudRate: 9600
})

const parser = port.pipe(new ReadlineParser({
    delimeter: '\r\n'
}))

export default parser