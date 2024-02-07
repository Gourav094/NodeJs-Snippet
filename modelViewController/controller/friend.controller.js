const friends = require('../models/friend.model')
// Note: using function instead of arrow func help in debugging in node because
// in function node can tell where the error is which function it belong but in arrow function node not know where the function is
function postFriend(req,res){
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
}


function getFriends(req,res){
    res.send(friends)
}

function getFriend(req,res){
    const friendId = Number(req.params.friendId)
    const friend = friends[friendId]
    if(friend){
        res.status(200).json(friend)
    }
    else{
        res.status(400).json({
            error:"SOrry we didn't find any friend at this address"
        })
    }
}


module.exports = {
    postFriend,
    getFriends,
    getFriend
}