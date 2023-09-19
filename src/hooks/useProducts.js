import { useMemo } from "react"

export const FilterAndSearchedProducts = (products, sort, price, brand, color, productMM) => {
    const sortedProducts = useMemo(() => {

        const filter = {price, brand, color, productMM};
        let newState = [...products];
        
        for(let item in filter) {

            if(item === 'price' &&  Object.keys(filter.price).length) {
                let priceState = [...newState]
                if(price.startPrice && price.lastPrice) {
                    newState = [...newState].filter(product => product.price >= +price.startPrice && product.price <= +price.lastPrice)
                } else if(price.startPrice) {
                    newState = [...newState].filter(product => product.price >= +price.startPrice)
                } else if(price.lastPrice) {
                    newState = [...newState].filter(product => product.price <= +price.lastPrice)
                } else {
                    newState = priceState;
                }
            }
            if(item  === 'brand' &&  Object.keys(filter.brand).length) {
                let brandArr = [];
                for(let elem in brand) {
                   if(brand[elem]) brandArr = [...brandArr, elem];
                }
                if(brandArr.length) {
                    
                    const length = brandArr.length;
                    let brandFilter = [];

                    for(let i = 0; i < length; i++) {
                        brandFilter = [...brandFilter, ...newState.filter(product => product.type === brandArr[i])]
                    }

                    newState = brandFilter;
                }
            }

            if(item  === 'color' && Object.keys(filter.color).length) {
                let colorArr = [];
               
                for(let elem in color) {
                   if(color[elem]) colorArr = [...colorArr, elem];
                }
    
               
                if(colorArr.length) {
                    const length = colorArr.length;
                    let colorFilter = [];
                  
                    for(let i = 0; i < length; i++) {
                        colorFilter = [...colorFilter, ...newState.filter(product => product.specifications.find(el => el.id === 4).text === colorArr[i])];
                    }
                    newState = colorFilter;
                } 
            }

            if(item  === 'productMM' &&  Object.keys(filter.productMM).length) {
                let mmArr = [];
                for(let elem in productMM) {
                    if(productMM[elem]) mmArr = [...mmArr, elem];
                }
                if(mmArr.length) {
                    const length = mmArr.length;
                    let mmFilter = [];

                    for(let i = 0; i < length; i++) {
                        mmFilter = [...mmFilter, ...newState.filter(product => product.specifications.find(el => el.id === 2).text === mmArr[i] + ' мм')];
                    }
                    
                    newState = mmFilter
                } 
            }
        }
        return newState;
    }, [products, sort, price, brand, color, productMM])

    return sortedProducts;
}


export const useProducts = (products, sort, query, price, brand, color, productMM) => {
    const sortedProducts = FilterAndSearchedProducts(products, sort, price, brand, color, productMM)

    const searchedAndSortedProducts = useMemo(() => {
        if(query.length) {
            const words = query.split(' ');
            const newState = [];
            sortedProducts.forEach(product => {
                let found = true;
                words.forEach(word => {
                    if(!product.title.toLowerCase().includes(word.toLowerCase())) {
                        found = false
                    }
                })

                if(found) {
                    newState.push(product)
                }
            })

            return newState
        } 

        return sortedProducts
    },[query, sortedProducts])

    return searchedAndSortedProducts;
}