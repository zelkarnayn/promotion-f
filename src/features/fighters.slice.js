import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    fighterId: [],
    error: null,
    loading: false,
    
}

export const getFighters = createAsyncThunk(
    'fighter/get',
    async (data, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/fighters')
            const fighter = await res.json()
            if (fighter.error) {
                return thunkAPI.rejectWithValue(fighter.error)
            }
            return thunkAPI.fulfillWithValue(fighter)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const addToFighter = createAsyncThunk(
    'fighter/post',
    async (fighterId, thunkAPI) => {
        try {
            const res = await fetch('http://localhost:4000/fighters', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    fighterId: fighterId
                })
            })
            const fighter = await res.json()
            if (cart.error) {
                return thunkAPI.rejectWithValue(fighter.error)
            }
            return thunkAPI.fulfillWithValue(fighter)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const patchFighter = createAsyncThunk(
    'fighter/patch',
    async (data, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:4000/fighters/${data.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: data.type,
                    fight: data.fight
                })
            })
            const fighter = await res.json()
            if (fighter.error) {
                return thunkAPI.rejectWithValue(fighter.error)
            }
            return thunkAPI.fulfillWithValue(fighter)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteFromFighter = createAsyncThunk(
    'fighter/delete',
    async (id, thunkAPI) => {
        try {
            const res = await fetch(`http://localhost:4000/fighter/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const fighter = await res.json()
            if (fighter.error) {
                return thunkAPI.rejectWithValue(fighter.error)
            }
            return thunkAPI.fulfillWithValue(fighter)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const fighterSlice = createSlice({
    name: 'fighter',
    initialState,
    reducers: {},
    
    extraReducers: (builder) => {
        builder
            .addCase(getFighter.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(getFighter.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getFighter.fulfilled, (state, action) => {
                state.productId = action.payload
                state.loading = false
            })
            .addCase(addToFighter.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(addToFighter.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(addToFighter.fulfilled, (state, action) => {
                state.productId.push(action.payload)
                state.loading = false
            })
            .addCase(patchFighter.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(patchFighter.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            // .addCase(patchFighter.fulfilled, (state, action) => {
            //     state.fighterId.map((item) => {
            //         if (item.fighterId === action.payload.fighterId) {
            //             item.count = action.payload.count
            //             return true
            //         }
            //         return true
            //     })
            //     state.loading = false
            // })
            .addCase(deleteFromFighter.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(deleteFromFighter.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(deleteFromFighter.fulfilled, (state, action) => {
                state.productId = state.fighterId.filter((item) => item.fighterId !== action.payload.fighterId)
                state.loading = false
            })
    }
})

export const { fighterState } = fighterSlice.actions;

export default fighterSlice.reducer