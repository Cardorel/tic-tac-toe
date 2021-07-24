import styled from "styled-components";

export const BoardRow = styled.div
    `
  display: grid;
  grid: 120px 120px 120px / 120px 120px 120px;
  background-color: var(--bg-color);
  gap: 5px;
  width: calc(3 * 120px + 2 * 5px);
  height: calc(3 * 120px + 2 * 5px);
`