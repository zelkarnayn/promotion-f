import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    news: [],
}


const userSlice = createSlice({
    name: "news",
    initialState,
    reducers: {},
    extraReducers: () => {

    }
})

export default userSlice.reducer