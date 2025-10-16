import React from 'react';
import { Card, Row, Col } from "react-bootstrap";
import classNames from "classnames";
import CountUp from "react-countup";

export default function StatisticsWidget({
  icon,           // Now a React component (like <FiHeart />)
  variant,        // e.g., "primary", "success", etc.
  stats,          // e.g., 58947
  counterOptions, // e.g., { prefix: "$" }
  description     // e.g., "Total Revenue"
}) {
  return (
    <Card className="widget-rounded-circle shadow-sm mb-4 border-0">
      <Card.Body>
        <Row className="align-items-center">
          <Col xs={5}>
            <div
              className={classNames(
                "d-flex align-items-center justify-content-center rounded-circle text-[#d4165b]"
              )}
              style={{ width: '60px', height: '60px', backgroundColor: '#d4165b29', border: `1px solid #d4165b` }}
            >
              {icon}
            </div>
          </Col>
          <Col xs={7} className="text-end">
            <h4 className="text-dark mb-1">
              <CountUp duration={1} end={stats} {...counterOptions} />
            </h4>
            <p className="text-muted mb-0 text-truncate">{description}</p>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}
