import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "reactstrap";
import Narrow from "../Components/Common/Narrow";
import { Helmet } from "react-helmet";
import Hotel from "../Images/crm.png";
import img1 from "../Images/what-does-it-mean-to-customer-centric.webp";
import img2 from "../Images/preview.png";
import img3 from "../Images/lead generation.webp";

export default function CRM() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("fade-in", entry.isIntersecting);
      });
    });
    const elements = document.querySelectorAll(".professionalservicescard");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main>
      {/* --- SEO Meta Tags --- */}
      {/* <Helmet>
        <title>CRM Software Solutions | Panacee Infosolutions</title>
        <meta
          name="description"
          content="Discover CRM solutions that revolutionize customer relationship management and streamline business operations."
        />
        <meta name="robots" content="index, follow" />
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://www.panaceeinfosolutions.com/crm" />
      </Helmet> */}
      {/* --- Header --- */}
      {/* <header className="pt-5 max-xl:mt-3">
        <Narrow>
          <Row>
            <Col>
              <h1 className="text-5xl font-bold">CRM Solutions</h1>
            </Col>
          </Row>
        </Narrow>
      </header> */}
      <Narrow>
        <div
          className={`home1  mb-10 max-xl:mt-0 max-xl:mb-20 mt-32 ${
            isVisible ? "fade-in" : ""
          }`}
        >
          <Row>
            <Col md="6" className="">
              <p className="home1para"></p>
              <h1 className="homepara2">
                CRM Solutions Seamless IT for your business, boosting your
                growth.
              </h1>
              <p className="homepara3">
                We provide the expertise and support to propel your business
                forward in the digital landscape.
              </p>
              <Row className="btnsectionrow" style={{ marginTop: "35px" }}>
                <Col className="btnsection">
                  <Link to="/contactus">
                    <Button className="contactusbtnhome">Contact Us</Button>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <div className="image-container">
                <h2 className="image-title">CRM SOFTWARE SOLUTIONS</h2>
                <img src={Hotel} alt="Hotel Management" className="fontimg" />
              </div>
            </Col>
          </Row>
        </div>
      </Narrow>
      {/* --- Core Introduction --- */}
      <section className="mb-32 pt-5">
        <Narrow>
          <article className="background p-20 max-xl:p-3 rounded-lg">
            <div className="flex max-xl:flex-col gap-14">
              <div className="w-1/2 max-xl:w-full">
                <h2 className="text-4xl font-bold">Engine of Progress</h2>
                <p className="mt-3 text-lg">
                  At Panacee, we empower organizations with tools to build
                  strong customer connections, streamline operations, and grow.
                  Our team brings cutting-edge CRM development, customer
                  insights, and consultancy expertise to the table.
                </p>
              </div>
              <div className="flex w-1/2 max-xl:w-full gap-2">
                <img
                  src={img2}
                  alt="CRM user dashboard"
                  className="w-1/2 rounded"
                />
                <img
                  src={img3}
                  alt="Lead generation system"
                  className="w-1/2 rounded"
                />
              </div>
            </div>
          </article>
        </Narrow>
      </section>
      {/* --- Features Section --- */}
      <section className="bg-white py-18">
        <Narrow>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Section */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-6">
                Transform Your Travel Business with{" "}
                <span className="text-blue-600">CRM Software</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Panacee’s cloud-powered CRM streamlines your travel business
                with a centralized, smart platform built for tour operators and
                agents.
              </p>

              <ul className="space-y-3 text-gray-600 text-base pl-5 list-disc">
                <li>Automate lead tracking and follow-ups</li>
                <li>Build custom itineraries effortlessly</li>
                <li>Optimize your sales funnel from one dashboard</li>
                <li>Boost customer satisfaction and retention</li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="w-full">
              <div className="relative rounded-xl overflow-hidden shadow-xl">
                <img
                  src={img1}
                  alt="CRM system for travel businesses"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </Narrow>
      </section>

      {/* --- Additional CRM Feature Highlights --- */}
      <section className="bg-white py-20">
        <Narrow>
          <header className="text-center mb-14 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Key CRM Features
            </h2>
            <p className="text-lg text-gray-600">
              Explore how our intelligent CRM system enhances customer
              engagement, streamlines sales processes, and drives measurable
              business growth.
            </p>
          </header>

          <div>
            {/* Modal Overlay */}
            <div
              id="featureModal"
              className="fixed inset-0 bg-black bg-opacity-50 z-50 items-center justify-center hidden"
              onClick={(e) => {
                if (e.target.id === "featureModal") {
                  e.currentTarget.classList.add("hidden");
                }
              }}
            >
              <div className="bg-white max-w-md w-full rounded-xl p-6 shadow-lg text-center relative">
                <button
                  onClick={() =>
                    document
                      .getElementById("featureModal")
                      .classList.add("hidden")
                  }
                  className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-xl"
                >
                  &times;
                </button>
                <img
                  id="modalIcon"
                  alt="Feature Icon"
                  className="w-14 h-14 mx-auto mb-4"
                />
                <h3
                  id="modalTitle"
                  className="text-2xl font-bold text-gray-800 mb-2"
                ></h3>
                <p id="modalDesc" className="text-gray-600 text-base"></p>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Lead Management",
                  desc: "Capture and centralize leads from platforms like Facebook, Instagram, and Google Sheets for effective nurturing.",
                  icon: "https://img.icons8.com/ios-filled/50/supplier.png",
                  alt: "Lead management icon",
                },
                {
                  title: "Follow-Ups",
                  desc: "Never miss an inquiry with automated reminders and smart query tracking for better customer relationships.",
                  icon: "https://img.icons8.com/ios-filled/50/time-machine.png",
                  alt: "Follow-up icon",
                },
                {
                  title: "Quotation Builder",
                  desc: "Easily generate professional quotations with tax and pricing automation built-in.",
                  icon: "https://img.icons8.com/ios-filled/50/invoice.png",
                  alt: "Quotation builder icon",
                },
                {
                  title: "Masters Management",
                  desc: "Streamline your operations with master-level control over destinations, hotels, activities, and transfers.",
                  icon: "https://img.icons8.com/ios-filled/50/settings.png",
                  alt: "Masters management icon",
                },
                {
                  title: "Supplier Communication",
                  desc: "Facilitate seamless collaboration and negotiations through integrated supplier chat and notifications.",
                  icon: "https://img.icons8.com/ios-filled/50/supplier.png",
                  alt: "Supplier communication icon",
                },
                {
                  title: "Invoices & Vouchers",
                  desc: "Easily monitor staff invoices, issue travel vouchers, and manage compliance in one dashboard.",
                  icon: "https://img.icons8.com/ios-filled/50/document.png",
                  alt: "Invoice and voucher icon",
                },
              ].map((item, idx) => (
                <article
                  key={idx}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-100 p-6 text-center"
                >
                  <img
                    src={item.icon}
                    alt={item.alt}
                    className="w-12 h-12 mx-auto mb-4 cursor-pointer"
                    loading="lazy"
                    onClick={() => {
                      document.getElementById("modalIcon").src = item.icon;
                      document.getElementById("modalIcon").alt = item.alt;
                      document.getElementById("modalTitle").textContent =
                        item.title;
                      document.getElementById("modalDesc").textContent =
                        item.desc;
                      document
                        .getElementById("featureModal")
                        .classList.remove("hidden");
                    }}
                  />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </Narrow>
      </section>
    </main>
  );
}
