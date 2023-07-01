import styles from  "./Preview.module.css";
import Carousel, { NextButton } from "nuka-carousel";
import img1 from "../../assets/images/slider1.png"
import img2 from "../../assets/images/FAQMain.png"
import Title from "../../common/title/Title";
import MyButton from "../../common/button/MyButton";
import Slider from "../Slider/Slider";

const Prewiew = () => {
    return (
        <div className={styles.prewiew}>
            <div className={styles.prewiew__container}>
                <div className={styles.slider__container}>
                    <div className={styles.add__container}>
                        <div className={styles.add}>
                            <span className={styles.supTitle}>Камень с душой</span>
                            <Title addStyles1={styles.titleContainer} title_p1='Каменные изделия' title_p2='для вашего дома'/>
                            <div className={styles.buttons__container}>
                                <MyButton addStyles={styles.button}>РАССЧИТАТЬ СТОИМОСТЬ</MyButton>
                                <MyButton addStyles={styles.button_black}>СВЯЗАТЬ С НАМИ</MyButton>
                            </div>
                        </div>
                    </div>
                    <Slider/>
                </div>
            </div>
        </div>
    )
}

export default Prewiew;