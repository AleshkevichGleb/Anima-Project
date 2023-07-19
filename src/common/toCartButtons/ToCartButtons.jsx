import { useDispatch } from "react-redux";
import MyButton from "../button/MyButton";
import styles from "./ToCartButtons.module.css";
import { decrease_price, increase_price } from "../../reducers/productsSlice";
import plusImage from "../../assets/images/plus.svg";
import React, { useEffect, useState } from "react";
import { calc_cart_count } from "../../reducers/fullCartCount";

const ToCartButtons = ({product, addStyles, flag}) => {
    const dispatch = useDispatch();
    const [basketProduct, setBasketProduct] = useState({});
    // console.log(product);
    useEffect(() => {
        let storage = JSON.parse(localStorage.getItem('basket')) || [];
        if(storage  !== null && storage.length) {
            storage.forEach(element => {
                    if(+element.id === +product.id) setBasketProduct({...element})
            });
        } else {
            setBasketProduct({});
        }
    }, [dispatch, product, setBasketProduct])


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
        Object.keys(basketProduct).length
        ?   <div className={styles.buttonsContainer}>
                <span className={addStyles.count}>{basketProduct.cartCount}</span>
                <MyButton 
                    id = {basketProduct.id} 
                    onClick={decreasePrice} 
                    addStyles={addStyles.button}
                >
                    —
                </MyButton>
                {flag 
                ?   <span className={`${styles.cartPrice} ${addStyles.price}`}>{(basketProduct.cartCount)}</span>
                :   <span className={`${styles.cartPrice} ${addStyles.price}`}>{(basketProduct.cartPrice).toLocaleString()} ₽</span>
                }
                <MyButton 
                    id = {basketProduct.id} 
                    onClick={increasePrice} 
                    addStyles={addStyles.button}
                >
                    {/* <img className={styles.plusImage} src={plusImage} alt="" /> */}
                    <span id = {basketProduct.id} className={styles.plusImage}>+</span>
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
