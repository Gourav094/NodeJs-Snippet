const fs = require('fs')
const https = require('https')
const express = require('express')
const helmet = require('helmet')
const path = require('path')
require('dotenv').config()
const app = express()

const PORT = 3000

const config = {
    CLIENT_ID : process.env.CLIENT_ID,
    CLIENT_SERVER:process.env.CLIENT_SERVER
}

app.use(helmet())

function checkLogin(req,res,next){
    const Login = true
    if(!Login){
        return res.status(401).json({
            error:"You need to login !!"
        })
    }
    next()
}

// for redirect to login
app.get('/auth/google',(req,res) => {} )

//getting redirect callback for auth server
app.get('/auth/google/callback',(req,res) => {} )

//for logout
app.get('/auth/logout',(req,res) => {} )

app.get('/secret',checkLogin,(req,res) => {
    res.send('Your secret value is 2003')
})

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'public','index.html'))
})

https.createServer({
    key:fs.readFileSync('key.pem'),
    cert:fs.readFileSync('cert.pem')
},app).listen(PORT,() => {
    console.log(`server running on https://localhost:3000`)
})

// to create self certificate -> run this command in bash terminal
// openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365