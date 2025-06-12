import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "reactstrap";
import Getintouch from "./Getintouch";
import Narrow from "./Common/Narrow";

function Contactus() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".contypecard");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Narrow>
        <div className="mb-36 mt-24 max-xl:mt-3">
          <Row>
            <Col className="firstbtnsec ">
              <span className="abouta1">Contact Us</span>
            </Col>
          </Row>
          <Row
            className={`header ${isVisible ? "fade-in" : ""}`}
            style={{ marginTop: "10px" }}
          >
            <Col>
              <p className="aboutheader1 max-xl:text-3xl font-semibold">
                We are always open to talk
              </p>
              <p className="aboutheader1 max-xl:text-3xl font-semibold"> </p>

              <p className="aboutheader2 max-xl:px-3 text-3xl">
                We have offices and teams all around the world
              </p>
            </Col>
          </Row>
        </div>
      </Narrow>

      <Narrow>
        <hr className="mb-10 mt-32" />
      </Narrow>

      <div className="mt-32 mb-10">
        <Narrow>
          <div className="map p-10">
            <img
              style={{ height: "500px" }}
              className="mx-auto"
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/map.svg"
              alt=""
            />
          </div>
        </Narrow>
      </div>

      <div className="mb-32">
        <Narrow>
          <Row>
            <Col md="6">
              <Card className="contypecard">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-support-50.png?updatedAt=1712128888299"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                />
                <h1 className="text-3xl font-bold">Support</h1>
                <h5 className="text-xl">Contact our fast support team</h5>
                <a href="">
                  <h6 className=" text-blue-500 hover:text-blue-700 font-semibold text-lg">
                    infopanacee@gmail.com
                  </h6>
                </a>
              </Card>
            </Col>

            <Col md="6">
              <Card className="contypecard">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-phone-50.png?updatedAt=1712129594658"
                  alt=""
                  style={{ height: "60px", width: "60px" }}
                />
                <h1 className="text-3xl font-bold">Phone</h1>
                <h5 className="text-xl">Mon-Fri from 9am to 6pm.</h5>
                <a href="">
                  <h6 className="text-blue-500 hover:text-blue-700 font-semibold text-lg">
                    9650900190
                  </h6>
                </a>
              </Card>
            </Col>
          </Row>
        </Narrow>
      </div>

      <div className="mt-36">
        <Getintouch />
      </div>
    </>
  );
}

export default Contactus;
