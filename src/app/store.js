import { configureStore } from "@reduxjs/toolkit";
import fightersSlice from "../features/fighters.slice";
import users from "../features/newsSlice"
import weightCategoriesSlice from "../features/weightCategories.slice";

const store = configureStore({
    reducer: {
        fighters: fightersSlice,
        news: users,
        wCategories: weightCategoriesSlice
    }
})

export default store
