import { useDispatch, useSelector} from "react-redux";
import MyButton from "../../common/button/MyButton";
import MyInput from "../../common/input/MyInput";
import Title from "../../common/title/Title";
import UnderHeader from "../../common/underHeader/UnderHeader";
import { productState } from "../../data/productState";
import styles from "./Products.module.css"
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { setCurrentPage, setSearchValue } from "../../reducers/productsSlice";
import MySelect from "../../components/MySelect/MySelect";
import { useProducts } from "../../hooks/useProducts";
import SortProducts from "./SortProducts/SortProducts";
import FilterProducts from "./FilterProducts/FilterProducts";
import Filter from "./Filter/Filter";

const Products = () => {
    const dispatch = useDispatch();
    const {products, currentPage, size} = useSelector(state => state.products);
    const [filter, setFilter] = useState({sort: '', query: '', filter: {}});
    const FilterAndSearchedProducts = useProducts(products, filter.sort, filter.query, filter.filter)
    
    const changeCurrentPage = (e) => {
        e.preventDefault();
        dispatch(setCurrentPage(e.target.id))
        
    }

    useEffect(() => {
        dispatch(setCurrentPage(1));
        dispatch(setSearchValue(filter))
    }, [filter])
  
    let subArray = [];
    for(let i = 0; i < Math.ceil(FilterAndSearchedProducts.length / size); i++)  {
        subArray[i] = FilterAndSearchedProducts.slice((i * size), (i * size) + size)
    }
    
    let pagesArray = [...Array(subArray.length).keys()].map(el => el + 1)

    const handleFilter = (e) => {
        const {id, value} = e.target;
        setFilter({...filter, filter: {...filter.filter, [id]: value.replace(/\s/g,"")}})
    }

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
                            value = {filter.query}
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
                    <div className={styles.products__block}>
                         <div className={styles.filter}>
                            <div className={styles.priceBlock}>
                                <MyInput
                                    id = "startPrice"
                                    addStyles={styles.input}
                                    labelStyles={styles.input__styles}
                                    inputStyles={styles.input__styles}
                                    placeholder="От"
                                    value={filter.startPrice}
                                    onChange={handleFilter}
                                />
                                <MyInput
                                    id = "lastPrice"
                                    addStyles={styles.input}
                                    inputStyles={styles.input__styles}
                                    labelStyles={styles.input__styles}
                                    placeholder="До"
                                    value={filter.lastPrice}
                                    onChange={handleFilter}
                                />
                            </div>
                        </div>
                        {
                            !filter.query.length && !Object.keys(filter.filter).length 
                                ?<SortProducts 
                                    searchProducts = {FilterAndSearchedProducts}
                                    pagesArray = {pagesArray}
                                    subArray = {subArray}
                                    currentPage = {currentPage}
                                    dispatch = {dispatch}
                                />
                               
                                :<>
                                    {
                                        !subArray.length
                                        ?   <h3 className={styles.empty}>Ничего не найдено</h3>
                                        :   <FilterProducts 
                                                products={FilterAndSearchedProducts}
                                                subArray = {subArray}
                                                dispatch = {dispatch}
                                                currentPage = {currentPage}
                                                pagesArray={pagesArray}
                                            /> 
                                    }
                                </>
                        }
                    </div>
                    <div className={styles.pages}>
                    {
                        pagesArray.map(page => 
                            <MyButton 
                                onClick={changeCurrentPage}
                                addStyles = {+currentPage === +page ? styles.active_page : styles.page}
                                key = {page}
                                id = {page}
                            >
                                {page}
                            </MyButton>
                        )
                    }
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Products;