// using pm2 tool which underhood use cluster
const express = require('express')

const app = express()


function delay(duration) {
    const startTime = Date.now()
    while (Date.now() - startTime < duration) {

    }
}

app.get('/', (req, res) => {
    res.send(`checking performance ${process.pid}`)
})

app.get('/timer', (req, res) => {
    delay(5000)
    res.send(`beep beep beep... ${process.pid}`)
})

console.log('running server file')

console.log('worker process is running')
app.listen(3000) 