import { useState } from "react"
import MyInput from "../../common/input/MyInput"
import UnderHeader from "../../common/underHeader/UnderHeader"
import FormBlock from "./FormBlock/FormBlock"
import styles from "./FormComponent.module.css"
import MyButton from "../../common/button/MyButton"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setPerson } from "../../reducers/personSlice"

const FormComponent = () => {
    const personData = useSelector(state => state.person);
    const dispatch = useDispatch();

    const handlePersonData = (e) => {
        const {id, value} = e.target;
        dispatch(setPerson({
            id, value
        }))
    }

    const sendData = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <UnderHeader/>
            <div className="main">
                <form className={styles.form}>
                    <FormBlock title = "1. Контактная информация">
                        <MyInput 
                            addStyles={styles.input__block} 
                            labelStyles={styles.label} 
                            inputStyles={styles.input} 
                            value = {personData.name}
                            onChange={handlePersonData}
                            type = "text"
                            id = "name"
                            placeholder='Ваше имя*'
                        />

                        <MyInput 
                            addStyles={styles.input__block} 
                            labelStyles={styles.label} 
                            inputStyles={styles.input} 
                            value = {personData.phone}
                            onChange={handlePersonData}
                            type = "tel"
                            id = "phone"
                            placeholder='Ваш телефон*'
                        />  

                        <MyInput 
                            addStyles={styles.input__blockLong} 
                            labelStyles={styles.label} 
                            inputStyles={styles.input} 
                            value = {personData.email}
                            onChange={handlePersonData}
                            type = "email"
                            id = "email"
                            placeholder='Ваш электронный адрес'
                        />  
                    </FormBlock>
                    <FormBlock title="2. Местоположение">
                        <MyInput 
                            addStyles={styles.input__block} 
                            labelStyles={styles.label} 
                            inputStyles={styles.input} 
                            value = {personData.city}
                            onChange={handlePersonData}
                            type = "tel"
                            id = "city"
                            placeholder='Ваш город*'
                        /> 

                        <MyInput 
                            addStyles={styles.input__block} 
                            labelStyles={styles.label} 
                            inputStyles={styles.input} 
                            value = {personData.street}
                            onChange={handlePersonData}
                            type = "text"
                            id = "street"
                            placeholder='Улица*'
                        />

                        <MyInput 
                            addStyles={styles.input__block} 
                            labelStyles={styles.label} 
                            inputStyles={styles.input} 
                            value = {personData.house}
                            onChange={handlePersonData}
                            type = "text"
                            id = "house"
                            placeholder='Дом*'
                        />

                        <MyInput 
                            addStyles={styles.input__block} 
                            labelStyles={styles.label} 
                            inputStyles={styles.input} 
                            value = {personData.flat}
                            onChange={handlePersonData}
                            type = "text"
                            id = "flat"
                            placeholder='Квартира'
                        />

                    </FormBlock>
                    <FormBlock>
                        <div className={styles.form__agreementBlock}>
                            <div className={styles.form__agreemenCheckBox}>
                                <input className={styles.checkBox} type='checkbox' name="agreement" id="agreement" />
                                <label className={styles.form__agreementText} htmlFor="agreement">
                                    Я согласен на обработку моих перс. данных в соответствии с <Link className={styles.form__agreemenLink} to = '/data'>Условиями</Link>
                                </label>
                            </div>
                            <MyButton 
                                addStyles={styles.button}
                                onClick={sendData}
                            >
                                Оформить заказ
                            </MyButton>
                        </div>
                    </FormBlock>
                </form>
            </div>
        </>
    )
}

export default FormComponent