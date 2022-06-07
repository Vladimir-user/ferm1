import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { StyledAbout, AboutWrapper, AboutText } from "./styles";
//import "./style.css";

function About() {
  return (
    <StyledAbout>
      <AboutWrapper>
        <Title size={TitleSize.H1}>
          Магазин фермерских продуктов с доставкой
        </Title>
        <AboutText>
          Все продукты изготавливаются под заказ. Фермеры начинают готовить
          продукты за день до отправки заказа клиентам. Именно поэтому мы
          принимаем заказы заранее и доставляем продукты максимально свежими.
        </AboutText>
      </AboutWrapper>
    </StyledAbout>
  );
}

export default About;
//Title, { TitleSize }  size={TitleSize.H1}
