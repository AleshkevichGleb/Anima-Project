import { createSlice } from "@reduxjs/toolkit";

const findProduct = (state, id) => {
    let elem = {};
    state.products.forEach(product => {
        if(product.id === +id) {
            elem = product;
        }
    })

    return elem;
}

const basketSlice = createSlice({
    name: 'basket',
    initialState: [],
    reducers: {
        increase__basket_product_price: (state, action) => {
            const {id} = action.payload;
            const product = findProduct(state, id);

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
                state = product;
                localStorage.setItem('basket', JSON.stringify([product]));
            }
        },
        decrease__basket_product_price: (state, action) => {
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
    }
})

export const {increase__basket_product_price, decrease__basket_product_price} = basketSlice.actions;
export default basketSlice.reducer;