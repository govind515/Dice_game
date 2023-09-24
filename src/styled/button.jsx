import styled from "styled-components";

export const Button = styled.button`
  color: white;
  background-color: black;
  padding: 10px 18px;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.4s background-ease-in;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background-ease-in;
  }
`;
export const OutlineButton = styled(Button)`
background-color: white;
color: black;
font-weight: 500;
border: 1px solid black;
&:hover {
  background-color:black;
  color: white;
  border: 1px solid transparent;
}`;
