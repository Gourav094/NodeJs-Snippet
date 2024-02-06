const http = require('http')

const data = [
    {
        id:0,
        text:"Gourav"
    },
    {
        id:1,
        text:"This is nodejs project by gourav garg"
    },
    {
        id:2,
        text:"Lets learn backend together"
    }
]

const PORT = 3000

// const server = http.createServer((req,res) => {
//     const items = req.url.split("/")
//     if(items[1] === 'friends'){
//         res.writeHead(200,{
//             'Content-Type':'text/plain'
//         })
//         if(items.length === 3){
//             res.end(JSON.stringify(data[items[2]]))
//         }
//         else{
//             res.end(JSON.stringify(data))
//         }
//     }
//     else if(items[1] === 'messages'){
//         res.statusCode = 200
//         res.setHeader('Content-Type','text/html')
//         res.write('<ul>')
//         res.write('<li>Hello this is html plain text</li>')
//         res.write('<li>Successfully understand by browser</li>')
//         res.write('</ul>')
//         res.end()
//     }
// })

// lets see the another way of creating server using event emiiter

const server = http.createServer() // this is an event emitter

server.on('request',(req,res) => {
    const items = req.url.split("/")
    if(items[1] === 'friends'){
        res.writeHead(200,{
            'Content-Type':'text/plain'
        })
        if(items.length === 3){
            res.end(JSON.stringify(data[items[2]]))
        }
        else{
            res.end(JSON.stringify(data))
        }
    }
    else if(items[1] === 'messages'){
        res.statusCode = 200
        res.setHeader('Content-Type','text/html')
        res.write('<ul>')
        res.write('<li>Hello this is html plain text</li>')
        res.write('<li>Successfully understand by browser</li>')
        res.write('</ul>')
        res.end()
    }
})
server.listen(PORT,() => {
    console.log(`listening on ${PORT}...`)
})