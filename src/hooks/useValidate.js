import { useState } from "react";

export const useValidate = () => {
    const [error, setError] = useState({});

    const validate = (name, value) => {
        switch(name) {
            case "name": {
                if(!/^[a-zA-Za-яА-Я]{2,16}$/.test(value)) {
                    setError({...error, name: 'Enter a valid name'})
                } else {
                    setError({...error, name: ''});
                }
                break;
            }

            case 'phone': {
                if(!/^(\+?375|80)\(?(29|25|44|33)\)?(\d{3})(\d{2})(\d{2})$/.test(value)) {
                    setError({...error, phone: 'Enter a valid phone number'})
                } else {
                    setError({...error, phone: ''})
                }
                break;
            }

            case 'email': {
                if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(value)) {
                    setError({...error, email: 'Введите корректный email-адрес'})
                } else {
                    setError({...error, email: ''})
                }
                break;
            }

            case 'city': {
                if(!/^[A-Z]{2,20}$/i.test(value)) {
                    setError({...error, city: 'Enter a valid phone number'})
                } else {
                    setError({...error, city: ''})
                }
                break;
            }
            
            case 'street': {
                if(!/^[a-zA-Za-яА-Я]{5,25}$/.test(value)) {
                    setError({...error, street: 'Enter a valid street'})
                } else {
                    setError({...error, street: ''})
                }
                break;
            }

            case 'house': {
                if(!/^[0-9]{0,3}\s?[к|К|/]?\s?[0-9]{1}$/.test(value)) {
                    setError({...error, house: 'Enter a valid number of house'})
                } else {
                    setError({...error, house: ''})
                }
                break;
            }

            case 'flat': {
                if(!/^[0-9 /]{0,4}$/.test(value)) {
                    setError({...error, flat: 'Введите корректный номер квартиры'})
                } else {
                    setError({...error, flat: ''})
                }
                break;
            }

            default: break;
        }
    }

    return {validate, error};
}
