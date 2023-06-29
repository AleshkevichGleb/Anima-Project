import styles from "./Header.module.css";
import phoneImage from "../../assets/images/phone.svg"
import { navLinks } from "../../data/navLinks";
import { Link } from "react-router-dom";
import Logo from "../../common/logo/Logo";
import BasketCount from "./BaketCount/BasketCount";
import Menu from "./Menu/Menu";
import { useState } from "react";

const Header = () => {
    const [isActiveMenu, setIsActiveMenu] = useState(false)

    return (
        <div className={styles.header}>
            <div className={styles.header__container}>
                <Menu 
                    onClick = {() => setIsActiveMenu(!isActiveMenu)} 
                    isActiveMenu = {isActiveMenu}
                />
                <Logo/>
                <div className={isActiveMenu ? styles.menu__active : styles.menu}>
                    <nav className={styles.navbar}>
                        {navLinks.map(link => 
                            <Link 
                                key = {link.path} 
                                className = {styles.link} 
                                to = {link.path}
                            >
                                {link.title}
                            </Link>    
                        )}
                        <div className={styles.phone}>
                            <img src={phoneImage} alt="phone" />
                            <span>+7(499)258-625-33</span>
                        </div>
                    </nav>
                </div>
                <BasketCount/>
            </div>
        </div>
    )
}

export default Header;