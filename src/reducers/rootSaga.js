import {takeEvery, call, put} from "redux-saga/effects"
import { getWeatherFailed, getWeatherSuccess } from "./weatherSlice";

const getGeoLoction = () => {
    return new Promise((resolve, rejected) => {
        navigator.geolocation.getCurrentPosition(resolve, rejected);
    })
}


function* workGetWeatherFetch() {
    try {
        const position = yield getGeoLoction();
        const {latitude = 52.23, longitude = 18.32} = position.coords;
        const response = yield call(() => 
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)
        )
        const data = yield response.json();
        yield put(getWeatherSuccess(data));
    } catch {

        try {
            const response = yield call(() => 
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=52.22&longitude=18.23&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`)
        )
            const data = yield response.json();
            yield put(getWeatherSuccess(data));
            
        } catch(error) {
            console.log(error);
            yield put(getWeatherFailed(error.message))
        }
    }
}

function* rootSaga() {
    yield takeEvery('weather/getWeatherFetch', workGetWeatherFetch)
}

export default rootSaga;