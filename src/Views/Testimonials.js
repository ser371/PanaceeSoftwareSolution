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
        "Panacee Software Company transformed our vision into a powerful website that truly represents Jeev Shakti Foundation’s mission. Their team was professional, responsive, and creative throughout. The result is a beautiful, user-friendly platform that has boosted our outreach and impact. We highly recommend Panacee for any web development needs!",
      name: "Jeev Shakti",
      title: "Team Jeev Shakti Foundation",
    },
    {
      quote:
        "Panacee Software Company brought Tripper Hub’s global vision to life with a sleek, modern, and high-converting website. From showcasing exotic world tours to simplifying bookings, everything feels effortless. Their design boosted our credibility and customer trust instantly. A top-tier team for anyone in the travel industry!",
      name: "Tripper Hub",
      title: "India’s Leading Global Travel Planner",
    },
    {
      quote:
        "Panacee Software Company delivered an outstanding website for Map Law Associates. Their team understood our unique legal brand, crafting a clean, professional, and highly functional site. The intuitive design, clear practice-area layouts, and streamlined client-intake process have significantly increased our credibility and client inquiries. Truly exceptional web development!",
      name: "Map Law Associates",
      title: "Expert Legal Advisors",
    },
    {
      quote:
        "Panacee Software Company truly encapsulated Jeev Shakti’s compassionate mission in their recent website redesign. The fresh, responsive layout—with seamless navigation, vivid rescue stories, and clear donation pathways—has significantly enhanced our reach and engagement. Their dedication, expertise, and attention to detail made the process smooth and impactful. Highly recommended!",
      name: "Jeev Shakti Foundation",
      title: "Animal Rescue & Rehabilitation Non‑Profit",
    },
    {
      quote:
        "Panacee Software Company transformed our vision into a vibrant, user-friendly website for Sonia Narang Diet Clinic. Their responsive design, clear program breakdowns, and easy appointment booking have made a huge difference. The site feels trustworthy, professional, and welcoming—exactly what our clients need. A perfect partner for health & wellness businesses!",
      name: "Sonia Narang Diet Clinic",
      title: "Leading Nutrition & Diet Therapy Practice",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnFocus: true,
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
      title: "Jeev Shakti Foundation",
      description:
        "Jeev Shakti Foundation, established in 2017, is a Delhi-based charitable trust dedicated to rescuing, rehabilitating, and caring for stray and injured animals. Through veterinary services, adoption drives, and public awareness programs, the foundation strives to create a more compassionate society for animals.",
      url: "https://www.jeevshakti.in/",
      type: "Animal Welfare NGO",
    },
    {
      title: "Tripper Hub",
      description:
        "Tripper Hub is a global travel planning platform offering curated domestic and international tour packages. With an emphasis on convenience, 24/7 support, and expert itineraries, it’s a one-stop destination for travelers seeking memorable journeys worldwide.",
      url: "https://tripperhub.com/",
      type: "Travel & Tourism Company",
    },
    {
      title: "Map Law Associates",
      description:
        "Map Law Associates is a full-service legal consultancy firm specializing in civil, criminal, corporate, and property law. The firm is known for its ethical practices, timely advice, and tailored legal strategies for individuals and businesses alike.",
      url: "https://maplawassociates.com/",
      type: "Legal Consultancy Firm",
    },
    {
      title: "Sonia Narang Diet Clinic",
      description:
        "Sonia Narang Diet Clinic provides personalized nutrition and diet therapy programs designed to improve health and lifestyle. Led by renowned dietitian Sonia Narang, the clinic offers expert plans for weight management, therapeutic nutrition, and holistic well-being.",
      url: "https://sonianarangdietclinic.trektrail.in/",
      type: "Health & Wellness Clinic",
    },
    {
      title: "Jeev Shakti by AJ Foundation",
      description:
        "Powered by AJ Foundation, this digital platform supports the Jeev Shakti mission by offering online visibility for their animal welfare work. It highlights rescue operations, encourages donations, and connects volunteers with impactful causes to support stray animal care.",
      url: "https://jeevshakti.ajfoundation.co.in/",
      type: "Animal Welfare Platform",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
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

        <div className="card1 px-48 bg-gray-100 max-xl:px-2 py-10">
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
