import React from "react";
import SearchResult from "./SearchResult";

const SearchResultList = ({ things }) => {
  return (
    <div>
      {things.map((user, i) => {
        return (
          <SearchResult
            // key={places[i]}
            img={things[i].img}
            location={things[i].location}
            title={things[i].title}
            description={things[i].description}
            star={things[i].star}
            price={things[i].price}
            total={things[i].total}
          />
        );
      })}
    </div>
  );
};

export default SearchResultList;
