import React, { useState } from "react";
import "./Banner.css";
import Search from "./Search";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

export default function Banner() {
  const history = useHistory();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner-search">
        <Button
          onClick={() => setShowSearch(!showSearch)}
          className="banner-searchButton"
          variant="outlined"
        >
          {showSearch ? "Hide" : "Search Dates"}
        </Button>

        {showSearch && <Search />}
      </div>
      <div className="banner-info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan a different kind of gateway to uncover hidden gems near you
        </h5>
        <Button onClick={() => history.push("/search")} variant="outlined">
          {" "}
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}
