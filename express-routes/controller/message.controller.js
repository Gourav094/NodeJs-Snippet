const path = require('path')
function getMessages(req,res){
    // const filePath = path.join(__dirname,'..','public','skimountain.jpg') 
    // res.sendFile(filePath)
    res.sendFile(path.join(__dirname,'..','public','skimountain.jpg'))
}

function postMessage(req,res){
    res.json("Updating messages...! You can send message to your friends")
}

module.exports = {
    getMessages,
    postMessage
}