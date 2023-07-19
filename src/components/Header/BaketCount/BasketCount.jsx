import styles from "./BasketCount.module.css";
import buyImage from "../../../assets/images/buy.svg"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calc_cart_count } from "../../../reducers/fullCartCount";

const BasketCount = ({onClick}) => {
    const dispatch = useDispatch();
    const {count} = useSelector(state => state.count);
    console.log(count);
    useEffect(() => {
        dispatch(calc_cart_count());
    }, [dispatch])

    return (
        <Link to = "/basket" className={styles.container} onClick={onClick}>
            <img className = {styles.image} src = {buyImage} alt = ""/>
            <span className={styles.text}>{count}</span>
        </Link>
    )
}

export default BasketCount;