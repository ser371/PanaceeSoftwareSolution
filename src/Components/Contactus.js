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
        <hr className="mb-5 mt-10" />
      </Narrow>

      <Narrow>
        <Row className="mt-32 mb-32">
          <Col md="6" className="p-4">
            <div className="map h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.639147490449!2d77.08972691107925!3d28.617846575571388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d04ae129bffff%3A0x4f282fb7089d998c!2sPanacee%20Software%20Solutions!5e1!3m2!1sen!2sin!4v1750491945678!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Panacee Software Solutions Location"
              ></iframe>
            </div>
          </Col>

          <Col md="6" className="p-4 d-flex flex-column gap-4">
            <Card className="contypecard p-4">
              <img
                src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-support-50.png?updatedAt=1712128888299"
                alt=""
                style={{ height: "60px", width: "60px" }}
              />
              <h1 className="text-3xl font-bold">Support</h1>
              <h5 className="text-xl">Contact our fast support team</h5>
              <a href="mailto:info@panaceesoftwaresolutions.com">
                <h6 className="text-blue-500 hover:text-blue-700 font-semibold text-lg">
                  info@panaceesoftwaresolutions.com
                </h6>
              </a>
            </Card>

            <Card className="contypecard p-4">
              <img
                src="https://ik.imagekit.io/2q7cgnqzi/Contact%20icon/icons8-phone-50.png?updatedAt=1712129594658"
                alt=""
                style={{ height: "60px", width: "60px" }}
              />
              <h1 className="text-3xl font-bold">Phone</h1>
              <h5 className="text-xl">Mon-Fri from 9am to 6pm.</h5>
              <a href="tel:9650900190">
                <h6 className="text-blue-500 hover:text-blue-700 font-semibold text-lg">
                  9650900190
                </h6>
              </a>
            </Card>
          </Col>
        </Row>
      </Narrow>

      <div className="mt-36">
        <Getintouch />
      </div>
    </>
  );
}

export default Contactus;
