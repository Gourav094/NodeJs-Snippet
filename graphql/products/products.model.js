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
            price: 800,
            reviews:[]
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

function addNewProduct(id,description,price){
    const product = {
        id,
        description,
        price,
        reviews:[]
    }
    products.push(product)
    return product
}

function addNewProductReview(id,rating,comment){
    const product = getProductsById(id)
    // console.log(product)
    if(product){
        const newReview = {
            rating,
            comment
        }    
        product.reviews.push(newReview)
        return newReview
    }
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductsById,
    addNewProduct,
    addNewProductReview
}