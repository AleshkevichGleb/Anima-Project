import { useState } from "react";
import MyInput from "../../../common/input/MyInput";
import styles from "./Filter.module.css";


const Filter = (filter, setFilter, handleFilter) => {

    console.log(filter);
    return (
        <div className={styles.filter}>
            <div className={styles.priceBlock}>
                <MyInput
                    id = "startPrice"
                    addStyles={styles.input}
                    labelStyles={styles.input__styles}
                    inputStyles={styles.input__styles}
                    placeholder="От"
                    value={filter.filter.startPrice}
                    onChange={handleFilter}
                />
                <MyInput
                    id = "lastPrice"
                    addStyles={styles.input}
                    inputStyles={styles.input__styles}
                    labelStyles={styles.input__styles}
                    placeholder="До"
                    value={filter.filter.lastPrice}
                    onChange={handleFilter}
                />
            </div>
        </div>
    )
}


export default Filter;