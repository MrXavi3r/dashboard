import React, { useState } from "react";
import windowSize from "react-window-size";

import Aux from "../../../../../../hoc/_Aux";
import DEMO from "../../../../../../store/constant";

const NavSearch = (props) => {
  const [searchWidth, setSearchWidth] = useState(
    props.windowWidth < 992 ? 90 : 0
  );
  const [searchString, setSearchString] = useState(
    props.windowWidth < 992 ? "90px" : ""
  );
  const [isOpen, setIsOpen] = useState(props.windowWidth < 992);

  const searchOnHandler = () => {
    setIsOpen(true);
    const searchInterval = setInterval(() => {
      if (searchWidth >= 91) {
        clearInterval(searchInterval);
        return false;
      }
      setSearchWidth((prevSearchWidth) => prevSearchWidth + 15);
      setSearchString((prevSearchWidth) => prevSearchWidth + "px");
    }, 35);
  };

  const searchOffHandler = () => {
    const searchInterval = setInterval(() => {
      if (searchWidth < 0) {
        setIsOpen(false);
        clearInterval(searchInterval);
        return false;
      }
      setSearchWidth((prevSearchWidth) => prevSearchWidth - 15);
      setSearchString((prevSearchWidth) => prevSearchWidth + "px");
    }, 35);
  };

  let searchClass = ["main-search"];
  if (isOpen) {
    searchClass = [...searchClass, "open"];
  }

  console.log(searchString, searchWidth, isOpen);

  return (
    <Aux>
      <div id="main-search" className={searchClass.join(" ")}>
        <div className="input-group">
          <input
            type="text"
            id="m-search"
            className="form-control"
            placeholder="Search . . ."
            style={{ width: searchString }}
          />
          <a
            href={DEMO.BLANK_LINK}
            className="input-group-append search-close"
            onClick={searchOffHandler}
          >
            <i className="feather icon-x input-group-text" />
          </a>
          <span
            className="input-group-append search-btn btn btn-primary"
            onClick={searchOnHandler}
          >
            <i className="feather icon-search input-group-text" />
          </span>
        </div>
      </div>
    </Aux>
  );
};

export default windowSize(NavSearch);
