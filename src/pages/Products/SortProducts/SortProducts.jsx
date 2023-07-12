import styles from "./SortProducts.module.css";
import MyButton from "../../../common/button/MyButton";
import { Link } from "react-router-dom";
import ToCartButtons from "../../../common/toCartButtons/ToCartButtons";


const SortProducts = ({searchProducts}) => {
    return (
        <div className={styles.products__block}>
            {searchProducts.map(product => 
                <div className={styles.product} key={product.id}>
                    <div className={product.isSale ? styles.product__imageBlock : ''}>
                        <img 
                        src={product.image.src} 
                        alt={product.image.alt} 
                        className={styles.product__image}
                        />
                    </div>
                    <span className={styles.product__type}>{product.type}</span>
                    <h2 className={styles.product__title}>{product.title}</h2>
                    <div className={styles.product__priceContainer}>

                        <span className={styles.product__price}>
                            {product.price.toLocaleString()} ₽
                        </span>
                        {
                        product.isSale && 
                        <span className={styles.product__beforePrice}>
                            {(Number(product.price) + Number(product.salePrice)).toLocaleString()} ₽
                        </span>
                        }
                    </div>
                    <Link to = {`/products/${product.id}`}>
                        <MyButton addStyles={styles.button}>Подробнее</MyButton>
                    </Link>
                    <ToCartButtons  addStyles={{button: styles.smallButton, count: styles.cartCount}} product={product}/>
                </div>    
            )}
        </div>
    )
}

export default SortProducts;