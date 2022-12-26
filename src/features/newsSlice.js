import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    news: [],
    error: null,
    loading: false
}

export const getNews = createAsyncThunk("news/get", async (data, thunkAPI) => {
    try {
        const res = await fetch("http://localhost:4000/news")
        const news = await res.json()
        if(news.error) {
            return thunkAPI.rejectWithValue(news.error)
        }
        return thunkAPI.fulfillWithValue(news)
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})
export const addNews = createAsyncThunk("news/post", async ({title, photo, description}, thunkAPI) => {
    const formData = new FormData()
    formData.append("heading", title)
    formData.append("text", description)
    formData.append("img", photo)

try {
    const res = await fetch ("http://localhost:4000/createNews", {
        method: 'POST',
        body: formData
    })
    const news = await res.json()
    if (news.error) {
        return thunkAPI.rejectWithValue(news.error)
    }
    return thunkAPI.fulfillWithValue(news)
} catch (error) {
    return thunkAPI.rejectWithValue(error.message)
}
})

export const deleteNews = createAsyncThunk("news/delete", async (id, thunkAPI) => {
    try {
        const res = await fetch(`http://localhost:4000/news/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const news = res.json()
        if (news.error) {
            return thunkAPI.rejectWithValue(news.error)
        }
        return thunkAPI.fulfillWithValue(news)
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }

})

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: (bilder) => {
        bilder
        .addCase(getNews.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        .addCase(getNews.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
        .addCase(getNews.fulfilled, (state, action) => {
            state.loading = false
            state.news = action.payload
        })
        .addCase(deleteNews.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        .addCase(deleteNews.rejected, (state, action) => {
            state.error = action.payload
            state.loading = false
        })
        .addCase(deleteNews.fulfilled, (state, action) => {
            state.loading = false
            state.news = state.news.filter(item => item._id !== action.payload._id)
        })
        .addCase(addNews.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        .addCase(addNews.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        .addCase(addNews.fulfilled, (state, action) => {
            console.log("ACTION", action.payload)
            state.loading = false
            state.news = state.news.push(action.payload)
        })

    }
})

export default newsSlice.reducer