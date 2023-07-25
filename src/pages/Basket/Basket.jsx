import React, { useEffect, useState } from "react";
import UnderHeader from "../../common/underHeader/UnderHeader";
import styles from "./Basket.module.css";
import ToCartButtons from "../../common/toCartButtons/ToCartButtons";
import { useDispatch, useSelector } from "react-redux";
import { remove_from_basket } from "../../reducers/productsSlice";
import EmptyBasket from "./EmptyBasket/EmptyBasket";
import { useNavigate } from "react-router-dom";
import MyButton from "../../common/button/MyButton";
import { calc_cart_count } from "../../reducers/fullCartCount";


const Basket = () => {
    const {products} = useSelector(state => state.products);
    const [basket, setBasket] = useState([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [basketPrice, setBasketPrice] = useState(0);
    const [basketCount, setBaskeCount] = useState(0);
    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem('basket'));
        if(storage !== null && storage.length) {
            setBasket([...storage].filter(product => product.cartCount > 0));
        } else {
            setBasket([]);
        }
    }, [products]);

    useEffect(() => {
        let fullCount = 0;
        let fullPrice = 0;
        basket.forEach(product => {
            fullCount += +product.cartCount;
            fullPrice += +product.cartPrice;
        })
        setBaskeCount(fullCount);
        setBasketPrice(fullPrice);
    }, [setBasket, dispatch, basket])

    const removeProduct = (e) => {
        const {id} = e.target;
        dispatch(remove_from_basket({id: id}));
        dispatch(calc_cart_count());
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
                                    <ToCartButtons  flag={true} addStyles={{button: styles.smallButton, count: styles.cartCount, price: styles.addStylePrice}} product={product}/>
                                    
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
                        <div className={styles.finalPriceBlock}>
                            <span>Сумма вашего заказа: <span className={styles.finalPrice}>{basketPrice} ₽</span></span>
                            <span>Количество товаров: <span className={styles.finalPrice}>{basketCount}</span></span>
                            <MyButton 
                                addStyles={styles.button}
                                onClick={() => navigate('/order')}
                            >
                                Оформить заказ
                            </MyButton>
                        </div>
                      </div>
                    : <EmptyBasket/>
                }
            </div>
        </div>
        </>
    )
}

export default Basket;