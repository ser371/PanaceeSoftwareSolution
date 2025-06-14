import { React, useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button, Card } from "reactstrap";
import Narrow from "../Components/Common/Narrow";
import { Link } from "react-router-dom";
import Getintouch from "../Components/Getintouch";

export default function ITsupport() {
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
              <span className="abouta1">IT Support</span>
            </Col>
          </Row>
          <Row
            className={`header ${isVisible ? "fade-in" : ""}`}
            style={{ marginTop: "10px" }}
          >
            <Col>
              <p className="aboutheader1 max-xl:text-3xl font-semibold">
              24/7 IT Support: <br /> We're Here to Help
              </p>

              <p className="aboutheader2 max-xl:px-3 text-2xl">
              Effortlessly Manage Your Website Content with Our Intuitive CMS Solutions
              </p>
            </Col>
          </Row>
        </div>
      </Narrow>

      <div className="mb-32">
        <Narrow>
          <img
            src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/service-details.jpg"
            alt=""
          />
        </Narrow>
      </div>

      <Narrow>
        <div className="background p-20 max-xl:p-3 rounded-lg">
          <div className="flex max-xl:flex-col gap-14">
            <div className="w-1/2 max-xl:w-full">
              <p className="home1para">SOFTWARE DEVELOPMENT</p>
              <h1 className=" text-5xl font-bold mt-3">Engine of progress</h1>
              <h1 className=" mt-5 text-3xl">
                Development as stone of innovation.
              </h1>
              <p className="homepara3">
              Take control of your website's content with our intuitive CMS solutions designed for ease of use and efficiency. Our content management system (CMS) empowers you to update, modify, and add content effortlessly, without needing any technical expertise. This ensures that your website remains dynamic, engaging, and reflective of the latest developments in your business or industry. <br /> <br />
              We're not just here for the initial development; we provide ongoing maintenance and support services to ensure your website continues to perform optimally, remains secure, and adapts to new technologies
              <br /><br />A beautiful website is only effective if it's visible. We integrate SEO best practices into our development process, helping your website rank higher in search engine results and drive organic traffic. Additionally, our digital marketing experts can assist you in creating effective online marketing strategies.

              </p>
            </div>
            <div className="flex w-1/2 max-xl:w-full gap-2">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/service-details-2.jpg"
                alt=""
                className="frontimg w-1/2"
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/service-details-3.jpg"
                alt=""
                className="frontimg w-1/2"
              />
            </div>
          </div>
        </div>
      </Narrow>

      {/* <div className="productivity mb-32 mt-32">
        <Narrow>
          <div className="py-28 max-xl:py-5 flex gap-24 justify-between max-xl:flex-col">
            <div className="w-1/2 max-xl:w-full">
              <img
                className="rounded-lg mx-auto"
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/about-service-7.jpg"
                alt=""
              />
            </div>

            <div className="fetureproductbox max-xl:mt-10 section-title w-1/2 max-xl:w-full">
              <div>
                <div>
                  <h6 className="inhow">IMPORTANCE</h6>
                  <h1 className="fetureproducthead">The Role of Developers</h1>
                  <h4 className="fetureproductabout mt-3 leading-8">
                    Software developers, often referred to as coders or
                    programmers, are the creative minds behind the digital
                    innovations we use daily.
                  </h4>
                </div>
              </div>

              <div className="flex-col max-xl:gap-0 max-xl:flex-col mt-5">
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
                <div className="tasksign mt-3">
                  <img
                    src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                    alt=""
                    className="righticonimagesize h-10"
                  />
                  <h5 className="fetureproductabout my-auto ">Easy to use </h5>
                </div>
              </div>
            </div>
          </div>
        </Narrow>
      </div> */}

      {/* <Narrow>
        <div className="background p-20 max-xl:p-3 rounded-lg">
          <div className="w-full max-xl:w-full">
            <p className="home1para">FEATURES</p>
            <h1 className=" text-5xl font-bold mt-3">
            We provide services in below areas:

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
                Digital Transformation:
                </h1>
              </div>
              <p className="text-xl text-gray-600">
              Many businesses are focusing on digital transformation, which involves adopting digital technologies to improve efficiency, customer experiences, and overall business operations. This drives the demand for custom software solutions that could streamline processes, enhance customer engagement, and provide data-driven insights.
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
                Cloud-Native Applications: 
                </h1>
              </div>
              <p className="text-xl text-gray-600">
              Cloud computing is a dominant trend, and businesses are favouring the development of cloud-native applications. These applications are designed to run optimally on cloud platforms, enabling scalability and flexibility.
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
                Microservices Architecture:
                </h1>
              </div>
              <p className="text-xl text-gray-600">
              The adoption of microservices architecture continues to grow. This approach involves breaking down applications into smaller, modular components that can be developed and deployed independently, allowing for easier maintenance and scalability.

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
                User-Centric Design:
                </h1>
              </div>
              <p className="text-xl text-gray-600">
              We focus on User experience (UX) and user interface (UI) design which is a critical factor in software development. We help Businesses invest in creating intuitive and user-friendly interfaces to enhance customer satisfaction.

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
                IoT (Internet of Things) Solutions:
                </h1>
              </div>
              <p className="text-xl text-gray-600">
              IoT devices and sensors are becoming more prevalent across industries, driving the demand for custom software solutions to manage and analyse the data generated by these devices.

              </p>
            </div>
          </div>
        </div>
      </Narrow> */}

      <Getintouch />
    </div>
  );
}
