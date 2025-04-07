import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img_dr from "../../assets/hero/hero_DR.png";
import { Link } from "react-router-dom";


const Section1 = () => {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={img_dr} className="img-fluid" alt="Hero" />
              <div className="price_badge">
                {/* <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h3_lg">$6.99</h4>
                </div> */}
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">Diabetic Retinopathy</h1>
              <h2 className="text-dark">Fatal Eye Disease</h2>
              <p className="text-white pt-2 pb-4">
              Diabetes mellitus (Diabetic Retinopathy) is a chronic medical condition where the body either doesn’t produce enough insulin or cannot
              use it effectively which leads to high blood sugar levels
              </p>
              <Link to="/image-upload" className="btn order_now">
                Check Your Eyes Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section1;
