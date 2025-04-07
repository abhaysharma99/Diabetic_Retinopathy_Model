import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Mild from "../../assets/about/Mild.jpeg";
import Moderate from "../../assets/about/Moderate.jpeg";
import Severe from "../../assets/about/Severe.jpeg";
import Proliferative from "../../assets/about/Proliferative.jpeg";
// Mock Data Cards
const mockData = [
  {
    image: Mild,
    title: "Mild",
    paragraph: `Mild Retinopathy is the earliest stage of diabetic retinopathy, characterized by small balloon-like swelling in the retinal blood vessels called microaneurysms. These microaneurysms may leak small amounts of fluid into the retina but generally do not cause significant vision loss. `,
  },
  {
    image: Moderate,
    title: "Moderate",
    paragraph: `Moderate Retinopathy is a mid-stage of diabetic retinopathy where blood vessels in the retina become more damaged, leading to microaneurysms, hemorrhages, and mild capillary blockage. Leakage of blood and fluid may cause retinal swelling, potentially affecting vision.`,
  },
  {
    image: Severe,
    title: "Severe",
    paragraph: `Severe Retinopathy is an advanced stage of non-proliferative diabetic retinopathy (NPDR), where multiple retinal blood vessels become blocked, leading to widespread hemorrhages, venous beading, and intraretinal microvascular abnormalities (IRMA).`,
  },
  {
    image: Proliferative,
    title: "Proliferative",
    paragraph: `Proliferative Diabetic Retinopathy (PDR) is the most advanced stage of diabetic retinopathy, characterized by abnormal new blood vessel growth (neovascularization) due to severe oxygen deprivation in the retina.`,
  },
  // Add more mock data objects as needed
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
            <h2 style={{ fontSize: "130%" }}>
  Diabetic retinopathy is a microvascular complication of diabetes that affects the eyes.
</h2>

              <p>
              Diabetic retinopathy is a micro vascular complication of diabetes that affects the eyes. It happens when
high blood sugar levels damage the blood vessels in the retina. Retina is the part of the eye that detects light and
sends signals to the brain. Over time, excessive glucose weakens the vessel walls causing microaneurysms, fluid
leakage, and swelling of the retinal tissues4. As the disease advances, blocked vessels restrict blood flow which
deprives the retina of oxygen and nutrients. This triggers the growth of new abnormal blood vessels in later
stages. These fragile vessels may rupture and lead to hemorrhages and retinal scarring or detachment which
progressively worsen vision. Without timely treatment, this damage caused by DR leads to severe vision loss and
eventually blindness.
              </p>
              <p>
              Early screening of diabetic retinopathy is crucial in preventing severe complications. It is essential for
detecting diabetic retinopathy before it progresses to more advanced stages where treatment becomes complex
and less effective. During the early stages of the disease (when symptoms are absent or mild), timely intervention
can prevent severe vision loss by addressing the problems before irreversible damage occurs. Physicians can slow
or halt disease progression through interventions like better glycemic control or laser therapy.
              </p>
              {/* <Link to="/" className="btn order_now btn_red">
                Explore Full Menu
              </Link> */}
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockData.map((cardData, index) => (
              <Col md={6} lg={6} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={cardData.image}
                      style={{ borderRadius : "40%" }}
                      className="img-fluid image"
                      alt="icon"
                    />
                  </div>
                  <h4>{cardData.title}</h4>
                  <p>{cardData.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section2;
