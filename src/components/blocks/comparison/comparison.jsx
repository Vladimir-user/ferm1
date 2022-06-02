import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import ComparisonCard from "/src/components/ui/comparison-card/comparison-card";
import Button from "/src/components/ui/button/button";
import "./style.css";

function Comparison({ comparisons }) {
  return (
    <section className="comparison">
      {comparisons?.length ? (
        <>
          <Title size={TitleSize.H2}>Почему фермерские продукты лучше?</Title>
          <ul className="comparison__list">
            {comparisons.map((comparison) => (
              <li className="comparison__item" key={comparison.id}>
                <ComparisonCard {...comparison} />
              </li>
            ))}
          </ul>
          <Button width={260}>Купить</Button>
        </>
      ) : null}
    </section>
  );
}

export default Comparison;
