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
    res.render('index',{
        title:'Dynamic Data passed',
        caption:'You have successfully passed the data dynamically'
    })
})


app.listen(PORT,() => {
    console.log('server started')
})