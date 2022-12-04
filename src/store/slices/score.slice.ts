import { createSlice } from '@reduxjs/toolkit'

export const score = createSlice({
    name: 'score',
    initialState: 0,
    reducers: {
        incrementByBoolean: state => state + 5,
        incrementByChoice: state => state + 10,
        resetScore: state => 0
    }
})

export const { incrementByBoolean, incrementByChoice, resetScore } = score.actions;

export default score.reducer;