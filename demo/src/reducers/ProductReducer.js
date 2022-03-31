import React from 'react'

const ProductReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case 'GET_PRODUCT': 
            return {
                ...state,
				productList: payload
            }
        case 'ADD_ORDER': 
            return {
                ...state,
                order: [...state.order, payload]
            }
        default:
            return state
    }
}

export default ProductReducer