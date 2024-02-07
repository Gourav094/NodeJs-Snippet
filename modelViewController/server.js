const friendController = require('./controller/friend.controller')
const messageController = require('./controller/message.controller')
const express = require('express')
const app = express()

const PORT = 3000


app.use((req,res,next) => {
    const start = Date.now()
    next()
    const diff = Date.now() - start
    console.log(`${req.url} ${diff}ms`)
})

app.use(express.json())

app.post('/friends',friendController.postFriend)

app.get('/friends',friendController.getFriends)

app.get('/friends/:friendId',friendController.getFriend)

app.get('/messages',messageController.getMessages)

app.post('/messages',messageController.postMessage)

app.listen(PORT,() => {
    console.log(`Listening on ${PORT}...`)
})
