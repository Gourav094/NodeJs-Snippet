const express = require('express')
const app = express()

const PORT = 3000
const friends = [
    {
        id:1,
        name:`goruav garg made a get request`
    }
]

app.use((req,res,next) => {
    console.log(req.url)
    next()
})

app.use((req,res,next) => {
    const start = Date.now()
    next()
    // this action go after process all request by handlers
    const diff = Date.now() - start
    console.log(`Node take ${diff}ms time to complete`)
})

app.get('/friend',(req,res) => {
    res.send(friends)
})

app.get('/message',(req,res) => {
    res.send('hello i just send get request using express')
})

app.listen(PORT,() => {
    console.log(`Listening on ${PORT}...`)
})