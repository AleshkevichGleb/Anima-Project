import { createSlice } from "@reduxjs/toolkit";
import { productState } from "../data/productState";

const findProduct = (state, id) => {
    let elem = {};
    state.products.forEach(product => {
        if(product.id === +id ) {
            elem = product;
        }
    })

    return elem;
}

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: productState,
        filter: {sort: '', query: ''},
        currentPage: 1,
        size: 9,
        sliceProducts: [],
        searchProducts: [],
    },
    reducers: {
        setState: (state, action) => {
            for(let i = 0; i < state.products.length; i++) {
                for(let j = 0; j < action.payload.length; j++) {
                    if(state.products[i].id === action.payload[j].id) {
                        state.products[i].cartCount = action.payload[j].cartCount
                        state.products[i].cartPrice = action.payload[j].cartPrice
                    } 
                }
            }
        },

        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },

        decrease_price: (state, action) => {
            const {id} = action.payload;
            const product = findProduct(state, id);
            product.cartCount -= 1;
            product.cartPrice -= product.price;
            let storage = JSON.parse(localStorage.getItem('basket'));
            storage.forEach(el => {
                if(+el.id === +product.id)
                {
                    if(+el.cartCount !== 0) {
                        el.cartCount -= 1;
                        el.cartPrice -= el.price;
                    }
                }
            })

            const index = storage.findIndex(el => +el.id === +product.id);
            if(storage[index].cartCount === 0) {
                const id = storage[index].id;
                localStorage.setItem('basket', JSON.stringify([...storage.filter(el => +el.id !== +id)]));
            }
            else localStorage.setItem('basket', JSON.stringify([...storage]));
        },

        increase_price: (state, action) => {
            const {id} = action.payload;
            const product = findProduct(state, id);
            product.cartCount += 1;
            product.cartPrice += product.price;

            let storage = JSON.parse(localStorage.getItem('basket')) || [];
            if(storage.length)
            {
                let flag = false;
                storage.forEach(el => {
                    if(+el.id === +id)
                    {
                        el.cartCount += 1;
                        el.cartPrice += el.price;
                        flag = true;
                    } 
                })  

                if(flag)
                {
                    localStorage.setItem('basket', JSON.stringify([...storage]));
                }
                else {
                    localStorage.setItem('basket', JSON.stringify([...storage, product]));
                }
            }
            else {
                localStorage.setItem('basket', JSON.stringify([product]));
            }

        },

        remove_from_basket: (state, action) => {
            const {id} = action.payload;
            const product = findProduct(state, id);
            product.cartCount = 0;
            product.cartPrice = 0;

            let storage = JSON.parse(localStorage.getItem('basket'));
            localStorage.setItem('basket', JSON.stringify([...storage.filter(el => +el.id !== +id)]))
        },

        setSearchValue: (state, action) => {
            state.filter = action.payload;
            
            let newState = [];
            
            if(state.filter.sort.length) {
                if(state.filter.sort === 'price') {
                    state.searchProducts = state.products.sort((a,b) => a[state.filter.sort] - b[state.filter.sort])
                }else if(state.filter.sort === 'default') {
                    state.searchProducts = state.products.sort((a,b) => a.id - b.id);          
                } else{
                    state.searchProducts = state.products.sort((a,b) => a[state.filter.sort].localeCompare(b[state.filter.sort]))   
                }
            }

            state.searchProducts = newState;
        },
    },
})

export const {setState, setCurrentPage, setSearchValue, increase_price, decrease_price, remove_from_basket} = productsSlice.actions;
export default productsSlice.reducer;