const request = require('./request')
const response = require('./response')

function makeRequest(url,data){
    request.send(url,data)
    return response.read()
}
makeRequest('https://www.google.com','Sender name is gourav garg')
