import React from "react";
import Card from "./Card";
import list from "../Data";

export default function Body({ handleClick, handleDecrease, handleIncrease }) {
  return (
    <section>
      {list.map((item) => (
        <Card
          item={item}
          key={item.id}
          handleClick={handleClick}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />
      ))}
    </section>
  );
}
