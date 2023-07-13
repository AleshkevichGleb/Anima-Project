import { useDispatch } from "react-redux";
import MyButton from "../button/MyButton";
import styles from "./ToCartButtons.module.css";
import { decrease_price, increase_price } from "../../reducers/productsSlice";
import plusImage from "../../assets/images/plus.svg";
import React, { useEffect, useState } from "react";

const ToCartButtons = ({product, addStyles, flag}) => {
    const dispatch = useDispatch();

    const increasePrice = (e) => {
        const {id} = e.target;
        dispatch(increase_price({id: id}));
    }

    const decreasePrice = (e) => {
        const {id} = e.target;
        dispatch(decrease_price({id: id}));
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
                    {/* <img className={styles.plusImage} src={plusImage} alt="" /> */}
                    <span id = {product.id} className={styles.plusImage}>+</span>
                </MyButton>
            </div>
        :   <MyButton 
                onClick={increasePrice} 
                id = {product.id} 
                addStyles={styles.button}
            >
                В корзину
            </MyButton>
    )
}


export default ToCartButtons;
