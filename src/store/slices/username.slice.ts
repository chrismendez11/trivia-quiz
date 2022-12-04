import { createSlice } from '@reduxjs/toolkit'

export const username = createSlice({
    name: 'username',
    initialState: '',
    reducers: {
        setName: (state, action) => action.payload
    }
})

export const { setName } = username.actions;

export default username.reducer;