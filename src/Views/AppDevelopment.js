import React, { useEffect, useState } from "react";
import Narrow from "../Components/Common/Narrow";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
import ShowcaseSlider from "../Components/ShowcaseSlider";
import Getintouch from "../Components/Getintouch";
import img1 from "../Images/App-development-process-Feature-image.jpg"
import img2 from "../Images/app-development-courses-header-image.png";

export default function AppDevelopment() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Narrow>
        <div className="mb-24 mt-24 max-xl:mt-3">
          <Row>
            <Col className="firstbtnsec ">
              <span className="abouta1">App Development</span>
            </Col>
          </Row>
          <Row
            className={`header ${isVisible ? "fade-in" : ""}`}
            style={{ marginTop: "10px" }}
          >
            <Col>
              <p className="text-6xl aboutheader1 text-center max-xl:text-3xl font-semibold">
                Unlock Your Business Potential with Customized <br /> App
                Development Solutions
              </p>

              <p className="aboutheader2 max-xl:px-3">
                Transform Your Vision into Reality with Innovative Mobile
                Applications Tailored to Your Needs
              </p>
            </Col>
          </Row>
        </div>

        <div className="background rounded-lg p-32 max-xl:p-3 mt-32 mb-32">
          <h1 className="text-5xl font-bold mb-5">App Development Solutions</h1>
          <p className="text-2xl leading-10 text-gray-700">
            At Panacea Infosolutions, we don't just build apps; we craft
            experiences. Harnessing the power of cutting-edge technology and
            innovative design, we specialize in developing customized mobile
            applications that elevate your brand and engage your audience like
            never before.
          </p>

          <img
            src={img1}
            className="mt-10 w-full"
            alt=""
          />

          <p className="text-2xl leading-10 text-gray-700 mt-10">
            Why Choose Panacea Infosolutions for Your App Development Needs? <br /><br />
            <span className="font-bold">Tailored Solutions</span>: Our expert team takes the time to understand
            your unique business requirements and objectives to deliver
            tailor-made app solutions that align perfectly with your vision. <br />
            <span className="font-bold">Innovative Design</span>: We blend creativity with functionality to create
            visually stunning and user-friendly interfaces that captivate users
            and enhance their overall experience. <br /> <span className="font-bold">Advanced Technology</span>:
            Leveraging the latest advancements in mobile app development
            technology, we ensure that your app is built to perform seamlessly
            across all devices and platforms. <br /> <span className="font-bold">Agile Development Process</span>: Our
            agile development methodology ensures rapid delivery of high-quality
            apps, allowing you to stay ahead of the competition and adapt to
            evolving market trends.
          </p>

          <h1 className="text-3xl font-bold mt-20">
          Discovery
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-3">
          We begin by conducting in-depth research and analysis to gain a thorough understanding of your business objectives, target audience, and market landscape.
          </p>
          <h1 className="text-3xl font-bold mt-20">
          Design
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-3">
          Our team of talented designers then translates your vision into visually stunning app designs that reflect your brand identity and resonate with your target audience.
          </p>
          <h1 className="text-3xl font-bold mt-20">
          Development
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-3">
          Using the latest tools and technologies, our experienced developers bring your app to life, ensuring seamless functionality and optimal performance across all devices.
          </p>
          <h1 className="text-3xl font-bold mt-20">
          Testing
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-3">
          We conduct rigorous testing at every stage of the development process to identify and address any bugs or issues, ensuring that your app meets the highest quality standards.
          </p>
          <h1 className="text-3xl font-bold mt-20">
          Deployment 
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-3">
          Once your app is ready, we handle the deployment process, ensuring a smooth and hassle-free launch on the App Store and Google Play Store.
          </p>
          <h1 className="text-3xl font-bold mt-20">
          Support & Maintenance 
          </h1>
          <p className="text-2xl leading-10 text-gray-700 mt-3">
          Our commitment to excellence doesn't end with the launch of your app. We provide ongoing support and maintenance services to ensure that your app continues to perform flawlessly and remains up-to-date with the latest technologies and trends.
          </p>
          <img
            src={img2}
            alt="image1"
            className="my-10 w-full"
          />
          <p className="text-2xl leading-10 text-gray-700 mt-16">
          Ready to take your business to the next level with a customized mobile app? Contact us today to schedule a consultation with one of our app development experts and kickstart your app development journey with Panacea Infosolutions.
          </p>
        </div>
        <div className="assitance py-28 mb-32 ">
          <Row>
            <Col className="assistanceimg">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-4.png"
                alt=""
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-3.png"
                alt=""
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-2.png"
                alt=""
              />
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/small-img-1.png"
                alt=""
              />
            </Col>
          </Row>

          <div>
            <div className="assitanttext w-9/12 mx-auto text-center ">
              <h1 className="text-4xl font-bold ">
                Need any further assitance?
              </h1>
              <h3 className="text-2xl text-gray-200  ">
                Feel free to reach out for any inquiries or assistance.
              </h3>
              <Link to="/contactus">
                <Button className="bookappoinmentnow">
                  Book an appointment now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Narrow>
      <div className="py-24 max-xl:py-5 px-3 background">
        <Narrow>
          <Row>
            <Col md="4" className="mt-28 max-xl:mt-5">
              <p className="home1para">PROJECTS</p>
              <h1 className="empowermentHeading">
                Showcase of our recognized work.
              </h1>
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
      <Narrow>
        <Getintouch />
      </Narrow>
    </>
  );
}
