import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { ProductContext } from '../../contexts/ProductContext'
import './style.css'

const Cart = () => {
    const {
        productState: { order },
        clearOrder
    } = useContext(ProductContext)

    let orderList = (
        <div>
            You have no product in cart
        </div>
    )
    if(order.length!==0) {
        orderList = (
            order.map(o => (
                <div key={o.id}>
                    <p>{o.title} x {o.quantity}</p>
                </div>
            ))
        )
    }

    return (
        <div className='cart_container'>
            <h3>Your cart:</h3>
            {orderList}
            <button onClick={clearOrder}> Clear Order </button>
            <div style={{margin: '20px 0'}}>
                <Link to='/menu'>
                    <Button>To Product</Button>
                </Link>
            </div>
        </div>
    )
}

export default Cart