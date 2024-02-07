function getMessages(req,res){
    res.send("You are very nice")
}

function postMessage(req,res){
    res.json("Updating messages...! You can send message to your friends")
}

module.exports = {
    getMessages,
    postMessage
}