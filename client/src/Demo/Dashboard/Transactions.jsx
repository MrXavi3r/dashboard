import React from 'react'
import { Col, Card, Table } from "react-bootstrap";

import avatar1 from "../../assets/images/user/avatar-1.jpg";
import avatar2 from "../../assets/images/user/avatar-2.jpg";
import avatar3 from "../../assets/images/user/avatar-3.jpg";

export const Transactions = () => {
    return (
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
    )
}
