import React from "react";
import "./Home.css";
import Banner from "./Banner";
import CardList from "./CardList";
import { places } from "./places";

export default function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="cardList">
        <CardList places={places} />
      </div>
    </div>
  );
}
