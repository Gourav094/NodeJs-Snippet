// lets create server for differnet end points
const http = require('http')

const PORT = 3000

const server = http.createServer((req,res) => {
    if(req.url === '/friends'){
        res.writeHead(200,{
            'Content-Type':'application/json'
        })
        res.end('Hello buddy! I am your friend.')
    }
    else if(req.url === '/messages'){
        res.statusCode = 200
        res.setHeader('Content-Type','text/html')  // by giving html type it can understand the html code
        res.write('<ul>')
        res.write('<li>Hello this is html plain text</li>')
        res.write('<li>Successfully understand by browser</li>')
        res.write('</ul>')
        res.end()
    }
})

server.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`)
})