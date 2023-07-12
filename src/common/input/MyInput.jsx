import styles from "./MyInput.module.scss";

const MyInput = ({id, title, placeholder, onChange, value, addStyles, inputStyles, labelStyles, type}) => {
    return (
        <div className={addStyles ? `${styles.inputBlock} ${addStyles}`:`${styles.inputBlock}`}>
            <input
                className={`${styles.input} ${inputStyles}`}
                placeholder=" "
                id = {id}
                type = {type}
                onChange={onChange}
                value = {value}
            />
            <label className={`${styles.label} ${labelStyles}`} htmlFor={id}>{placeholder}</label>
        </div>
    )
}

export default MyInput;