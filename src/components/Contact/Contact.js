import React from "react";
import { Col, Container, Row, Button, Form } from "react-bootstrap";
import "./Contact.css";
import propic from "../../images/pp-faceretouch_sq.jpg";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section className="about">
        <Container>
          <h1 className="section-title">Get in Touch</h1>
          <Row>
            <Col xs={12} md={5}>
              <div className="img-wrapper">
                <img src={propic} alt="" />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="about-texts">
                <h3 className="mb-3">Contact Me</h3>

                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Normal text" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                  </Form.Group>
                  <NavLink to="/contact">
                    <Button variant="success" type="submit" className="text-cursive bg-green fw-bold rounded-pill">
                      Send <i className="bi bi-send"></i>
                    </Button>
                  </NavLink>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
