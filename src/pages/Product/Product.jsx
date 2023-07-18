import styles from "./Product.module.css";
import React, {useState} from "react";
import { useSelector } from "react-redux";
import UnderHeader from "../../common/underHeader/UnderHeader";
import { useParams } from "react-router-dom";
import Title from "../../common/title/Title";
import BackLink from "../../common/BackLink/BackLink";
import CheckMark from "../../components/CheckMark/CheckMark";
import Slider from "../../components/Slider/Slider";
import ProductFunctional from "./ProductFunctional/ProductFunctional";
import ProductComments from "./ProductComments/ProductComments";

const Product = () => {
    const {products} = useSelector(state => state.products);
    const {id} = useParams();
    const product = products.find(elem => elem.id === +id)

    const [mainImage, setMainImage] = useState({
        src: product.image.src,
        alt: product.image.alt,
    });

    const width = window.screen.width;
    const toShowSlides = width < 600 ? 4 : 5 ;
    const handleImage = (e) => {
        const {src, alt} = e.target;
        setMainImage({src: src, alt: alt});
    }

    return (
        <>
            <UnderHeader/>
            <div className="main">
                <div className={styles.product__container}>
                    <BackLink title='Назад'/>
                    <div className={styles.hr}></div>
                    <Title title_p1={product.title}/>
                    <div className={styles.hr}></div>
                    <div className={styles.product}>
                        <div className={styles.product__photos}>
                            <div>
                                <img className={styles.bigImage} src={mainImage.src} alt={mainImage.alt} />
                            </div>
                            <Slider addStyles={{dots: styles.addStyleDots, dot: styles.addStyleDot, toShow: toShowSlides, addSlider: styles.slider}}>
                                {product.gallery.map(image => 
                                    <img 
                                        onClick={handleImage} 
                                        className={styles.slider__image} 
                                        key = {image.id} 
                                        src={image.image} 
                                        alt="" 
                                    />    
                                )}
                            </Slider>
                        </div>
                        <ProductFunctional product = {product}/>
                    </div>
                    <div className={styles.product__description}>
                        <p className={styles.product__description__title}>Описание</p>
                        <div className={styles.line}></div>
                        <span className={styles.product__description__text}>{product.description}</span>
                    </div>
                    <CheckMark/>
                    <ProductComments id = {id}/>
                </div>
            </div>
        </>
    )
}

export default Product;