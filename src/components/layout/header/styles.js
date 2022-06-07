import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  background-color: ${(props) => props.theme.colorWhite};
  padding: 0 90px;
  margin: 0;
`;
