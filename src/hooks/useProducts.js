import { useMemo } from "react"

export const FilterAndSearchedProducts = (products, sort, filter) => {
    const sortedProducts = useMemo(() => {
        // if(sort.length) {
        //     switch(sort) {
        //         case 'price': {
        //             return [...products].sort((a,b) => a-b) 
        //         }
        //         case 'id': {
        //             return [...products].sort((a, b) => a - b)
        //         }
        //         default:  return [...products].sort((a,b) => a[sort].localeCompare(b[sort]))
        //     }
        // }
        // console.log(sort);
        // if(sort.length) {
        //     if(sort === 'price' )  {
        //         console.log('sdsdf');
        //         return [...products].sort((a,b) => a[sort] - b[sort]) 
        //     } else {
        //         return [...products].sort((a,b) => a[sort].localeCompare(b[sort]))
        //     }
        // }
        // console.log(products);
        // return [...products].filter(product => product.type === "Kratki")
        if(Object.keys(filter).length) {
            console.log(filter.startPrice); 
            if(filter.startPrice && filter.lastPrice) {
                return [...products].filter(product => product.price >= +filter.startPrice && product.price <= +filter.lastPrice)
            } else if(filter.startPrice) {
                return [...products].filter(product => product.price >= +filter.startPrice)
            } else if(filter.lastPrice) {
                return [...products].filter(product => product.price <= +filter.lastPrice)
            }

        }

        return products;
    }, [sort, products])

    return sortedProducts;
}


export const useProducts = (products, sort, query, filter) => {
    const sortedProducts = FilterAndSearchedProducts(products, sort, filter)

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
    },[query, products])

    return searchedAndSortedProducts;
}