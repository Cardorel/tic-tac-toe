import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface initialStateType{
    isNext: boolean;
}

const initialState : initialStateType = {
    isNext: true
}


export const isNextSlice = createSlice({
    name: 'isNext',
    initialState,
    reducers: {
        setIsNext(state) {
            state.isNext = !state.isNext
        },

        resetIsNext(state , action : PayloadAction<boolean>) {
            state.isNext = action.payload
        }
    }
})



