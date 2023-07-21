import { useDispatch } from "react-redux";
import MyButton from "../button/MyButton";
import styles from "./ToCartButtons.module.css";
import { decrease_price, increase_price } from "../../reducers/productsSlice";
import plusImage from "../../assets/images/plus.svg";
import React from "react";
import { calc_cart_count } from "../../reducers/fullCartCount";

const ToCartButtons = ({product, addStyles, flag}) => {
    const dispatch = useDispatch();

    const increasePrice = (e) => {
        const {id} = e.target;
        dispatch(increase_price({id: id}));
        dispatch(calc_cart_count());
    }

    const decreasePrice = (e) => {
        const {id} = e.target;
        dispatch(decrease_price({id: id}));
        dispatch(calc_cart_count());
    }

    return (
        product.cartCount > 0
        ?   <div className={styles.buttonsContainer}>
                <span className={addStyles.count}>{product.cartCount}</span>
                <MyButton 
                    id = {product.id} 
                    onClick={decreasePrice} 
                    addStyles={addStyles.button}
                >
                    —
                </MyButton>
                {flag 
                ?   <span className={`${styles.cartPrice} ${addStyles.price}`}>{(product.cartCount)}</span>
                :   <span className={`${styles.cartPrice} ${addStyles.price}`}>{(product.cartPrice).toLocaleString()} ₽</span>
                }
                <MyButton 
                    id = {product.id} 
                    onClick={increasePrice} 
                    addStyles={addStyles.button}
                >
                    <img id = {product.id} className={styles.plusImage} src={plusImage} alt="" />
                </MyButton>
            </div>
        :   <MyButton 
                onClick={increasePrice} 
                id = {product.id} 
                addStyles={`${addStyles.bigButton} ${styles.button}` }
            >
                В корзину
            </MyButton>
    )
}


export default ToCartButtons;
