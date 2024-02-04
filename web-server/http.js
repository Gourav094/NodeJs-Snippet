const http = require('http')

const PORT = 3000

const server = http.createServer((req,res) => {
    res.writeHead(200,{
        'Content-Type': 'application/json',
        // 'Content-Type': 'text/plain',
    })
    // res.end() this is also correct if we dont want to print anything
    // res.end('Helllo i am your friend')
    res.end(JSON.stringify({
        text:'Helllo i am your friend',
        id:1
    }))
})

// server is created.Now, lets run server
server.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})
