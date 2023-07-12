import { useDispatch, useSelector} from "react-redux";
import MyButton from "../../common/button/MyButton";
import MyInput from "../../common/input/MyInput";
import Title from "../../common/title/Title";
import UnderHeader from "../../common/underHeader/UnderHeader";
import { productState } from "../../data/productState";
import styles from "./Products.module.css"
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { dropProducts, increase_price, setFilter, setSearchValue } from "../../reducers/productsSlice";
import MySelect from "../../components/MySelect/MySelect";
import { useProducts } from "../../hooks/useProducts";
import SortProducts from "./SortProducts/SortProducts";
import UnsortProducts from "./UnsortedProducts/UnsortedProducts";

const Products = () => {
    const {products, searchValue, searchProducts, currentPage, size, sliceProducts} = useSelector(state => state.products);
    const [filter, setFilter] = useState({sort: '', query: ''});
    // const sortedAndSearchedProducts = useProducts(products, filter.sort, filter.query)
    const dispatch = useDispatch();
    let subArray = [];
    for(let i = 0; i < Math.ceil(products.length / size); i++)  {
        subArray[i] = products.slice((i * size), (i * size) + size)
    }
    
    let pagesArray = useMemo(() => [...Array(subArray.length).keys()].map(el => el + 1) ,[currentPage])
    useEffect(() => {
        dispatch(setSearchValue(filter))
    }, [filter])


    return (
        <>
        <UnderHeader/>
        <div className="main">
            <div className={styles.products}>
                <div className={styles.products__container}>
                    <div className={styles.sort}>
                        <Title 
                            addStyles1={styles.productsTitle}
                            title_p1='Изделия из ' 
                            title_p2='натурального камня'
                        />
                        <input
                            className={styles.searchInput}
                            placeholder="Поиск"
                            value = {searchValue}
                            onChange={e => setFilter({...filter, query: e.target.value})}
                        />
                        <MySelect 
                            value={filter.sort}
                            onChange={e => setFilter({...filter, sort: e})}
                            defaultValue='Сортировка по'
                            options={[
                                {value: 'default', name: 'Сортировка по'},
                                {value: 'type', name: 'Производителю'},
                                {value: 'title', name: 'Названию'},
                                {value: 'price', name: 'Цене'}
                            ]}
                        />
                    </div>
                    {
                        searchProducts.length 
                            ? <SortProducts searchProducts = {searchProducts}/>
                            : <UnsortProducts products={products}/> 
                            
                    }
                </div>
            </div>
        </div>
        </>
    )
}

export default Products;