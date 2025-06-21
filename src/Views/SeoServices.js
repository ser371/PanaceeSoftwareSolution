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
            <section className="py-24 bg-gray-50 text-gray-800">
              {/* Introduction */}
              <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-center">
                <div>
                  <h2 className="text-5xl font-bold leading-tight text-gray-900 mb-6">
                    SEO Services That Deliver Results
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    At{" "}
                    <span className="font-semibold text-blue-700">
                      Panacee Infosolutions
                    </span>
                    , we understand the importance of a strong digital presence.
                    Our expert SEO team leverages advanced strategies and tools
                    to enhance visibility, attract qualified traffic, and
                    improve your search rankings sustainably.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src={img}
                    alt="SEO at Panacee"
                    className="rounded-2xl shadow-xl max-w-full md:max-w-md transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </div>

              {/* Why Choose Our SEO Services */}
              <div className="max-w-7xl mx-auto px-4 md:px-8 mt-28">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                  Why Choose Our SEO Services?
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {[
                    {
                      title: "Comprehensive SEO Audits",
                      desc: "We identify technical issues, content gaps, and on-page opportunities with detailed reports.",
                    },
                    {
                      title: "Keyword Research & Strategy",
                      desc: "We target high-intent keywords based on your audience’s behavior and competitive landscape.",
                    },
                    {
                      title: "On-Page Optimization",
                      desc: "Enhance your website’s relevance and usability with content and structural improvements.",
                    },
                    {
                      title: "Technical SEO",
                      desc: "Improve performance with mobile-friendly, fast-loading, and crawlable site architecture.",
                    },
                    {
                      title: "Content Creation & Optimization",
                      desc: "Develop compelling content that ranks and resonates with users.",
                    },
                    {
                      title: "Link Building",
                      desc: "Acquire quality backlinks to increase domain authority and trust.",
                    },
                    {
                      title: "Local SEO",
                      desc: "Target geo-specific searches and optimize your Google Business profile.",
                    },
                    {
                      title: "Analytics & Reporting",
                      desc: "Actionable insights and performance tracking delivered with transparency.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6 border border-gray-100"
                    >
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Our SEO Process */}
              <div className="max-w-6xl mx-auto px-4 md:px-8 mt-32">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
                  Our SEO Process
                </h2>
                <div className="space-y-10">
                  {[
                    {
                      title: "Discovery & Analysis",
                      desc: "Gain a deep understanding of your business, industry, and competitors to set clear objectives.",
                    },
                    {
                      title: "Strategic Planning",
                      desc: "Craft a tailored roadmap with measurable milestones, balancing quick wins and long-term growth.",
                    },
                    {
                      title: "Execution",
                      desc: "Implement technical, on-page, and content strategies with precision and expertise.",
                    },
                    {
                      title: "Continuous Optimization",
                      desc: "Refine campaigns with ongoing monitoring, A/B testing, and data-backed adjustments.",
                    },
                    {
                      title: "Transparent Reporting",
                      desc: "Receive detailed, digestible reports and regular strategic reviews.",
                    },
                    {
                      title: "Sustained Growth Support",
                      desc: "Beyond implementation, we partner with you to ensure continuous performance.",
                    },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-6 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6"
                    >
                      {/* Step Number Circle */}
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 text-white flex items-center justify-center text-lg font-bold shadow-md">
                        {index + 1}
                      </div>

                      {/* Step Content */}
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
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
