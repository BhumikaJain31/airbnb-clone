import React from "react";
import Card from "./Card";

const CardList = ({ places }) => {
  return (
    <div>
      {places.map((user, i) => {
        return (
          <Card
            // key={places[i]}
            src={places[i].src}
            title={places[i].title}
            description={places[i].description}
            price={places[i].price}
          />
        );
      })}
    </div>
  );
};

export default CardList;
