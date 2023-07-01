import styles from  "./Slider.module.css";
import Carousel, { NextButton } from "nuka-carousel";
import img1 from "../../assets/images/slider1.png"
import img2 from "../../assets/images/slider-bath2.jpg"
import img3 from "../../assets/images/sllder-bath.jpg"

const Slider = () => {
    return (
        <div  className={styles.slider}>
            <Carousel 
            clas
            autoplay = {true}
            wrapAround = {true}
            cellSpacing={1}
            adaptiveHeight = {true}
            speed={1500}
            // adaptiveHeightAnimation = {true}
            autoplayInterval = '5000'
        
            defaultControlsConfig={{
                nextButtonStyle: {display:'none'},
                prevButtonStyle: {display: 'none'},
                pagingDotsContainerClassName: styles.sliderDots,
                pagingDotsClassName: styles.dots,
            }}
            >
                <img className={styles.image} src={img1} alt="" />
                <img className={styles.image} src={img2} alt="" />
                <img className={styles.image} src={img3} alt="" />
            </Carousel>     
        </div>
    )
}

export default Slider;