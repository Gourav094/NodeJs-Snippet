const express = require('express')
const app = express()

const PORT = 3000
const friends = [
    {
        id:1,
        name:`The gourav garg`
    },
    {
        id:1,
        name:`The shah rukkh khan`
    },
]

app.use((req,res,next) => {
    const start = Date.now()
    next()
    const diff = Date.now() - start
    console.log(`${req.url} ${diff}ms`)
})

// express.json provided by express in middleware that used to get body from req 

app.use(express.json())

app.post('/friend',(req,res) => {
    if(!req.body.name){
        return res.status(400).json({
            error:"Name not found"
        })
    }
    const newFriend = {
        id:friends.length,
        name:req.body.name
    }
    friends.push(newFriend)
    res.json(newFriend)
})

app.get('/friend',(req,res) => {
    res.send(friends)
})


app.listen(PORT,() => {
    console.log(`Listening on ${PORT}...`)
})




// we can use tool like postman and insomnia to fetch these request but if you want to fetch using browser
// fetch('http://localhost:3000/friend', {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ name: "Isaac Newton" })
// })

