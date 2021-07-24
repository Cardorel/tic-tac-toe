import React from "react";
import Square from "../Square";
import { BoardRow } from "./board-styles-components";

interface boardPropType {
  squares: string[];
  handleSquareClick: (index: number) => void;
  indexes: number[];
}

const Board = ({ squares, handleSquareClick, indexes }: boardPropType) => (
  <BoardRow>
    {squares &&
      squares.map((value, index) => (
        <Square
          isWinnerSquare={indexes.includes(index)}
          value={value}
          key={index}
          handleSquareClick={() => handleSquareClick(index)}
        />
      ))}
  </BoardRow>
);

export default Board;
