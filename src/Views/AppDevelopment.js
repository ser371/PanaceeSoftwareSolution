import React, { useEffect, useState } from "react";
import Narrow from "../Components/Common/Narrow";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import ShowcaseSlider from "../Components/ShowcaseSlider";
import img1 from "../Images/App-development-process-Feature-image.jpg";
import img2 from "../Images/app-development-courses-header-image.png";
import "./AppDevelopment.css";

export default function AppDevelopment() {
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "UI/UX and Prototyping",
      desc: "We create Android applications with a unique approach to UI/UX. Every application we develop undergoes rigorous testing to ensure visual appeal and functionalities. Our experts create robust wireframes and prototypes to ensure your application is intuitive.",
      icon: "fa-solid fa-paint-brush",
    },
    {
      title: "Custom Android App Development",
      desc: "Whether a business-oriented or community-specific application, we can help you bring your unique Android apps to life. Our custom app development experts closely examine your app's unique approach to creating custom code, architecture, and UI/UX.",
      icon: "fa-solid fa-mobile-screen-button",
    },
    {
      title: "Android App QA & Testing",
      desc: "Let's make your application world-class with our Android app QA & testing. We run a full-scale audit of your applications to find possible bugs and improve the quality of the product with our comprehensive set of DX, QA, and QE tools.",
      icon: "fa-solid fa-bug-slash",
    },
    {
      title: "Android App Maintenance",
      desc: "Regular and timely maintenance is the essence of a successful Android application. With our dedicated app support and maintenance services, we can ensure your software performs crash-free and is top-notch.",
      icon: "fa-solid fa-screwdriver-wrench",
    },
    {
      title: "Android App Modernization",
      desc: "Still, stuck with an Android application that uses old methodologies to tackle the latest operations? Revive your Android app with our app modernization services.",
      icon: "fa-solid fa-arrows-rotate",
    },
    {
      title: "Android App Consulting",
      desc: "Have unique app ideas? Let's turn them into reality with our Android app consulting services. Our experts walk you through every step of app building.",
      icon: "fa-solid fa-lightbulb",
    },
  ];

  return (
    <>
      {/* Hero Section with Breadcrumb */}
      <div
        style={{
          background: "white",
          color: "#1a237e",
          padding: "6rem 0",
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          marginRight: "calc(-50vw + 50%)",
        }}
      >
        <Narrow>
          <Row className="align-items-center">
            {/* Left Side: Text Content with Breadcrumb */}
            <Col md="6">
              <nav aria-label="breadcrumb" className="mb-4">
                <ol
                  className="breadcrumb bg-transparent p-0"
                  style={{ background: "none", marginBottom: 0 }}
                >
                  <li className="breadcrumb-item">
                    <Link to="/" style={{ color: "#007bff" }}>
                      Home
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/service" style={{ color: "#007bff" }}>
                      service
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item active"
                    aria-current="page"
                    style={{ color: "#1a237e" }}
                  >
                    App Development
                  </li>
                </ol>
              </nav>
              <p
                style={{
                  color: "#a0aec0",
                  fontSize: "14px",
                  letterSpacing: "1px",
                }}
              >
                CASE STUDY
              </p>
              <h2
                style={{
                  fontSize: "42px",
                  fontWeight: "bold",
                  lineHeight: "1.2",
                  color: "#1a237e",
                }}
              >
                App Development Services <br /> Tailored for Impact
              </h2>
              <p
                className="mt-4"
                style={{ fontSize: "18px", color: "#2d3748" }}
              >
                Empower your business with our full-cycle Android app
                development solutions. From intuitive design to scalable
                deployment – we build for performance and growth.
              </p>
              <Link to="/contactus">
                <Button
                  color="primary"
                  style={{
                    marginTop: "2rem",
                    backgroundColor: "#007bff",
                    border: "none",
                    padding: "10px 24px",
                    fontSize: "16px",
                    fontWeight: "500",
                    borderRadius: "8px",
                  }}
                >
                  Book an Appointment
                </Button>
              </Link>
            </Col>

            {/* Right Side: Hero Image */}
            <Col md="6" className="text-center">
              <img
                src={img2}
                alt="App Development Process"
                style={{
                  maxWidth: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                }}
              />
            </Col>
          </Row>
        </Narrow>
      </div>

      <Narrow>
        <div
          className="py-24 text-white mt-5"
          style={{
            background: "white",
            width: "100vw",
            marginLeft: "calc(-50vw + 50%)",
            marginRight: "calc(-50vw + 50%)",
          }}
        >
          <Narrow>
            <h2
              className="text-4xl font-bold text-center mb-12"
              style={{ color: "#1a237e" }}
            >
              Our Range of Android App Development Services
            </h2>
            <p
              className="text-center mb-16 text-lg"
              style={{ color: "#1a237e" }}
            >
              We offer Android app developments across various platforms. Have
              something unique in mind? Let's get started!
            </p>
            <Row>
              {services.map((item, index) => (
                <Col md="4" className="mb-5" key={index}>
                  <div className="service-card">
                    <div className="service-icon">
                      <i className={item.icon}></i>
                    </div>
                    <h4 className="text-xl font-semibold mb-2 text-center">
                      {item.title}
                    </h4>
                    <p style={{ fontSize: "14px", color: "#1a237e" }}>
                      {item.desc}
                    </p>
                  </div>
                </Col>
              ))}
            </Row>
          </Narrow>
        </div>
      </Narrow>
      <div className="py-24 max-xl:py-5 px-3 background">
        <Narrow>
          <Row>
            <Col md="4" className="mt-28 max-xl:mt-5">
              <p className="home1para">PROJECTS</p>
              <h2 className="empowermentHeading">
                Showcase of our recognized work.
              </h2>
              <p className="homepara3">
                Our collaborative approach ensures that we truly understand our
                clients unique requirements and challenges.
              </p>
              <div className=" mt-5">
                <div
                  style={{ display: "flex", gap: "1vw", alignItems: "center" }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      viewBox="0 0 512 512"
                      fill="blue"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                  <p style={{ fontSize: "20px" }}>
                    Managed Services and Products
                  </p>
                </div>
                <div
                  style={{ display: "flex", gap: "1vw", alignItems: "center" }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      viewBox="0 0 512 512"
                      fill="blue"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                  <p style={{ fontSize: "20px" }}>
                    Flexibility and Adaptability
                  </p>
                </div>
                <div
                  style={{ display: "flex", gap: "1vw", alignItems: "center" }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      viewBox="0 0 512 512"
                      fill="blue"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                  <p style={{ fontSize: "20px" }}>Competitive Advantage</p>
                </div>
              </div>
            </Col>
            <Col
              md="8"
              style={{
                padding: "3rem",
              }}
            >
              <ShowcaseSlider />
            </Col>
          </Row>
        </Narrow>
        <div className="assitance py-28 mb-32 ">
          <Row>
            <Col className="assistanceimg">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-4.png"
                alt=""
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-3.png"
                alt=""
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-2.png"
                alt=""
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-1.png"
                alt=""
              />
            </Col>
          </Row>

          <div>
            <div className="assitanttext w-9/12 mx-auto text-center ">
              <h2 className="text-4xl font-bold ">
                Need any further assitance?
              </h2>
              <h3 className="text-2xl text-gray-200  ">
                Feel free to reach out for any inquiries or assistance.
              </h3>
              <Link to="/contactus">
                <Button className="bookappoinmentnow">
                  Book an appointment now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
