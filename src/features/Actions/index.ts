import { isModalSlice } from "../Slices/isModalSlice";
import { isNextSlice } from "../Slices/isNextSlice";
import { playerNameSlice } from "../Slices/playerNameSlice";
import { squareSlice } from "../Slices/squareSlice";

export const { setIsNext , resetIsNext } = isNextSlice.actions;
export const { squareData } = squareSlice.actions;
export const { setIsModal } = isModalSlice.actions;
export const { setPlayerName } = playerNameSlice.actions;
