import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface initialStateType{
    playerName: string | null;
}

const initialState : initialStateType = {
    playerName : ''
}



export const playerNameSlice = createSlice({
    name: 'player',
    initialState,
    reducers: {
        setPlayerName(state , action : PayloadAction<string | null> ){
            state.playerName = action.payload
        }
    }
})
