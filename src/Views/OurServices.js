import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "reactstrap";
import Narrow from "../Components/Common/Narrow";
import { Link } from "react-router-dom";
import MultiTab2 from "../Components/MultiTab2";
import img from "../../src/Images/Screenshot 2024-05-13 140345.png";
import Getintouch from "../Components/Getintouch";

export default function OurServices() {
  useEffect(() => {

    window.scrollTo(0, 0);
  }, [])

  
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

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <Narrow>
        <div className="mb-36 mt-24 max-xl:mt-3">
          <Row>
            <Col className="firstbtnsec ">
              <span className="abouta1">Our Services</span>
            </Col>
          </Row>
          <Row
            className={`header ${isVisible ? "fade-in" : ""}`}
            style={{ marginTop: "10px" }}
          >
            <Col>
              <p className="aboutheader1 max-xl:text-3xl font-semibold">
                Empowering you with premier{" "}
              </p>
              <p className="aboutheader1 max-xl:text-3xl font-semibold">
                {" "}
                solutions and support
              </p>

              <p className="aboutheader2 text-2xl max-xl:px-3">
                At Premier Services, we are committed to providing exceptional
                solutions and
                <br /> unwavering support to meet your every need.
              </p>
            </Col>
          </Row>
        </div>
      </Narrow>

      <div className="bg-[#F3F6FD]">
        <Narrow>
          <div className="OURCOMPANY py-32 px-3">
            <Row>
              <Col className="my-2">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/hero-service-about.jpg"
                  alt=""
                  className="ourpopulaityimage"
                />
                <p style={{ marginTop: "30px" }} className="text-2xl px-3">
                  Our team is a collective force of top talents, pros, experts,
                  and visionaries from diverse fields. With a passion for
                  excellence, our professionals bring a wealth of experience and
                  knowledge to every project. At Slack, we are committed to
                  delivering nothing short of excellence. From concept to
                  implementation, we maintain the highest standards of quality
                  and craftsmanship, leaving no room for compromise.
                </p>
              </Col>
            </Row>
            <br />
            <div className="flex max-xl:flex-col justify-between px-3 text-xl">
              <div className="flex items-center">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className=" w-1/12"
                />
                <h5 className="pl-2">Managed Services and Products </h5>
              </div>
              <div className="flex items-center">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className=" w-1/12"
                />
                <h5 className="pl-2">Flexibility and Adaptability </h5>
              </div>
              <div className="flex items-center">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className=" w-1/12"
                />
                <h5 className="pl-2">Competitive Advantage </h5>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <Narrow>
        <div className="whatweoffering mt-40 max-xl:mt-10 max-xl:p-3">
          <Row>
            <Col md="6" className="homaepara2">
              <p className="delinglogheading">WHAT WE’RE OFFERING</p>
              <h1 className="delingheading">
                Dealing in all professional <br />
                IT services.
              </h1>
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

      <div className="mt-28">
        <Narrow>
          <div className="px-3 py-14 max-xl:pb-10 max-xl:pt-0 mb-28 max-xl:mt-0 max-xl:mb-0 flex max-xl:flex-col gap-5">
            <div className="w-1/3 max-xl:w-full" style={{ marginTop: "2vh" }}>
              <p className="home1para">CONSULTING EXCELLENCE</p>
              <h1 className="delingheading">Best pathway to our clients.</h1>
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
                  className=" background max-xl:ml-0 max-xl:mt-5 hover:bg-black hover:text-gray-100 transition duration-500 ease-in-out"
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
              <div className="max-xl:hidden">
                <img src={img} style={{ height: "500px" }} alt="" />
              </div>
              <div className="flex flex-col justify-between max-xl:-mt-10">
                <div
                  className=" background max-xl:ml-0 max-xl:mt-5 hover:bg-black hover:text-gray-100 transition duration-500 ease-in-out"
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
                  className=" background max-xl:ml-0 max-xl:mt-5 hover:bg-black hover:text-gray-100 transition duration-500 ease-in-out"
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

      <div className="whybetter py-36 max-xl:p-3">
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

      <div className="mt-32 mb-32">
        <Narrow>
          <Getintouch />
        </Narrow>
      </div>
    </div>
  );
}
