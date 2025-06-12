import React from "react";
import Narrow from "../Components/Common/Narrow";
import { useState, useEffect } from "react";
import Getintouch from "../Components/Getintouch";
import { Link } from "react-router-dom";
import img from "../Images/seo.jpeg";

export default function SeoServices() {
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
                <span className="abouta1 bg-white">SEO</span>
              </div>
            </div>
            <div
              className={`header ${isVisible ? "fade-in" : ""}`}
              style={{ marginTop: "10px" }}
            >
              <div>
                <p className="aboutheader1 max-xl:text-3xl font-semibold text-white">
                SEO Services
                </p>
                <p className="aboutheader1 max-xl:text-3xl font-semibold"> </p>

                <p className="aboutheader2 max-xl:px-3 text-2xl text-white leading-10">
                Elevate Your Online Presence with Expert SEO Solutions

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
          src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/how-we-do-single.jpg"
          alt=""
          className="mb-32"
        />
      </Narrow>

      <Narrow>
        <div className="background rounded-lg p-32 max-xl:p-3">
          <h1 className="text-5xl font-bold mb-5">Introduction</h1>
          <p className="text-2xl leading-10 text-gray-700">
          At Panacee Infosolutions, we understand that a robust online presence is essential for any business looking to thrive in today's digital landscape. Our dedicated SEO team leverages the latest strategies and tools to improve your website’s visibility, drive organic traffic, and boost your search engine rankings. Let us help you turn your website into a powerful marketing tool that attracts, engages, and converts your target audience.

          </p>

          <img src={img} className="mt-10 w-full rounded-xl" alt="" />

          <h1 className="text-5xl mt-5 font-semibold">
          Why Choose Our SEO Services?

          </h1>

          <h1 className="text-3xl font-semibold mt-20">Comprehensive SEO Audits:</h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          We conduct thorough SEO audits to identify strengths, weaknesses, and opportunities. Our audits cover on-page elements, technical SEO, backlink profiles, and competitor analysis.

          </p>

          <h1 className="text-3xl font-semibold mt-20">
          Keyword Research and Strategy:
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          We perform in-depth keyword research to find the most relevant and high-impact keywords for your business. Our strategy focuses on targeting keywords that drive qualified traffic and conversions.

          </p>
          <h1 className="text-3xl font-semibold mt-20">
          On-Page Optimization:
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          Our team optimizes your website's content, meta tags, headings, and images to ensure they align with SEO best practices. We focus on creating keyword-rich and user-friendly content that search engines love.

          </p>
          <h1 className="text-3xl font-semibold mt-20">
          Technical SEO:
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          We address technical aspects of your website, such as site speed, mobile-friendliness, crawlability, and indexability. Our goal is to enhance your website’s performance and ensure it meets search engine guidelines.

          </p>
          <h1 className="text-3xl font-semibold mt-20">
          Content Creation and Optimization:
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          Quality content is key to SEO success. Our expert content creators produce engaging, informative, and SEO-friendly content that resonates with your audience and ranks well in search engines.

          </p>
          <h1 className="text-3xl font-semibold mt-20">Link Building:</h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          We implement white-hat link building strategies to increase your website's authority and trustworthiness. Our approach includes acquiring high-quality backlinks from reputable sources.

          </p>
          <h1 className="text-3xl font-semibold mt-20">Local SEO:</h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          For businesses targeting local markets, we optimize your website for local search queries. This includes setting up and managing your Google My Business profile and ensuring your business information is consistent across online directories.

          </p>
          <h1 className="text-3xl font-semibold mt-20">Analytics and Reporting:</h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          We provide detailed analytics and regular reports to track your SEO performance. Our reports offer insights into keyword rankings, traffic trends, and ROI, helping you make informed decisions.

          </p>

          <h1 className="text-5xl mt-20 font-semibold">
          Our SEO Process
          </h1>
          <h1 className="text-3xl font-semibold mt-20">Discovery and Analysis:</h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          We begin by understanding your business goals, target audience, and current SEO status. This initial phase includes comprehensive audits and competitor analysis.
          </p>

          <h1 className="text-3xl font-semibold mt-20">
          Strategy Development:          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          Based on our findings, we create a tailored SEO strategy that aligns with your business objectives. This strategy outlines the specific actions and timelines needed to achieve your goals.
          </p>
          <h1 className="text-3xl font-semibold mt-20">
          Implementation:          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          Our SEO experts implement the strategy, optimizing your website’s on-page and technical elements, creating high-quality content, and building valuable backlinks.
          </p>
          <h1 className="text-3xl font-semibold mt-20">
          Monitoring and Optimization:
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          SEO is an ongoing process. We continuously monitor your website’s performance, make necessary adjustments, and optimize for new opportunities to ensure sustained growth.
          </p>
          <h1 className="text-3xl font-semibold mt-20">
          Reporting and Communication:
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          We keep you informed with regular reports and updates. Our transparent approach ensures you are always aware of the progress and impact of our SEO efforts.

          </p>
          <h1 className="text-3xl font-semibold mt-20">Launch and Support</h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          After thorough testing and final approval, we launch the website. Our team provides ongoing support and maintenance to ensure your website remains up-to-date and performs flawlessly.
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
