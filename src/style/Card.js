import styled from "styled-components";

export default styled.div`
  text-align: center;
  text-transform: capitalize;
  background-color: ${props => props.theme.cardBackground};
  color: ${props => props.theme.cardTextColor};
  display: inline-block;
  margin: 5px;
  padding: 20px;
  border-radius: 10%;
  border: solid 3px ${props => props.theme.secondaryColor};
  width: max-content;
  height: 100%;

  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  &:hover {
    cursor: pointer;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
`;
