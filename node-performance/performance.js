const express = require('express')
const app = express()

function delay(duration){
    const startTime = Date.now()
    while(Date.now() - startTime < duration){

    }
}

app.get('/',(req,res) => {
    res.send('checking performance')
})

app.get('/timer',(req,res) => {
    //delay event loop
    delay(5000)
    res.send('ding ding ding')
})

app.listen(8000)