import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Narrow from "../Components/Common/Narrow";
import img from "../Images/brainstorming.webp";
import img2 from "../Images/brainstorming-techniques.png";

export default function Brainstorming() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="text-gray-800">
      {/* HEADER */}
      <header className="darkbg py-24 mb-20 text-white">
        <Narrow>
          <div className="text-center space-y-6 animate-fade-in">
            <span className="inline-block bg-white text-blue-700 font-semibold px-4 py-1 rounded-full shadow-md text-sm">
              Brainstorming
            </span>
            <h1 className="text-5xl font-bold">Brainstorming Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Ignite innovation with collaborative brainstorming sessions.
            </p>
            <Link to="/contactus">
              <button className="mt-6 px-6 py-3 rounded-lg bg-white text-blue-700 font-medium hover:bg-blue-100 transition">
                Book an Appointment
              </button>
            </Link>
          </div>
        </Narrow>
      </header>

      {/* INTRO IMAGE */}

      {/* INTRO & FEATURES */}

      {/* SERVICE FEATURES */}
      <section className="py-10 bg-white">
        <Narrow>
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Our Brainstorming Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {[
              {
                title: "Expert Facilitation",
                desc: "Guided by seasoned facilitators using proven techniques.",
              },
              {
                title: "Collaborative Environment",
                desc: "We promote open dialogue and inclusivity to spark innovation.",
              },
              {
                title: "Tailored Approach",
                desc: "Custom-fit sessions aligned with your goals and vision.",
              },
              {
                title: "Diverse Techniques",
                desc: "From mind mapping to design thinking – we use it all.",
              },
              // {
              //   title: 'Actionable Outcomes',
              //   desc: 'Our sessions yield real strategies and prioritized plans.',
              // },
            ].map(({ title, desc }, idx) => (
              <div
                key={idx}
                className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </Narrow>
      </section>

      {/* PROCESS */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
        <Narrow>
          <h2 className="text-4xl font-bold text-center mb-20 text-gray-900">
            Our Brainstorming Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {[
              {
                title: "Initial Consultation",
                desc: "Understanding your business challenges and vision.",
              },
              {
                title: "Preparation",
                desc: "Agenda-setting and selection of the right brainstorming tools.",
              },
              {
                title: "Facilitated Session",
                desc: "Live session led by experts to generate a flood of ideas.",
              },
              {
                title: "Idea Evaluation",
                desc: "We assess ideas for impact and feasibility.",
              },
              // {
              //   title: 'Implementation Planning',
              //   desc: 'Final strategy map with responsibilities and timelines.',
              // },
            ].map(({ title, desc }, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-8 hover:shadow-xl transition-all duration-300 group relative"
              >
                <div className="absolute -top-5 -left-5">
                  <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white font-bold rounded-full shadow-lg">
                    {idx + 1}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4 group-hover:text-blue-600">
                  {title}
                </h3>
                <p className="text-gray-700 mt-3 text-base leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </Narrow>
      </section>

      {/* WHY BETTER */}
      <section className="py-24 bg-gray-900 text-white">
        <Narrow>
          <div className="flex max-xl:flex-col gap-16 items-center">
            <div className="w-full xl:w-1/2">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/about-service-3.png"
                alt="Superior service visual"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="w-full xl:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold">Why our services stand out</h2>
              <p className="text-lg">
                Our custom-fit solutions are designed for long-term impact, not
                just immediate results.
              </p>
              <div className="space-y-4">
                {["PPD Development", "Quick Response"].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    <img
                      src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                      alt="Icons"
                      className="w-6 h-6"
                    />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Narrow>
      </section>
    </main>
  );
}
