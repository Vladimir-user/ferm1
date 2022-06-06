import React from "react";
//import "./style.css";
import styled from "styled-components";

export const TitleSize = {
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  B18: "b18"
};

const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  color: #333333;
  font-size: 44px;
  line-height: 50.6px;
`;

function Title({ children, size }) {
  return <StyledTitle>{children}</StyledTitle>;
}

export default Title;
//<p className={`title_${size}`}> , size
