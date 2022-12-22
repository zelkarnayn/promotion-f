const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit")

const initialState = {
    fighters: [],
    loading: false,
    error: null
}

export const getFighters = createAsyncThunk (
    'fighters/get',
    async (data, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/fighters')
            const fighters = await res.json
            if (fighters.error) {
                return thunkAPI.rejectWithValue(fighters.error)
            }
            return thunkAPI.fulfillWithValue(fighters)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const postFighter = createAsyncThunk (
    'fighter/post',
    async (data, thunkAPI) => {
        try {
            const {firstName, lastName, alias, age, height, win, draw, loss, image, weight} = data
            const res = await fetch('http://localhost:4000/fighters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: {
                        firstName,
                        lastName
                    },
                    alias,
                    age,
                    height,
                    weight,
                    statistic: {
                        win,
                        draw,
                        loss
                    },
                    image: image
                })
            })
            const newFighter = await res.json()
            if (newFighter.error) {
                return thunkAPI.rejectWithValue(newFighter.error)
            }
            return thunkAPI.fulfillWithValue(newFighter)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const fightersSlice = createSlice({
    name: 'fighters',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getFighters.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(getFighters.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(getFighters.fulfilled, (state, action) => {
                state.loading = false
                state.fighters = action.payload
            })
            .addCase(postFighter.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(postFighter.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
            .addCase(postFighter.fulfilled, (state, action) => {
                state.loading = false
                state.fighters.push(action.payload)
            })
    }
})

export default fightersSlice.reducer
