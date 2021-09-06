import React from "react";
import { Row} from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import { NewsWidget } from "./NewsWidget";
import { MarketWatchWidget } from "./MarketWatchWidget";
import {Social} from './Social'
import { CalendarEvent } from "./CalendarEvent";
import { PieWidget } from "./PieWidget";
import { Transactions } from "./Transactions";
import { Expenditures } from "./Expenditures";
import { Income } from "./Income";
import { Balance } from "./Balance";

const Dashboard = () => {
  return (
    <Aux>
      <Row>
        <Balance /> 
        <Income />
        <Expenditures />
        <Transactions />
        <PieWidget />
        <CalendarEvent />
        <Social />
        <MarketWatchWidget />
        <NewsWidget />
      </Row>
    </Aux>
  );
};

export default Dashboard;
