import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "reactstrap";
import "swiper/css";
import { useState } from "react";

import Slider from "../Components/Slider";
import Getintouch from "../Components/Getintouch";
import Narrow from "../Components/Common/Narrow";
import ShowcaseSlider from "../Components/ShowcaseSlider";
import img from "../../src/Images/Screenshot 2024-05-13 140345.png";
import MultiTab2 from "../Components/MultiTab2";
import img1 from "../../src/Images/lshape.png";
import ReviewSlider from "../Components/ReviewSlider";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".professionalservicescard");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll(".productivitycardtype");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    });

    elements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Narrow>
        <div
          className={`home1  mb-48 max-xl:mt-0 max-xl:mb-20 mt-32 ${
            isVisible ? "fade-in" : ""
          }`}
        >
          <Row>
            <Col md="6" className="">
              <p className="home1para">EMPOWERMENT</p>
              <h1 className="homepara2">
                Seamless IT for your business, boosting your growth.
              </h1>
              <p className="homepara3">
                We provide the expertise and support to propel your business
                forward in the digital landscape.
              </p>
              <Row className="btnsectionrow" style={{ marginTop: "35px" }}>
                <Col className="btnsection">
                  <Link to="/contactus">
                    <Button className="contactusbtnhome">Contact Us</Button>
                  </Link>
                  <Link to="/contactus">
                    <Button className="letstalkbtnhome flex gap-1 align-items-center justify-center">
                      Let's Talk{" "}
                      <img
                        src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/home%20arrow.svg?updatedAt=1713423053103"
                        alt=""
                        className="letstalkarrow"
                      />{" "}
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <img
                src="https://images.pexels.com/photos/3184613/pexels-photo-3184613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="frontimg"
              />
            </Col>
          </Row>
        </div>
      </Narrow>

      <Narrow>
        <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-1-1.svg')] bg-cover bg-top howedo py-20 px-10 max-xl:p-5 max-xl:py-10 max-xl:rounded-none mt-36 max-xl:mt-20 mx-auto">
          <div className="flex max-lg:flex-col">
            <div className="flex w-1/3 max-xl:w-3/12 flex-col justify-between max-lg:w-full">
              <div>
                <h6 className="ourmodeltext">OUR MODEL</h6>
                <h2 className="howedotext">How we do</h2>
                <h5 className="savetimetext">
                  Save time and money with our powerful method.
                </h5>
              </div>
              <Link to="/contactus">
                <Button className=" bg-[#1351d8] py-2 px-3 rounded-full text-white max-lg:mt-5 mb-10">
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className=" w-2/3 max-xl:w-9/12 max-lg:w-full text-sm">
              <div className="flex max-md:flex-col max-md:items-center ">
                <Card className="card1 w-3/12  py-3 px-3 flex items-center justify-center max-md:w-9/12 ">
                  <div className="flex items-center justify-center w-full ">
                    <img
                      src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-1.svg?updatedAt=1713440854392"
                      alt=""
                      className="w-4/12 p-2 rounded-xl bg-[#1351d81a]"
                    />
                    <div className="w-8/12 pl-2 max-md:w-8/12 max-md:pl-5">
                      <h6 className="text-blue-600 font-semibold">
                        Brainstorming
                      </h6>
                      <p>Ideas</p>
                    </div>
                  </div>
                </Card>
                <Card className="card1 w-3/12  py-3 px-3 mx-24 flex items-center justify-center max-md:w-9/12  max-md:my-10">
                  <div className="flex items-center justify-center w-full">
                    <img
                      src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-2%20(1).svg?updatedAt=1713441749519"
                      alt=""
                      className="w-4/12 p-2 rounded-xl bg-[#1351d81a]"
                    />
                    <div className="w-8/12 pl-2 max-md:w-8/12 max-md:pl-5">
                      <h6 className="text-blue-600 font-semibold">Product</h6>
                      <p>Design</p>
                    </div>
                  </div>
                </Card>
                <Card className="card4 w-3/12  py-3 px-3 flex items-center justify-center max-md:w-9/12 ">
                  <div className="flex items-center justify-center w-full">
                    <img
                      src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-3.svg?updatedAt=1713440667501"
                      alt=""
                      className="w-4/12 p-2 rounded-xl bg-[#1351d81a]"
                    />

                    <div className="w-8/12 pl-2 max-md:w-8/12 max-md:pl-5">
                      <h6 className="text-blue-600 font-semibold">Front-End</h6>
                      <p>Development</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="flex my-10 max-md:flex-col items-center">
                <Card className="card5 w-3/12 mx-32 max-xl:mx-28 max-lg:mx-32 py-3 px-3 flex items-center justify-center max-md:w-9/12  max-md:mx-0 max-md:mb-10">
                  <div className="flex items-center justify-center w-full ">
                    <img
                      src="https://ik.imagekit.io/2q7cgnqzi/Panacee%20React%20/logo/hwd-icon-4.svg?updatedAt=1713441484235"
                      alt=""
                      className="w-4/12 p-2 rounded-xl bg-[#1351d81a]"
                    />

                    <div className="w-8/12 pl-2 max-md:w-8/12 max-md:pl-5">
                      <h6 className="text-blue-600 font-semibold">SEO</h6>
                      <p>Optimization</p>
                    </div>
                  </div>
                </Card>
                <Card className="card6 w-3/12  py-3 px-3 flex items-center justify-center max-md:w-9/12 ">
                  <div className="flex items-center justify-center w-full">
                    <img
                      src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/hwd-icon-5.svg"
                      alt=""
                      className="w-4/12 p-2 rounded-xl bg-[#1351d81a]"
                    />

                    <div className="w-8/12 pl-2 max-md:w-8/12 max-md:pl-5">
                      <h6 className="text-blue-600 font-semibold">Back-End</h6>
                      <p>Development</p>
                    </div>
                  </div>
                </Card>
              </div>

              <div>
                <Card className="w-3/12  py-3 px-3 flex items-center justify-center max-md:w-9/12 mx-auto">
                  <div className="flex items-center justify-center  w-full">
                    <img
                      src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/hwd-icon-6.svg"
                      alt=""
                      className="w-4/12 p-2 rounded-xl bg-[#1351d81a]"
                    />

                    <div className="w-8/12 pl-2 max-md:w-8/12 max-md:pl-5">
                      <h6 className="text-blue-600 font-semibold">Digital</h6>
                      <p>Marketing</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Narrow>

      <Narrow>
        <div className="whatweoffering mt-40 max-xl:mt-10 max-xl:p-3">
          <Row>
            <Col md="6" className="homaepara2">
              <p className="delinglogheading">WHAT WE’RE OFFERING</p>
              <h2 className="delingheading">
                Dealing in all professional <br />
                IT services.
              </h2>
            </Col>
            <Col md="6">
              <h6 className="delingcontent">
                One fundamental aspect of IT services is infrastructure
                management. This involves the design, implementation, and
                maintenance of the hardware, software, networks, and servers.
              </h6>
            </Col>
          </Row>
        </div>
      </Narrow>

      <Narrow>
        <div className="professionalservicescontainer mt-20 max-xl:mt-2 pb-32 max-xl:pb-0">
          <div className="professionalservicesrow justify-between w-full max-xl:p-3 flex max-xl:flex-col max-xl:gap-3">
            <div sm="1" md="2">
              <Card className="professionalservicescard">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-1-2.svg"
                  alt=""
                  className="services5"
                />
                <div className="text-xl font-bold">Development</div>
                <p>Our development is pixel perfect in all ways.</p>
              </Card>
            </div>
            <div sm="1" md="2">
              <div className="professionalservicescard bg-white">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-2-2.svg"
                  alt=""
                  className="services5"
                />
                <div className="text-xl font-bold">Woo Commerce</div>
                <p>Our development is pixel perfect in all ways.</p>
              </div>
            </div>
            <div sm="1" md="2">
              <Card className="professionalservicescard">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-3-2.svg"
                  alt=""
                  className="services5"
                />
                <div className="text-xl font-bold">CRM Solutions</div>
                <p>Our development is pixel perfect in all ways.</p>
              </Card>
            </div>
            <div sm="1" md="2">
              <Card className="professionalservicescard">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-4-2.svg"
                  alt=""
                  className="services5"
                />
                <div className="text-xl font-bold">Web Design</div>
                <p>Our development is pixel perfect in all ways.</p>
              </Card>
            </div>
            <div sm="1" md="2">
              <Card className="professionalservicescard">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-5-2.svg"
                  alt=""
                  className="services5"
                />
                <div className="text-xl font-bold">IT Support</div>
                <p>Our development is pixel perfect in all ways.</p>
              </Card>
            </div>
          </div>
        </div>
      </Narrow>

      <div className="background p-3">
        <Narrow>
          <MultiTab2 />
        </Narrow>
      </div>

      <div>
        <Narrow>
          <div className="px-3 py-14 max-xl:pb-10 max-xl:pt-0 mb-28 max-xl:mt-0 max-xl:mb-0 flex max-xl:flex-col gap-5">
            <div className="w-1/3 max-xl:w-full" style={{ marginTop: "2vh" }}>
              <p className="home1para">CONSULTING EXCELLENCE</p>
              <h2 className="delingheading">Best pathway to our clients.</h2>
              <p className="homepara3">
                Our consulting process begins with a thorough assessment of your
                current IT infrastructure, workflows, and pain points.
              </p>
              <div className=" mt-5">
                <div
                  style={{ display: "flex", gap: "1vw", alignItems: "center" }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      viewBox="0 0 512 512"
                      fill="blue"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                  <p style={{ fontSize: "20px" }}>24/7 Full Service Support</p>
                </div>
                <div
                  style={{ display: "flex", gap: "1vw", alignItems: "center" }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      viewBox="0 0 512 512"
                      fill="blue"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                  <p style={{ fontSize: "20px" }}>Immediate Response</p>
                </div>
                <div
                  style={{ display: "flex", gap: "1vw", alignItems: "center" }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      viewBox="0 0 512 512"
                      fill="blue"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                  <p style={{ fontSize: "20px" }}>Easy to Approach us</p>
                </div>
              </div>
            </div>
            <div
              className="w-2/3 max-xl:w-full flex max-xl:flex-col gap-5 max-xl:gap-0 justify-between"
              style={{}}
            >
              <div className="my-auto">
                <div
                  className=" background bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-2-1.svg')] bg-cover bg-right-bottom max-xl:ml-0 max-xl:mt-5 hover:bg-black hover:text-gray-100 transition duration-500 ease-in-out"
                  style={{
                    padding: "2rem",
                    width: "320px",
                    borderRadius: "15px",
                  }}
                >
                  <div className=" text-xl font-bold">Tailored Solutions</div>
                  <p className=" text-lg text-gray-500 mt-2">
                    Develop IT solutions based on the analysis phase.
                  </p>
                </div>
              </div>
              <div className="max-xl:hidden">
                <img src={img} style={{ height: "500px" }} alt="" />
              </div>
              <div className="flex flex-col justify-between max-xl:-mt-10">
                <div
                  className="background bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-2-1.svg')] bg-cover bg-right-bottom background max-xl:ml-0 max-xl:mt-5 hover:bg-black hover:text-gray-100 transition duration-500 ease-in-out"
                  style={{
                    padding: "2rem",
                    width: "320px",
                    borderRadius: "15px",
                  }}
                >
                  <div className="text-xl font-bold">Tailored Solutions</div>
                  <p className=" text-lg text-gray-500 mt-2">
                    Develop IT solutions based on the analysis phase.
                  </p>
                </div>
                <div
                  className="background bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-2-1.svg')] bg-cover bg-right-bottom background max-xl:ml-0 max-xl:mt-5 hover:bg-black hover:text-gray-100 transition duration-500 ease-in-out"
                  style={{
                    padding: "2rem",
                    width: "320px",
                    borderRadius: "15px",
                  }}
                >
                  <div className="text-xl font-bold">Tailored Solutions</div>
                  <p className=" text-lg text-gray-500 mt-2">
                    Develop IT solutions based on the analysis phase.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <Narrow>
        <ReviewSlider />
      </Narrow>

      <div className="py-24 max-xl:py-5 px-3 background">
        <Narrow>
          <Row>
            <Col md="4" className="mt-28 max-xl:mt-5">
              <p className="home1para">PROJECTS</p>
              <h2 className="empowermentHeading">
                Showcase of our recognized work.
              </h2>
              <p className="homepara3">
                Our collaborative approach ensures that we truly understand our
                clients unique requirements and challenges.
              </p>
              <div className=" mt-5">
                <div
                  style={{ display: "flex", gap: "1vw", alignItems: "center" }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      viewBox="0 0 512 512"
                      fill="blue"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                  <p style={{ fontSize: "20px" }}>
                    Managed Services and Products
                  </p>
                </div>
                <div
                  style={{ display: "flex", gap: "1vw", alignItems: "center" }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      viewBox="0 0 512 512"
                      fill="blue"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                  <p style={{ fontSize: "20px" }}>
                    Flexibility and Adaptability
                  </p>
                </div>
                <div
                  style={{ display: "flex", gap: "1vw", alignItems: "center" }}
                >
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height={20}
                      viewBox="0 0 512 512"
                      fill="blue"
                    >
                      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
                    </svg>
                  </p>
                  <p style={{ fontSize: "20px" }}>Competitive Advantage</p>
                </div>
              </div>
            </Col>
            <Col
              md="8"
              style={{
                padding: "3rem",
              }}
            >
              <ShowcaseSlider></ShowcaseSlider>
            </Col>
          </Row>
        </Narrow>
      </div>

      <div className="productivity">
        <Narrow>
          <Row className="py-32 max-xl:py-5">
            <Col md="7" className="productivitycard1 ml-auto">
              <Col md="5" className="productivitycardtype">
                <div class="feature-img-card">
                  <div
                    className="text-2xl font-bold"
                    style={{
                      position: "absolute",
                      paddingLeft: "20px",
                      paddingTop: "20px",
                    }}
                  >
                    Start your <br /> project from <br />
                    your pocket.
                  </div>
                  <img
                    decoding="async"
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/feature-img-1.png"
                  />
                </div>
              </Col>
              <Col md="5" className="productivitycardtype">
                <div class="feature-img-card">
                  <div
                    className="text-2xl font-bold"
                    style={{
                      position: "absolute",
                      paddingLeft: "20px",
                      paddingTop: "20px",
                    }}
                  >
                    Available on <br />
                    all responsive <br />
                    devices.
                  </div>
                  <img
                    decoding="async"
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/feature-img-2.png"
                  />
                </div>
              </Col>
            </Col>

            <Col md="5" className="fetureproductbox max-xl:mt-10 section-title">
              <Row>
                <Col>
                  <h6 className="inhow">FEATURED PRODUCT</h6>
                  <h2 className="fetureproducthead">
                    Seamless productivity <br /> with our new app
                  </h2>
                  <h4 className="fetureproductabout mt-3">
                    Download Slack and experience a new era of organization{" "}
                    <br /> and accomplishment.
                  </h4>
                </Col>
              </Row>

              <div className="flex gap-10 max-xl:gap-0 max-xl:flex-col mt-5">
                <div className="tasksign">
                  <img
                    src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                    alt=""
                    className="righticonimagesize h-10"
                  />
                  <h5 className="fetureproductabout my-auto">
                    PPD Development{" "}
                  </h5>
                </div>
                <div className="tasksign">
                  <img
                    src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                    alt=""
                    className="righticonimagesize h-10"
                  />
                  <h5 className="fetureproductabout my-auto">Easy to use </h5>
                </div>
              </div>

              <div className="productivitybutton">
                <div>
                  <Link to="/contactus">
                    <Button className="productivitybtn">
                      Get Started Now!
                    </Button>
                  </Link>
                </div>
                <div>
                  <Link to="/contactus">
                    <Button className="productivitybtn">Learn More</Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Narrow>
      </div>

      <div className=" mt-28 max-xl:mt-0">
        <Narrow>
          <Slider />
        </Narrow>
      </div>

      <Getintouch />
    </>
  );
}

export default Home;
