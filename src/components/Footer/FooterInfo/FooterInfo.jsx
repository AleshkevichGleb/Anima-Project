import styles from "./FooterInfo.module.css";
import Logo from "../../../common/logo/Logo";

const FooterInfo = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.footer__container}>
                <Logo addStyles={styles.logo} text = 'КАМЕНЬ С ДУШОЙ'/>
            </div>
        </div>
    )
}

export default FooterInfo;