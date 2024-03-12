const express = require('express')
const app = express() 

const {buildSchema } = require('graphql')
const {graphqlHTTP} = require('express-graphql');


const schema = buildSchema(`
    type Query{
        description: String
        price: Float
    }
`)

const root = {
    description: 'redtape shoe',
    price: 1500
}

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql:true
}))

app.listen(3000,() => {
    console.log(`Graphql server listening on port 3000...`)
})