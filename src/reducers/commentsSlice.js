import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getComments = createAsyncThunk('comments/getComments',
    async (id) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return await response.json();
    }) 

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

    extraReducers(builder) {
        builder.addCase(getComments.pending, (state, action) => {
            state.error = '';
            state.isLoading = true;
        })
        builder.addCase(getComments.fulfilled, (state, action) => {
            state.comments = action.payload;
            state.isLoading = false;
        })
        builder.addCase(getComments.rejected, (state, action) => {
            state.error = action.payload;
        })
    },

})

export const {getCommentsFetch, getCommentsSuccess, getCommentsFailed, clearComments} = commentsSlice.actions;
export default commentsSlice.reducer;