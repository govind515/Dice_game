import { Button, OutlineButton } from "../styled/button";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotleScore from "./TotleScore";
import { useState } from "react";
import styled from "styled-components";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setscore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState();
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) * min));
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number ");
      return;
    }
    setError("");
    const randonNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randonNumber);

    if (selectedNumber === randonNumber) {
      setscore((prev) => prev + randonNumber);
    } else {
      setscore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setscore(0);
  };
  return (
    <MainContainer>
      <div className="top_section">
        <TotleScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />

      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button 
        onClick={()=>setShowRules(prev=>!prev)}> {showRules ? "Hide":"Show"} Rules</Button>.
      </div>
      {showRules && <Rules />}
    </MainContainer>
  );
};

export default GamePlay;
const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btn {
    display: flex;
    margin-top: 40px;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
