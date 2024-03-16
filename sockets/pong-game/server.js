const server = require('http').createServer()
const io = require('socket.io')(server)
const PORT = 3000

server.listen(PORT,() => {
    console.log(`server running on ${PORT}`)
})

let connectedPlayer = 0

io.on('connection',(socket) => {
    console.log('player connected ',socket.id)
    socket.on('ready',() => {
        console.log('player is ready..')
        connectedPlayer++
        if(connectedPlayer == 2){
            console.log('Lets start the game')
            io.emit('startGame',socket.id)
        }
    })

    socket.on('movePaddle',(position) => {
        socket.broadcast.emit('movePaddle',position)
    })

    socket.on('moveBall',(position) => {
        socket.broadcast.emit('moveBall',position)
    })
})