import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
// import Image1 from "../../assets/menu/burger-11.jpg";
// import Image2 from "../../assets/menu/burger-12.jpg";
// import Image3 from "../../assets/menu/burger-13.jpg";
// import Image4 from "../../assets/menu/burger-14.jpg";
// import Image5 from "../../assets/menu/burger-15.jpg";
// import Image6 from "../../assets/menu/burger-16.jpg";
// import Image7 from "../../assets/menu/burger-17.jpg";
// import Image8 from "../../assets/menu/burger-18.jpg";
// import Cards from "../../components/Layouts/Cards";
// import { Link } from "react-router-dom";
import Image1 from "../../assets/menu/model_architecture.jpeg";
import Image2 from "../../assets/menu/model_architecture_2.jpeg";
const architectureData = [
  {
    title: "Input Layer",
    details: [
      "The model takes fundus images as input with a resolution of 200x200 pixels.",
      "These images likely come from a dataset like Messidor, Kaggle APTOS, or IDRiD."
    ]
  },
  {
    title: "Feature Extraction (Convolutional Layers)",
    details: [
      "The CNN consists of four convolutional layers (Conv1 to Conv4) that extract hierarchical spatial features.",
      "Each convolutional layer applies filters to detect features such as edges, textures, and patterns associated with diabetic retinopathy.",
      "Max Pooling layers (shown in yellow) downsample the feature maps, reducing dimensionality while preserving essential features."
    ]
  },
  {
    title: "Classification (Fully Connected Layers)",
    details: [
      "After feature extraction, the Flatten layer converts the 2D feature maps into a 1D vector.",
      "The vector is then passed through fully connected (FC) layers for classification.",
      "Batch Normalization is applied to stabilize learning and improve convergence.",
      "Dropout layers help prevent overfitting by randomly disabling neurons during training."
    ]
  },
  {
    title: "Output Layer",
    details: [
      "The model performs two types of classification:",
      "4-Stage Classification: Detects retinopathy severity into Grade 0 (No DR), Grade 1 (Mild), Grade 2 (Moderate), and Grade 3 (Severe/Proliferative).",
      "2-Stage Classification: Binary classification (No DR vs DR)."
    ]
  }
];

function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>About CNN MODEL</h2>
            <p className="para">
            A Convolutional Neural Network (CNN) is a deep learning architecture that is widely used in computer vision.
            It is specifically designed to process structured grid data such as images
            </p>
          </Col>
        </Row>
        <Row>
          <img
            src={Image1}
            className="img-fluid image"
            alt="icon"
          />
           <img
            src={Image2}
            style={{paddingLeft:"25px"}}
            className="img-fluid image"
            alt="icon"
          />
          
    <Container className="my-5">
      <h2 className="text-center mb-4">CNN Architecture for Diabetic Retinopathy Classification</h2>
      <Row className="justify-content-center">
        {architectureData.map((section, index) => (
          <Col md={6} lg={6} key={index} className="mb-4">
            <Card className="shadow-lg border-0 rounded-3">
              <Card.Body>
                <Card.Title className="text-primary">{section.title}</Card.Title>
                <ul>
                  {section.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  


        </Row>

        {/* <Row className="pt-5">
          <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET YOUR FREE</h4>
              <h5>CHEESE FRIES</h5>
              <Link to="/" className="btn btn_red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
        </Row> */}
      </Container>
    </section>
  );
}

export default Section3;
