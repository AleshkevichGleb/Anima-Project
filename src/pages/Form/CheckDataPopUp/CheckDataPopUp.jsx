import styles from "./CheckDataPopUp.module.css";
import { useEffect } from "react";

const CheckDataPopUp = ({setIsShow, img, title, text}) => {
    
    useEffect(() => {
        const closePopUp = (e) => {
            if(e.key === 'Escape') {
                setIsShow(false)
            }
        }
    
        window.addEventListener('keyup', closePopUp);
        window.removeEventListener('keydown', closePopUp);
    }, [setIsShow])

    return (
            <div className={styles.container} onClick={() => setIsShow(false)}>
                <div className={styles.block} onClick={(e) => e.stopPropagation()}>
                    <span onClick={() => setIsShow(false)} className={styles.close}>&#10006;</span>
                    <div className={styles.image__container}>
                        <img src={img} alt="" />
                    </div>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.text}>{text}</span>
                </div>
            </div>
    )
}

export default CheckDataPopUp;