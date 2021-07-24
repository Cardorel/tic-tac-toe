import { createSlice } from "@reduxjs/toolkit";

export interface initialStateType{
    isModal: boolean;
}

const initialState : initialStateType = {
    isModal: false
}


export const isModalSlice = createSlice({
    name: 'isModal',
    initialState,
    reducers: {
        setIsModal(state) {
            state.isModal = !state.isModal
        }
    }
})



