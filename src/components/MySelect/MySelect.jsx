import styles from "./MySelect.module.css";


const MySelect = ({options, defaultValue, value, onChange}) => {
    return(
        <select className={styles.select} value={value} onChange={(e) => onChange(e.target.value)}>
            {options.map(option => 
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    )
}

export default MySelect;