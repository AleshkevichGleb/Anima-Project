import styles from "./Filter.module.css";
import { brandProducts, colorsProducts, productsMMProducts } from "../../../data/filterProducts";
import { setCurrentPage } from "../../../reducers/productsSlice";


const Filter = ({filter, setFilter, dispatch}) => {
    const handleFilterPrice = (e) => {
        dispatch(setCurrentPage(1))
        const {id, value} = e.target;
        setFilter({...filter, price: {...filter.price, [id]: value.replace(/\s|[a-zA-Zа-яА-Я]/g,"")}})
    }

    const handleFilterBrand = (e) => {
        dispatch(setCurrentPage(1))
        const {id, checked} = e.target;
        setFilter({...filter, brand: {...filter.brand, [id]: checked}})
    }

    const handleFilterColor = (e) => {
        dispatch(setCurrentPage(1))
        const {id, checked} = e.target;
        setFilter({...filter, color: {...filter.color, [id]: checked}})
    }

    const handleFilterPrMM = (e) => {
        dispatch(setCurrentPage(1));
        const {id, checked} = e.target;
        setFilter({...filter, mm: {...filter.mm, [id]: checked}});
    } 
    // console.log(filter.mm);

    return (
        <div className={styles.filter}>
            <div className={styles.typeBlock}>
                <span className={styles.filter__title}>Производитель</span>
                {brandProducts.map((type, index) =>
                    <div key={type}>
                        <input 
                            type='checkbox' 
                            id = {type}
                            onChange={handleFilterBrand}
                        />
                        <label className={styles.filter__label} htmlFor={type}>{type}</label>
                    </div>
                )}
            </div>
            <div className={styles.typeBlock}>
                <span className={styles.filter__title}>Цвет</span>
                {colorsProducts.map((type, index) =>
                    <div key={type}>
                        <input 
                            type='checkbox' 
                            id = {type}
                            onChange={handleFilterColor}
                        />
                        <label className={styles.filter__label} htmlFor={type}>{type}</label>
                    </div>
                )}
            </div>
            <div className={styles.typeBlock}>
                <span className={styles.filter__title}>Изделие</span>
                {productsMMProducts.map((type, index) =>
                    <div key={type}>
                        <input 
                            type='checkbox' 
                            id = {type}
                            onChange={handleFilterPrMM}
                        />
                        <label className={styles.filter__label} htmlFor={type}>{type} мм</label>
                    </div>
                )}
            </div>
            <div className={styles.filterBlock}>
                <span className={styles.filter__title}>Цена</span>
                <input
                    id = "startPrice"
                    className={styles.input}
                    placeholder="От"
                    value={filter.price.startPrice || ''}
                    onChange={handleFilterPrice}
                />
                <input
                    id = "lastPrice"
                    className={styles.input}
                    placeholder="До"
                    value={filter.price.lastPrice || ''}
                    onChange={handleFilterPrice}
                />
            </div>
        </div>
    )
}


export default Filter;