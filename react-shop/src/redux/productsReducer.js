import {createAction, createReducer} from "@reduxjs/toolkit"

const initialState = {
    list:[
        {
            id: 1,
            name: "Product 1",
            price: 200
        },
        {
            id: 2,
            name: "Product 2",
            price: 200
        },
        {
            id: 3,
            name: "Product 3",
            price: 200
        },
        {
            id: 4,
            name: "Product 4",
            price: 200
        },
        {
            id: 5,
            name: "Product 5",
            price: 200
        }
    ],
    isModalOpen: false,
    wishCandidate: null,
    wishlist:[]
}

export const setWishlistCandidate = createAction("products/set-wishlist-candidate", (idCandidate) => ({
    payload: idCandidate
}))

export const confirmWish = createAction("products/confirm-wish")
export const cancelWish = createAction("products/cancel-wish")

const productsReducer = createReducer(initialState, (builder) => {
    builder.addCase(setWishlistCandidate, (state, action) => {
        state.wishCandidate = action.payload
        state.isModalOpen = true
    })
    builder.addCase(confirmWish, (state, action)=>{
        state.wishlist.push(state.wishCandidate)
        state.isModalOpen = false
    })
    builder.addCase(cancelWish, (state, action) => {
        state.isModalOpen = false
        state.wishCandidate = null
    })
})

export default productsReducer