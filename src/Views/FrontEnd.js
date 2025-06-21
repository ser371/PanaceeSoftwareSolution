import React, { useState, useEffect } from "react";
import Narrow from "../Components/Common/Narrow";
import { Link } from "react-router-dom";
import img from "../Images/frontend.png";

export default function FrontEnd() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="text-gray-800 font-sans">
      {/* Hero Section */}
      <header className="bg-gradient-to-b from-blue-800 to-blue-600 text-white py-28 relative overflow-hidden">
        <Narrow>
          <section className="text-center max-w-4xl mx-auto">
            <span className="inline-block bg-white text-blue-800 text-sm font-semibold px-4 py-1 rounded-full mb-4 shadow-md">
              Front-End Development
            </span>
            <h1 className="text-5xl font-bold mb-6 leading-tight max-md:text-3xl">
              Cutting-Edge Frontend Development Services
            </h1>
            <p className="text-xl opacity-90 max-md:px-2">
              Transforming Your Vision into Seamless, Engaging User Experiences
            </p>
            <Link
              to="/contactus"
              aria-label="Book an appointment"
              className="inline-block mt-10"
            >
              <button className="bg-white text-blue-800 px-6 py-3 text-lg rounded-full font-semibold hover:bg-blue-100 transition-all duration-300">
                Book an Appointment
              </button>
            </Link>
          </section>
        </Narrow>
      </header>

      {/* Introduction */}
      <section className="bg-white py-24">
        <Narrow>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Introduction</h2>
              <p className="text-lg leading-8 text-gray-600">
                At Panacee Infosolutions, we craft elegant, responsive, and
                high-performing user interfaces. From mobile to desktop, we
                deliver visually compelling and functional frontend solutions
                that match your brand identity and business goals.
              </p>
            </div>
            <div>
              <img
                src={img}
                alt="Frontend illustration"
                className="rounded-xl shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </Narrow>
      </section>

      {/* Key Benefits */}
      <section className="bg-gray-50 py-28">
        <Narrow>
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              {
                title: "Custom Designs",
                desc: "Tailored to your brand’s unique voice and user experience goals.",
              },
              {
                title: "Responsive Layouts",
                desc: "Perfect viewing experience across devices, from phones to desktops.",
              },
              {
                title: "Cutting-Edge Tech",
                desc: "React, Vue, Angular—modern frameworks for high-performance apps.",
              },
              {
                title: "User-Centric",
                desc: "Prioritizing usability and intuitive interactions in every build.",
              },
              {
                title: "Performance Optimized",
                desc: "Fast load times, smooth animations, minimal resource usage.",
              },
              {
                title: "SEO-Friendly Code",
                desc: "Semantic, clean code that supports discoverability and rankings.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white shadow-md rounded-xl hover:shadow-xl transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </Narrow>
      </section>

      {/* Development Process */}
      <section className="py-28 bg-white border-t border-gray-200">
        <Narrow>
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our Frontend Process
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Discovery & Planning",
                desc: "Understanding your goals, audience, and requirements through research and planning.",
                icon: "🧭",
              },
              {
                title: "Wireframing & Prototyping",
                desc: "Sketching layouts and building interactive wireframes to shape the user journey.",
                icon: "📝",
              },
              {
                title: "Visual Design",
                desc: "Creating modern, brand-aligned visuals that enhance user engagement.",
                icon: "🎨",
              },
              {
                title: "Frontend Development",
                desc: "Transforming designs into fast, responsive, and scalable code.",
                icon: "💻",
              },
              {
                title: "Quality Assurance",
                desc: "Rigorous cross-browser/device testing to ensure perfection across the board.",
                icon: "✅",
              },
              {
                title: "Launch & Support",
                desc: "Smooth go-live with post-launch maintenance and support.",
                icon: "🚀",
              },
            ].map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 p-2">
                {/* Simple icon badge */}
                <div className="w-12 h-12 flex items-center justify-center text-2xl bg-gray-100 rounded-full text-gray-800">
                  {step.icon}
                </div>

                {/* Text content */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Narrow>
      </section>

      {/* Why We're Better */}
      <section className="py-24 bg-gray-900 text-white">
        <Narrow>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/about-service-3.png"
              alt="Why we’re better"
              className="rounded-xl shadow-lg"
              loading="lazy"
            />
            <div>
              <h2 className="text-4xl font-bold mb-6">Why We Stand Out</h2>
              <p className="text-lg mb-6">
                We don't deliver cookie-cutter solutions. Every detail is
                customized to drive your growth and match your unique needs. Our
                frontend strategies prioritize long-term success and
                adaptability.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <img
                    src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                    alt="check"
                    className="w-6 h-6"
                  />
                  <span className="text-lg">
                    PPD (Plan, Prototype, Deliver) Process
                  </span>
                </li>
                <li className="flex items-center gap-4">
                  <img
                    src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                    alt="check"
                    className="w-6 h-6"
                  />
                  <span className="text-lg">Fast & Reliable Communication</span>
                </li>
              </ul>
            </div>
          </div>
        </Narrow>
      </section>
    </main>
  );
}
