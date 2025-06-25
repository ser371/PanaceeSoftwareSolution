import { React, useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "reactstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Slider from "../Components/Slider";
import Getintouch from "../Components/Getintouch";
import Narrow from "../Components/Common/Narrow";
import img from "../Images/VISION-icon.jpg";

function About() {
  useEffect(() => {
    const fadeInOnScroll = (selector) => {
      const elements = document.querySelectorAll(selector);
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("fade-in", entry.isIntersecting);
        });
      });
      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    };

    fadeInOnScroll(".fade-section");
  }, []);

  return (
    <>
      <header className="about-us py-24 mb-20 text-white">
        <Container className="text-center block bg-grey-300 rounded-3xl shadow-lg p-10 fade-section">
          <h1 className="text-6xl font-extrabold mb-4">About Us</h1>
          <p className="text-xl font-bold max-w-2xl mx-auto">
            Driving innovation to shape a customer-centric future through
            technology.
          </p>
        </Container>
      </header>

      <main className="bg-white text-gray-900">
        <section className="py-5">
          <Container>
            <div className="text-center mb-16 fade-section">
              <h2 className="text-5xl font-bold mb-4">
                We are your Tech Partner
              </h2>
              <p className="text-lg max-w-3xl mx-auto">
                At Panacea, we harness the power of innovation to develop
                tailor-made solutions that revolutionize business operations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 fade-section">
              {[
                {
                  title: "300+",
                  sub: "Projects",
                  desc: "Delivered across the globe",
                },
                {
                  title: "100%",
                  sub: "Satisfaction",
                  desc: "Clients love our work",
                },
                {
                  title: "300+",
                  sub: "Customers",
                  desc: "Trusted by global enterprises",
                },
                {
                  title: "Since 2020",
                  sub: "Established",
                  desc: "Steady and strong growth",
                },
              ].map((item, i) => (
                <Card
                  key={i}
                  className="p-8 text-center shadow-xl rounded-3xl hover:scale-105 transition-transform fade-section"
                >
                  <h3 className="text-4xl font-extrabold text-[#1351D8]">
                    {item.title}
                  </h3>
                  <p className="text-lg font-semibold mt-2">{item.sub}</p>
                  <p className="text-gray-600 mt-1">{item.desc}</p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="bg-[#F0F4FA] py-20 fade-section">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">Our Core Services</h2>
              <p className="text-lg">
                Empowering your business with top-tier technology services
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                "Custom Development",
                "Managed IT Services",
                "AI & Automation",
                "Cloud Solutions",
                "24/7 Support",
                "Consulting",
              ].map((item, i) => (
                <Card
                  key={i}
                  className="p-6 bg-white border rounded-2xl shadow-md hover:shadow-xl transition duration-300"
                >
                  <h4 className="text-xl font-semibold text-[#0e3ea1] mb-2">
                    {item}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/about-service-3.png"
                alt="About service visual"
                className="rounded-2xl shadow-lg fade-section"
              />
              <div className="fade-section">
                <h2 className="text-4xl font-bold mb-4">Why Choose Panacea?</h2>
                <p className="text-lg text-gray-700 mb-4">
                  We build scalable, intelligent systems with human-centered
                  designs to help you excel in a dynamic marketplace.
                </p>
                <ul className="space-y-2">
                  {[
                    "Agile Development",
                    "Custom Solutions",
                    "Reliable Support",
                  ].map((point, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <img
                        src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png"
                        alt="check icon"
                        className="w-6"
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-[#0e0e0e] text-white py-20">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 fade-section items-center">
              <div>
                <h2 className="text-4xl font-bold mb-4">Our Vision</h2>
                <p className="text-gray-300 mb-4">
                  To enable businesses to thrive through customer-centric
                  digital transformation and intelligent systems.
                </p>
                <p className="text-gray-400">
                  At{" "}
                  <span className="text-white font-semibold">
                    Panacea Software Solutions
                  </span>
                  , we believe in the power of innovation to simplify and
                  amplify business processes. Our mission is to deliver
                  cutting-edge software that helps clients unlock their full
                  potential. With a team of passionate developers, strategists,
                  and designers, we craft tailored digital solutions that drive
                  measurable results. Whether it's custom application
                  development, cloud integration, or intelligent automation,
                  Panacea ensures technology works for you—seamlessly and
                  efficiently. We aim to be a long-term technology partner in
                  your growth journey.
                </p>
              </div>
              <img
                src={img}
                alt="Vision Icon"
                className="rounded-2xl shadow-xl"
              />
            </div>
          </Container>
        </section>

        <section className="py-20 fade-section">
          <Container>
            <Slider />
          </Container>
        </section>

        <section className="bg-[#F9FAFB] text-center py-20 fade-section">
          <h2 className="text-4xl font-bold mb-4">Need More Info?</h2>
          <p className="text-xl mb-8">
            Reach out to us for a custom consultation.
          </p>
          <Link to="/contactus">
            <Button className="bg-[#1351D8] py-3 px-6 text-white font-semibold rounded-full">
              Contact Us
            </Button>
          </Link>
        </section>

        <Getintouch />
      </main>
    </>
  );
}

export default About;
