let connectedPlayer = 0
function listen(io) {
    const pongNamespace = io.of('/pong')
    pongNamespace.on('connection', (socket) => {
        console.log('player connected ', socket.id)
        let room;
        socket.on('ready', () => {
            room = 'room' + Math.floor(connectedPlayer/2)
            socket.join(room)

            console.log('player is ready..')
            
            connectedPlayer++

            if (connectedPlayer % 2 === 0) {
                console.log('Lets start the game')
                pongNamespace.in(room).emit('startGame', socket.id)
            }
        })

        socket.on('movePaddle', (position) => {
            socket.to(room).emit('movePaddle', position)
        })

        socket.on('moveBall', (position) => {
            socket.to(room).emit('moveBall', position)
        })

        socket.on('disconnect', (reason) => {
            console.log(`Client ${socket.id} disconnected : `, reason)
            socket.leave(room)
        })
    })
}

module.exports = {
    listen,
}