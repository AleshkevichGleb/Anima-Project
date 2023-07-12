import styles from "./FooterInfo.module.css";
import Logo from "../../../common/logo/Logo";
import FooterWeather from "./FooterWeather/FooterWeather";
import FooterMenu from "./FooterMenu/FooterMenu";

const FooterInfo = () => {
    return(
        <div className={styles.footer}>
            <div className={styles.footer__container}>
                <Logo addStyles={styles.logo} text = 'КАМЕНЬ С ДУШОЙ'/>
                <FooterMenu/>
                <FooterWeather/>
            </div>
        </div>
    )
}

export default FooterInfo;