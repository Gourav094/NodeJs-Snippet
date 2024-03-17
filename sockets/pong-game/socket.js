let connectedPlayer = 0
function listen(io) {
    const pongNamespace = io.of('/pong')
    pongNamespace.on('connection', (socket) => {
        console.log('player connected ', socket.id)
        socket.on('ready', () => {
            console.log('player is ready..')
            connectedPlayer++
            if (connectedPlayer % 2 === 0) {
                console.log('Lets start the game')
                pongNamespace.emit('startGame', socket.id)
            }
        })

        socket.on('movePaddle', (position) => {
            socket.broadcast.emit('movePaddle', position)
        })

        socket.on('moveBall', (position) => {
            socket.broadcast.emit('moveBall', position)
        })

        socket.on('disconnect', (reason) => {
            console.log(`Client ${socket.id} disconnected : `, reason)
        })
    })
}

module.exports = {
    listen,
}