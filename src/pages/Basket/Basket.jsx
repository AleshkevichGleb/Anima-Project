import React, { useEffect, useState } from "react";
import UnderHeader from "../../common/underHeader/UnderHeader";
import styles from "./Basket.module.css";
import ToCartButtons from "../../common/toCartButtons/ToCartButtons";
import { useDispatch } from "react-redux";
import { remove_from_basket } from "../../reducers/productsSlice";
import EmptyBasket from "./EmptyBasket/EmptyBasket";
import { Link, useNavigate } from "react-router-dom";
import MyButton from "../../common/button/MyButton";


const Basket = () => {
    const [basket, setBasket] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('basket'));
        if(storage !== null && storage.length) {
            setBasket([...storage]);
        }
        
    }, [setBasket])

    const removeProduct = (e) => {
        const {id} = e.target;
        dispatch(remove_from_basket({id: id}));
    }

    return (
        <>
        <UnderHeader/>
        <div className="main">
            <div className={styles.basket__container}>
                {
                    basket.length
                    ? <div className={styles.products}>
                        {basket.map(product => 
                            <div className={styles.product} key={product.id}>
                                <div className={styles.product__textBlock}>
                                    <img 
                                        className={styles.produt__image} 
                                        src = {product.image.src} 
                                        alt = {product.image.alt}
                                        onClick={() => navigate(`/products/${product.id}`)}
                                    />
                                    <div className={styles.product__textInfo}>
                                        <span className={styles.product__title}>{product.title}</span>
                                        <span className={styles.product__description}>{product.description}</span>
                                    </div>
                                </div>
                                <div className={styles.product__functional}>
                                    <ToCartButtons flag={true} addStyles={{button: styles.smallButton, count: styles.cartCount, price: styles.addStylePrice}} product={product}/>
                                    
                                    <span className={styles.product__price}>{(product.cartPrice).toLocaleString()} ₽</span>
                                    <button  
                                        id = {product.id} 
                                        className={styles.smallButton}
                                        onClick={removeProduct}
                                    >
                                        X
                                    </button>
                                </div>
                            </div>
                        )}  
                        <MyButton 
                            addStyles={styles.button}
                            onClick={() => navigate('/form')}
                        >
                            Оформить заказ
                        </MyButton>
                      </div>
                    : <EmptyBasket/>
                }
            </div>
        </div>
        </>
    )
}

export default Basket;