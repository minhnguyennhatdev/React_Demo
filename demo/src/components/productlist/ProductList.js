import React, { useContext } from 'react'
import { Spinner } from 'react-bootstrap'
import { ProductContext } from '../../contexts/ProductContext'

const ProductList = () => {
    const {
        productState: { productList },
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
                    <p onClick={() => handleClick(product)} id={product.id}>{product.name}</p>
                </div>
            ))
        )
    }

   

    return (
        <div>
            {body}
        </div>
    )
}

export default ProductList