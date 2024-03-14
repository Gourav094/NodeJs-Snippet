const express = require('express')
const http = require('http')
const app = express() 
const path = require('path')
const {Server} = require('socket.io')

const server = http.createServer(app)

const io = new Server(server)

io.on('connection',(socket) => {
    socket.on('message',(msg) => {
        console.log(`msg received: ${msg}`)
        io.emit('message',msg) // send to all connected user 
        // socket.broadcast.emit('message',msg)   --> send to all except us 
        // socket.emit(' ' , ) --> send to one server only
    })
})

app.use(express.static(path.resolve('public')))

app.get('/',(req,res) => {
    res.sendFile('/public/index.html')
})

server.listen(3000,() => {
    console.log(`Server runnning on http://localhost:3000`)
})