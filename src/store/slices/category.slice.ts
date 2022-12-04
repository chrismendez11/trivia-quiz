import { createSlice } from '@reduxjs/toolkit'

export const category = createSlice({
    name: 'category',
    initialState: 0,
    reducers: {
        setCategory: (state, action) => action.payload
    }
})

export const { setCategory } = category.actions;

export default category.reducer;