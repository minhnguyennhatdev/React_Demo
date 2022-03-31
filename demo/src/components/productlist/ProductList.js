import React, { useContext } from 'react'
import { Spinner } from 'react-bootstrap'
import { ProductContext } from '../../contexts/ProductContext'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const ProductList = () => {
    const {
        productState: { productList, order },
        addOrder
    } = useContext(ProductContext)
  
    const handleClick = (product) => {
        addOrder(product)
    }

    let body = (
        <div>
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
    if(productList) {
        body = (
            productList.map(product => (
                <div key={product.id}>
                    <p onClick={() => handleClick(product)} id={product.id}>{product.title}: ${product.price}</p>
                </div>
            ))
        )
    }

    return (
        <div className='product_container'>
            <h1>San pham</h1>
            {body}
            <Link to='/cart'>
                <Button>Gio hang</Button>
            </Link>
            <h4>Ban co {order.length} san pham trong gio hang</h4>
        </div>
    )
}

export default ProductList