import styles from "./MyButton.module.css";

const MyButton = ({children, addStyles, onClick}) => {
    return <button
                onClick={onClick}
                className={addStyles ? `${styles.button} ${addStyles}` : `${styles.button}`}
            >
                {children}
            </button>
}

export default MyButton;