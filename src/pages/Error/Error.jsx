import styles from "./Error.module.css";
import errorImage from "../../assets/images/errorPage.png"
import MyButton from "../../common/button/MyButton";
import { useNavigate } from "react-router-dom";
import UnderHeader from "../../common/underHeader/UnderHeader";

const Error= () => {
    const navigate = useNavigate();

    return (
        <>
            <UnderHeader/>
            <div className={styles.errorBlock}>
                <img className = {styles.image} src = {errorImage} alt = "errorImage"/>
                <h1 className={styles.title}>СТРАНИЦА НЕ НАЙДЕНА</h1>
                <MyButton addStyles={styles.button} onClick={() => navigate('/')}>
                    НА ГЛАВНУЮ
                </MyButton>
            </div>
        </>
    )
}

export default Error;