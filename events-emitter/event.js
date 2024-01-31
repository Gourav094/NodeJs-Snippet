const EventEmitter = require('events')
const celebrity = new EventEmitter()

celebrity.on('race win',() => {
    console.log("congratulation buddy ! i am your big fan. ")
})

celebrity.on('race',(result) => {
    console.log(`ooops you are ${result}`)
})
//
celebrity.emit('race win')

celebrity.emit('race','win')
celebrity.emit('race','loose')