import React from "react";
import { ReactComponent as LogoImg } from "/src/assets/logo.svg";
import { LogoLink, LogoText } from "./styles";

function Logo() {
  return (
    <LogoLink href="/">
      <LogoImg />
      <LogoText>Фермерские продукты</LogoText>
    </LogoLink>
  );
}

export default Logo;
