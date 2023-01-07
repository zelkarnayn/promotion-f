import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    productId: [],
    error: null,
    loading: false,
    active: false,
}

export const getCart = createAsyncThunk(
    'cart/get',
    async (data, thunkAPI) => {
        try {
            const res = await fetch(process.env.BACK_URL + '/cart/get')
            const cart = await res.json()
            if (cart.error) {
                return thunkAPI.rejectWithValue(cart.error)
            }
            return thunkAPI.fulfillWithValue(cart)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const addToCart = createAsyncThunk(
    'cart/post',
    async (productId, thunkAPI) => {
        try {
            const res = await fetch(process.env.BACK_URL + '/cart/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    productId: productId
                })
            })
            const cart = await res.json()
            if (cart.error) {
                return thunkAPI.rejectWithValue(cart.error)
            }
            return thunkAPI.fulfillWithValue(cart)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const changeCart = createAsyncThunk(
    'cart/patch',
    async (data, thunkAPI) => {
        try {
            const res = await fetch(`${process.env.BACK_URL}/cart/patch/${data.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    type: data.type,
                    count: data.count
                })
            })
            const cart = await res.json()
            if (cart.error) {
                return thunkAPI.rejectWithValue(cart.error)
            }
            return thunkAPI.fulfillWithValue(cart)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

export const deleteFromCart = createAsyncThunk(
    'cart/delete',
    async (id, thunkAPI) => {
        try {
            const res = await fetch(`${process.env.BACK_URL}/cart/delete/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const cart = await res.json()
            if (cart.error) {
                return thunkAPI.rejectWithValue(cart.error)
            }
            return thunkAPI.fulfillWithValue(cart)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        cartState(state, action) {
            state.active = !state.active
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getCart.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(getCart.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(getCart.fulfilled, (state, action) => {
                state.productId = action.payload
                state.loading = false
            })
            .addCase(addToCart.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.productId.push(action.payload)
                state.loading = false
            })
            .addCase(changeCart.pending, (state, action) => {
                state.loading = true
                state.error = null
            })
            .addCase(changeCart.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(changeCart.fulfilled, (state, action) => {
                state.productId.map((product) => {
                    if (product.productId === action.payload.productId) {
                        product.count = action.payload.count
                        return true
                    }
                    return true
                })
                state.loading = false
            })
            .addCase(deleteFromCart.pending, (state,) => {
                state.loading = true
                state.error = null
            })
            .addCase(deleteFromCart.rejected, (state, action) => {
                state.error = action.payload
                state.loading = false
            })
            .addCase(deleteFromCart.fulfilled, (state, action) => {
                state.productId = state.productId.filter((product) => product.productId !== action.payload.productId)
                state.loading = false
            })
    }
})

export const { cartState } = cartSlice.actions;

export default cartSlice.reducer