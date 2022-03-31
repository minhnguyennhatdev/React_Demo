import React, { createContext, useEffect, useReducer } from 'react'
import ProductReducer from '../reducers/ProductReducer'
import axios from 'axios'
import {
    apiUrl
}from './constants'

export const ProductContext = createContext()

const ProductContextProvider = ({children}) => {
    const [productState, dispatch] = useReducer(ProductReducer, {
		productList: null,
        order: []
	})

    const getProduct = async() => {
        try {
            const response = await axios.get(`${apiUrl}/products`)
            if(response.data) {
                dispatch({ type:'GET_PRODUCT', payload: response.data.slice(0,5) })
            }
        } catch (error) {
            console.log(error)
        }
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

    const clearOrder = () => {
		dispatch({ type: 'CLEAR_ORDER' })
	}

    useEffect(() => {
        getProduct()
    }, [])

    const context = {
        getProduct, 
        productState, 
        addOrder,
        clearOrder
    }

    return (
        <ProductContext.Provider value={context}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider