import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    comments: [],
    error: null,
    loading: false
}


export const getComments = createAsyncThunk("comment/get", async (data, thunkAPI) => {
    try {
        const res = await fetch(process.env.BACK_URL + "/comments")
        const comments = res.json()
        if(comments.error) {
            return thunkAPI.rejectWithValue(comments.error)
        }
        return comments

    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
export const addComments = createAsyncThunk("comment/post", async ({commentText, id, author}, thunkAPI) => {
try {
    const res = await fetch(process.env.BACK_URL + "/createComment", {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            text: commentText,
            newsId: id,
            author: author,
        })
    })
    const comment = await res.json()
    if(comment.error) {
        return thunkAPI.rejectWithValue(comment.error)
    }
    return thunkAPI.fulfillWithValue(comment)

} catch (error) {
    return thunkAPI.rejectWithValue(error.massage)
}

})




const commentsSlice = createSlice({
    name: "comments",
    initialState,
    reducers: {},
    extraReducers: (bilder) => {
        bilder
        .addCase(getComments.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        .addCase(getComments.rejected, (state, action) => {
            state.loading = true
            state.error = action.payload
        })
        .addCase(getComments.fulfilled, (state, action) => {
            state.loading = false
            state.comments = action.payload
        })
        .addCase(addComments.fulfilled, (state, action) => {
            state.comments.push(action.payload)
        })
        
    }
})

export default commentsSlice.reducer