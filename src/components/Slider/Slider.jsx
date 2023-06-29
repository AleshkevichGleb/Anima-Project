import styles from  "./Slider.module.css";
import Carousel, { NextButton } from "nuka-carousel";
import img1 from "../../assets/images/slider1.png"
import img2 from "../../assets/images/FAQMain.png"

const Slider = () => {
    return (
        <div className={styles.prewiew}>
            <div className={styles.prewiew__container}>
                <Carousel 
                    autoplay = 'true'
                    wrapAround = 'true'
                    defaultControlsConfig={{
                        nextButtonStyle: {display:'none'},
                        prevButtonStyle: {display: 'none'},
                        pagingDotsContainerClassName: styles.sliderDots,
                        pagingDotsClassName: styles.dots,
                    }}
                >
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                </Carousel>
            </div>
        </div>
    )
}

export default Slider;