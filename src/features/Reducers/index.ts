import { isModalSlice } from "../Slices/isModalSlice";
import { isNextSlice } from "../Slices/isNextSlice";
import { playerNameSlice } from "../Slices/playerNameSlice";
import { squareSlice } from "../Slices/squareSlice";



export const isNextReducer = isNextSlice.reducer;
export const squareReducer = squareSlice.reducer;
export const isModalReducer = isModalSlice.reducer;
export const playerNameReducer = playerNameSlice.reducer;