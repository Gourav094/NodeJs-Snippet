const express = require('express')
const path = require('path')
const app = express()

const PORT = 3000
// serving frontend statically
app.use('/site',express.static('public'))
// serving dynamically  

app.set('view engine','hbs')
app.set('views',path.join(__dirname,'views')) 


app.get('/',(req,res) => {
    // res,render provided by express to call template engine which bedefault call layout if present 
    res.render('index',{
        title:'Layout and seperation',
        caption:'You have successfully passed the data dynamically'
    })
})


app.get('/message',(req,res) => {
    res.render('message',{
        friend:'Gourav garg',
        message:'Your message successfully sent to gourav garg'
    })
})

app.listen(PORT,() => {
    console.log('server started')
})