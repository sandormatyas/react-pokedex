import styled from "styled-components";
import Toggler from "./Toggler";

export default styled.div`
  display: block;
  background-color: ${props => props.theme.secondaryColor};
  border: 2px solid black;
  padding-bottom: 20px;

  & #page-title {
    font-size: 3rem;
    display: block;
  }

  & .title {
    text-align: center;
    justify-content: center;
    margin: 10px 10px 20px;
    display: block;
    min-height: 66px;
  }

  & ${Toggler} {
    display: inline-block;
  }

  & .nav {
    text-align: center;
  }

  & .nav a {
    margin: 0 5px;
    background-color: ${props => props.theme.primaryColor};
    padding: 5px 10px;
    border-radius: 45px;
    border: black 1px solid;
  }

  & * {
    text-decoration: none;
    color: ${props => props.theme.fontColor};
  }

  & > span {
    cursor: pointer;
  }
`;
