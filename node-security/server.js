const fs = require('fs')
const https = require('https')
const express = require('express')
const helmet = require('helmet')
const path = require('path')
const passport = require('passport')
const { Strategy } = require('passport-google-oauth20')
const cookieSession = require('cookie-session')
require('dotenv').config()
const app = express()

const PORT = 3000

const config = {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
    SECRET_KEY1: process.env.SECRET_KEY1,
    SECRET_KEY2: process.env.SECRET_KEY2
}

const AUTH_OPTIONS = {
    callbackURL: '/auth/google/callback',
    clientID: config.CLIENT_ID,
    clientSecret: config.CLIENT_SECRET
}

function verifyCallback(accessToken, refreshToken, profile, done) {
    console.log('Goggle take us back after authentication')
    done(null, profile)
}

passport.use(new Strategy(AUTH_OPTIONS, verifyCallback))

passport.serializeUser((user,done) => {
    done(null,user.id)
})

passport.deserializeUser((obj,done) => {
    done(null,obj)
})


app.use(helmet())

app.use(cookieSession({
    name:"session",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [config.SECRET_KEY1,config.SECRET_KEY2]
}))

app.use(passport.initialize())
app.use(passport.session())

function checkLogin(req, res, next) {
    console.log("current user",req.user)
    const Login = req.isAuthenticated && req.user
    if (!Login) {
        return res.status(401).json({
            error: "You need to login !!"
        })
    }
    next()
}

// for redirect to login
app.get('/auth/google', passport.authenticate('google', {
    scope: ['email']
}))

//getting redirect callback for auth server
app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/failure',
        session: true
    }),
    (req, res) => {
        console.log('authorization successfully done by google')
    })

//for logout
app.get('/auth/logout', (req, res) => { 
    req.logout()
    return res.redirect('/')
})

app.get('/secret', checkLogin, (req, res) => {
    return res.send('Your secret value is 2003')
})

app.get('/failure', (req, res) => {
    res.send('Getting error in log in. Please try again later')
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}, app).listen(PORT, () => {
    console.log(`server running on https://localhost:3000`)
})

// to create self certificate -> run this command in bash terminal
// openssl req -x509 -newkey rsa:4096 -nodes -keyout key.pem -out cert.pem -days 365