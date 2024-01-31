module.exports = {
    request:require('./request'),
    response:require('./response')
}

// 2nd way to use index js to response and request
const request = require('./request')
const response = require('./response')

module.exports = {
    send: request.send,
    read: response.read
}

// 3rd way to use index js 
module.exports = {
    ...require('./request'),
    ...require('./response')
}