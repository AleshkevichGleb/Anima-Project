import { useDispatch, useSelector} from "react-redux";
import MyButton from "../../common/button/MyButton";
import Title from "../../common/title/Title";
import UnderHeader from "../../common/underHeader/UnderHeader";
import styles from "./Products.module.css"
import { useEffect, useState } from "react";
import { setCurrentPage, setSearchValue } from "../../reducers/productsSlice";
import MySelect from "../../components/MySelect/MySelect";
import { useProducts } from "../../hooks/useProducts";
import SortProducts from "./SortProducts/SortProducts";
import FilterProducts from "./FilterProducts/FilterProducts";
import Filter from "./Filter/Filter";

const Products = () => {
    const dispatch = useDispatch();
    const {products, currentPage, size} = useSelector(state => state.products);
    const [filter, setFilter] = useState({
        sort: '', 
        query: '', 
        price: {}, 
        brand: {},
        color: {},
        mm: {},      
    });

    const FilterAndSearchedProducts = useProducts(products, filter.sort, filter.query, filter.price, filter.brand, filter.color, filter.mm)
    
    const changeCurrentPage = (e) => {
        e.preventDefault();
        dispatch(setCurrentPage(e.target.id))
        
    }

    useEffect(() => {
        dispatch(setCurrentPage(1));
        dispatch(setSearchValue(filter))
    }, [filter, dispatch])
  
    let subArray = [];
    for(let i = 0; i < Math.ceil(FilterAndSearchedProducts.length / size); i++)  {
        subArray[i] = FilterAndSearchedProducts.slice((i * size), (i * size) + size)
    }
    
    let pagesArray = [...Array(subArray.length).keys()].map(el => el + 1)

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
                        <div className={styles.sortBlock}>
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
                    </div>
                    <div className={styles.products__block}>
                        <Filter filter= {filter} setFilter = {setFilter} dispatch = {dispatch}/>
                        {
                            !filter.query.length && 
                            !Object.keys(filter.price).length &&  
                            !Object.keys(filter.brand).length && 
                            !Object.keys(filter.color).length &&
                            !Object.keys(filter.mm).length
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
                                                currentPage = {currentPage}
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