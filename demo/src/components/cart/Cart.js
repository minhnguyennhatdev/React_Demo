import React, { useContext } from 'react'
import { ProductContext } from '../../contexts/ProductContext'

const Cart = () => {
    const {
        productState: { order },
    } = useContext(ProductContext)

    let orderList = (
        <div>
            Ban ko co order
        </div>
    )
    if(order.length!==0) {
        orderList = (
            order.map(o => (
                <div key={o.id}>
                    <p>{o.name} x {o.quantity}</p>
                </div>
            ))
        )
    }

    return (
        <div>
            <h3>Order cua ban la</h3>
            {orderList}
        </div>
    )
}

export default Cart