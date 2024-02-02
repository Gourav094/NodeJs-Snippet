const axios = require('axios')

axios.get('http://www.gooogle.com')
.then((res) => {
    console.log(res)
})
.catch((error) => {
    console.log(error)
})
.then(() => {
    console.log("I successfully did my work")
})