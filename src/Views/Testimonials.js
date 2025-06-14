import React, { useState, useEffect } from "react";
import Narrow from "../Components/Common/Narrow";
import { Row, Col } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialComponent = () => {
  const testimonials = [
    {
      quote:
        "Ammet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
      name: "Jenny Wilson",
      title: "Project Manager at Microsoft",
    },
    {
      quote:
        "Ammet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
      name: "Robert Fox",
      title: "Founder at Brain.co",
    },
    {
      quote:
        "Ammet minim mollit non deserunt ullam co est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.",
      name: "Kristin Watson",
      title: "UX Designer at Google",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-8 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mb-12">
        Trusted by <span className="text-blue-500">30k+</span> world class
        companies & design teams
      </h1>
      <div className="max-w-5xl bg-sky-50 w-full">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className=" p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-center mb-4">
                <img
                  src={`https://i.pravatar.cc/150?img=${index + 1}`}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
              <h2 className="font-bold text-lg">{testimonial.name}</h2>
              <p className="text-gray-500 text-sm">{testimonial.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const isLargeScreen = () => window.innerWidth > 1024;
  const [isLarge, setIsLarge] = useState(isLargeScreen());

  useEffect(() => {
    const handleResize = () => {
      setIsLarge(isLargeScreen());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleIframeClick = (url) => {
    window.open(url, "_blank");
  };

  const cards = [
    {
      title: "Jeevshakti Foundation",
      description:
        "Jeevshakti Foundation, a charitable trust established in 2017, is committed to the welfare of stray animals in Delhi.",
      url: "https://www.jeevshakti.in/",
      type: "charitable trust",
    },
    {
      title: "Tripperhub",
      description:
        "Tripperhub is a platform for travel enthusiasts to explore and share their travel experiences.",
      url: "https://tripperhub.com/",
      type: "traveler",
    },
    {
      title: "maplawassociates",
      description: "maplawassociates is a platform for laws enthusiasts.",
      url: "https://maplawassociates.com/",
      type: "judge",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Narrow>
        <div className="pb-5 bg-gray-100 mt-12 max-xl:mt-3">
          <Row>
            <Col className="firstbtnsec pt-5">
              <span className="abouta1">Testimonials</span>
            </Col>
          </Row>
          <Row
            className={`header ${isVisible ? "fade-in" : ""}`}
            style={{ marginTop: "10px" }}
          >
            <Col>
              <p className="text-6xl aboutheader1 text-center max-xl:text-3xl font-semibold">
                Success Stories from Our Clients
              </p>
              <p className="aboutheader2 max-xl:px-3">
                Read the stories of our satisfied customers.
              </p>
            </Col>
          </Row>
        </div>

        <div className="card1 px-48 bg-gray-100 max-xl:px-2 mb-32 py-10">
          <Slider {...settings}>
            {cards.map((card, index) => (
              <div key={index} className={`${isLarge ? "stickycard1" : ""}`}>
                <div className="flex items-center justify-center bg-white p-6 rounded-lg shadow-md max-w-5xl mx-auto">
                  <div className="w-full">
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() => handleIframeClick(card.url)}
                    >
                      <iframe
                        src={card.url}
                        title={card.title}
                        className="w-full h-80 rounded-lg"
                        style={{ border: "none", overflow: "hidden" }}
                        scrolling="no"
                      ></iframe>
                    </div>
                  </div>
                  <div className="w-full p-6">
                    <h2 className="font-bold text-2xl mb-2">{card.title}</h2>
                    <p className="text-gray-600">{card.description}</p>
                    <div className="mt-4">
                      <p className="font-bold">{card.title}</p>
                      <p className="text-gray-500">{card.type}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Narrow>

      <TestimonialComponent />
    </div>
  );
}
