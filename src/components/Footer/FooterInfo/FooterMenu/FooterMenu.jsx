import { Link } from "react-router-dom";
import { navLinks } from "../../../../data/navLinks";
import styles from "./FooterMenu.module.css";
import { footerImages } from "../../../../data/footerImages";

const FooterMenu = () => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <span className={styles.menu__title}>Меню</span>
                {navLinks.map(link => 
                    <Link key = {link.path} className={styles.menu__link} to = {`${link.path}`}>{link.title}</Link>
                )}
            </div>
            <div className={styles.menu}> 
                <span className={styles.menu__title}>Get in touch</span>
                <div className={styles.getInTouch}>
                    <span className={styles.getInTouch__title}>Call:</span>
                    <a href = "tel:+4055550128" className={styles.getInTouch__text}>(405) 555-0128</a>
                </div>
                <div className={styles.getInTouch}>
                    <span className={styles.getInTouch__title}>Email:</span>
                    <a href = "mailto:hello@createx.com" className={styles.getInTouch__text}>hello@createx.com</a>
                </div>
                <div className={styles.images}>
                    {footerImages.map(image => 
                        <a target="_blank" href = {image.url} key = {image.id} className={styles.image}>
                            <img src={image.img} alt="image" />  
                        </a>  
                    )}
                </div>
            </div>
        </div>
    )
}

export default FooterMenu;