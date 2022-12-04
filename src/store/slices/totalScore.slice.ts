import { createSlice } from "@reduxjs/toolkit";

export const totalScore = createSlice({
    name: 'totalScore',
    initialState: 0,
    reducers: {
        incrementTotalByBoolean: state => state + 5,
        incrementTotalByChoice: state => state + 10,
        resetTotalScore: state => 0
    }
})

export const { incrementTotalByBoolean, incrementTotalByChoice, resetTotalScore } = totalScore.actions;

export default totalScore.reducer;