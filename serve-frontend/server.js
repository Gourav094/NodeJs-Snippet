const express = require('express')
const app = express()

const PORT = 3000

app.use((req,res,next) => {
    const start = Date.now()
    next()
    const diff = Date.now() - start
    console.log(`${req.method}${req.baseUrl}${req.url} ${diff}ms`)
})


app.use('/site',express.static('public'))

app.get('/',(req,res) =>{
    res.send("you just made a get request")
})

app.listen(PORT,() => {
    console.log('server started')
})