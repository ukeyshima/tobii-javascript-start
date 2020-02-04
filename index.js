const express = require('express')
const app = express()
app.use(express.static('browser'))

const zmq = require("zeromq")  
const sock = new zmq.Subscriber
sock.connect("tcp://127.0.0.1:5556")
sock.subscribe("TobiiStream")
sock.subscribe("TobiiState")

let gazeData

(async ()=>{
    for await (const [topic,msg] of sock) {
        let receiveText = Buffer.from(msg).toString().split(" ")
        gazeData = {
            x:receiveText[0],
            y:receiveText[1]
        }        
      }
})()
    
app.get('/api/v1/list', (req, res) => {              
    res.json(gazeData)
})

app.listen(3000, () => console.log('Listening on port 3000'))

