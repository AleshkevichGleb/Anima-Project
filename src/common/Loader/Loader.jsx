import styles from "./Loader.module.css";
import loaderImage from "../../assets/images/loader-icon.svg"

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={loaderImage} alt="loader" />
        </div>
    )
}

export default Loader;
