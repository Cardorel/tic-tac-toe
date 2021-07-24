import styled from "styled-components";

export const GameContainer = styled.div
    `
    display: flex;
    flex-direction: column;
    margin-top: 45px;
    width: 50%;
    margin : auto;
`

export const StatusOfCurrentPlayer = styled.div
    `
    display: flex;
    align-items: center;
    gap: 5px;
    `

export const ChangePlayer = styled.div
    `
    margin-top: 35px;
    justify-self: flex-end;
    text-align: right;
    `

export const ChangePlayerButton = styled.a
    `
  font-size: 15px;
  color: #a3a1ae;
  padding: 10px;
  width: calc(25% - 20px);
  text-align: center;
  text-decoration: none;
  border: 1px solid #0099ff;
    `

export const BoardContainer = styled.div
    `
  display: flex;
  gap: 20px;
  background-color: #525d7d;
  padding: 25px;
  border-radius: 2px;
`

export const ModalContainer = styled.div
    `
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(10, 10, 10, .9);
`

export const ModalContent = styled.div
    `
    width: 40%;
    margin: auto;
    background-color: #fff;
    padding: 10px 15px;
`

export const ScoreContainer = styled.div
    `
    margin-right: 45px;
`

export const ScoreTitle = styled.h4
    `
    margin: 0;
    color: #a3a1ae;
    `

export const ScoreParagraph = styled.p
    `
    color: #a3a1ae;
    font-weight: bold;
`

export const CongratulationMessage = styled.div
    `
    color: #a3a1ae;
    font-weight: bold;
`

export const ModalFooter = styled.div
    `
    display: flex;
    justify-content: space-around;
    margin-top: 25px;
`

const ModalButtons = styled.button
    `
    outline: none;
    border: none;
    font-size: 15px;
    color: white;
    padding: 10px;
    width: 25%;
    cursor: pointer;
`

export const ContinueButton = styled(ModalButtons)
    `
    background-color: #0099ff;
`

export const ResetButton = styled(ModalButtons)
`
background-color: #ddd;
`

export const QuitButton = styled.a
`
background-color: red;
  font-size: 15px;
  color: white;
  padding: 10px;
  width: calc(25% - 20px);
  text-align: center;
  text-decoration: none;
`
