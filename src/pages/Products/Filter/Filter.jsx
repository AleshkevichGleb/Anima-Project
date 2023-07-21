import styles from "./Filter.module.css";
import { brandProducts, colorsProducts } from "../../../data/brandProducts";


const Filter = ({filter, setFilter}) => {
    const handleFilterPrice = (e) => {
        const {id, value} = e.target;
        setFilter({...filter, price: {...filter.price, [id]: value.replace(/\s|[a-zA-Zа-яА-Я]/g,"")}})
    }

    const handleFilterBrand = (e) => {
        const {id, checked} = e.target;
        setFilter({...filter, brand: {...filter.brand, [id]: checked}})
    }

    const handleFilterColor = (e) => {
        const {id, checked} = e.target;
        setFilter({...filter, color: {...filter.color, [id]: checked}})
    }

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