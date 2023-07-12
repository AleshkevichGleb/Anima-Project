import { useEffect } from "react";
import Title from "../../common/title/Title";
import { accordionData } from "../../data/accordion";
import styles from "./FAQPage.module.css"
import { useState } from "react";
import FAQMainImage from "../../assets/images/FAQMain.png"
import Accordion from "./Accordion/Accordion";
import UnderHeader from "../../common/underHeader/UnderHeader";
import CheckMark from "../../components/CheckMark/CheckMark";

const FAQPage = () => {
    const [accordionLeft, setAccordionLeft] = useState([]);
    const [accordionRight, setAccordionRight] = useState([]);
    const breakArrayOnTwo = (array) => {
        const arr1 = array.filter((el, i) => i + 1 < accordionData.length/2+1)
        const arr2 = array.filter((el, i) => i + 1 > accordionData.length/2)

        return [arr1, arr2];
    }

    useEffect(() => {

        setAccordionLeft(breakArrayOnTwo(accordionData)[0])
        setAccordionRight(breakArrayOnTwo(accordionData)[1])
    }, [])

    return (
        <div className="main">
            <UnderHeader/>
            <div className={styles.container}>
                <Title title_p1='наши преимущеcтва -' title_p2='ваш результат' addStyles1={styles.styleForTitle}/>
                <div className={styles.accordion__container}>
                    <Accordion 
                        accordionArr={accordionLeft} 
                        setAccordionArr={setAccordionLeft}
                    />
                    <img className = {styles.image} src = {FAQMainImage}/>
                    <Accordion 
                        accordionArr={accordionRight} 
                        setAccordionArr={setAccordionRight}
                        flag = 'right'
                    />
                </div>
                <CheckMark/>
            </div>
        </div>
      
    )
}

export default FAQPage;