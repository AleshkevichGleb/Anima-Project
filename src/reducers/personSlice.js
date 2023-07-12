import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: 'person',
    initialState: {
        name: '',
        phone: '',
        email: '',
        city: '',
        street: '',
        house: '',
        flat: '',
    },
    reducers: {
        setPerson: (state, action) => {
            const {id, value} = action.payload;
            state[id] = value;
        }
    },
})

export const {setPerson} = personSlice.actions;
export default personSlice.reducer;