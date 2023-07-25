import { useEffect, useState } from "react"
import MyInput from "../../common/input/MyInput"
import UnderHeader from "../../common/underHeader/UnderHeader"
import FormBlock from "./FormBlock/FormBlock"
import styles from "./FormComponent.module.css"
import MyButton from "../../common/button/MyButton"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setPerson } from "../../reducers/personSlice"
import { useValidate } from "../../hooks/useValidate"
import { createPortal } from "react-dom"
import CheckDataPopUp from "./CheckDataPopUp/CheckDataPopUp"
import sendDataImg from "../../assets/images/sendData.svg";
import errorSendDataImg from "../../assets/images/errorSendData.png";
import { clear_basket } from "../../reducers/productsSlice"
import { calc_cart_count } from "../../reducers/fullCartCount"


const FormComponent = () => {
    const personData = useSelector(state => state.person);
    const dispatch = useDispatch();
    const {validate, error} = useValidate();
    const [isDisabled, setIsDisabled] = useState(true);
    const [isShow, setIsShow] = useState(false);



    useEffect(() => {
        const disabled = Object.values(error).find(el => el !== '') || 
        personData.name === '' || personData.phone === '' || personData.email === '' ||
        personData.city === '' || personData.street === '' || personData.house === '' || !personData.agreement;
        setIsDisabled(disabled)
    }, [error, personData.name, personData.phone, personData.email, personData.city,
        personData.street, personData.house, personData.agreement])

    const handlePersonData = (e) => {
        const {id, value, checked} = e.target;
        validate(id, value)
        dispatch(setPerson({
            id, value, checked
        }))
    }

    const sendData = (e) => {
        e.preventDefault();
        setIsShow(true);
        if(!isDisabled)  {
            console.log(personData);
            dispatch(clear_basket())
            dispatch(calc_cart_count())
        }
    }

    return (
        <>
            {
                isShow && createPortal(
                    isDisabled
                    ? <CheckDataPopUp 
                        isDisabled={isDisabled}
                        dispatch = {dispatch}
                        setIsShow={setIsShow} 
                        img = {errorSendDataImg} 
                        title = 'Ошибка' 
                        text = 'Проверьте поля на заполненность правильность ввода'
                     />
                    : <CheckDataPopUp 
                        isDisabled={isDisabled}
                        dispatch = {dispatch}
                        setIsShow={setIsShow} 
                        img = {sendDataImg} 
                        title = 'Ожидайте' 
                        text = 'Ваш заказ отправлен на обработу'
                     />
                , document.body)
            }
            <UnderHeader/>
            <div className="main">
                <form className={styles.form}>
                    <FormBlock title = "1. Контактная информация">
                        <div className={styles.form__inputBlock}>
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
                            {error && <span className={styles.error}>{error.name}</span>}
                        </div>
                        <div className={styles.form__inputBlock}>
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
                            {error && <span className={styles.error}>{error.phone}</span>}
                        </div>
                        
                        <div className={styles.form__inputBlockBig}>
                            <MyInput 
                                labelStyles={styles.label} 
                                inputStyles={styles.input} 
                                value = {personData.email}
                                onChange={handlePersonData}
                                type = "email"
                                id = "email"
                                placeholder='Ваш электронный адрес'
                            />  
                                {error && <span className={styles.error}>{error.email}</span>}
                        </div>
                    </FormBlock>
                    <FormBlock title="2. Местоположение">
                        <div className={styles.form__inputBlock}>
                            <MyInput 
                                addStyles={styles.input__block} 
                                labelStyles={styles.label} 
                                inputStyles={styles.input} 
                                value = {personData.city}
                                onChange={handlePersonData}
                                type = "text"
                                id = "city"
                                placeholder='Ваш город*'
                            /> 
                            {error && <span className={styles.error}>{error.city}</span>}
                        </div>
                        <div className={styles.form__inputBlock}>
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
                            {error && <span className={styles.error}>{error.street}</span>}
                        </div>
                        <div className={styles.form__inputBlock}>
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
                            {error && <span className={styles.error}>{error.house}</span>}
                        </div>
                        <div className={styles.form__inputBlock}>
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
                            {error && <span className={styles.error}>{error.flat}</span>}
                        </div>

                    </FormBlock>
                    <FormBlock>
                        <div className={styles.form__agreementBlock}>
                            <div className={styles.form__agreemenCheckBox}>
                                <input 
                                    checked = {personData.agreement} 
                                    onChange={handlePersonData} 
                                    className={styles.checkBox} 
                                    type='checkbox' 
                                    name="agreement" 
                                    id="agreement" 
                                />
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