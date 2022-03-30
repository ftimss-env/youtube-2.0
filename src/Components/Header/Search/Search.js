import React from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";

function Search() {
  return (
    <div>
      <div className="search">
        <input type="text" placeholder="Search"></input>
        <SearchIcon className="test" />
        <KeyboardVoiceIcon />
      </div>
    </div>
  );
}

export default Search;
