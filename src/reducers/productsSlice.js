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
        size: 3,
        sliceProducts: [],
        searchProducts: [],
    },
    reducers: {
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
                    el.cartCount -= 1;
                    el.cartPrice -= el.price;
                }
            })

            const index = storage.findIndex(el => +el.id === +product.id);
            if(storage[index].cartCount === 0) {
                // storage = storage.filter(el => {
                //     console.log(typeof el.id);
                //     console.log(typeof product.id);
                //     if(el.id !== product.id){
                //         return el;
                //     }
                // })
                localStorage.setItem('basket', JSON.stringify([...storage.filter(el => +el.id !== +storage[index].id)]));
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

            // if(state.filter.query.length) {
            //     const words = state.filter.query.split(' ');
            //     state.products.forEach(product => {
            //         let found = true;
            //         words.forEach(word => {
            //             if(!product.title.toLowerCase().includes(word.toLowerCase())) {
            //                 found = false
            //             }
            //         })
    
            //         if(found) {
            //             newState.push(product)
            //         }
            //     }) 
            // }

            state.searchProducts = newState;
        },
    },
})

export const {setCurrentPage, setSearchValue, increase_price, decrease_price, remove_from_basket} = productsSlice.actions;
export default productsSlice.reducer;