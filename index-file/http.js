const internals = require('./internals')
// using require with folder will give error without inedx file
// index is a special file allow to use folder as modules
const {send} = require('./internals')
// using 1st type
function makeRequest(url,data) {
    internals.send(url,data)
    return internals.read()
}

makeRequest("www.google.com","my name is gourav garg")

// run this file everything is working fine even using different folder