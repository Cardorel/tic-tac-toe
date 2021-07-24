import { usePlayerName } from "../../app/CustomHooks/usePlayerName";
import { useWinner } from "../../app/CustomHooks/useWinner";
import {
  resetIsNext,
  setIsModal,
  setIsNext,
  squareData,
} from "../../features/Actions";
import Board from "../Board";
import {
  BoardContainer,
  ChangePlayer,
  ChangePlayerButton,
  GameContainer,
  StatusOfCurrentPlayer,
} from "./Game-styled-components";
import Modal from "./modal";
import ScoreBoard from "./scoreBoard";

const Game = () => {
  //Create my own customer hook
  const data = useWinner();
  //Get my data
  const {
    isModal,
    scoreOfPlayer1,
    scoreOfPlayer2,
    setScoreOfPlayer1,
    setScoreOfPlayer2,
    squares,
    winner,
    winnerName,
    dispatch,
    currentPlayerValue,
    indexes,
    currentPlayerName,
  } = data;

  //dispatch the name of the second user.
  usePlayerName(dispatch);

  //Handle square Btn
  const handleSquareClick = (index: number) => {
    //slice my array everytime is clicked
    const currentSquare = squares.slice();
    //dont do anything if winner is null || user click in the same btn
    if (winner || currentSquare[index]) return;
    //set value in array. I mean set 'X' or 'O'
    currentSquare[index] = currentPlayerValue;
    //dispatch current square
    dispatch(squareData(currentSquare));
    //dispatch the state of IsNext
    dispatch(setIsNext());
  };

  const handleContinueClick = () => {
    //reset all squares for starting a new game
    dispatch(squareData(Array(9).fill(null)));
    //set the opposite. I mean if is true set false and so
    dispatch(setIsModal());
  };

  const handleResetClick = () => {
    //reset All
    dispatch(squareData(Array(9).fill(null)));
    dispatch(setIsModal());
    setScoreOfPlayer1(0);
    setScoreOfPlayer2(0);
    dispatch(resetIsNext(true));
  };

  return (
    <GameContainer>
      <StatusOfCurrentPlayer>
        <h4>Next Player: </h4>
        <span>{currentPlayerName}</span>
      </StatusOfCurrentPlayer>
      <BoardContainer>
        <Board
          indexes={indexes}
          squares={squares}
          handleSquareClick={handleSquareClick}
        />
        <ScoreBoard
          scoreOfPlayer1={scoreOfPlayer1}
          scoreOfPlayer2={scoreOfPlayer2}
        />
      </BoardContainer>
      <ChangePlayer>
        <ChangePlayerButton href='/'>Change player</ChangePlayerButton>
      </ChangePlayer>
      {isModal && (
        <Modal
          winnerName={winnerName}
          handleContinueClick={handleContinueClick}
          handleResetClick={handleResetClick}
        />
      )}
    </GameContainer>
  );
};

export default Game;
