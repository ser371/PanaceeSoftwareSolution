import React from "react";
import Narrow from "../Components/Common/Narrow";
import { useState, useEffect } from "react";
import Getintouch from "../Components/Getintouch";
import { Link } from "react-router-dom";
import img from "../Images/frontend.png";
import img2 from "../Images/frontend2.jpg";

export default function FrontEnd() {
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
                <span className="abouta1 bg-white">Front-End Development</span>
              </div>
            </div>
            <div
              className={`header ${isVisible ? "fade-in" : ""}`}
              style={{ marginTop: "10px" }}
            >
              <div>
                <p className="aboutheader1 max-xl:text-3xl font-semibold text-white">
                  Frontend Development Services
                </p>
                <p className="aboutheader1 max-xl:text-3xl font-semibold"> </p>

                <p className="aboutheader2 max-xl:px-3 text-2xl text-white leading-10">
                  Transforming Your Vision into Reality with Cutting-Edge
                  Frontend Solutions
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
          src={img2}
          alt=""
          className="mb-32 w-full rounded-xl"
        />
      </Narrow>

      <Narrow>
        <div className="background rounded-lg p-32 max-xl:p-3">
          <h1 className="text-5xl font-bold mb-5">Introduction</h1>
          <p className="text-2xl leading-10 text-gray-700">
            At Panacee Infosolutions, we pride ourselves on our ability to
            create visually stunning and highly functional user interfaces that
            not only meet but exceed your expectations. Our dedicated frontend
            development team combines creativity, technical expertise, and a
            deep understanding of user experience to deliver web and mobile
            applications that are intuitive, engaging, and perfectly aligned
            with your brand.
          </p>

          <img src={img} className="mt-10 w-full" alt="" />

          <h1 className="text-5xl mt-5 font-semibold">
            Why Choose Our Frontend Development Services?
          </h1>

          <h1 className="text-3xl font-semibold mt-20">Custom Designs</h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
            Every project we undertake is uniquely tailored to reflect your
            brand's identity. We don't believe in one-size-fits-all solutions;
            instead, we create custom designs that capture your vision and
            resonate with your target audience.
          </p>

          <h1 className="text-3xl font-semibold mt-20">
            Responsive and Adaptive Layouts
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
            n today's multi-device world, it's crucial to have a website that
            looks and performs well on all screen sizes. Our designs are fully
            responsive, ensuring a seamless experience whether your users are on
            a desktop, tablet, or smartphone.
          </p>
          <h1 className="text-3xl font-semibold mt-20">
            Cutting-Edge Technologies
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
            Our team stays updated with the latest frontend technologies and
            frameworks, such as React, Angular, and Vue.js. This allows us to
            build dynamic, fast-loading, and interactive interfaces that enhance
            user engagement and satisfaction.
          </p>
          <h1 className="text-3xl font-semibold mt-20">
            User-Centric Approach
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
            We prioritize the end-user experience in every project. By
            conducting thorough user research and usability testing, we ensure
            that the final product is not only aesthetically pleasing but also
            intuitive and easy to navigate.
          </p>
          <h1 className="text-3xl font-semibold mt-20">
            Performance Optimization
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
            A beautiful website is ineffective if it’s slow or unresponsive. We
            optimize every aspect of our frontend code to ensure fast load
            times, smooth transitions, and overall superior performance.
          </p>
          <h1 className="text-3xl font-semibold mt-20">SEO-Friendly Code</h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
            Our development practices include writing clean, semantic HTML5 code
            that is optimized for search engines. This helps improve your
            website's visibility and ranking on search engine results pages
            (SERPs).
          </p>

          <h1 className="text-5xl mt-20 font-semibold">
            Our Frontend Development Process
          </h1>
          <h1 className="text-3xl font-semibold mt-20">Discovery and Planning</h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          We start by understanding your business goals, target audience, and specific requirements. This phase includes market research, competitor analysis, and defining the project scope.
          </p>

          <h1 className="text-3xl font-semibold mt-20">
          Wireframing and Prototyping
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          Based on the initial insights, we create wireframes and interactive prototypes to map out the user journey and visualize the overall structure and flow of the website.
          </p>
          <h1 className="text-3xl font-semibold mt-20">
          Visual Design
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          Our designers craft visually appealing and brand-consistent designs. We focus on creating an engaging user interface that enhances user experience and drives conversions.
          </p>
          <h1 className="text-3xl font-semibold mt-20">
          Development
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          Our developers bring the design to life using the latest frontend technologies. We ensure that the website is fully functional, responsive, and optimized for performance.
          </p>
          <h1 className="text-3xl font-semibold mt-20">
          Testing and Quality Assurance
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-10">
          Rigorous testing is conducted to identify and fix any issues. We test the website across different devices, browsers, and operating systems to ensure compatibility and optimal performance.
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
