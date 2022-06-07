import React from "react";
import About from "/src/components/blocks/about/about";
import Comparison from "/src/components/blocks/comparison/comparison";

function MainPage({ comparisons }) {
  return (
    <>
      <About />
      <Comparison comparisons={comparisons} />
    </>
  );
}

export default MainPage;
