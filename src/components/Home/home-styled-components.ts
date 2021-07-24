import styled from "styled-components";

export const HomeContainer = styled.div
    `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const HomeContent = styled.div
    `
  display: flex;
  flex-direction: column;
`

export const Select = styled.select
    `
    padding: 8px;
    background-color: #525d7d;
    border: none;
    color: #a3a1ae;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
    border-radius: 2px;
    -webkit-box-shadow: 5px 5px 14px 8px rgba(0, 0, 0, 0.14);
    box-shadow: 5px 5px 14px 8px rgba(0, 0, 0, 0.14);
`

export const SelectBtnContainer = styled.div
    `
    text-align: center;
`

export const SelectButton = styled.button
`
  font-size: 18px;
  width: max-content;
  padding: 10px 45px;
  border-radius: 2px;
  cursor: pointer;
  background-color: #414159;
  outline: none;
  border: none;
  color: #a3a1ae;
  -webkit-box-shadow: 5px 5px 14px 8px rgba(0, 0, 0, 0.14);
  box-shadow: 5px 5px 14px 8px rgba(0, 0, 0, 0.14);
`