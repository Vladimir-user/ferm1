import styled from "styled-components";
import aboutMan from "/src/assets/man.svg";
import aboutEllipse from "/src/assets/ellipse.svg";

export const StyledAbout = styled.section`
  padding: 0 90px;
  margin: 0;
  background: url(${aboutMan}) right 178px top 57px no-repeat,
    ${(props) => props.theme.colorForAbout} url(${aboutEllipse}) right 90px
      center no-repeat;
`;

export const AboutWrapper = styled.div`
  width: 540px;
  padding-top: 183px;
`;

export const AboutText = styled.p`
  margin: 0;
  padding: 24px 0 183px 0;
`;
