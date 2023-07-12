import styles from "./EmptyBasket.module.scss";
import emptyCartImage from "../../../assets/images/emptyCart.png";
import MyButton from "../../../common/button/MyButton";
import { useNavigate } from "react-router-dom";

const EmptyBasket = () => {
    const navigate = useNavigate();

    return(
        <div className={styles.container}>
            <img className={styles.image} src={emptyCartImage} alt="sdfdsf" />
            <span className={styles.text}>Ваша корзина пуста</span>
            <MyButton addStyles={styles.button} onClick={() => navigate('/products')}>В каталог</MyButton>
        </div>
    )
}

export default EmptyBasket;