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
        agreement: false,
    },
    reducers: {
        setPerson: (state, action) => {
            const {id, value, checked} = action.payload;
            if(id === 'agreement') state[id] = checked;
            else state[id] = value;
        },

    },
})

export const {setPerson} = personSlice.actions;
export default personSlice.reducer;