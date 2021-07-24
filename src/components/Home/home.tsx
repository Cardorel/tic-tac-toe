import { useState } from "react";
import {
  HomeContainer,
  HomeContent,
  Select,
  SelectBtnContainer,
  SelectButton,
} from "./home-styled-components";

export default function Home({ history }: any) {
  const [name, setName] = useState("Player 2");

  const handleSubmitPlayerName = () => {
    localStorage.setItem("playerName", name);
    setTimeout(() => {
      history.push("/Game");
    }, 2000);
  };

  return (
    <HomeContainer>
      <HomeContent>
        <label htmlFor='playerName'>Which name would you prefer to use?</label>
        <Select
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='playerName'
        >
          <option value='Player 2'>Player 2</option>
          <option value='Player 3'>Player 3</option>
          <option value='Player 4'>Player 4</option>
          <option value='Player 5'>Player 5</option>
          <option value='Player 6'>Player 6</option>
        </Select>
        <SelectBtnContainer>
          <SelectButton onClick={handleSubmitPlayerName}>Select</SelectButton>
        </SelectBtnContainer>
      </HomeContent>
    </HomeContainer>
  );
}
