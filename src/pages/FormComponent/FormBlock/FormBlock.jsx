import styles from "./FormBlock.module.css";

const FormBlock = ({children, title}) => {
    return (
        <div className={styles.container}>
            {
                title && <span className={styles.title}>{title}</span> 
            }
            <div className={styles.contentBlock}>
                {children}
            </div>
        </div>
    )
}

export default FormBlock;