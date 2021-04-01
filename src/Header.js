import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import DownIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header-icon"
          src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
          alt=""
        />
      </Link>
      <div className="header-center">
        <input className="search-bar" type="text" placeholder="Search"></input>
        <SearchIcon />
      </div>

      <div className="header-right">
        <p>Become a host</p>
        <LanguageIcon />
        <DownIcon />
        <Avatar />
      </div>
    </div>
  );
}
