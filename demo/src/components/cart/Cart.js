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
            Ban ko co order
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
            <h3>Order cua ban la</h3>
            {orderList}
            <Button onClick={clearOrder}> Clear Order </Button>
            <div style={{margin: '20px 0'}}>
                <Link to='/menu'>
                    <Button>San pham</Button>
                </Link>
            </div>
        </div>
    )
}

export default Cart