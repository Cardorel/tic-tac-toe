import { useEffect } from "react";
import { setPlayerName } from "../../features/Actions";
import { AppDispatch } from "../store";

export const usePlayerName = (dispatch : AppDispatch) => {
    useEffect(() => {
        let getPlayerNameInLocalStorate = localStorage?.getItem("playerName");
        dispatch(setPlayerName(getPlayerNameInLocalStorate));
      }, [dispatch]);
}