const io = require('socket.io')
const http = require('http')

const api = require('./api')
const httpServer = http.createServer(api)
const socketServer = io(httpServer)

const sockets = require('./socket')

const PORT = 3000

httpServer.listen(PORT,() => {
    console.log(`server running on ${PORT}`)
})

sockets.listen(socketServer)