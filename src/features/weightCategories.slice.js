import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    weightCategories: [],
    loading: false,
    error: null
}

export const getWeightCategories = createAsyncThunk (
    'wCategories/get',
    async (data, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/category')
            const wCategories = await res.json()
            if (wCategories.error) {
                return thunkAPI.rejectWithValue(wCategories.error)
            }
            return thunkAPI.fulfillWithValue(wCategories)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const wCategoriesSlice = createSlice({
    name: 'wCategories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(getWeightCategories.pending, (state, action) => {
            state.loading = true
            state.error = null
        })
        .addCase(getWeightCategories.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })
        .addCase(getWeightCategories.fulfilled, (state, action) => {
            state.loading = false
            state.weightCategories = action.payload
        })
    }
})

export default wCategoriesSlice.reducer