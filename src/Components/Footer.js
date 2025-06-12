import React, { useState} from "react";
import { Row, Col, Button, Container } from "reactstrap";
import { Link } from "react-router-dom";
import Narrow from "./Common/Narrow";
import emailjs from 'emailjs-com';

function Footer() {

  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleContactUsClick = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      alert("Please enter a valid email address.");
      return;
    }

    const templateParams = {
      user_email: email,
    };

    emailjs.send('service_tp0xe6o', 'template_mpmyhub', templateParams, 'ZUPy5599PTvnFBYus')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      }, (error) => {
        console.log(error.text);
        alert('Failed to send the email, please try again.');
      });

    setEmail("");
  };


  return (
    <>
      <div className="footer bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2024/03/bg-shape-4.svg')] bg-cover pb-5">
        <Narrow>
          <div>
            <Row className="footercontainer">
              <Col md="6" className="inputdiv">
                <Row>
                  <Col className=" flex align-items-center gap-3">
                    <img
                      src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/Panacee%20logo.png?updatedAt=1710924589184"
                      alt=""
                      className="footerlogo"
                    />
                    <h1 className="text-3xl font-semibold">Panacee</h1>
                  </Col>
                </Row>
                <Row>
                  <p style={{ marginTop: "30px" }}>
                    We provide the expertise and support to <br />
                    propel your business forward.
                  </p>
                </Row>

                <Row
                  style={{ marginTop: "20px", display: "flex", gap: "15px" }}
                >
                  <Col md="5" style={{ display: "flex" }}>
                    <input
                      type="text"
                      className="footerinput"
                      placeholder="Enter Your Email"
                      value={email}
                      onChange={handleEmailChange}
                    ></input>
                  </Col>
                  <Col md="5">
                    <Link to="/contactus" onClick={handleContactUsClick}>
                      <Button className="contactusbtnfoot">Contact Us</Button>
                    </Link>
                  </Col>
                </Row>
                <Row>
                  <Col
                    style={{ display: "flex", marginTop: "50px", gap: "30px" }}
                  >
                    <Row>
                      <img
                        src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/youtube.svg"
                        alt=""
                        className="footercomlogo1"
                      />
                    </Row>
                    <Row>
                      <img
                        src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/webflow.svg"
                        alt=""
                        className="footercomlogo"
                      />
                    </Row>
                    <Row>
                      <img
                        src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/upwork.svg"
                        alt=""
                        className="footercomlogo"
                      />
                    </Row>
                    <Row>
                      <img
                        src="https://wpriverthemes.com/synck/wp-content/uploads/2024/03/shopify.svg"
                        alt=""
                        className="footercomlogo"
                      />
                    </Row>
                  </Col>
                </Row>
              </Col>

              <Col
                md="6"
                className="pl-28 max-xl:pl-7"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3 className="text-2xl font-bold max-xl:mt-10">
                  Let’s get started on something great
                </h3>
                <h6
                  style={{ marginTop: "20px" }}
                  className="text-xl text-gray-300"
                >
                  Our team of IT experts looks forward to meeting with you{" "}
                  <br />
                  and providing valuable insights tailored to your business.
                </h6>
                <Link to="/contactus">
                  <Button className="apontmentbtn">
                    Get an appointment now
                  </Button>
                </Link>
              </Col>
            </Row>
          </div>
          <div>
            <div className="flex max-lg:flex-col">
              <div className="grid grid-cols-5 max-lg:grid-cols-2 max-md:grid-cols-1 leading-10  w-9/12 max-lg:w-full">
                <div className="max-lg:mb-10 max-md:p-5 ">
                  <h5 className="text-xl font-semibold">Services</h5>
                  <a href="/ourservices/itsupport">
                    <li>IT Support</li>
                  </a>
                  <a href="/ourservices/webdesign">
                    <li>Web Design</li>
                  </a>
                  <a href="/ourservices/development">
                    <li>Development</li>
                  </a>
                  <a href="/e-commerce">
                    <li>E-Commerce</li>
                  </a>
                  <a href="/ourservices/crm">
                    <li>CRM Solutions</li>
                  </a>
                </div>

                <div className="max-lg:mb-10 max-md:p-5">
                  <h5 className="text-xl font-semibold ">
                    Company
                  </h5>
                  <a href="/blogs">
                    <li>Blog</li>
                  </a>
                  <a href="/about">
                    <li>About Us</li>
                  </a>
                  <a href="/partners">
                    <li>Partners</li>
                  </a>
                  <a href="/career">
                    <li>Careers </li>
                  </a>
                  <a href="/events">
                    <li>Events</li>
                  </a>
                  <a href="/team">
                    <li>Team</li>
                  </a>
                </div>
                <div className="max-lg:mb-10 max-md:p-5 ">
                  <h5 className="text-xl font-semibold">Product</h5>
                  <a href="/caseStudies">
                    <li>Case Studies</li>
                  </a>
                  <a href="/overview">
                    <li>Overview</li>
                  </a>
                  <a href="/solutions">
                    <li>Solutions</li>
                  </a>
                </div>
                <div className="max-lg:mb-10 max-md:p-5">
                  <h5 className="text-xl font-semibold">Our Fields</h5>
                  <a href="/ourservices/healthcare">
                    <li>Healthcare</li>
                  </a>
                  <a href="/ourservices/healthcare">
                    <li>Banks</li>
                  </a>
                  <a href="/ourservices/healthcare">
                    <li>Logistics</li>
                  </a>
                  <a href="/ourservices/healthcare">
                    <li>Supermarkets</li>
                  </a>
                  <a href="/ourservices/healthcare">
                    <li>Industries</li>
                  </a>
                  <a href="/ourservices/healthcare">
                    <li>Hotels</li>
                  </a>
                </div>
                <div className="max-lg:mb-10 max-md:p-5 ">
                  <h5 className="text-xl font-semibold">Legal</h5>
                  <a href="/team">
                    <li>Terms</li>
                  </a>
                  <a href="/team">
                    <li>Document</li>
                  </a>
                </div>

              </div>
              

              <div className="max-md:p-5 ">
                <p className="text-xl font-semibold">Phone</p>
                <a href="/contactUs">
                  <p>9650900190</p>
                </a>

                <br />
                <p className="text-xl font-semibold">Email</p>
                <a href="/contactUs">
                  <p>infopanacee@gmail.com</p>
                </a>
              </div>
            </div>
          </div>
          <div className="flex max-md:p-5 w-full max-md:flex-col justify-between mt-3">
              <div
                style={{ display: "flex", alignItems: "center", gap: "28px" }}
              >
                <a href="https://facebook.com" target="_blank">
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/facebook-round-color-icon.png"
                    alt=""
                    className="connection-logo w-10"
                  />
                </a>
                <a href="https://instagram.com" target="_blank">
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/ig-instagram-icon.png"
                    alt=""
                    className="connection-logo w-10"
                  />
                </a>
                <a target="_blank" href="https://www.linkedin.com/company/panacee-software-solutions/">
                  <img
                    src="https://ik.imagekit.io/2q7cgnqzi/icon/icons8-linkedin.svg?updatedAt=1710492054727"
                    alt=""
                    className="connection-logo-linkedin w-10"
                  />
                </a>
                <a href="https://youtube.com" target="_blank">
                  <img
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-icon.png"
                    alt=""
                    className="connection-logo w-10"
                  />
                </a>
              </div>
              <div>
                <Link to="/contactus">
                  <p className=" text-right max-xl:text-left max-md:mt-5">
                    © Copyright 2023, Panacea Software Solutions
                  </p>
                </Link>
              </div>
            
          </div>
        </Narrow>
      </div>
    </>
  );
}

export default Footer;
