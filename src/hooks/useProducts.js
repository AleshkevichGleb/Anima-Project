import { useMemo } from "react"

export const useSortedProducts = (products, sort) => {
    const sortedProducts = useMemo(() => {
        if(sort.length) {
            if(sort === 'price' )  {
                return [...products].sort((a,b) => a-b) 
            } else {
                return [...products].sort((a,b) => a[sort].localeCompare(b[sort]))
            }
        }

        return products;
    }, [sort, products])

    return sortedProducts;
}


export const useProducts = (products, sort, query) => {
    const sortedProducts = useSortedProducts(products, sort)

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