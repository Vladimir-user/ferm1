import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  background-color: ${(props) => props.theme.colorWhite};
  padding: 0 90px;
  margin: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;
