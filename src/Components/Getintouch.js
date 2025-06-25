import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { useState } from "react";
import Narrow from "./Common/Narrow";
import emailjs from "emailjs-com";

function Getintouch() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, email, message } = formData;
    const name = `${firstName} ${lastName}`.trim();
    const subject = `Message from ${name}`;
    const formattedBody = `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`;

    try {
      const response = await fetch(
        "https://crmapi.trektrail.in/api/Email/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            toEmail: "info@panaceesoftwaresolutions.com",
            subject: subject,
            body: formattedBody,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      alert("Your message was sent successfully!");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Narrow>
        <div className="getintouch">
          <Row>
            <Col md="5" className="getintouch1 p-20 max-xl:p-10 h-full">
              <p style={{ color: "#1351d8", letterSpacing: "5px" }}>CONTACT</p>
              <h1 className="text-4xl font-bold">Lets get in touch</h1>
              <h5 style={{ marginTop: "30px" }}>
                You can reach us anytime via{" "}
                <a
                  style={{ color: "blue" }}
                  href="mailto:info@panaceesoftwaresolutions.com"
                >
                  info@panaceesoftwaresolutions.com
                </a>
              </h5>
              <div className=" mt-5">
                <form onSubmit={handleSubmit} className=" rounded mb-4">
                  <div className="flex justify-between">
                    <div style={{ width: "48%" }} className="mb-4">
                      <label
                        className="block text-gray-700 font-semibold text-sm mb-2"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className=" appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="firstName"
                        name="firstName"
                        placeholder="First Name"
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                    <div style={{ width: "48%" }} className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-semibold mb-2"
                        htmlFor="firstName"
                      >
                        Last Name
                      </label>
                      <input
                        className=" appearance-none border rounded w-full py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-semibold mb-2"
                      htmlFor="firstName"
                    >
                      Email
                    </label>
                    <input
                      className=" appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required={true}
                    />
                  </div>

                  <div className="flex justify-between">
                    <div style={{ width: "48%" }} className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-semibold mb-2"
                        htmlFor="firstName"
                      >
                        Phone Number
                      </label>
                      <input
                        className=" appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="phoneNumber"
                        name="phoneNumber"
                        type="number"
                        placeholder="Your Number"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                    <div style={{ width: "48%" }} className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-semibold mb-2"
                        htmlFor="firstName"
                      >
                        Country
                      </label>
                      <input
                        className=" appearance-none border rounded w-full py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="country"
                        name="country"
                        type="text"
                        placeholder="Your Country"
                        value={formData.country}
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block text-gray-700 text-sm font-semibold mb-2"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Leave us a message..."
                      value={formData.message}
                      onChange={handleChange}
                      required={true}
                    ></textarea>
                  </div>
                  <div className="">
                    <button
                      className="bg-blue-700 w-full hover:bg-black text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </Col>
            <Col md="3">
              <div className="exprience p-10 ml-3 max-xl:p-10 h-full">
                <Row className="expeince1con p-4 mt-3">
                  <div style={{ display: "flex" }}>
                    <span className="years22">5+</span>
                    <span style={{ marginTop: "15px", marginLeft: "10px" }}>
                      Years
                    </span>
                  </div>
                  <p className="inhow">filed exprience</p>
                  <hr />
                </Row>

                <Row className="expeince1con p-4">
                  <div style={{ display: "flex" }}>
                    <span className="years22">100+</span>
                    <span style={{ marginTop: "15px", marginLeft: "10px" }}>
                      Projects
                    </span>
                  </div>
                  <p className="inhow">Done Around World</p>
                  <hr />
                </Row>

                <Row className="expeince1con p-4">
                  <div style={{ display: "flex" }}>
                    <span className="years22">99%</span>
                    <span
                      style={{ marginTop: "15px", marginLeft: "10px" }}
                    ></span>
                  </div>
                  <p className="inhow">Client Satisfaction </p>
                  <hr />
                </Row>
                <Row className="expeince1con p-4">
                  <div style={{ display: "flex" }}>
                    <span className="years22">2020</span>
                    <span style={{ marginTop: "15px", marginLeft: "10px" }}>
                      Years{" "}
                    </span>
                  </div>
                  <p className="inhow">Established On</p>
                  <hr />
                </Row>
                <Row
                  className="expeince1con p-4"
                  style={{ borderBottom: "none" }}
                >
                  <div style={{ display: "flex" }}>
                    <span className="years22">2</span>
                    <span style={{ marginTop: "15px", marginLeft: "10px" }}>
                      Mins{" "}
                    </span>
                  </div>
                  <p className="inhow"> Response Time</p>
                </Row>
              </div>
            </Col>
            <Col md="4">
              <div className="contactcard p-20 max-xl:p-10">
                <Row>
                  <Col
                    style={{
                      justifyContent: "left",
                    }}
                  >
                    <Row style={{ marginTop: "10px" }}>
                      <img
                        src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/support-icon.svg"
                        alt=""
                        className="thirdcolicon"
                        style={{ width: 78 }}
                      />
                    </Row>
                    <h4>Contact info</h4>
                    <p style={{ marginBottom: "2px", marginTop: "4px" }}>
                      <a href="tel:+919650900190">96509 00190</a>
                    </p>
                    <p style={{ margin: "0px" }}>
                      <a href="mailto:info@panaceesoftwaresolutions.com">
                        info@panaceesoftwaresolutions.com
                      </a>
                    </p>
                    <br />
                    <Row style={{ marginTop: "30px" }}>
                      {" "}
                      <br />
                      <hr />
                    </Row>
                    <Row style={{ marginTop: "30px" }}>
                      <img
                        src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/map-icon.svg"
                        alt=""
                        className="thirdcolicon"
                        style={{ width: 78 }}
                      />
                    </Row>
                    <h4>Visit our office</h4>
                    <Row style={{ marginLeft: "3px" }}>
                      246, Block-C4F, Janakpuri, Delhi-110058.{" "}
                    </Row>
                    <Row style={{ marginTop: "50px" }}>
                      <hr />
                    </Row>
                    <Row
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "27px",
                        marginTop: "39px",
                      }}
                    >
                      {/* Whatsapp */}
                      <Col style={{ display: "flex", marginLeft: "2px" }}>
                        <a
                          href="https://wa.me/9650900190"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          <img
                            src="https://www.svgrepo.com/show/521923/whatsapp.svg"
                            alt="WhatsApp Icon"
                            style={{
                              width: 20,
                              height: 25,
                              objectFit: "contain",
                            }}
                          />
                          <p style={{ marginLeft: "10px" }}>WhatsApp</p>
                        </a>
                      </Col>

                      {/* Twitter */}
                      <Col style={{ display: "flex" }}>
                        <a
                          href="https://twitter.com/YOUR_TWITTER_HANDLE"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          <img
                            src="https://ik.imagekit.io/2q7cgnqzi/icon/twitter.svg?updatedAt=1711439397169"
                            alt="Twitter"
                            style={{ width: 25, height: 25 }}
                          />
                          <p style={{ marginLeft: "10px", marginBottom: 0 }}>
                            Twitter
                          </p>
                        </a>
                      </Col>

                      {/* Instagram */}
                      <Col style={{ display: "flex" }}>
                        <a
                          href="https://www.instagram.com/panaceesoftwaresolutions"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          <img
                            src="https://ik.imagekit.io/2q7cgnqzi/icon/instagram.svg?updatedAt=1711439653309"
                            alt="Instagram"
                            style={{ width: 25, height: 25 }}
                          />
                          <p style={{ marginLeft: "10px", marginBottom: 0 }}>
                            Instagram
                          </p>
                        </a>
                      </Col>

                      {/* LinkedIn */}
                      <Col style={{ display: "flex", marginLeft: "5px" }}>
                        <a
                          href="https://www.linkedin.com/company/panacee-software-solutions"
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            color: "inherit",
                          }}
                        >
                          <img
                            src="https://ik.imagekit.io/2q7cgnqzi/icon/linkedin.svg?updatedAt=1711439762894"
                            alt="LinkedIn"
                            style={{
                              width: 18,
                              height: 18,
                              marginBottom: "2px",
                            }}
                          />
                          <p
                            style={{ marginLeft: "12px", marginBottom: "6px" }}
                          >
                            LinkedIn
                          </p>
                        </a>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Narrow>
    </>
  );
}

export default Getintouch;
