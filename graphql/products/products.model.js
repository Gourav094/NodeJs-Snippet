    const products = [
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
    ]

function getAllProducts(){
    return products
}

function getProductsByPrice(min,max){
    return products.filter((product) => {
        return product.price >= min && product.price <= max
    })
}

function getProductsById(id){
    return products.find((product) => {
        return product.id === id
    })
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductsById,
}