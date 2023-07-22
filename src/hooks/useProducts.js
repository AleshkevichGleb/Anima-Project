import { useMemo } from "react"

export const FilterAndSearchedProducts = (products, sort, price, brand, color, productMM) => {
    const sortedProducts = useMemo(() => {
        if(Object.keys(price).length) {
            if(price.startPrice && price.lastPrice) {
                return [...products].filter(product => product.price >= +price.startPrice && product.price <= +price.lastPrice)
            } else if(price.startPrice) {
                return [...products].filter(product => product.price >= +price.startPrice)
            } else if(price.lastPrice) {
                return [...products].filter(product => product.price <= +price.lastPrice)
            }
        }

        if(Object.keys(brand).length) {
            let brandArr = [];
            for(let elem in brand) {
               if(brand[elem]) brandArr = [...brandArr, elem];
            }

            if(brandArr.length) {
                //сделал не правильно, не додумал как через цикл правильно профильтровать массив  

                const length = brandArr.length;
                if(length === 3) {
                    return products
                } else if(length === 2) {
                    return [...products].filter(product => product.type === brandArr[0] || product.type === brandArr[1])
                } else {
                    return [...products].filter(product => product.type === brandArr[0]);
                }
            }
            console.log(products);

        }

        if(Object.keys(color).length) {
            let colorArr = [];
            for(let elem in color) {
               if(color[elem]) colorArr = [...colorArr, elem];
            }

            console.log(products);
            if(colorArr.length) {
                //сделал не правильно, не додумал как через цикл правильно профильтровать массив  

                const length = colorArr.length;
                
                if(length === 4) {
                    return products
                } else if(length === 3) {
                    return [...products].filter(product => product.specifications.find(el => el.id === 4).text === colorArr[0] || product.specifications.find(el => el.id === 4).text === colorArr[1] || product.specifications.find(el => el.id === 4).text === colorArr[2])
                } else if(length === 2) { 
                    return [...products].filter(product => product.specifications.find(el => el.id === 4).text === colorArr[0] || product.specifications.find(el => el.id === 4).text === colorArr[1])
                } else {
                    return [...products].filter(product => product.specifications.find(el => el.id === 4).text === colorArr[0]);
                }
                
            }

        }
        // console.log(productMM);
        if(Object.keys(productMM).length) {
            let mmArr = [];
            for(let elem in productMM) {
                if(productMM[elem]) mmArr = [...mmArr, elem];
            }

            const  length = mmArr.length;

            if(length === 3) {
                return products;
            } else if(length === 2) {
                return [...products].filter(product => product.specifications.find(el => el.id === 2).text === mmArr[0] + ' мм' || product.specifications.find(el => el.id === 2).text === mmArr[1] + ' мм');
            } else if(length === 1){
                return [...products].filter(product => product.specifications.find(el => el.id === 2).text === mmArr[0] + ' мм');
            } else {
                return products
            }
        }
        
        return products;
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