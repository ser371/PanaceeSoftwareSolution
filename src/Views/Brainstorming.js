import React from "react";
import Narrow from "../Components/Common/Narrow";
import { useState, useEffect } from "react";
import Getintouch from "../Components/Getintouch";
import { Link } from "react-router-dom";
import img from "../Images/brainstorming.webp"
import img2 from "../Images/brainstorming-techniques.png";

export default function Brainstorming() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className="darkbg py-1 mb-32">
        <Narrow>
          <div className="mb-36 mt-24 max-xl:mt-3">
            <div>
              <div className="firstbtnsec ">
                <span className="abouta1 bg-white">Brainstorming</span>
              </div>
            </div>
            <div
              className={`header ${isVisible ? "fade-in" : ""}`}
              style={{ marginTop: "10px" }}
            >
              <div>
                <p className="aboutheader1 max-xl:text-3xl font-semibold text-white">
                Brainstorming Services
                </p>
                <p className="aboutheader1 max-xl:text-3xl font-semibold"> </p>

                <p className="aboutheader2 max-xl:px-3 text-2xl text-white leading-10">
                Ignite Innovation with Collaborative Brainstorming Sessions
                </p>
              </div>
              <div className="bg-blue-600 w-1/6 max-xl:w-1/2 mx-auto text-center rounded-lg mt-10">
                <Link to="/contactus">
                  <button className="text-white p-3">
                    Book an appointment now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <Narrow>
        <img
          src={img}
          alt=""
          className="mb-32 w-full rounded-xl"
        />
      </Narrow>

      <Narrow>
        <div className="background rounded-lg p-32 max-xl:p-3">
          <h1 className="text-5xl font-bold mb-5">Introduction</h1>
          <p className="text-2xl leading-10 text-gray-700">
          At Panacee Infosolutions, we believe that great ideas are the cornerstone of exceptional software and web solutions. Our brainstorming services are designed to unlock creativity, foster collaboration, and generate innovative ideas that address your unique business challenges. Join us to explore new possibilities and create groundbreaking solutions that propel your business forward.
          </p>

          <img src={img2} className="mt-10 w-full rounded-xl" alt="" />

          <h1 className="text-5xl mt-5 font-semibold">
          Why Choose Our Brainstorming Services?
          </h1>

          <h1 className="text-3xl font-semibold mt-20">Expert Facilitation</h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          Our experienced facilitators guide brainstorming sessions with structured techniques to ensure productive and focused discussions. We help you navigate through creative blocks and keep the momentum going.
          </p>

          <h1 className="text-3xl font-semibold mt-20">
          Collaborative Environment
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          We create an open and inclusive environment where all ideas are valued. Our sessions encourage team participation and leverage diverse perspectives to spark innovation.
          </p>
          <h1 className="text-3xl font-semibold mt-20">
          Tailored Approach
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          Every brainstorming session is customized to meet your specific needs and objectives. Whether you’re looking to develop a new product, improve an existing process, or solve a complex problem, we tailor our approach to fit your goals.
          </p>
          <h1 className="text-3xl font-semibold mt-20">
          Diverse Techniques
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          Our team employs a variety of brainstorming techniques, including mind mapping, SWOT analysis, and design thinking, to explore different angles and uncover hidden opportunities.
          </p>
          <h1 className="text-3xl font-semibold mt-20">
          Actionable Outcomes
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          We don’t just generate ideas; we help you prioritize and develop actionable plans. Our sessions conclude with clear, implementable strategies that you can put into practice immediately.
          </p>

          <h1 className="text-5xl mt-20 font-semibold">
          Our Brainstorming Process
          </h1>
          <h1 className="text-3xl font-semibold mt-20">Initial Consultation</h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          We start by understanding your business, objectives, and the specific challenges you’re facing. This helps us tailor the brainstorming session to your needs.
          </p>

          <h1 className="text-3xl font-semibold mt-20">
          Preparation
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          We gather relevant information and set the agenda for the session. This includes selecting appropriate brainstorming techniques and preparing any necessary materials
          </p>
          <h1 className="text-3xl font-semibold mt-20">
          Facilitated Session
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          During the session, our facilitator guides the discussion, encourages participation, and ensures the focus remains on generating innovative ideas. We use various tools and techniques to stimulate creative thinking.
          </p>
          <h1 className="text-3xl font-semibold mt-20">
          Idea Evaluation
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          Post-session, we help you evaluate and refine the ideas generated. We prioritize the best concepts based on feasibility, impact, and alignment with your business goals.
          </p>
          <h1 className="text-3xl font-semibold mt-20">
          Implementation Planning
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          We assist in developing a roadmap to implement the selected ideas. This includes creating actionable steps, assigning responsibilities, and setting timelines.
          </p>
        </div>
      </Narrow>

      <div className="whybetter py-36 max-xl:p-0 mt-32 mb-32">
        <Narrow>
          <div>
            <div className="flex max-xl:flex-col">
              <div className="whybetterimg w-1/2 max-xl:w-full">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/about-service-3.png"
                  alt=""
                  className="bettertanother h-full"
                />
              </div>
              <div className="whybettertext w-1/2 max-xl:w-full">
                <h1 className="text-5xl font-bold">
                  Why our services are better than others?
                </h1>
                <h5 className="text-xl text-gray-200">
                  We don't believe in a one-size-fit-all approach. Our services
                  are carefully customized to suit your specific need, ensuring
                  you to achieve your goals.
                </h5>
                <h5 className="text-xl text-gray-200">
                  We believe in delivering value that extends your beyond the
                  immediate project. Our services are designed to provide a
                  long-term benefits.
                </h5>

                <div>
                  <div className="flex max-xl:flex-col gap-10">
                    <div className="tasksign">
                      <img
                        src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                        alt=""
                        className="righticonimagesize w-10"
                      />
                      <h5 className="text-xl my-auto text-gray-200">
                        PPD Development{" "}
                      </h5>
                    </div>

                    <div className="tasksign">
                      <img
                        src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                        alt=""
                        className="righticonimagesize w-10"
                      />
                      <h5 className="text-xl my-auto text-gray-200">
                        Quick Response{" "}
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <Getintouch />
    </div>
  );
}
