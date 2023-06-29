import styles from "./Logo.module.css";
import logoImage from "../../assets/images/logo.png"
import { Link } from "react-router-dom";

const Logo = ({text, addStyles}) => {
    return (
        <div className={`${styles.logo} ${addStyles}`}>
            <Link to = '/'>
                <img className={`${styles.logo__image}`} src = {logoImage} alt="logo" />
            </Link>
            {text && 
                <span className={styles.text}>{text}</span>
            }
        </div>
    )
}

export default Logo;