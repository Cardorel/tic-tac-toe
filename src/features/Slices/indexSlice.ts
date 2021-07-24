import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface initialStateType{
    indexes: number[][];
}

const initialState : initialStateType = {
    indexes: []
}

export const indexSlice = createSlice({
    name: 'square',
    initialState,
    reducers: {
        setIndexesOfWinnerSquare (state , action : PayloadAction<number[]>){
            state.indexes.push(action.payload)
        }
    }
})

