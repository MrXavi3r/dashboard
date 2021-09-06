import React from "react";
import { Col, Card } from "react-bootstrap";
import PieDonutChart from "../Charts/Nvd3Chart/PieDonutChart";
export const PieWidget = () => {
  return (
    <Col md={6} xl={4}>
      <Card className="mb-0">
        <Card.Header className="bg-info">
          <Card.Title as="h5" className="text-white">
            Expense Breakdown
          </Card.Title>
        </Card.Header>
        <Card.Body className="px-0 pb-0">
          <PieDonutChart />
        </Card.Body>
      </Card>
    </Col>
  );
};
