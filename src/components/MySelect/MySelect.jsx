import styles from "./MySelect.module.css";


const MySelect = ({options, defaultValue, value, onChange}) => {
    return(
        <div className={styles.selectBox}>
            <select className={styles.select} value={value} onChange={(e) => onChange(e.target.value)}>
                {options.map(option => 
                    <option className={styles.option} key={option.value} value={option.value}>
                        {option.name}
                    </option>
                )}
            </select>
        </div>
    )
}

export default MySelect;