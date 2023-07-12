import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import weatherSlice from "./weatherSlice";
import rootSaga from "./rootSaga";
import productsSlice from "./productsSlice";
import basketSlice from "./basketSlice";
import personSlice from "./personSlice";

const saga = createSagaMiddleware();

const rootReducer = combineReducers({
    weather: weatherSlice,
    products: productsSlice,
    basket: basketSlice,
    person: personSlice,

})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [saga],
})

saga.run(rootSaga);