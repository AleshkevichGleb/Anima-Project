import { createSlice } from "@reduxjs/toolkit";


const weatherSlice = createSlice({
    name: 'weather',
    initialState: {
        weather: {},
        error: '',
        isLoading: false,
    },

    reducers: {
        getWeatherFetch: (state) => {
            state.isLoading = true;
        },
        getWeatherSuccess:(state, action) => {
            state.isLoading = false;
            state.weather = action.payload.current_weather;
        },
        getWeatherFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const {getWeatherFetch, getWeatherSuccess, getWeatherFailed} = weatherSlice.actions;
export default weatherSlice.reducer;