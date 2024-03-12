// This file includes schema for e-commerce website for showing orders and cart page data
const express = require('express')
const app = express() 

const {buildSchema } = require('graphql')
const {graphqlHTTP} = require('express-graphql');


const schema = buildSchema(`
    type Query{
        products: [Product]
        orders: [Order]
    }

    type Product{
        id: ID!
        description: String! 
        price: Float!
        reviews: [Review]
    }

    type Review{
        comment: String!
        rating: Int!
    }

    type Order{
        date: String!
        subTotal: Float!
        items : [OrderItem]
    }

    type OrderItem{
        quantity: Int!
        product: Product!
    }
`)

const root = {
    products: [
        {
            id:'redTape',
            description: 'RedTape men shoes',
            price: 1170,
            reviews: [
                {
                    comment: 'A good quality shoes which is good in this price range',
                    rating:4.7
                }
            ]
        },
        {
            id:'blue jeans',
            description: 'blue jeans for men',
            price: 800
        }
    ],
    orders: [
        {
            date: '10/03/2024',
            subTotal: 730,
            items : [
                {
                    quantity : 2,
                    product: {
                        id: 'red shoe',
                        description: 'old redTape shoe for men',
                        price: 500
                    }
                }
            ]
        }
    ]
}

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue: root,
    graphiql:true
}))

app.listen(3000,() => {
    console.log(`Graphql server listening on port 3000...`)
})


// sample graphql query 
//{
//     products{
//           description
//     }
//     orders {
//       subTotal
//       items {
//         quantity
//         product {
//           description
//           id
//           price
//           reviews {
//             comment
//             rating
//           }
//         }
//       }
//     }
//   }
  