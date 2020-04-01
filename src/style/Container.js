import styled from "styled-components";
import Card from "./Card";

export default styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  background-color: ${props => props.theme.primaryColor};
  border: 2px solid black;
  padding: 10px;

  & > *:not(${Card}) {
    color: ${props => props.theme.fontColor};
    text-transform: capitalize;
  }
`;
