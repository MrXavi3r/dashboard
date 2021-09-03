import React from "react";
import { Row, Col, Card, Table, Tabs, Tab } from "react-bootstrap";

import Aux from "../../hoc/_Aux";
import DEMO from "../../store/constant";
import PieDonutChart from "../Charts/Nvd3Chart/PieDonutChart";

import avatar1 from "../../assets/images/user/avatar-1.jpg";
import avatar2 from "../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../assets/images/user/avatar-3.jpg";

class Dashboard extends React.Component {
  render() {
    const tabContent = (
      <Aux>
        <div className="media friendlist-box align-items-center justify-content-center m-b-20">
          <div className="m-r-10 photo-table">
            <a href={DEMO.BLANK_LINK}>
              <img
                className="rounded-circle"
                style={{ width: "40px" }}
                src={avatar1}
                alt="activity-user"
              />
            </a>
          </div>
          <div className="media-body">
            <h6 className="m-0 d-inline">Silje Larsen</h6>
            <span className="float-right d-flex  align-items-center">
              <i className="fa fa-caret-up f-22 m-r-10 text-c-green" />
              3784
            </span>
          </div>
        </div>
        <div className="media friendlist-box align-items-center justify-content-center m-b-20">
          <div className="m-r-10 photo-table">
            <a href={DEMO.BLANK_LINK}>
              <img
                className="rounded-circle"
                style={{ width: "40px" }}
                src={avatar2}
                alt="activity-user"
              />
            </a>
          </div>
          <div className="media-body">
            <h6 className="m-0 d-inline">Julie Vad</h6>
            <span className="float-right d-flex  align-items-center">
              <i className="fa fa-caret-up f-22 m-r-10 text-c-green" />
              3544
            </span>
          </div>
        </div>
        <div className="media friendlist-box align-items-center justify-content-center m-b-20">
          <div className="m-r-10 photo-table">
            <a href={DEMO.BLANK_LINK}>
              <img
                className="rounded-circle"
                style={{ width: "40px" }}
                src={avatar3}
                alt="activity-user"
              />
            </a>
          </div>
          <div className="media-body">
            <h6 className="m-0 d-inline">Storm Hanse</h6>
            <span className="float-right d-flex  align-items-center">
              <i className="fa fa-caret-down f-22 m-r-10 text-c-red" />
              2739
            </span>
          </div>
        </div>
        <div className="media friendlist-box align-items-center justify-content-center m-b-20">
          <div className="m-r-10 photo-table">
            <a href={DEMO.BLANK_LINK}>
              <img
                className="rounded-circle"
                style={{ width: "40px" }}
                src={avatar1}
                alt="activity-user"
              />
            </a>
          </div>
          <div className="media-body">
            <h6 className="m-0 d-inline">Frida Thomse</h6>
            <span className="float-right d-flex  align-items-center">
              <i className="fa fa-caret-down f-22 m-r-10 text-c-red" />
              1032
            </span>
          </div>
        </div>
        <div className="media friendlist-box align-items-center justify-content-center m-b-20">
          <div className="m-r-10 photo-table">
            <a href={DEMO.BLANK_LINK}>
              <img
                className="rounded-circle"
                style={{ width: "40px" }}
                src={avatar2}
                alt="activity-user"
              />
            </a>
          </div>
          <div className="media-body">
            <h6 className="m-0 d-inline">Silje Larsen</h6>
            <span className="float-right d-flex  align-items-center">
              <i className="fa fa-caret-up f-22 m-r-10 text-c-green" />
              8750
            </span>
          </div>
        </div>
        <div className="media friendlist-box align-items-center justify-content-center">
          <div className="m-r-10 photo-table">
            <a href={DEMO.BLANK_LINK}>
              <img
                className="rounded-circle"
                style={{ width: "40px" }}
                src={avatar3}
                alt="activity-user"
              />
            </a>
          </div>
          <div className="media-body">
            <h6 className="m-0 d-inline">Storm Hanse</h6>
            <span className="float-right d-flex  align-items-center">
              <i className="fa fa-caret-down f-22 m-r-10 text-c-red" />
              8750
            </span>
          </div>
        </div>
      </Aux>
    );

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
                        <h6 className="text-danger f-w-700 float-right">
                          -$780
                        </h6>
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
          {/* <Col md={6} xl={8}>
            <Card className="Recent-Users">
              <Card.Header>
                <Card.Title as="h5">Recent Users</Card.Title>
              </Card.Header>
              <Card.Body className="px-0 py-2">
                <Table responsive hover>
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
                        <h6 className="mb-1">Isabella Christensen</h6>
                        <p className="m-0">
                          Lorem Ipsum is simply dummy text of…
                        </p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className="fa fa-circle text-c-green f-10 m-r-15" />
                          11 MAY 12:56
                        </h6>
                      </td>
                      <td>
                        <a
                          href={DEMO.BLANK_LINK}
                          className="label theme-bg2 text-white f-12"
                        >
                          Reject
                        </a>
                        <a
                          href={DEMO.BLANK_LINK}
                          className="label theme-bg text-white f-12"
                        >
                          Approve
                        </a>
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
                        <h6 className="mb-1">Mathilde Andersen</h6>
                        <p className="m-0">
                          Lorem Ipsum is simply dummy text of…
                        </p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className="fa fa-circle text-c-red f-10 m-r-15" />
                          11 MAY 10:35
                        </h6>
                      </td>
                      <td>
                        <a
                          href={DEMO.BLANK_LINK}
                          className="label theme-bg2 text-white f-12"
                        >
                          Reject
                        </a>
                        <a
                          href={DEMO.BLANK_LINK}
                          className="label theme-bg text-white f-12"
                        >
                          Approve
                        </a>
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
                        <h6 className="mb-1">Karla Sorensen</h6>
                        <p className="m-0">
                          Lorem Ipsum is simply dummy text of…
                        </p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className="fa fa-circle text-c-green f-10 m-r-15" />
                          9 MAY 17:38
                        </h6>
                      </td>
                      <td>
                        <a
                          href={DEMO.BLANK_LINK}
                          className="label theme-bg2 text-white f-12"
                        >
                          Reject
                        </a>
                        <a
                          href={DEMO.BLANK_LINK}
                          className="label theme-bg text-white f-12"
                        >
                          Approve
                        </a>
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
                        <h6 className="mb-1">Ida Jorgensen</h6>
                        <p className="m-0">
                          Lorem Ipsum is simply dummy text of…
                        </p>
                      </td>
                      <td>
                        <h6 className="text-muted f-w-300">
                          <i className="fa fa-circle text-c-red f-10 m-r-15" />
                          19 MAY 12:56
                        </h6>
                      </td>
                      <td>
                        <a
                          href={DEMO.BLANK_LINK}
                          className="label theme-bg2 text-white f-12"
                        >
                          Reject
                        </a>
                        <a
                          href={DEMO.BLANK_LINK}
                          className="label theme-bg text-white f-12"
                        >
                          Approve
                        </a>
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
                        <h6 className="mb-1">Albert Andersen</h6>
                        <p className="m-0">
                          Lorem Ipsum is simply dummy text of…
                        </p>
                      </td>
                      <td>
                        <h6 className="text-muted">
                          <i className="fa fa-circle text-c-green f-10 m-r-15" />
                          21 July 12:56
                        </h6>
                      </td>
                      <td>
                        <a
                          href={DEMO.BLANK_LINK}
                          className="label theme-bg2 text-white f-12"
                        >
                          Reject
                        </a>
                        <a
                          href={DEMO.BLANK_LINK}
                          className="label theme-bg text-white f-12"
                        >
                          Approve
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col> */}
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
          <Col md={6} xl={6} className="m-b-30">
            <Card>
              <Card.Header className="bg-danger d-flex align-center">
                <Card.Title as="h4" className="mb-0 p-0 text-white">
                  News
                </Card.Title>
                .{" "}
              </Card.Header>
              <Card.Body className="p-0">
                <div className="py-2 d-flex justify-content-around border border-top-0 border-left-0 border-right-0 border-secondary">
                  <img
                    src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61315165651c4e3e07871f72%2F0x0.jpg%3FcropX1%3D173%26cropX2%3D3278%26cropY1%3D461%26cropY2%3D2207"
                    className="rounded mx-3"
                    alt="financial news"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h6>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Veniam consequuntur cumque praesentium quod, nisi voluptatum
                    nulla deserunt! Voluptatum...
                  </h6>
                </div>
                <div className="py-2 d-flex justify-content-around border border-top-0 border-left-0 border-right-0 border-secondary">
                  <img
                    src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61315165651c4e3e07871f72%2F0x0.jpg%3FcropX1%3D173%26cropX2%3D3278%26cropY1%3D461%26cropY2%3D2207"
                    className="rounded mx-3"
                    alt="financial news"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h6>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Veniam consequuntur cumque praesentium quod, nisi voluptatum
                    nulla deserunt! Voluptatum...
                  </h6>
                </div>
                <div className="py-2 d-flex justify-content-around border border-top-0 border-left-0 border-right-0 border-secondary">
                  <img
                    src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F61315165651c4e3e07871f72%2F0x0.jpg%3FcropX1%3D173%26cropX2%3D3278%26cropY1%3D461%26cropY2%3D2207"
                    className="rounded mx-3"
                    alt="financial news"
                    style={{ width: "80px", height: "80px" }}
                  />
                  <h6>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Veniam consequuntur cumque praesentium quod, nisi voluptatum
                    nulla deserunt! Voluptatum...
                  </h6>
                </div>
              </Card.Body>
            </Card>
          </Col>
          {/* <Col md={6} xl={8} className="m-b-30">
            <Tabs defaultActiveKey="today" id="uncontrolled-tab-example">
              <Tab eventKey="today" title="Today">
                {tabContent}
              </Tab>
              <Tab eventKey="week" title="This Week">
                {tabContent}
              </Tab>
              <Tab eventKey="all" title="All">
                {tabContent}
              </Tab>
            </Tabs>
          </Col> */}
        </Row>
      </Aux>
    );
  }
}

export default Dashboard;
