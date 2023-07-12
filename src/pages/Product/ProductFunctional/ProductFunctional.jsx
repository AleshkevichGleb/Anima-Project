import styles from "./ProductFunctional.module.css";
import { useState } from "react";
import arrowImage from "../../../assets/images/arrow.svg"
import checkMarkImage from "../../../assets/images/checkMark.svg";
import ToCartButtons from "../../../common/toCartButtons/ToCartButtons";

const ProductFunctional = ({product}) => {
    const [isActive, setIsActive] = useState(true);
    
    return (
        <div className={styles.product__functional}>
            {product.inStock 
                ?   <div className={styles.checkMark}>
                        <img src={checkMarkImage} alt="check mark" />
                        <span className={styles.inStock}>В наличии</span>
                    </div>
                :   <span className={styles.notInStock}>Нету в наличии</span>
            }
            {product.isSale
                ? <div className={styles.priceBlock}>
                    <span className={styles.priceBlock__price}>{(product.price).toLocaleString()} ₽</span>
                    <span className={styles.priceBlock__beforePrice}>{(Number(product.price) + Number(product.salePrice)).toLocaleString()} ₽</span>
                    <span className={styles.priceBlock__procent}>{((product.salePrice/Number(product.price + product.salePrice)) * 100).toFixed(2)} %</span>
                 </div>
                :<div className={styles.priceBlock}>
                    <span className={styles.priceBlock__price}>{(product.price).toLocaleString()} ₽</span>
                 </div>
            }
            <span className={styles.product__NDS}>Цена указана с учетом НДС</span>
            <ToCartButtons addStyles={{button: styles.smallButton, count: styles.cartCount}} product={product}/>
            <div className={styles.product__accordion}>
                <div className={styles.product__accordionTitleBLock} onClick={() => setIsActive(!isActive)}>
                    <span className={styles.product__accordion__title}>Характеристики</span>
                    <img className={isActive  
                        ?`${styles.accordion__change} ${styles.accordion__change_active}`
                        :`${styles.accordion__change}`} src={arrowImage} alt="arrow" />
                </div>
                                
                <div className={isActive
                    ? `${styles.product__accordion__item} ${styles.product__accordion__item_active}`
                    : `${styles.product__accordion__item}`}
                >
                    {
                        product.specifications.map((item, index) => 
                            <div 
                                key={item.id}
                                className={index % 2 !== 0 ? styles.product__accordionBlock: styles.product__accordionBlock_2}
                            >
                                <span className={styles.product__accordionTitle}>{item.title}</span>
                                <span className={styles.product__accordionText}>{item.text}</span>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductFunctional;