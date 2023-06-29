import styles from "./BasketCount.module.css";
import buyImage from "../../../assets/images/buy.svg"
import { Link } from "react-router-dom";

const BasketCount = () => {
    return (
        <Link to = "/basket" className={styles.container}>
            <img className = {styles.image} src = {buyImage} alt = ""/>
            <span className={styles.text}>0</span>
        </Link>
    )
}

export default BasketCount;