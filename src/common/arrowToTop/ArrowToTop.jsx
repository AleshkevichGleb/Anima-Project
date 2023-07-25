import styles from "./ArrowToTop.module.scss";

const ArrowToTop = () => {

    const goTop = () => {
     
        if(window.pageYOffset > 0) {
            window.scrollBy(0, -75)
            setTimeout(goTop, 0)
        }
    }

    return (
        <div onClick={goTop} className={styles.arrow__container}>
            <div onClick={goTop} className={styles.arrow}></div>
        </div>
    )
}

export default ArrowToTop;