import styles from  "./Preview.module.css";
import Carousel, { NextButton } from "nuka-carousel";
import img1 from "../../assets/images/slider1.png"
import img2 from "../../assets/images/FAQMain.png"
import Title from "../../common/title/Title";
import MyButton from "../../common/button/MyButton";
import Slider from "../Slider/Slider";
import imgSL1 from "../../assets/images/slider-bath2.jpg"
import imgSl2 from "../../assets/images/sllder-bath.jpg"

const Prewiew = () => {

    const handleScroll = () => {
        window.scroll({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        })
    }

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
                                <MyButton onClick={handleScroll} addStyles={styles.button_black}>СВЯЗАТЬ С НАМИ</MyButton>
                            </div>
                        </div>
                    </div>
                    <Slider 
                        addStyles = {{dots: styles.addStyleDots, 
                                        dot: styles.addStyleDot, 
                                        addSlider: styles.slider, 
                                        prevButton: styles.prevButton, 
                                        nextButton: styles.nextButton
                                    }}
                    >
                        <div className={styles.image} style={{backgroundImage: `url(${imgSL1})`}}></div>
                        <div className={styles.image} style={{backgroundImage: `url(${imgSl2})`}}></div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Prewiew;