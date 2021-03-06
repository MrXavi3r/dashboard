import React from 'react'
import {Col, Card} from 'react-bootstrap'

export const Income = () => {
    return (
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
    )
}
