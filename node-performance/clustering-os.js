// here we are using os module to maximize the performance of node application so we can create required workers for clustring
const express = require('express')
const cluster = require('cluster')
const os = require('os')
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
    const Num_Worker = os.cpus().length
    console.log(Num_Worker)
    for(let i = 0;i < Num_Worker;i++){
        cluster.fork()
    }
    console.log(os.cpus)
}
else {
    console.log('worker process is running')
    app.listen(3000) 
}