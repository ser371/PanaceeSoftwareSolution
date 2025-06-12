import { React, useEffect, useState, useRef } from "react";
import { Container, Row, Col, Button, Card } from "reactstrap";
import Narrow from "../Components/Common/Narrow";
import { Link } from "react-router-dom";
import Getintouch from "../Components/Getintouch";
import img from "../Images/Title_8-distinguished-merits-of-CRM-Software-Solutions-for-businesses.jpg"
import img1 from"../Images/what-does-it-mean-to-customer-centric.webp"
import img2 from '../Images/preview.png';
import img3 from '../Images/lead generation.webp';

export default function CRM() {
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

  return (
    <div>
      <Narrow>
        <div className="mb-10 mt-24 max-xl:mt-3">
          <Row>
            <Col className="firstbtnsec ">
              <span className="abouta1">CRM Solutions</span>
            </Col>
          </Row>
          <Row
            className={`header ${isVisible ? "fade-in" : ""}`}
            style={{ marginTop: "10px" }}
          >
            <Col>
              <p className="aboutheader1 max-xl:text-3xl font-semibold">
              Revolutionize Your Customer Relationships with Our CRM Solutions
              </p>

              <p className="aboutheader2 max-xl:px-3 text-2xl">
              Welcome to Panaceainfosolutions, your dedicated partner in revolutionising customer relationships through cutting-edge CRM software solutions.

              </p>
            </Col>
          </Row>
        </div>
      </Narrow>

      <div className="mb-32">
        <Narrow>
          <img
          className="w-full rounded-lg"
            src={img}
            alt=""
          />
        </Narrow>
      </div>

      <Narrow>
        <div className="background p-20 max-xl:p-3 rounded-lg">
          <div className="flex max-xl:flex-col gap-14">
            <div className="w-1/2 max-xl:w-full">
              <p className="home1para">CRM SOLUTIONS</p>
              <h1 className=" text-5xl font-bold mt-3">Engine of progress</h1>
              <p className="homepara3">
              At Panacee, we believe that strong customer relationships are at the heart of every successful business, and our mission is to empower organisations with the tools they need to foster meaningful connections, streamline operations, and achieve remarkable growth.
              <br /><br />
              At Panaceainfosolutions we are a team of passionate individuals with diverse expertise in CRM software development, customer relationship management, and business consultancy. Our professionals are committed to staying at the forefront of technology trends to provide you with innovative solutions that give your business a competitive edge.
              </p>
            </div>
            <div className="flex w-1/2 max-xl:w-full gap-2">
              <img
                src={img2}
                alt=""
                className="frontimg w-1/2"
              />
              <img
                src={img3}
                alt=""
                className="frontimg w-1/2"
              />
            </div>
          </div>
        </div>
      </Narrow>

      <div className="productivity mb-32 mt-32">
        <Narrow>
          <div className="py-28 max-xl:py-5 flex gap-24 justify-between max-xl:flex-col">
            <div className="w-1/2 max-xl:w-full">
              <img
                className="rounded-lg mx-auto"
                src={img1}
                alt=""
              />
            </div>

            <div className="fetureproductbox max-xl:mt-10 section-title w-1/2 max-xl:w-full">
              <div>
                <div>
                  <h6 className="inhow">IMPORTANCE</h6>
                  <h1 className="fetureproducthead">About Travel CRM Software Solutions</h1>
                  <h4 className="fetureproductabout mt-3 leading-8">
                  Panacee Infosolutions offers Travel CRM Software designed to streamline business operations and elevate customer satisfaction within the travel industry. Our comprehensive CRM solution simplifies management tasks for tour operators and travel agents, providing a unified platform for all business needs.  Our cloud-based system empowers you to effortlessly monitor email correspondence, manage leads, conduct follow-ups, organize itineraries, generate invoices and vouchers, optimize sales funnels, and access real-time customer insights, driving increased conversions and business success.
                  </h4>
                </div>
              </div>

              {/* <div className="flex-col max-xl:gap-0 max-xl:flex-col mt-5">
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
              </div> */}
            </div>
          </div>
        </Narrow>
      </div>

      <div className="py-10">
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
                <div className="text-xl font-bold">B2B/B2C Portal</div>
                <p>Efficiently connect businesses and consumers with our B2B/B2C portal.</p>
              </Card>
            </div>
            <div sm="1" md="2">
              <div className="professionalservicescard bg-white">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-2-2.svg"
                  alt=""
                  className="services5"
                />
                <div className="text-xl font-bold">Corporate Portal</div>
                <p>Boost corporate efficiency with our streamlined portal solution.</p>
              </div>
            </div>
            <div sm="1" md="2">
              <Card className="professionalservicescard">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-3-2.svg"
                  alt=""
                  className="services5"
                />
                <div className="text-xl font-bold">B2B/B2C CRM</div>
                <p>Optimize client relationships with our versatile B2B/B2C CRM solution.</p>
              </Card>
            </div>
            <div sm="1" md="2">
              <Card className="professionalservicescard">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/service-icon-4-2.svg"
                  alt=""
                  className="services5"
                />
                <div className="text-xl font-bold">Travel App</div>
                <p>Navigate your adventures seamlessly with our intuitive Travel App.</p>
              </Card>
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
            Key Features of CRM Software

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
                Lead Management
                </h1>
              </div>
              <p className="text-xl text-gray-600">
              Enhance lead acquisition with our comprehensive lead generation tool. Gather leads seamlessly from various platforms such as Facebook, Instagram, WhatsApp, and Google Sheets, all in one centralized system.
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
                Follow-Ups 
                </h1>
              </div>
              <p className="text-xl text-gray-600">
              Benefit from our sophisticated query management capability, ensuring efficient handling of all inquiries, payments, and follow-ups. Receive notifications for unresolved queries, ensuring nothing slips through the cracks.
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
                Quotation Builder
                </h1>
              </div>
              <p className="text-xl text-gray-600">
              Effortlessly generate quotations using our fully automated master system. Easily compute taxes, subtotals, and totals with seamless precision.

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
                Masters
                </h1>
              </div>
              <p className="text-xl text-gray-600">
              Optimize your data organization using our extensive master data functionality. Seamlessly oversee destinations, accommodations, activities, sightseeing options, transfers, and documentation with utmost simplicity.

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
                Supplier Communication
                </h1>
              </div>
              <p className="text-xl text-gray-600">
              Enhance team cooperation and supplier interaction with our integrated CRM Travel feature easily accessible at your fingertips.

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
                Invoice and Voucher
                </h1>
              </div>
              <p className="text-xl text-gray-600">
              Travel CRM platforms empower travel agencies to monitor their staff's invoices, voucher identifications, and terms and conditions effectively.

              </p>
            </div>
          </div>
        </div>
      </Narrow>

      

      <Getintouch />
    </div>
  );
}
