import styled from 'styled-components'

interface BtnProps{
    isWinnerSquare: boolean;
}

export const ButtonSquare = styled.button<BtnProps>
    `
  outline: none;
  border: none;
  font-size: 100px;
  background-color: #414159;
  color: #a3a1ae;
  position: relative;
  &::before {
    content: '';
    height: 100%;
    width: 5px;
    display: flex;
    justify-content: center;
    margin: auto;
    background-color: ${props => props.isWinnerSquare ? '#ad3d3a' : 'transparent'};
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
  }
`