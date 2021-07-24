import { useEffect, useState } from "react";
import { CalculateWinner } from "../../components/WinnerHelper";
import { setIsModal } from "../../features/Actions";
import { selector } from "../../features/Selector";
import { useAppDispatch, useAppSelector } from "../hooks";


export const useWinner = () => {
    const [scoreOfPlayer1, setScoreOfPlayer1] = useState(0);
    const [scoreOfPlayer2, setScoreOfPlayer2] = useState(0);
    const [winnerName, setWinnerName] = useState<string | null>("");
    const dispatch = useAppDispatch();
    const data = useAppSelector(selector);
    //get #ts data in the store
    const {
        squares: { squares },
        isNext: { isNext },
        isModal: { isModal },
        playerName: { playerName }
    } = data;

  //get a winner value and get the array of 3 correct indexes
  const {winner , indexes} = CalculateWinner(squares);
  //change the value if it's true or false
  let currentPlayerValue = isNext ? "X" : "O";
  //change the name
  let currentPlayerName = isNext ? 'Player 1' : playerName;
  
    useEffect(() => {
      if (winner && winner !== 'draw') {
          //check who wins and increment his score by 1
          winner === "X"
            ? setScoreOfPlayer1((prev) => prev + 1)
          : setScoreOfPlayer2((prev) => prev + 1);
        //check who wins and set his name for congratulation
        winner === "X" ? setWinnerName("Player 1") : setWinnerName(playerName);
        //wait after 3 s and set Modal to true
          setTimeout(() => {
            dispatch(setIsModal());
          }, 3000);
        
      } else if (winner && winner === 'draw') {
        //no winner
        setWinnerName('both players. No winner');
        //set modal in 3 s
          setTimeout(() => {
            dispatch(setIsModal());
          }, 3000);
        } else {
          
        }
      }, [winner , dispatch , playerName]);

    return {
        scoreOfPlayer1,
        scoreOfPlayer2,
        setScoreOfPlayer1,
        setScoreOfPlayer2,
        winnerName,
        winner,
        dispatch,
        squares,
        isModal,
        currentPlayerValue,
        indexes,
        currentPlayerName
    }
}