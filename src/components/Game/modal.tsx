import {
  CongratulationMessage,
  ContinueButton,
  ModalContainer,
  ModalContent,
  ModalFooter,
  QuitButton,
  ResetButton,
} from "./Game-styled-components";

interface modalPropType {
  winnerName: string | null;
  handleContinueClick: () => void;
  handleResetClick: () => void;
}

const Modal = ({
  winnerName,
  handleContinueClick,
  handleResetClick,
}: modalPropType) => {
  return (
    <ModalContainer>
      <ModalContent>
        <div>
          <h2>Message</h2>
          <hr />
        </div>
        <div className='modal-body'>
          <CongratulationMessage>
            Congratulations to {winnerName}!
          </CongratulationMessage>
        </div>
        <ModalFooter>
          <ContinueButton onClick={handleContinueClick}>
            Continue
          </ContinueButton>
          <ResetButton onClick={handleResetClick}>Reset</ResetButton>
          <QuitButton href='/' className='btn-quit'>
            Quit
          </QuitButton>
        </ModalFooter>
      </ModalContent>
    </ModalContainer>
  );
};

export default Modal;
