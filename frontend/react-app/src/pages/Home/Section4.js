import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro1.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>No Need To Visit Doctor Again and Again</h2>
              <p>
              A diabetic retinopathy detection website acts as a virtual assistant for continuous monitoring, reducing the dependency on frequent hospital visits while ensuring timely medical intervention when necessary. 
              </p>
              <ul>
                <li>
                  <p>
                  Instant & Remote Screening
                  </p>
                </li>
                <li>
                  <p>Early Detection & Monitoring</p>
                </li>
                <li>
                  <p>
                  AI-Based Accuracy & Consistency
                  </p>
                </li>
                <li>
                  <p>
                  Personalized Reports & Recommendations
                  </p>
                </li>
                <li>
                  <p>
                  User-Friendly & Accessible
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
