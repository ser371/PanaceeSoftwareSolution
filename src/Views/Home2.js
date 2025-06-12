import { React, useEffect, useState, useRef } from "react";

import Slider from "../Components/Slider";
import Narrow from "../Components/Common/Narrow";
import MultiTab3 from "../Components/MultiTab3";
import Home2Content from './Home2Content'
import Home2form from "../Components/Home2form";
import { Link } from "react-router-dom";

export default function Home2() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

  return (
    <div className="mb-28 ">
      <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/12/bg-shape-5.svg')] bg-cover bg-top">
        <div className="pt-14  bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/12/bg-shape-6.svg')] bg-cover bg-top">
          <Narrow>
            <div className="mb-28 max-xl:mb-10 mt-24 max-xl:mt-3">
              <div>
                <div className="firstbtnsec ">
                  <span className="home1para">ACCELERATED GROWTH</span>
                </div>
              </div>
              <div
                className={`header ${isVisible ? "fade-in" : ""}`}
                style={{ marginTop: "10px" }}
              >
                <div>
                  <p className="aboutheader1 max-xl:text-4xl max-xl:px-3 font-semibold text-black">
                    Empowering business with
                  </p>
                  <p className="aboutheader1 max-xl:text-4xl max-xl:px-3 font-semibold">
                    modern rules and insights{" "}
                  </p>

                  <p className="aboutheader2 max-xl:px-3 text-2xl max-xl:text-base text-black">
                    Welcome to slack business consulting and solutions, <br />{" "}
                    where success is not just a destination.
                  </p>
                </div>
                <div className=" max-xl:w-full mx-auto text-center  mt-10">
                  <Link to="/contactus">
                  <button className="text-blue-700  bg-[#1351D81A] py-3 px-5 text-xl max-xl:text-lg hover:bg-blue-600 rounded-full hover:text-white">
                    Let's talk to our team
                  </button></Link>
                </div>
              </div>
            </div>
          </Narrow>
        </div>
      </div>

      <Home2form/>

      <Narrow>
        <hr className="my-28 max-xl:my-5 max-xl:hidden" />
      </Narrow>

      <Narrow>
        <div className="text-center">
          <p className="text-3xl text-gray-600 max-xl:text-xl max-xl:mt-5">
            Slack is used by over 60,000+ companies across the world
          </p>
        </div>
      </Narrow>

      <div className="mt-20 max-xl:mt-10 max-xl:px-3">
        <Narrow>
          <Slider />
        </Narrow>
      </div>

      <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/12/bg-shape-7.svg')] bg-cover bg-top darkbg py-3 pb-5 mt-28">
        <Narrow>
          <div>
            <div className="whatweareoffering mt-32 max-xl:mt-5 max-xl:px-3 grid grid-cols-2 max-xl:grid-cols-1">
              <div>
                <div md="6">
                  <p className="delinglogheading">OUR SERVICES</p>
                  <h1 className="delingheading text-white">
                    We provide best services
                  </h1>
                </div>
                <div md="6">
                  <h6 className="delingcontent text-gray-200">
                    Our consulting process begins with a thorough assessment of
                    your current infrastructure, workflows, and pain points.
                  </h6>
                </div>
              </div>
              <div>
                <div className="text-right max-xl:text-left mt-3">
                  <Link to="/ourservices">
                  <button className="text-white bg-blue-700 hover:bg-gray-700 py-3 px-5 rounded-full text-xl">
                    Learn More
                  </button></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-3 mt-20 max-xl:mt-5 max-xl:p-3">
            <div className="flex flex-col gap-4">
              <div className="flex max-xl:flex-col gap-4 justify-between">
                <div className="bg-white p-4 rounded-xl">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/service-1.png"
                    alt=""
                  />
                  <h1 className="text-2xl font-semibold mt-3">
                    Market Researching
                  </h1>
                  <p>
                    Stay ahead of the curve <br />
                    in-depth market analysis.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/service-2.png"
                    alt=""
                  />
                  <h1 className="text-2xl font-semibold mt-3">
                    Market Researching
                  </h1>
                  <p>
                    Stay ahead of the curve <br />
                    in-depth market analysis.
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl flex max-xl:flex-col gap-5">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/service-5.png"
                  alt=""
                />
                <div>
                  <h1 className="text-2xl font-semibold mt-3">
                    Market Researching
                  </h1>
                  <p>
                    Stay ahead of the curve <br />
                    in-depth market analysis.
                  </p>
                  <div className="flex gap-3 mt-3">
                    <img
                      src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                      alt=""
                      className="righticonimagesize h-7"
                    />
                    <p className="text-xl">Customized growth</p>
                  </div>
                  <div className="flex gap-3 mt-3">
                    <img
                      src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                      alt=""
                      className="righticonimagesize h-7"
                    />
                    <p className="text-xl">Market Penetration</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex max-xl:flex-col gap-4 justify-between">
                <div className="bg-white p-4 rounded-xl">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/service-1.png"
                    alt=""
                  />
                  <h1 className="text-2xl font-semibold mt-3">
                    Market Researching
                  </h1>
                  <p>
                    Stay ahead of the curve <br />
                    in-depth market analysis.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-xl">
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/service-2.png"
                    alt=""
                  />
                  <h1 className="text-2xl font-semibold mt-3">
                    Market Researching
                  </h1>
                  <p>
                    Stay ahead of the curve <br />
                    in-depth market analysis.
                  </p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl flex max-xl:flex-col gap-5">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/service-5.png"
                  alt=""
                />
                <div>
                  <h1 className="text-2xl font-semibold mt-3">
                    Market Researching
                  </h1>
                  <p>
                    Stay ahead of the curve <br />
                    in-depth market analysis.
                  </p>
                  <div className="flex gap-3 mt-3">
                    <img
                      src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                      alt=""
                      className="righticonimagesize h-7"
                    />
                    <p className="text-xl">Customized growth</p>
                  </div>
                  <div className="flex gap-3 mt-3">
                    <img
                      src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                      alt=""
                      className="righticonimagesize h-7"
                    />
                    <p className="text-xl">Market Penetration</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <Narrow>
        <MultiTab3 />
      </Narrow>

      <div className="darkbg mt-32 max-xl:mt-5 py-20 max-xl:py-10">
        <Narrow>
          <div className="flex max-xl:flex-col gap-14">
            <div className="w-2/3 max-xl:w-full">
              <h1 className="home1para max-xl:px-3">CONSULTING EXCELLENCE</h1>
              <h1 className="text-white text-5xl font-bold pr-24  max-xl:pr-0 mt-3 max-xl:p-3">
                Build a solution that wins you more clients.
              </h1>

              <hr className="bg-white mt-5 mb-5 max-xl:mt-2 max-xl:mb-2 max-xl:hidden" />

              <div className="grid grid-cols-2 max-xl:grid-cols-1 max-xl:p-3 gap-10">
                <div>
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/hwd-icon-1.svg"
                    className="bg-white p-2 rounded-full"
                    alt=""
                  />
                  <h1 className="text-2xl font-semibold  text-white mt-3">
                    Customized Solutions
                  </h1>
                  <p className="text-gray-200 text-xl mt-3">
                    Tailoring recommendations to the client's specific needs and
                    circumstances. Iailoring recommendations to the client's
                    specific needs and circumstances.
                  </p>
                </div>
                <div>
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/hwd-icon-1.svg"
                    className="bg-white p-2 rounded-full"
                    alt=""
                  />
                  <h1 className="text-2xl font-semibold  text-white mt-3">
                    Customized Solutions
                  </h1>
                  <p className="text-gray-200 text-xl mt-3">
                    Tailoring recommendations to the client's specific needs and
                    circumstances. Iailoring recommendations to the client's
                    specific needs and circumstances.
                  </p>
                </div>
                <div>
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/hwd-icon-1.svg"
                    className="bg-white p-2 rounded-full"
                    alt=""
                  />
                  <h1 className="text-2xl font-semibold  text-white mt-3">
                    Customized Solutions
                  </h1>
                  <p className="text-gray-200 text-xl mt-3">
                    Tailoring recommendations to the client's specific needs and
                    circumstances. Iailoring recommendations to the client's
                    specific needs and circumstances.
                  </p>
                </div>
                <div>
                  <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/hwd-icon-1.svg"
                    className="bg-white p-2 rounded-full"
                    alt=""
                  />
                  <h1 className="text-2xl font-semibold  text-white mt-3">
                    Customized Solutions
                  </h1>
                  <p className="text-gray-200 text-xl mt-3">
                    Tailoring recommendations to the client's specific needs and
                    circumstances. Iailoring recommendations to the client's
                    specific needs and circumstances.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-1/3 max-xl:w-full bg-white p-4 rounded-xl">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/iphone-13.png"
                className="m-auto"
                alt=""
              />
            </div>
          </div>
        </Narrow>
      </div>

      <Narrow>
        <div className="flex max-xl:flex-col mt-32 max-xl:mt-10">
          <div className="w-1/2 max-xl:w-full max-xl:p-3">
            <h1 className="home1para">DAILY NEWS</h1>
            <h1 className="text-5xl font-bold mt-2">
              Read more about daily insights
            </h1>
            <p className="text-xl text-gray-600 mt-3">
              In a fast-paced world where information shapes, our daily news
              service is your informed about the latest developments
            </p>
          </div>
          <div className="ml-auto max-xl:ml-3">
           <Link to="/blogs">
           <button className="px-5 py-3 rounded-full bg-blue-700 text-white text-xl">
              Learn more
            </button></Link>
          </div>
        </div>

        <div className="flex max-xl:flex-col max-xl:p-3 gap-3 mt-10 max-xl:mt-3">
          <div className="bg-[#F3F6FD] p-4 rounded-xl">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/blog-1.jpg"
              alt=""
            />
            <h1 className="text-xl font-semibold mt-3">
              Stock markets opened on a mixed note today, with tech stocks
            </h1>
            <hr className="mt-3" />
            <p className="text-base text-gray-600 mt-3">
              Our journey is guided by a clear vision - is to be at the
              forefront of transformative solutions that shape to the industries
              and enrich lives. This vision is deeply rooted in our core values:
              excellence, innovation, integrity, and collaboration.
            </p>
          </div>
          <div className="bg-[#F3F6FD] p-4 rounded-xl">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/blog-2.jpg"
              alt=""
            />
            <h1 className="text-xl font-semibold mt-3">
              Automotive industry is witnessing a shift towards electric
              vehicles
            </h1>
            <hr className="mt-3" />
            <p className="text-base text-gray-600 mt-3">
              Our journey is guided by a clear vision - is to be at the
              forefront of transformative solutions that shape to the industries
              and enrich lives. This vision is deeply rooted in our core values:
              excellence, innovation, integrity, and collaboration.
            </p>
          </div>
          <div className="bg-[#F3F6FD] p-4 rounded-xl">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/blog-3.jpg"
              alt=""
            />
            <h1 className="text-xl font-semibold mt-3">
              The healthcare sector is adapting to new remote patient monitoring
            </h1>
            <hr className="mt-3" />
            <p className="text-base text-gray-600 mt-3">
              Our journey is guided by a clear vision - is to be at the
              forefront of transformative solutions that shape to the industries
              and enrich lives. This vision is deeply rooted in our core values:
              excellence, innovation, integrity, and collaboration.
            </p>
          </div>
        </div>
      </Narrow>

      <Narrow>
        <div className="darkbg bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/12/bg-shape-blog-sticky.svg')] bg-cover bg-top  p-4 mt-10 rounded-xl">
          <div className="flex max-xl:flex-col">
            <div className="w-2/3 max-xl:w-full">
              <img
                className=" rounded-lg"
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/blog-4.jpg"
                alt=""
              />
            </div>
            <div className="w-1/3 max-xl:w-full my-auto p-3">
              <h1 className="text-2xl text-white">
                Bluebase launches a new X Tap to Pay on smartphone for
                international and domestic business
              </h1>
              <hr className="bg-white mt-3 mb-3" />
              <p className="text-gray-200">
                Our journey is guided by a clear vision - is to be at the
                forefront of transformative solutions that shape to the
                industries and enrich lives. This vision is deeply rooted in our
                core values: excellence, innovation, integrity, and
                collaboration.
              </p>
            </div>
          </div>
        </div>
      </Narrow>

      <div className="bg-[#F3F6FD] bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/12/bg-shape-9.svg')] bg-cover bg-bottom mt-32 max-xl:mt-0 mb-32 py-10">
        <Narrow>
          <div className="flex max-xl:flex-col gap-10">
            <div className="w-1/2 max-xl:w-full max-xl:p-3">
              <h1 className="home1para">OUR TEAM</h1>
              <h1 className="text-5xl font-bold mt-3 pr-14">
                Our team consists of world class experts
              </h1>
            </div>
            <div className="w-1/2 max-xl:w-full max-xl:p-3 my-auto max-xl:my-0">
              <p className="text-xl text-gray-700">
                We are proud to introduce you to the talented individuals who
                make up our consultancy's backbone, each contributing their
                unique skills and wealth of experience to drive transformative
                results.
              </p>
            </div>
          </div>

          <hr className="mt-10 mb-10 max-xl:hidden" />

          <div className="grid grid-cols-3 max-xl:grid-cols-1 gap-3 max-xl:p-3">
            <div className="flex flex-col gap-3">
              <div className="bg-white rounded-xl flex max-xl:flex-col gap-4 p-3">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/portfolio-1.jpg"
                  alt=""
                />
                <div className="my-auto">
                  <h1 className="text-4xl font-bold">Work consulting.</h1>
                  <p className="text-lg text-gray-500 mt-3">
                    We have a best team for your consulting service.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-3">
                <h1 className="text-4xl font-bold">
                  Take an <br /> architecture <br /> photography
                </h1>
                <p className="text-lg text-gray-500 mt-3 mb-3">
                  We have best photographers in our digital studio.
                </p>
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/portfolio-2.jpg"
                  alt=""
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="bg-white rounded-xl p-3">
                <h1 className="text-4xl font-bold">
                  Take an <br /> architecture <br /> photography
                </h1>
                <p className="text-lg text-gray-500 mt-3 mb-3">
                  We have best photographers in our digital studio.
                </p>
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/portfolio-3.jpg"
                  alt=""
                />
              </div>
              <div className="bg-white rounded-xl flex max-xl:flex-col gap-4 p-3">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/portfolio-4.jpg"
                  alt=""
                />
                <div className="my-auto">
                  <h1 className="text-4xl font-bold ">Work consulting.</h1>
                  <p className="text-lg text-gray-500  mt-3">
                    We have a best team for your consulting service.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="bg-white rounded-xl flex max-xl:flex-col gap-4 p-3">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/portfolio-5.jpg"
                  alt=""
                />
                <div className="my-auto">
                  <h1 className="text-4xl font-bold">Game Branding.</h1>
                  <p className="text-lg text-gray-500 mt-3">
                    Our best team for bring your market to new era.
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-3 h-full">
                <h1 className="text-4xl font-bold">
                  Take an <br /> architecture <br /> photography
                </h1>
                <p className="text-lg text-gray-500 mt-3 mb-3">
                  We have best photographers in our digital studio.
                </p>
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/portfolio-6.jpg"
                  alt=""
                />
                <div className="flex mt-4 justify-between">
                  <svg
                    height={40}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 8C119.3 8 8 119.3 8 256s111.3 248 248 248 248-111.3 248-248S392.7 8 256 8zm164 114.4c29.5 36 47.4 82 47.8 132-7-1.5-77-15.7-147.5-6.8-5.8-14-11.2-26.4-18.6-41.6 78.3-32 113.8-77.5 118.3-83.5zM396.4 97.9c-3.8 5.4-35.7 48.3-111 76.5-34.7-63.8-73.2-116.2-79-124 67.2-16.2 138 1.3 190.1 47.5zm-230.5-33.3c5.6 7.7 43.4 60.1 78.5 122.5-99.1 26.3-186.4 25.9-195.8 25.8C62.4 147.2 106.7 92.6 165.9 64.6zM44.2 256.3c0-2.2 0-4.3 .1-6.5 9.3 .2 111.9 1.5 217.7-30.1 6.1 11.9 11.9 23.9 17.2 35.9-76.6 21.6-146.2 83.5-180.5 142.3C64.8 360.4 44.2 310.7 44.2 256.3zm81.8 167.1c22.1-45.2 82.2-103.6 167.6-132.8 29.7 77.3 42 142.1 45.2 160.6-68.1 29-150 21.1-212.8-27.9zm248.4 8.5c-2.2-12.9-13.4-74.9-41.2-151 66.4-10.6 124.7 6.8 131.9 9.1-9.4 58.9-43.3 109.8-90.8 142z" />
                  </svg>
                  <svg
                    height={40}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                  </svg>
                  <svg
                    height={40}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  </svg>
                  <svg
                    height={40}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <Home2Content/>
    </div>
  );
}