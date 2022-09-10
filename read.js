import {ReadlineParser, SerialPort} from "serialport"

const port = new SerialPort({
    path: '/dev/ttys002',
    baudRate: 9600
})

const parser = port.pipe(new ReadlineParser({
    delimeter: '\r\n'
}))


parser.on('data', (data) => {
    console.log(data)
})