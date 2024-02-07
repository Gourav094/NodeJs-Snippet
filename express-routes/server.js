const friendRouter = require('./routes/friend.router')
const messageRouter = require('./routes/message.route')

const express = require('express')
const app = express()

const PORT = 3000

app.use((req,res,next) => {
    const start = Date.now()
    next()
    const diff = Date.now() - start
    console.log(`${req.method}${req.baseUrl}${req.url} ${diff}ms`)
})

app.use(express.json())

app.use('/friends',friendRouter)

app.use('/messages',messageRouter)


app.listen(PORT,() => {
    console.log(`Listening on ${PORT}...`)
})
