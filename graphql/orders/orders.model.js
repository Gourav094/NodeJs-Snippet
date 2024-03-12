const orders = [
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

function getAllOrders(){
    return orders
}

module.exports = {
    getAllOrders,
}