import React from "react";
import "./style.css";

function Button({ children, width }) {
  return (
    <button className="button" type="button" style={{ width: width }}>
      {children}
    </button>
  );
}

export default Button;
