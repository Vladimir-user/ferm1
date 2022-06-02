import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import "./style.css";

function ComparisonCard({ image, label, title, text, style }) {
  return (
    <div className={`comparison-card comparison-card-${style}`}>
      <div className="comparison-card__header">
        <img
          className="comparison-card__image"
          src={image}
          width="56"
          height="56"
          alt="тематическое изображение"
        />
        <p className={`comparison-card__label comparison-card__label-${style}`}>
          {label}
        </p>
        <Title size={TitleSize.B18}>{title}</Title>
      </div>
      <p className="comparison-card__text">{text}</p>
    </div>
  );
}

export default ComparisonCard;
