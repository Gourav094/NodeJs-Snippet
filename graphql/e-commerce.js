const express = require('express')
const path = require('path')
const {loadFilesSync} = require('@graphql-tools/load-files')
const {makeExecutableSchema} = require('@graphql-tools/schema')
const {ApolloServer} = require('apollo-server-express')

const typeArray = loadFilesSync(path.join(__dirname,'**/*.graphql'))
const resolverArray = loadFilesSync(path.join(__dirname,'**/*.resolvers.js'))

async function StartApolloServer(){
    const app = express()

    const schema = makeExecutableSchema({
        typeDefs: typeArray,
        resolvers: resolverArray,
    })

    const server = new ApolloServer({
        schema
    }) 

    await server.start()

    server.applyMiddleware({app,path:'/graphql'})

    app.listen(3000,() => {
        console.log(`Graphql server running on http://localhost:3000/graphql ...`)
    })
}

StartApolloServer()