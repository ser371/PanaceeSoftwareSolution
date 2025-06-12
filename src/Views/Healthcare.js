import { React, useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button, Card } from "reactstrap";
import Narrow from "../Components/Common/Narrow";
import Getintouch from "../Components/Getintouch";
import { Link } from "react-router-dom";

export default function Healthcare() {
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
                <span className="abouta1 bg-white">Healthcare</span>
              </div>
            </div>
            <div
              className={`header ${isVisible ? "fade-in" : ""}`}
              style={{ marginTop: "10px" }}
            >
              <div>
                <p className="aboutheader1 max-xl:text-3xl font-semibold text-white">
                  Healthcare through IT solutions
                </p>
                <p className="aboutheader1 max-xl:text-3xl font-semibold"> </p>

                <p className="aboutheader2 max-xl:px-3 text-2xl text-white">
                  In the ever-evolving landscape of healthcare, technology plays
                  a pivotal role in shaping the <br /> future of patient care,
                  medical services, and overall industry efficiency.
                </p>
              </div>
              <div className="bg-blue-600 w-1/6 max-xl:w-1/2 mx-auto text-center rounded-lg mt-10">
                <Link to="/contactus"><button className="text-white p-3">Book an appointment</button></Link>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <div className="bg-[#F3F6FD] mb-32">
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

      <div className="darkbg max-xl:p-3">
        <Narrow>
          <div className="py-20 rounded-lg mb-32">
            <div className="flex max-xl:flex-col gap-10">
              <div className="w-1/2 max-xl:w-full">
                <p className="home1para">HEALTHCARE SPECIALIZATION</p>
                <h1 className=" text-5xl font-bold mt-3 text-white">
                  We are best in healthcare
                </h1>
                <h1 className=" mt-5 text-3xl text-white">
                  Accurate diagnosis is crucial in effective healthcare
                  delivery.
                </h1>
                <p className="homepara3 text-gray-300 leading-8">
                  The project emphasizes the utmost importance of data security
                  and privacy in healthcare IT solutions. Robust cybersecurity
                  measures are implemented to safeguard sensitive patient
                  information, ensuring compliance <br />
                  <br />
                  with relevant regulations such as the Health Insurance
                  Portability and Accountability Act (HIPAA). By prioritizing
                  data protection, patient trust is bolstered, healthcare
                  organizations can with confidence in the digital realm. <br />
                  <br />
                  The Healthcare IT project recognizes the importance of
                  interoperability among healthcare systems. By ensuring
                  seamless data exchange between different healthcare providers,
                  laboratories, and pharmacies.
                </p>
              </div>
              <div className="flex w-1/2 max-xl:w-full gap-2">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/our-field-2.jpg"
                  alt=""
                  className="frontimg w-1/2"
                />
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/our-field-3.jpg"
                  alt=""
                  className="frontimg w-1/2"
                />
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <Narrow>
        <div className="background p-20 max-xl:p-3 rounded-lg">
          <div className="w-full max-xl:w-full">
            <p className="home1para">FEATURES</p>
            <h1 className=" text-5xl font-bold mt-3">
              Boosting your business using our team
            </h1>
          </div>

          <hr className="mt-14 " />

          <div className="grid grid-cols-2 max-xl:grid-cols-1">
            <div className="p-5">
              <div className="flex gap-2">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-8"
                />
                <h1 className="text-2xl font-semibold mb-3">
                  Requirements Gathering
                </h1>
              </div>
              <p className="text-xl text-gray-600">
                The development process starts with gathering and analyzing the
                requirements from stakeholders, including clients, end-users,
                and business analysts requirements from stakeholders,
              </p>
            </div>
            <div className="p-5">
              <div className="flex gap-2">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-8"
                />
                <h1 className="text-2xl font-semibold mb-3">
                  Devops Interoperability
                </h1>
              </div>
              <p className="text-xl text-gray-600">
                In today's interconnected world, software often needs to
                integrate with other systems and platforms. Developing software
                with interoperability in mind ensures.
              </p>
            </div>
            <div className="p-5">
              <div className="flex gap-2">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-8"
                />
                <h1 className="text-2xl font-semibold mb-3">
                  Data Integration
                </h1>
              </div>
              <p className="text-xl text-gray-600">
                Software applications should be designed and developed with
                scalability in mind. As user bases grow and data increases, the
                software should be able to handle.
              </p>
            </div>
            <div className="p-5">
              <div className="flex gap-2">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-8"
                />
                <h1 className="text-2xl font-semibold mb-3">
                  Analytics Performance
                </h1>
              </div>
              <p className="text-xl text-gray-600">
                The development process starts with gathering and analyzing the
                requirements from stakeholders, including clients, end and
                business analysts. As user bases grow and data increases
              </p>
            </div>
            <div className="p-5">
              <div className="flex gap-2">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-8"
                />
                <h1 className="text-2xl font-semibold mb-3">
                  Requirements Gathering
                </h1>
              </div>
              <p className="text-xl text-gray-600">
                The development process starts with gathering and analyzing the
                requirements from stakeholders, including clients, end-users,
                and business analysts requirements from stakeholders,
              </p>
            </div>
            <div className="p-5">
              <div className="flex gap-2">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-8"
                />
                <h1 className="text-2xl font-semibold mb-3">
                  Requirements Gathering
                </h1>
              </div>
              <p className="text-xl text-gray-600">
                The development process starts with gathering and analyzing the
                requirements from stakeholders, including clients, end-users,
                and business analysts requirements from stakeholders,
              </p>
            </div>
          </div>
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

      <Narrow>
        <div className="ourexpert1 p-28 max-xl:p-3  max-xl:py-20 mt-32 max-xl:mt-0 mb-32">
          <div className="flex max-xl:flex-col max-xl:text-center max-xl:mx-auto justify-between">
            <div className="w-2/3 max-xl:w-full">
              <h1 className="text-3xl font-bold mt-3">
                Build your project with us, Make it world class
              </h1>
              <p className="text-xl mt-3">
                Our projects are born from a passion for innovation that knows
                no
                <br />
                bounds.
              </p>
            </div>
            <div className="max-xl: mt-5">
              <Link to="/contactus">
                <Button className="bookappwexp bg-blue-600 hover:bg-black font-semibold px-5">
                  Book an appointment now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Narrow>

      <Getintouch />
    </div>
  );
}
