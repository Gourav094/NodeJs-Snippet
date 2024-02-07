const http = require('http')
const PORT = 3000
const server = http.createServer() 

const friends = [
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
    },
];



server.on('request',(req,res) => {
    const items = req.url.split('/')

    if(req.method === 'POST' && items[1] === 'friends'){
        console.log(`post method is applied`)
        req.on('data',(data) => {
            const friend = data.toString();
            console.log(`request`,friend);
            friends.push(JSON.parse(friend))
            console.log(friends)
        })
    }
    else if(req.method === 'GET' && items[1] === 'friends'){
        res.writeHead(200,{
            'Content-Type':'text/plain'
        })
        if(items.length === 3){
            res.end(JSON.stringify(friends[items[2]]))
        }
        else{
            res.end(JSON.stringify(friends))
        }
    }
    else if(req.method === 'GET' && items[1] === 'messages'){
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



// To fetch the server using post method please make an POST request  from browser
// fetch('http://localhost:3000/friends',{
//       method:'POST',
//       body:JSON.stringify({
//         id:3,
//         name:'gourav garg made a post request. Can you pleasae verify it by sending acknowledgement.'
//     })
// })




// to fetch data using post method by using stream technique we need to use pipe method

// server.on('request',(req,res) => {
//     const items = req.url.split('/')

//     if(req.method === 'POST' && items[1] === 'friends'){
//         console.log(`post method is applied`)
//         req.on('data',(data) => {
//             const friend = data.toString();
//             console.log(`request`,friend);
//             friends.push(JSON.parse(friend))
//             console.log(friends)
//         })
//         req.pipe(res)

//     }
// })
