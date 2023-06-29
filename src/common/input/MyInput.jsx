import styles from "./MyInput.module.scss";

const MyInput = ({id, title, placeholder, onChange, value, addStyles}) => {
    return (
        <div className={addStyles ? `${styles.inputBlock} ${addStyles}`:`${styles.inputBlock}`}>
            <input
                className={styles.input}
                placeholder=" "
                id = {id}
                onChange={onChange}
                value = {value}
            />
            <label className={styles.label} htmlFor={id}>{placeholder}</label>
        </div>
    )
}

export default MyInput;