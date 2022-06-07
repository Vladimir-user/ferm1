import styled from "styled-components";

export const StyledButton = styled.button`
  display: block;
  min-width: ${(props) => (props.$maxWidth ? "100%" : "260px")};
  min-height: 60px;
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorForButton};
  border: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: ${(props) => props.theme.colorForButtonHover};
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }

  &:disabled {
    opacity: 0.5;
    box-shadow: none;
    background-color: ${(props) => props.theme.buttonColor};
  }
`;
