import { configureStore } from "@reduxjs/toolkit";
import username from "./slices/username.slice";
import score from "./slices/score.slice";
import category from './slices/category.slice'
import difficulty from "./slices/difficulty.slice";
import totalScore from "./slices/totalScore.slice";

export const store = configureStore({
    reducer: {
        username,
        score,
        totalScore,
        category,
        difficulty
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>

