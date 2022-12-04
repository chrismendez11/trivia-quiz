import { createSlice } from '@reduxjs/toolkit'

export const difficulty = createSlice({
    name: 'difficulty',
    initialState: '',
    reducers: {
        setDifficulty: (state, action) => action.payload
    }
})

export const { setDifficulty } = difficulty.actions;

export default difficulty.reducer;