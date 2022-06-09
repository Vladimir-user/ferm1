import React from "react";
import Button from "/src/components/ui/button/button";
import btn from "./style.css";

function Nav() {
  return (
    <nav>
      <Button minWidth={260} link="/buy" className={btn}>
        Купить
      </Button>
    </nav>
  );
}

export default Nav;
