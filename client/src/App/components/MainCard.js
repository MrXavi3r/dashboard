import React, { useState } from "react";
import { Dropdown, Card, Collapse } from "react-bootstrap";
import windowSize from "react-window-size";
import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";

const MainCard = (props) => {
  const isOption = useState(props.isOption);
  const [fullCard, setFullCard] = useState(false);
  const [collapseCard, setCollapseCard] = useState(false);
  const [loadCard, setLoadCard] = useState(false);
  const [cardRemove, setCardRemove] = useState(false);

  const cardReloadHandler = () => {
    setLoadCard(true);
    setInterval(() => {
      setLoadCard(false);
    }, 3000);
  };

  const cardRemoveHandler = () => {
    setCardRemove(true);
  };

  let fullScreenStyle, loader, cardHeaderRight, cardHeader;
  let card = "";
  let cardClass = [];

  if (isOption) {
    cardHeaderRight = (
      <div className="card-header-right">
        <Dropdown alignRight={true} className="btn-group card-option">
          <Dropdown.Toggle id="dropdown-basic" className="btn-icon">
            <i className="feather icon-more-horizontal" />
          </Dropdown.Toggle>
          <Dropdown.Menu as="ul" className="list-unstyled card-option">
            <Dropdown.Item
              as="li"
              className="dropdown-item"
              onClick={() => {
                setFullCard((prevFullCard) => !prevFullCard);
              }}
            >
              <i
                className={
                  fullCard ? "feather icon-minimize" : "feather icon-maximize"
                }
              />
              <a href={DEMO.BLANK_LINK}>
                {" "}
                {fullCard ? "Restore" : "Maximize"}{" "}
              </a>
            </Dropdown.Item>
            <Dropdown.Item
              as="li"
              className="dropdown-item"
              onClick={() => {
                setCollapseCard((prevCollapseCard) => !prevCollapseCard);
              }}
            >
              <i
                className={
                  collapseCard ? "feather icon-plus" : "feather icon-minus"
                }
              />
              <a href={DEMO.BLANK_LINK}>
                {" "}
                {collapseCard ? "Expand" : "Collapse"}{" "}
              </a>
            </Dropdown.Item>
            <Dropdown.Item
              as="li"
              className="dropdown-item"
              onClick={cardReloadHandler}
            >
              <i className="feather icon-refresh-cw" />
              <a href={DEMO.BLANK_LINK}> Reload </a>
            </Dropdown.Item>
            <Dropdown.Item
              as="li"
              className="dropdown-item"
              onClick={cardRemoveHandler}
            >
              <i className="feather icon-trash" />
              <a href={DEMO.BLANK_LINK}> Remove </a>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }

  cardHeader = (
    <Card.Header>
      <Card.Title as="h5">{props.title}</Card.Title>
      {cardHeaderRight}
    </Card.Header>
  );

  if (fullCard) {
    cardClass = [...cardClass, "full-card"];
    fullScreenStyle = {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      width: props.windowWidth,
      height: props.windowHeight,
    };
  }

  if (loadCard) {
    cardClass = [...cardClass, "card-load"];
    loader = (
      <div className="card-loader">
        <i className="pct-loader1 anim-rotate" />
      </div>
    );
  }

  if (cardRemove) {
    cardClass = [...cardClass, "d-none"];
  }

  if (cardClass) {
    cardClass = [...cardClass, props.cardClass];
  }

  card = (
    <Card className={cardClass.join(" ")} style={fullScreenStyle}>
      {cardHeader}
      <Collapse in={!collapseCard}>
        <div>
          <Card.Body>{props.children}</Card.Body>
        </div>
      </Collapse>
      {loader}
    </Card>
  );

  return <Aux>{card}</Aux>;
};

export default windowSize(MainCard);
