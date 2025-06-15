import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Narrow from "../Components/Common/Narrow";
import { Link } from "react-router-dom";
import img from "../Images/seo.jpeg";

export default function SeoServices() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <main className="bg-gray-50 text-gray-900">
        <header className="bg-gradient-to-r from-blue-800 to-indigo-800 text-white py-24 shadow-xl">
          <Narrow>
            <div className="text-center space-y-6">
              <span className="inline-block px-4 py-2 bg-white text-blue-800 font-semibold rounded-full">
                SEO
              </span>
              <h1 className="text-5xl font-bold leading-tight">SEO Services</h1>
              <p className="text-xl md:text-2xl max-w-2xl mx-auto">
                Elevate Your Online Presence with Expert SEO Solutions
              </p>
              <Link to="/contactus">
                <button className="mt-6 px-6 py-3 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-100 transition duration-300">
                  Book an Appointment
                </button>
              </Link>
            </div>
          </Narrow>
        </header>

        <article>
          <Narrow>
            <section className="py-24 bg-white text-gray-800">
              {/* Introduction */}
              <div className="max-w-5xl mx-auto text-center mb-20">
                <h2 className="text-5xl font-bold mb-6">
                  SEO Services That Deliver Results
                </h2>
                <p className="text-lg leading-relaxed text-gray-600">
                  At Panacee Infosolutions, we understand that a robust online
                  presence is essential for any business looking to thrive in
                  today's digital landscape. Our dedicated SEO team leverages
                  the latest strategies and tools to improve your website's
                  visibility, drive organic traffic, and boost your search
                  engine rankings.
                </p>
                <img
                  src={img}
                  alt="SEO at Panacee"
                  className="rounded-2xl shadow-xl mt-12 w-full max-w-4xl mx-auto"
                />
              </div>

              {/* Why Choose Our SEO Services */}
              <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">
                  Why Choose Our SEO Services?
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                  {[
                    {
                      title: "Comprehensive SEO Audits",
                      desc: "We identify technical issues, content gaps, and on-page opportunities with detailed reports.",
                    },
                    {
                      title: "Keyword Research and Strategy",
                      desc: "Focused research on impactful keywords aligned with your audience’s intent and buying journey.",
                    },
                    {
                      title: "On-Page Optimization",
                      desc: "Optimize content, tags, and structure for better search visibility and usability.",
                    },
                    {
                      title: "Technical SEO",
                      desc: "Resolve technical issues, improve site speed, and enhance mobile responsiveness.",
                    },
                    {
                      title: "Content Creation and Optimization",
                      desc: "Create relevant and valuable content that speaks to both search engines and users.",
                    },
                    {
                      title: "Link Building",
                      desc: "Gain high-quality backlinks from reputable domains to improve domain authority.",
                    },
                    {
                      title: "Local SEO",
                      desc: "Boost visibility for location-based searches and enhance your Google My Business profile.",
                    },
                    {
                      title: "Analytics and Reporting",
                      desc: "Transparent and insightful reporting with actionable recommendations.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 p-6 rounded-xl shadow-md transition hover:shadow-lg"
                    >
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-700">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our SEO Process */}
              <div className="max-w-6xl mx-auto mt-28">
                <h2 className="text-4xl font-bold text-center mb-16">
                  Our SEO Process
                </h2>
                <div className="space-y-12">
                  {[
                    {
                      title: "Discovery and Analysis",
                      desc: "Understand your brand and current SEO status through competitor analysis and goal setting.",
                    },
                    {
                      title: "Strategy Development",
                      desc: "Tailor a roadmap of SEO actions with short- and long-term targets.",
                    },
                    {
                      title: "Implementation",
                      desc: "Our SEO experts get to work, aligning your website’s elements with the crafted strategy.",
                    },
                    {
                      title: "Monitoring and Optimization",
                      desc: "Ongoing optimization to maintain and improve results.",
                    },
                    {
                      title: "Reporting and Communication",
                      desc: "Detailed, easy-to-understand performance reports shared regularly.",
                    },
                    {
                      title: "Launch and Support",
                      desc: "Continue refining post-launch and provide support for long-term success.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-blue-600 pl-6"
                    >
                      <h3 className="text-2xl font-semibold mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 text-lg">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </Narrow>
        </article>

        <section className="py-24 bg-gray-900 text-white">
          <Narrow>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/about-service-3.png"
                alt="Why Choose Us"
                className="rounded-xl shadow-md"
              />
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Why Our Services Stand Out
                </h2>
                <p className="text-lg text-white-700 mb-4">
                  We don’t believe in a one-size-fits-all approach. Every
                  strategy is custom-built to meet your business needs and drive
                  real results.
                </p>
                <p className="text-lg text-white-700 mb-6">
                  Our focus is on long-term growth, not just short-term wins.
                  Expect transparency, results, and dedicated support every step
                  of the way.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <img
                      src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png"
                      alt="Check"
                      className="w-6 h-6 mr-3"
                    />
                    <span className="text-white-700">
                      Tailored SEO Strategies
                    </span>
                  </li>
                  <li className="flex items-center">
                    <img
                      src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png"
                      alt="Check"
                      className="w-6 h-6 mr-3"
                    />
                    <span className="text-white-700">
                      Prompt Communication & Support
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Narrow>
        </section>
      </main>
    </>
  );
}
