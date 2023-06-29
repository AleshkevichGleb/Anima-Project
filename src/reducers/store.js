import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga"

const saga = createSagaMiddleware();

const rootReducer = combineReducers({

})

export const store = configureStore({
    reducer: rootReducer,
    middleware: [saga],
})