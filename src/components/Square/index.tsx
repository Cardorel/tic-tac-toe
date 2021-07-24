import { ButtonSquare } from "./square.styled-components";

export interface SquarePropType {
  value: string;
  handleSquareClick: () => void;
  isWinnerSquare: boolean;
}

export default function Square({
  value,
  handleSquareClick,
  isWinnerSquare,
}: SquarePropType) {
  return (
    <ButtonSquare isWinnerSquare={isWinnerSquare} onClick={handleSquareClick}>
      {value}
    </ButtonSquare>
  );
}
