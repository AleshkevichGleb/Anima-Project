import { useMemo } from "react"

export const FilterAndSearchedProducts = (products, sort, price, brand, color, productMM) => {
    const sortedProducts = useMemo(() => {
        // if(Object.keys(price).length) {
        //     if(price.startPrice && price.lastPrice) {
        //         return [...products].filter(product => product.price >= +price.startPrice && product.price <= +price.lastPrice)
        //     } else if(price.startPrice) {
        //         return [...products].filter(product => product.price >= +price.startPrice)
        //     } else if(price.lastPrice) {
        //         return [...products].filter(product => product.price <= +price.lastPrice)
        //     }
        // }

        const filter = {price, brand, color, productMM};
        let newState = [...products];
        // console.log(Object.values(price));
        // console.log(Object.values(price) === '');
        console.log(brand);
        for(let item in filter) {
            console.log(item);
            if(item === 'price' &&  Object.keys(filter.price).length) {
                console.log(123);
                if(price.startPrice && price.lastPrice) {
                    newState = [...newState].filter(product => product.price >= +price.startPrice && product.price <= +price.lastPrice)
                } else if(price.startPrice) {
                    newState = [...newState].filter(product => product.price >= +price.startPrice)
                } else if(price.lastPrice) {
                    newState = [...newState].filter(product => product.price <= +price.lastPrice)
                } else {
                    return newState;
                }
            }
            if(item  === 'brand' &&  Object.keys(filter.brand).length) {
                let brandArr = [];
                for(let elem in brand) {
                   if(brand[elem]) brandArr = [...brandArr, elem];
                }
                console.log(brandArr);
                if(brandArr.length) {
                    //сделал не правильно, не додумал как через цикл правильно профильтровать массив  
                    console.log(brandArr.length);
                    console.log(brandArr);
                    console.log(newState);
                    const length = brandArr.length;
                    if(length === 3) {
                        newState = [...newState].filter(product => product.type === brandArr[0] || product.type === brandArr[1] || product.type === brandArr[2])
                    } else if(length === 2) {
                        newState = [...newState].filter(product => product.type === brandArr[0] || product.type === brandArr[1])
                    } else if(length === 1){
                        newState = [...newState].filter(product => product.type === brandArr[0]);
                    } else {
                        newState = [...newState].filter(product => product.type === brandArr[0] || product.type === brandArr[1] || product.type === brandArr[2])
                    }
                }
            }

            if(item  === 'color' && Object.keys(filter.color).length) {
                let colorArr = [];
               
                for(let elem in color) {
                   if(color[elem]) colorArr = [...colorArr, elem];
                }
    
                console.log(colorArr.length);
                if(colorArr.length) {
                    //сделал не правильно, не додумал как через цикл правильно профильтровать массив  
    
                    const length = colorArr.length;
                    
                    if(length === 4) {
                        newState = [...newState].filter(product => product.specifications.find(el => el.id === 4).text === colorArr[0] || product.specifications.find(el => el.id === 4).text === colorArr[1] || product.specifications.find(el => el.id === 4).text === colorArr[2] ||  product.specifications.find(el => el.id === 4).text === colorArr[3]);
                    } else if(length === 3) {
                        newState =  [...newState].filter(product => product.specifications.find(el => el.id === 4).text === colorArr[0] || product.specifications.find(el => el.id === 4).text === colorArr[1] || product.specifications.find(el => el.id === 4).text === colorArr[2])
                    } else if(length === 2) { 
                        newState =  [...newState].filter(product => product.specifications.find(el => el.id === 4).text === colorArr[0] || product.specifications.find(el => el.id === 4).text === colorArr[1])
                    } else if(length === 1){
                        newState =  [...newState].filter(product => product.specifications.find(el => el.id === 4).text === colorArr[0]);
                    } else {
                        newState = [...newState].filter(product => product.specifications.find(el => el.id === 4).text === colorArr[0] || product.specifications.find(el => el.id === 4).text === colorArr[1] || product.specifications.find(el => el.id === 4).text === colorArr[2] ||  product.specifications.find(el => el.id === 4).text === colorArr[3]);
                    }

                    
                } 
                // else {
                //     console.log(23324);
                //     newState = [...newState].filter(product => product.specifications.find(el => el.id === 4).text === colorArr[0] || product.specifications.find(el => el.id === 4).text === colorArr[1] || product.specifications.find(el => el.id === 4).text === colorArr[2] ||  product.specifications.find(el => el.id === 4).text === colorArr[3]);
                // }
            }

            if(item  === 'productMM' &&  Object.keys(filter.productMM).length) {
                let mmArr = [];
                for(let elem in productMM) {
                    if(productMM[elem]) mmArr = [...mmArr, elem];
                }
                if(mmArr.length) {

                    const  length = mmArr.length;
                
                    if(length === 3) {
                        newState = [...newState].filter(product => product.specifications.find(el => el.id === 2).text === mmArr[0] + ' мм' || product.specifications.find(el => el.id === 2).text === mmArr[1] + ' мм' || product.specifications.find(el => el.id === 2).text === mmArr[2] + ' мм');
                    } else if(length === 2) {
                        newState = [...newState].filter(product => product.specifications.find(el => el.id === 2).text === mmArr[0] + ' мм' || product.specifications.find(el => el.id === 2).text === mmArr[1] + ' мм');
                    } else if(length === 1){
                        newState =  [...newState].filter(product => product.specifications.find(el => el.id === 2).text === mmArr[0] + ' мм');
                    } else {
                        newState = [...newState].filter(product => product.specifications.find(el => el.id === 2).text === mmArr[0] + ' мм' || product.specifications.find(el => el.id === 2).text === mmArr[1] + ' мм' || product.specifications.find(el => el.id === 2).text === mmArr[2] + ' мм');
                    }
                } 
            }
        }

        console.log(newState);
        
        // if(Object.keys(brand).length) {
        //     let brandArr = [];
        //     for(let elem in brand) {
        //        if(brand[elem]) brandArr = [...brandArr, elem];
        //     }

        //     if(brandArr.length) {
        //         //сделал не правильно, не додумал как через цикл правильно профильтровать массив  

        //         const length = brandArr.length;
        //         if(length === 3) {
        //             return products
        //         } else if(length === 2) {
        //             return [...products].filter(product => product.type === brandArr[0] || product.type === brandArr[1])
        //         } else {
        //             return [...products].filter(product => product.type === brandArr[0]);
        //         }
        //     }
          

        // }

        // if(Object.keys(color).length) {
        //     let colorArr = [];
        //     for(let elem in color) {
        //        if(color[elem]) colorArr = [...colorArr, elem];
        //     }

        //     console.log(products);
        //     if(colorArr.length) {
        //         //сделал не правильно, не додумал как через цикл правильно профильтровать массив  

        //         const length = colorArr.length;
                
        //         if(length === 4) {
        //             return products
        //         } else if(length === 3) {
        //             return [...products].filter(product => product.specifications.find(el => el.id === 4).text === colorArr[0] || product.specifications.find(el => el.id === 4).text === colorArr[1] || product.specifications.find(el => el.id === 4).text === colorArr[2])
        //         } else if(length === 2) { 
        //             return [...products].filter(product => product.specifications.find(el => el.id === 4).text === colorArr[0] || product.specifications.find(el => el.id === 4).text === colorArr[1])
        //         } else {
        //             return [...products].filter(product => product.specifications.find(el => el.id === 4).text === colorArr[0]);
        //         }
                
        //     }

        // }
        // // console.log(productMM);
        // if(Object.keys(productMM).length) {
        //     let mmArr = [];
        //     for(let elem in productMM) {
        //         if(productMM[elem]) mmArr = [...mmArr, elem];
        //     }

        //     const  length = mmArr.length;

        //     if(length === 3) {
        //         return products;
        //     } else if(length === 2) {
        //         return [...products].filter(product => product.specifications.find(el => el.id === 2).text === mmArr[0] + ' мм' || product.specifications.find(el => el.id === 2).text === mmArr[1] + ' мм');
        //     } else if(length === 1){
        //         return [...products].filter(product => product.specifications.find(el => el.id === 2).text === mmArr[0] + ' мм');
        //     } else {
        //         return products
        //     }
        // }
        
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