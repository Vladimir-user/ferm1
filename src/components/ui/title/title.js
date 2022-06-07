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

const StyledTitle = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 700;
  color: #333333;

  .title_h1 {
    font-size: 44px;
    line-height: 50.6px;
  }

  .title_h2 {
    font-size: 36px;
    line-height: 41px;
  }

  .title_h3 {
    font-size: 32px;
    line-height: 37px;
  }

  .title_h4 {
    font-size: 24px;
    line-height: 27.6px;
  }

  .title_b18 {
    font-size: 18px;
    line-height: 21px;
  }
`;

function Title({ children, size }) {
  return (
    <StyledTitle>
      <b className={`title_${size}`}>{children}</b>
    </StyledTitle>
  );
}

export default Title;
