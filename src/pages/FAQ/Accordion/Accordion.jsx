import styles from "./Accordion.module.css";
import arrowImage from "../../../assets/images/arrow.svg"
const Accordion = ({accordionArr, setAccordionArr, flag}) => {

    const handleAccordion = (arr, setArr, id) => {
        const newState = arr.map(el => {
            if(el.id === id) {
                return {...el, isActive: !el.isActive}
            }
            return el
        })

        setArr(newState)
        
    }


    return (
        <div className={styles.accordion}>
            {accordionArr.map((post) => 
                <div 
                    onClick={() => handleAccordion(accordionArr, setAccordionArr, post.id)} 
                    className={styles.accordionItem} 
                    key = {post.id}
                >
                    <span className={flag === 'right'
                        ? `${styles.accordionTitleRight}`
                        : `${styles.accordionTitle}`}
                    >
                        {post.title}
                    </span>
                    <div className={styles.accordionDecoration}>
                        {flag === 'right'
                            ?   <>
                                    <span className={styles.accordion__count}>{post.id}</span>
                                    <div className={`${styles.accordionLine} ${styles.accordionRightLine}`}></div>
                                    <img 
                                    src={arrowImage}
                                    alt="arrow" 
                                    className={post.isActive 
                                        ?`${styles.accordion__change} ${styles.accordion__change_active}`
                                        :`${styles.accordion__change}`}
                                    />
                                </>
                            :   <>
                                <img 
                                    src={arrowImage}
                                    alt="arrow" 
                                    className={post.isActive 
                                        ?`${styles.accordion__change} ${styles.accordion__change_active}`
                                        :`${styles.accordion__change}`}
                                />
                                <div className={`${styles.accordionLine}`}></div>
                                <span className={styles.accordion__count}>{post.id}</span>
                                </>
                        }
                      
                    </div>
                    <span className={post.isActive 
                        ? `${styles.accordionText} ${styles.accordionText__active}`
                        : `${styles.accordionText}`}>{post.text}</span>
                </div>
            )}
        </div>
    )
}

export default Accordion;