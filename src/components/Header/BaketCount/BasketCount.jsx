import styles from "./BasketCount.module.css";
import buyImage from "../../../assets/images/buy.svg"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const BasketCount = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        
    }, [])

    return (
        <Link to = "/basket" className={styles.container}>
            <img className = {styles.image} src = {buyImage} alt = ""/>
            <span className={styles.text}>{count}</span>
        </Link>
    )
}

export default BasketCount;