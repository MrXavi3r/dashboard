import React from 'react'
import {Col, Card} from 'react-bootstrap'
export const Expenditures = () => {
    return (
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
    )
}
