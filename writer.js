import {SerialPort} from "serialport"

const port = new SerialPort({
    path: '/dev/tty.Bluetooth-Incoming-Port',
    baudRate: 9600
})

const event = {
    temp: [25,0,0,0,0,0,0,0,0,25,0,0],
    st: 0,
    cor: 0,
    fsp: 0,
    fpv: 0,
    step1: 10,
    step2: 5,
    step3:10,
    tempmax: 1000
}

port.write(JSON.stringify(event))