import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface initialStateType{
    squares: string[];
}

const initialState : initialStateType = {
    squares : Array(9).fill(null)
}

export const squareSlice = createSlice({
    name: 'square',
    initialState,
    reducers: {
        squareData (state , action : PayloadAction<string[]>){
            state.squares = action.payload;
        }
    }
})

