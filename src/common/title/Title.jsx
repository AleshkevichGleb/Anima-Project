import styles from "./Title.module.css";

const Title = ({title_p1, title_p2, addStyles1, addStyles2}) => {
    return(
        <div className={addStyles1 ? `${styles.titleBlock} ${addStyles1}` : `${styles.titleBlock}`}>
            <span className={styles.title1}>{title_p1}</span>
            <span className={addStyles2 ? `${styles.title2 } ${addStyles2}` :`${styles.title2}`}>{title_p2}</span>
        </div>
    )
}

export default Title;