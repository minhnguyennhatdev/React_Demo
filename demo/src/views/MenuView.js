import React from 'react'
import ProductList from '../components/productlist/ProductList'
import Cart from '../components/cart/Cart'

const MenuView = () => {
    return (
        <div>
            <ProductList />
            <Cart />
        </div>
    )
}

export default MenuView