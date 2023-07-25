import {createSlice } from "@reduxjs/toolkit";

const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        error: '',
        comments: [],
        isLoading: false,
        id: 0,
    },


    reducers: {
        getCommentsFetch: (state, action) => {
            state.isLoading = true;
        },

        getCommentsSuccess: (state, action) => {
            state.isLoading = false;
            console.log(action.payload);
            state.comments = action.payload;
        },

        getCommentsFailed: (state, action) => {
            state.isLoading = false;
            console.log(action.payload);
            state.error = action.payload
        },

        clearComments: (state, action) => {
            state.comments = [];
        }
    },

   

})

export const {getCommentsFetch, getCommentsSuccess, getCommentsFailed, clearComments} = commentsSlice.actions;
export default commentsSlice.reducer;