import styled from "styled-components";

export default styled.div`
  text-align: center;
  display: block;
  background-color: ${props => props.theme.secondaryColor};
  border: solid 2px black;
  padding-bottom: 20px;

  & * {
    text-decoration: none;
    color: ${props => props.theme.fontColor};
  }

  & > span {
    cursor: pointer;
  }
`;
