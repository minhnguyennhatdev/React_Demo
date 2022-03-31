import React, { createContext, useEffect, useReducer } from 'react'
import ProductReducer from '../reducers/ProductReducer'

export const ProductContext = createContext()

const ProductContextProvider = ({children}) => {
    const [productState, dispatch] = useReducer(ProductReducer, {
		productList: null,
        order: []
	})

    const getProduct = async() => {
        dispatch({ type:'GET_PRODUCT', payload: [{id: '1',name: 'laptop'}, {id: '2',name: 'phone'}] })
    }

    const addOrder = async(product) => {
        const find  = productState.order.find(e => e.id === product.id)
        if(find) {
            find.quantity += 1
        } else {
            product.quantity = 1
            dispatch({ type:'ADD_ORDER', payload: product })
        }
    }

    useEffect(() => {
        getProduct()
    })

    return (
        <ProductContext.Provider value={{ getProduct, productState, addOrder }}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider