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





// Example query for mutation and getting data
// mutation ChangeData{
//   addShoe: addNewProduct(id: "blueShoe", description: "A good red tape shoe", price: 750) {
//     id
//     description
//   }
//   addJeans: addNewProduct(id:"blueJeans",description:"A jeans for parties",price:1000){
// 		id
//     description
//   }
//   shoeReview: addNewProductReview(id:"blueShoe",rating: 4,comment:"A good quality show"){
//     rating
//   }
//   jeansReview: addNewProductReview(id:"blueJeans",rating:3,comment:"Good jeans"){
//     rating 
//     comment
//   }
// }
// query GetData{
//   products{
//     id
// 		description
//   }
//   productsByPrice(min:500, max:1000){
// 		description
//     price
//   }
//   product(id:"redTape"){
// 		description
//   }
//   orders { 
//     subTotal
//     items {
//       quantity
//       product {
//         description
//         id
//         price
//         reviews {
//           comment
//           rating
//         }
//       }
//     }
//   }
// }