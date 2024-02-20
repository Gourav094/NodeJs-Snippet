const express = require('express')
const cluster = require('cluster')
const app = express()


function delay(duration){
    const startTime = Date.now()
    while(Date.now() - startTime < duration){

    }
}

app.get('/',(req,res) => {
    res.send(`checking performance ${process.pid}`)
})

app.get('/timer',(req,res) => {
    delay(5000)
    res.send(`checking timer ${process.pid}`)
})

console.log('running server file')

if(cluster.isMaster){
    console.log('Master process running')
    cluster.fork()
    cluster.fork()
}
else {
    console.log('worker process is running')
    app.listen(3000) 
}