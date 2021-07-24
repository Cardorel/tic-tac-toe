import { useAppSelector } from "../../app/hooks";
import { selector } from "../../features/Selector";
import {
  ScoreContainer,
  ScoreParagraph,
  ScoreTitle,
} from "./Game-styled-components";

interface scoreBoardPropType {
  scoreOfPlayer1: number;
  scoreOfPlayer2: number;
}

const ScoreBoard = ({ scoreOfPlayer1, scoreOfPlayer2 }: scoreBoardPropType) => {
  const data = useAppSelector(selector);
  const {
    playerName: { playerName },
  } = data;
  return (
    <ScoreContainer>
      <ScoreTitle>Score</ScoreTitle>
      <ScoreParagraph>Player 1: {scoreOfPlayer1}</ScoreParagraph>
      <ScoreParagraph>
        {playerName}: {scoreOfPlayer2}
      </ScoreParagraph>
    </ScoreContainer>
  );
};

export default ScoreBoard;
