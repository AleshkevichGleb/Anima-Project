import { createSlice } from "@reduxjs/toolkit";


const fullCartCount = createSlice({
    name: 'fullCartCount',
    initialState: {
        count: 0,
    },

    reducers: {
        calc_cart_count: (state, action) => {
            let storage = JSON.parse(localStorage.getItem('basket')) || [];
            if(storage.length) {
                const count = storage.reduce((acc, product) => acc + product.cartCount || 0 ,0)
                state.count = count;
            } else {
                state.count = 0;
            }
        }
    },
})

export const {calc_cart_count} = fullCartCount.actions;
export default fullCartCount.reducer;