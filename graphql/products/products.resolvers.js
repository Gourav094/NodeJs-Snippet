const productsModel = require('./products.model')

module.exports = {
    Query: {
        products:() => {
            return productsModel.getAllProducts()
        },
        productsByPrice:(parent,args) => {
            return productsModel.getProductsByPrice(args.min,args.max)
        },
        product:(_,args) => {
            return productsModel.getProductsById(args.id)
        }
    }
}