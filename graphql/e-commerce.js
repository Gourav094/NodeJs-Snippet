const express = require('express')
const app = express() 

const path = require('path')

const {loadFilesSync} = require('@graphql-tools/load-files')
const {makeExecutableSchema} = require('@graphql-tools/schema')
const {graphqlHTTP} = require('express-graphql');

const typeArray = loadFilesSync(path.join(__dirname,'**/*.graphql'))
const resolverArray = loadFilesSync(path.join(__dirname,'**/*.resolvers.js'))

const schema = makeExecutableSchema({
    typeDefs: typeArray,
    resolvers: resolverArray,
})


app.use('/graphql',graphqlHTTP({
    schema:schema,
    graphiql:true
}))

app.listen(3000,() => {
    console.log(`Graphql server running on http://localhost:3000/graphql ...`)
})