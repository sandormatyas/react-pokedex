import styled from "styled-components";

export default styled.label`
  position: relative;
  display: inline-block;
  width: 66px;
  height: 40px;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  & .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  & .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: #2861fc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  & input:checked + .slider {
    background-color: white;
  }

  & input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  & input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
    background-color: #dc0a2d;
  }

  & .slider.round {
    border: 2px solid black;
    border-radius: 34px;
  }

  & .slider.round:before {
    border: 1px solid black;
    border-radius: 50%;
  }
`;
