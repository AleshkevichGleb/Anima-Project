import { useState } from "react";
import MyButton from "../../common/button/MyButton";
import MyInput from "../../common/input/MyInput";
import Title from "../../common/title/Title";
import styles from "./Footer.module.css";
import FooterInfo from "./FooterInfo/FooterInfo";

const Footer = () => {
    const [personInfo, setPersonInfo] = useState({
        name: '',
        phone: '',
    })

    const handlePersonInfo = (event) => {
        const {id, value} = event.target;
        setPersonInfo({...personInfo, [id]: value})
    }

    const sendData =  (event) => {
        event.preventDefault();
        console.log(personInfo);
    }

    return(
        <footer className={styles.footer}>
            <form onSubmit={sendData} className={styles.footer__form}>
              <div className={styles.footer__formContainer}>
                    <div className={styles.footer__formTitles}>
                        <Title 
                            title_p1='Остались вопросы?' 
                            title_p2='свяжитесь с нами, мы вам поможем!'
                            addStyles1={styles.addStylesForBlock}
                            addStyles2={styles.addStylesForTitle}
                        />
                        <span className={styles.footer__formSuptitle}>Заполните форму и мы свяжемся с Вами в ближайшее время</span>
                    </div>
                    <div className={styles.footer__formSubmit}>
                        <MyInput 
                            addStyles={styles.addStylesForInput}
                            id = "name" 
                            type = "text" 
                            placeholder = "Ваше имя" 
                            onChange={handlePersonInfo} 
                            value={personInfo.name}
                        />
                        <MyInput 
                            addStyles={styles.addStylesForInput}
                            id = "phone" 
                            type = "text" 
                            placeholder = "Ваше телефон" 
                            onChange={handlePersonInfo} 
                            value={personInfo.phone}
                        />

                        <MyButton 
                            addStyles={styles.addStylesForButton}
                        >
                            Отправить
                        </MyButton>
                    </div>
                    <div className={styles.footer__formCheckData}>
                        <input 
                            className={styles.checkbox} 
                            type = "checkbox"
                        />
                        <span className={styles.checkboxText}>Согласен на обработку персональных данных</span>
                    </div>
              </div>
            </form>
            <FooterInfo/>
        </footer>
    )
}

export default Footer;