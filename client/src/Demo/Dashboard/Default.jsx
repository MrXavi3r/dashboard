import React, { useState, useEffect } from "react";
import { Row, Col, Card, Table } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import PieDonutChart from "../Charts/Nvd3Chart/PieDonutChart";
import { NewsWidget } from "./NewsWidget";

import avatar1 from "../../assets/images/user/avatar-1.jpg";
import avatar2 from "../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../assets/images/user/avatar-3.jpg";

const apiKey = process.env.REACT_APP_API_KEY;
const url = "https://newsapi.org/v2/top-headlines?country=us&category=business";
const Dashboard = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    async function fetchNewsData() {
      const response = await fetch(`${url}&apiKey=${apiKey}`);
      const news = await response.json();
      setNewsArticles(news.articles);
    }
    // fetchNewsData();
  }, [newsArticles]);

  console.log(newsArticles);

  return (
    <Aux>
      <Row>
        <Col xl={4}>
          <Card>
            <Card.Body>
              <h6 className="mb-4">Balance</h6>
              <div className="row d-flex align-items-center">
                <div className="col-9">
                  <h3 className="f-w-300 d-flex align-items-center m-b-0">
                    <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />{" "}
                    $888,638.32
                  </h3>
                </div>

                <div className="col-3 text-right">
                  <p className="m-b-0">80%</p>
                </div>
              </div>
              <div className="progress m-t-30" style={{ height: "7px" }}>
                <div
                  className="progress-bar progress-c-theme"
                  role="progressbar"
                  style={{ width: "80%" }}
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={4}>
          <Card>
            <Card.Body>
              <h6 className="mb-4">Income (month to date)</h6>
              <div className="row d-flex align-items-center">
                <div className="col-9">
                  <h3 className="f-w-300 d-flex align-items-center m-b-0">
                    <i className="feather icon-arrow-up text-c-green f-30 m-r-5" />{" "}
                    $24,459.95
                  </h3>
                </div>

                <div className="col-3 text-right">
                  <p className="m-b-0">50%</p>
                </div>
              </div>
              <div className="progress m-t-30" style={{ height: "7px" }}>
                <div
                  className="progress-bar progress-c-theme"
                  role="progressbar"
                  style={{ width: "50%" }}
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={4}>
          <Card>
            <Card.Body>
              <h6 className="mb-4">Expenditures (month to date)</h6>
              <div className="row d-flex align-items-center">
                <div className="col-9">
                  <h3 className="f-w-300 d-flex align-items-center m-b-0">
                    <i className="feather icon-arrow-down text-c-red f-30 m-r-5" />{" "}
                    $2,942.32
                  </h3>
                </div>

                <div className="col-3 text-right">
                  <p className="m-b-0">36%</p>
                </div>
              </div>
              <div className="progress m-t-30" style={{ height: "7px" }}>
                <div
                  className="progress-bar progress-c-theme2"
                  role="progressbar"
                  style={{ width: "35%" }}
                  aria-valuenow="35"
                  aria-valuemin="0"
                  aria-valuemax="100"
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={8}>
          <Card className="Recent-Users">
            <Card.Header className="bg-secondary">
              <Card.Title as="h5" className="text-white">
                Recent Transactions
              </Card.Title>
            </Card.Header>
            <Card.Body className="px-0 py-0">
              <Table responsive hover className="mb-0">
                <tbody>
                  <tr className="unread">
                    <td>
                      <img
                        className="rounded-circle"
                        style={{ width: "40px" }}
                        src={avatar1}
                        alt="activity-user"
                      />
                    </td>
                    <td>
                      <h6 className="mb-1">Payment</h6>
                      <p className="m-0">11/15/2018</p>
                    </td>
                    <td>
                      <h6 className="text-success f-w-700 float-right">
                        +$860
                      </h6>
                    </td>
                  </tr>
                  <tr className="unread">
                    <td>
                      <img
                        className="rounded-circle"
                        style={{ width: "40px" }}
                        src={avatar2}
                        alt="activity-user"
                      />
                    </td>
                    <td>
                      <h6 className="mb-1">Appearance</h6>
                      <p className="m-0">5/18/2018</p>
                    </td>
                    <td>
                      <h6 className="text-success f-w-700 float-right">
                        +$24000
                      </h6>
                    </td>
                  </tr>
                  <tr className="unread">
                    <td>
                      <img
                        className="rounded-circle"
                        style={{ width: "40px" }}
                        src={avatar3}
                        alt="activity-user"
                      />
                    </td>
                    <td>
                      <h6 className="mb-1">Electric Bill</h6>
                      <p className="m-0">2/12/2019</p>
                    </td>
                    <td>
                      <h6 className="text-danger f-w-700 float-right">
                        -$1000
                      </h6>
                    </td>
                  </tr>
                  <tr className="unread">
                    <td>
                      <img
                        className="rounded-circle"
                        style={{ width: "40px" }}
                        src={avatar1}
                        alt="activity-user"
                      />
                    </td>
                    <td>
                      <h6 className="mb-1">Photoshoot</h6>
                      <p className="m-0">4/18/2020</p>
                    </td>
                    <td>
                      <h6 className="text-success f-w-700 float-right">
                        +8400
                      </h6>
                    </td>
                  </tr>
                  <tr className="">
                    <td>
                      <img
                        className="rounded-circle"
                        style={{ width: "40px" }}
                        src={avatar2}
                        alt="activity-user"
                      />
                    </td>
                    <td>
                      <h6 className="mb-1">Mobile Payment</h6>
                      <p className="m-0">1/21/2021</p>
                    </td>
                    <td>
                      <h6 className="text-danger f-w-700 float-right">-$780</h6>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
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
        <Col md={6} xl={6}>
          <Card className="card-event">
            <Card.Body>
              <div className="row align-items-center justify-content-center">
                <div className="col">
                  <h5 className="m-0">Upcoming Event</h5>
                </div>
                <div className="col-auto">
                  <label className="label theme-bg2 text-white f-14 f-w-400 float-right">
                    34%
                  </label>
                </div>
              </div>
              <h2 className="mt-2 f-w-300">
                45<sub className="text-muted f-14">Competitors</sub>
              </h2>
              <h6 className="text-muted mt-3 mb-0">
                You can participate in event{" "}
              </h6>
              <i className="fa fa-angellist text-c-purple f-50" />
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={4}>
          <Card className="card-social">
            <Card.Body className="border-bottom">
              <div className="row align-items-center justify-content-center">
                <div className="col-auto">
                  <i className="fa fa-twitter text-c-blue f-36" />
                </div>
                <div className="col text-right">
                  <h3>11,200</h3>
                  <h5 className="text-c-purple mb-0">
                    +6.2% <span className="text-muted">Total Likes</span>
                  </h5>
                </div>
              </div>
            </Card.Body>
            <Card.Body>
              <div className="row align-items-center justify-content-center card-active">
                <div className="col-6">
                  <h6 className="text-center m-b-10">
                    <span className="text-muted m-r-5">Target:</span>34,185
                  </h6>
                  <div className="progress">
                    <div
                      className="progress-bar progress-c-green"
                      role="progressbar"
                      style={{ width: "40%", height: "6px" }}
                      aria-valuenow="40"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <h6 className="text-center  m-b-10">
                    <span className="text-muted m-r-5">Duration:</span>800
                  </h6>
                  <div className="progress">
                    <div
                      className="progress-bar progress-c-blue"
                      role="progressbar"
                      style={{ width: "70%", height: "6px" }}
                      aria-valuenow="70"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={4}>
          <Card>
            <Card.Header className="bg-primary">
              <Card.Title as="h4" className="text-white mb-0">
                Market Watch
              </Card.Title>
            </Card.Header>
            <Card.Body>
              <div className="row">
                <div className="col-xl-12">
                  <h6 className="align-items-center float-left">
                    <i className="fa fa-btc f-20 m-r-10 text-c-yellow" />
                    BTC/USD
                  </h6>
                  <h6 className="align-items-center float-right">
                    48,334{" "}
                    <i className="feather icon-arrow-down text-c-red f-18" />
                  </h6>
                  <div
                    className="progress m-t-30 m-b-20"
                    style={{ height: "6px" }}
                  >
                    <div
                      className="progress-bar progress-c-theme"
                      role="progressbar"
                      style={{ width: "0%" }}
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>

                <div className="col-xl-12">
                  <h6 className="align-items-center float-left">
                    <i className="fa fa-mobile f-20 m-r-10 text-c-yellow" />
                    AAPL
                  </h6>
                  <h6 className="align-items-center float-right">
                    153.80{" "}
                    <i className="feather icon-arrow-up text-c-green f-18" />
                  </h6>
                  <div
                    className="progress m-t-30  m-b-20"
                    style={{ height: "6px" }}
                  >
                    <div
                      className="progress-bar progress-c-theme"
                      role="progressbar"
                      style={{ width: "0%" }}
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>

                <div className="col-xl-12">
                  <h6 className="align-items-center float-left">
                    <i className="fa fa-money f-15 m-r-10 text-c-yellow" />
                    TSLA
                  </h6>
                  <h6 className="align-items-center float-right">
                    742.90{" "}
                    <i className="feather icon-arrow-up text-c-green f-18" />
                  </h6>
                  <div
                    className="progress m-t-30  m-b-20"
                    style={{ height: "6px" }}
                  >
                    <div
                      className="progress-bar progress-c-theme"
                      role="progressbar"
                      style={{ width: "0%" }}
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>

                <div className="col-xl-12">
                  <h6 className="align-items-center float-left">
                    <i className="fa fa-money f-15 m-r-10 text-c-yellow" />
                    XAU/USD
                  </h6>
                  <h6 className="align-items-center float-right">
                    1803.21{" "}
                    <i className="feather icon-arrow-down text-c-red f-18" />
                  </h6>
                  <div
                    className="progress m-t-30  m-b-20"
                    style={{ height: "6px" }}
                  >
                    <div
                      className="progress-bar progress-c-theme"
                      role="progressbar"
                      style={{ width: "0%" }}
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
                <div className="col-xl-12">
                  <h6 className="align-items-center float-left">
                    <i className="fa fa-money f-15 m-r-10 text-c-yellow" />
                    AMZN
                  </h6>
                  <h6 className="align-items-center float-right">
                    3,432.20{" "}
                    <i className="feather icon-arrow-up text-c-green f-18" />
                  </h6>
                  <div
                    className="progress m-t-30  m-b-5"
                    style={{ height: "6px" }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "0%" }}
                      aria-valuenow="0"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    />
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} xl={4}>
          <Card>
            <Card.Header className="bg-danger d-flex align-center">
              <Card.Title as="h4" className="mb-0 p-0 text-white">
                News
              </Card.Title>
            </Card.Header>
            <Card.Body className="p-0">
              {newsArticles.length > 0 ? (
                newsArticles.slice(0, 3).map((article, index) => {
                  return (
                    <NewsWidget
                      key={index}
                      url={article.url}
                      image={article.urlToImage}
                      title={article.title}
                      desc={article.description.substring(0, 20)}
                    />
                  );
                })
              ) : (
                <h4 className="text-center my-4 text-danger">
                  news not available
                </h4>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Aux>
  );
};

export default Dashboard;
