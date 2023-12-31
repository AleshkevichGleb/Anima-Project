import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"
import weatherSlice from "./weatherSlice";
import rootSaga from "./rootSaga";
import productsSlice from "./productsSlice";
import personSlice from "./personSlice";
import commentsSlice from "./commentsSlice";
import fullCartCount from "./fullCartCount";

const saga = createSagaMiddleware();

const rootReducer = combineReducers({
    weather: weatherSlice,
    products: productsSlice,
    person: personSlice,
    comments: commentsSlice,
    count: fullCartCount,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [saga],
})

saga.run(rootSaga);