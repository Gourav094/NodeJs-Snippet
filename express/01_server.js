const express = require('express')

const app = express()
const PORT = 3000

app.get('/',(req,res) => {
    res.send('hello i just send get request using express')
})

app.get('/messages',(req,res) => {
    res.send('<ul><li>Hello, i am testing nodemon hehehehhehe</li></ul>')
})

app.get('/message',(req,res) => {
    res.send({
        id:1,
        name:'I am going to be the greatest developer'
    })
})

app.post('/messages',(req,res) => {
    console.log('I just made a post request')
})

app.listen(PORT,() => {
    console.log(`Listening on ${PORT}..`)
})