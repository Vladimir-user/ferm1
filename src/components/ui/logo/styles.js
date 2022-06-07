import styled from "styled-components";

export const LogoLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    text-decoration: none;
  }
`;

export const LogoText = styled.span`
  font-size: 28px;
  font-weight: 700;
  line-height: 32.2px;
  color: ${(props) => props.theme.textColor};
  padding: 24px 0 24px 28px;
`;
