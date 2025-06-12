import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "reactstrap";
import Narrow from "../Components/Common/Narrow";
import { Link } from "react-router-dom";
import Getintouch from "../Components/Getintouch";
import JobCard from "./JobCard";

function Career() {
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
    <>
      <div className="darkbg bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-1-1.svg')] bg-cover bg-left py-1 mb-32">
        <Narrow>
          <div className="mb-36 mt-24 max-xl:mt-3">
            <div>
              <div className="firstbtnsec ">
                <span className="abouta1 bg-white">Career</span>
              </div>
            </div>
            <div
              className={`header ${isVisible ? "fade-in" : ""}`}
              style={{ marginTop: "10px" }}
            >
              <div>
                <p className="aboutheader1 max-xl:text-3xl font-semibold text-white">
                  You have great opportunities
                </p>
                <p className="aboutheader1 max-xl:text-3xl font-semibold"> </p>

                <p className="aboutheader2 max-xl:px-3 text-2xl text-white leading-10">
                  If you are a talented and ambitious individual looking to make
                  a mark in your career, we <br /> invite you to explore our
                  career opportunities.
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

      <div className="bg-[#F3F6FD]">
        <Narrow>
          <div className="OURCOMPANY py-5 px-3">
            <p className="delinglogheading">WHAT WE’RE OFFERING</p>
            <div className="flex justify-between max-md:flex-col">
              <div className="w-9/12">
                <h1 style={{ fontSize: "45px" }} className=" font-semibold">
                  Why our company is too popular?
                </h1>
                <h5 style={{ marginTop: "20px" }} className="text-lg">
                  Contact us today to begin your journey!
                </h5>
              </div>
              <div className="flex justify-end w-3/12 max-md:w-full max-md:justify-start max-md:my-3">
                <Link to="/contactus">
                  {" "}
                  <Button className=" bg-[#1351d8] py-3 px-7 rounded-full text-white">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <div className="my-2">
                <img
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/hero-career-about.jpg"
                  alt=""
                  className="ourpopulaityimage w-full"
                />
                <p style={{ marginTop: "30px" }}>
                  Our team is a collective force of top talents, pros, experts,
                  and visionaries from diverse fields. With a passion for
                  excellence, our professionals bring a wealth of experience and
                  knowledge to every project. At Slack, we are committed to
                  delivering nothing short of excellence. From concept to
                  implementation, we maintain the highest standards of quality
                  and craftsmanship, leaving no room for compromise.
                </p>
              </div>
            </div>
            <br />
            <div className="grid grid-cols-3 gap-2 max-md:grid-cols-1">
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

      <div className="bg-black py-3 mt-40">
        <Narrow>
          <div className="whatweareoffering mt-32 max-xl:mt-5 max-xl:px-3">
            <Row>
              <Col md="6">
                <p className="delinglogheading">WHAT WE’RE OFFERING</p>
                <h1 className="delingheading text-white">
                  Dealing in all professional <br />
                  IT services.
                </h1>
              </Col>
              <Col md="6">
                <h6 className="delingcontent text-white">
                  One fundamental aspect of IT services is infrastructure
                  management. This involves the design, implementation, and
                  maintenance of the hardware, software, networks, and servers.
                </h6>
              </Col>
            </Row>
          </div>
        </Narrow>
      </div>
      <div className="bg-black py-14 max-xl:py-2 mb-20">
        <Narrow>
          <div className="professionalservicescontainer pb-32 max-xl:pb-0">
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
      </div>

      <Narrow>
        <div className="bg-[#F3F6FD] mb-10 p-10 rounded-xl">
          <div className="home1para text-center">OPENING IN OUR COMPANY</div>
          <div className="text-center text-4xl font-bold">
            Job openings and career opportunities
          </div>
          <div className="grid grid-cols-2 max-xl:grid-cols-1 gap-x-12">
            <JobCard
              position="Front End Developer"
              field="Development"
              location="New Delhi, India"
              type="Internship and Training"
              time="Full-Time"
              stipend="10K - 20K"
              jobId="J0001"
              responsibilites={[
                "Develop new user-facing features using HTML, CSS, and JavaScript.",
                "Build reusable code and libraries for future use.",
                "Ensure the technical feasibility of UI/UX designs.",
                "Optimize applications for maximum speed and scalability.",
                "Collaborate with other team members and stakeholders.",
                "Maintain and improve the website.",
                "Implement responsive design for mobile and desktop views.",
                "Collaborate with back-end developers and web designers to improve the usability.",
                "Ensure high-quality graphic standards and brand consistency.",
                "Stay up-to-date on emerging technologies.",
              ]}
              jobDesc="We are seeking a skilled and passionate Front-End Developer to
              join our dynamic team. As a Front-End Developer, you will be
              responsible for implementing visual and interactive elements
              that users engage with through their web browser when using a
              web application. You will work closely with our UX/UI designers
              and back-end developers to bridge the gap between design and
              technical implementation, taking an active role on both sides
              and defining how the application looks and functions."
              requirements={[
                "Proven work experience as a Front-End Developer.",
                "Proficient in HTML, CSS, JavaScript, and jQuery.",
                "Experience with CSS frameworks like Bootstrap or Tailwind CSS.",
                "Familiarity with browser testing and debugging.",
                "In-depth understanding of the entire web development process (design, development, and deployment).",
                "Knowledge of SEO principles.",
                "Familiarity with software like Adobe Suite, Photoshop, and content management systems.",
                "An ability to perform well in a fast-paced environment.",
                "Excellent analytical and multitasking skills.",
                "Strong attention to detail and problem-solving skills.",
                "Bachelor’s degree in Computer Science, Engineering, or a related field is preferred.",
              ]}
              skills = {[
                "Experience with front-end frameworks like React, Angular, or Vue.js.",
                "Knowledge of RESTful APIs.",
                "Understanding of code versioning tools such as Git.",
                "Experience with graphic design applications (e.g., Adobe Illustrator).",
              ]}
              benefits = {[
                "Competitive salary and performance-based bonuses.",
                "Health, dental, and vision insurance.",
                "Retirement plan with company match.",
                "Generous paid time off and holidays.",
                "Opportunities for professional development and career growth.",
                "Flexible working hours and remote work options.",
                "Collaborative and innovative work environment.",
              ]}
            />
            <JobCard
              position="Backend Developer"
              field="Development"
              location="New Delhi, India"
              type="Internship and Training"
              time="Part-Time"
              stipend="15K - 20K"
              jobId="J0002"
              responsibilites={[
                "Develop server-side logic and APIs using Node.js, Python, or other backend technologies.",
                "Design and implement data storage solutions, including databases and file systems.",
                "Integrate user-facing elements developed by front-end developers with server-side logic.",
                "Implement security and data protection measures.",
                "Optimize application performance and scalability.",
                "Collaborate with other team members, including front-end developers and designers, to deliver high-quality software solutions.",
                "Stay up-to-date on emerging technologies and best practices in backend development.",
              ]}
              jobDesc="We are looking for a talented Backend Developer to join our team. You will be responsible for developing and maintaining the server-side logic of our web applications, ensuring high performance and responsiveness to requests from the front-end. You will also collaborate with our front-end developers, designers, and other team members to integrate user-facing elements with server-side logic."
              requirements={[
                "Bachelor's degree in Computer Science, Engineering, or a related field.",
                "Proven experience as a Backend Developer or similar role.",
                "Strong proficiency in one or more backend programming languages such as Node.js, Python, Java, or Ruby.",
                "Experience with relational and non-relational databases such as MySQL, MongoDB, or PostgreSQL.",
                "Knowledge of server-side frameworks such as Express.js, Django, or Flask.",
                "Familiarity with RESTful APIs and web services.",
                "Experience with version control systems (e.g., Git) and CI/CD pipelines.",
                "Excellent problem-solving and communication skills.",
                "Ability to work independently and as part of a team in a fast-paced environment.",
              ]}
              skills = {[
                "Experience with front-end frameworks like React, Angular, or Vue.js.",
                "Knowledge of RESTful APIs.",
                "Understanding of code versioning tools such as Git.",
                "Experience with graphic design applications (e.g., Adobe Illustrator).",
              ]}
              benefits = {[
                "Competitive salary based on experience and qualifications.",
                "Health, dental, and vision insurance.",
                "Retirement savings plan (401k or similar).",
                "Flexible work hours and remote work options.",
                "Professional development opportunities.",
                "Collaborative and inclusive work environment.",
              ]}
            />
            <JobCard
              position="Business Analyst"
              field="Business"
              location="New Delhi, India"
              type="Permanent Job"
              time="Full-Time"
              stipend="15K - 20K"
              jobId="J0003"
              responsibilites={[
                "Develop server-side logic and APIs using Node.js, Python, or other backend technologies.",
                "Design and implement data storage solutions, including databases and file systems.",
                "Integrate user-facing elements developed by front-end developers with server-side logic.",
                "Implement security and data protection measures.",
                "Optimize application performance and scalability.",
                "Collaborate with other team members, including front-end developers and designers, to deliver high-quality software solutions.",
                "Stay up-to-date on emerging technologies and best practices in backend development.",
              ]}
              jobDesc="We are looking for a talented Backend Developer to join our team. You will be responsible for developing and maintaining the server-side logic of our web applications, ensuring high performance and responsiveness to requests from the front-end. You will also collaborate with our front-end developers, designers, and other team members to integrate user-facing elements with server-side logic."
              requirements={[
                "Bachelor's degree in Computer Science, Engineering, or a related field.",
                "Proven experience as a Backend Developer or similar role.",
                "Strong proficiency in one or more backend programming languages such as Node.js, Python, Java, or Ruby.",
                "Experience with relational and non-relational databases such as MySQL, MongoDB, or PostgreSQL.",
                "Knowledge of server-side frameworks such as Express.js, Django, or Flask.",
                "Familiarity with RESTful APIs and web services.",
                "Experience with version control systems (e.g., Git) and CI/CD pipelines.",
                "Excellent problem-solving and communication skills.",
                "Ability to work independently and as part of a team in a fast-paced environment.",
              ]}
              skills = {[
                "Experience with front-end frameworks like React, Angular, or Vue.js.",
                "Knowledge of RESTful APIs.",
                "Understanding of code versioning tools such as Git.",
                "Experience with graphic design applications (e.g., Adobe Illustrator).",
              ]}
              benefits = {[
                "Competitive salary based on experience and qualifications.",
                "Health, dental, and vision insurance.",
                "Retirement savings plan (401k or similar).",
                "Flexible work hours and remote work options.",
                "Professional development opportunities.",
                "Collaborative and inclusive work environment.",
              ]}
            />
          </div>
        </div>
      </Narrow>

      <Narrow>
        <div className=" bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2024/01/bg-shape-11.svg')] rounded-xl bg-cover bg-[#F3F6FD] mb-20 text-center py-20">
          <div className="text-3xl font-semibold">
            Need any further assistance ?
          </div>
          <p className="text-gray-600 text-2xl mt-3">
            Feel free to reach out for any inquiries or assistance.
          </p>
          <Link to="/contactus">
            <button className="mt-4 bg-blue-700 text-white text-lg py-3 px-5 rounded-xl">
              Get in Touch
            </button>
          </Link>
        </div>
      </Narrow>

      <Narrow>
        <div className="darkbg rounded-xl bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2024/01/bg-shape-mentors.svg')] bg-cover bg-bottom py-14 px-28">
          <div className="flex justify-between">
            <div>
              <div className="home1para">MENTORS</div>
              <div className="text-5xl text-white font-bold mt-3">
                Our leadership and mentors
              </div>
              <p className="text-xl text-gray-200 mt-3">
                Our team is a collective force of top talents, experts, and
                visionaries from diverse fields.
              </p>
            </div>
            <Link to="/contactus" className="my-auto">
              <button className="text-white bg-blue-700 h-14 px-4 rounded-xl my-auto">
                Meet Our Experts Now
              </button>
            </Link>
          </div>
          <hr className="my-20 bg-gray-200" />

          <div className="grid grid-cols-4 gap-10">
            <div>
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/team4.png"
                className="mx-auto"
                alt=""
              />
              <div className="text-xl text-white font-bold text-center">
                Jennifer Linda
              </div>
              <div className="text-xl font-semibold text-blue-700 text-center">
                Product Designer
              </div>
            </div>
            <div>
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/team4.png"
                className="mx-auto"
                alt=""
              />
              <div className="text-xl text-white font-bold text-center">
                Jennifer Linda
              </div>
              <div className="text-xl font-semibold text-blue-700 text-center">
                Product Designer
              </div>
            </div>
            <div>
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/team4.png"
                className="mx-auto"
                alt=""
              />
              <div className="text-xl text-white font-bold text-center">
                Jennifer Linda
              </div>
              <div className="text-xl font-semibold text-blue-700 text-center">
                Product Designer
              </div>
            </div>
            <div>
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/team4.png"
                className="mx-auto"
                alt=""
              />
              <div className="text-xl text-white font-bold text-center">
                Jennifer Linda
              </div>
              <div className="text-xl font-semibold text-blue-700 text-center">
                Product Designer
              </div>
            </div>
            <div>
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/team4.png"
                className="mx-auto"
                alt=""
              />
              <div className="text-xl text-white font-bold text-center">
                Jennifer Linda
              </div>
              <div className="text-xl font-semibold text-blue-700 text-center">
                Product Designer
              </div>
            </div>
            <div>
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/team4.png"
                className="mx-auto"
                alt=""
              />
              <div className="text-xl text-white font-bold text-center">
                Jennifer Linda
              </div>
              <div className="text-xl font-semibold text-blue-700 text-center">
                Product Designer
              </div>
            </div>
            <div>
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/team4.png"
                className="mx-auto"
                alt=""
              />
              <div className="text-xl text-white font-bold text-center">
                Jennifer Linda
              </div>
              <div className="text-xl font-semibold text-blue-700 text-center">
                Product Designer
              </div>
            </div>
            <div>
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/team4.png"
                className="mx-auto"
                alt=""
              />
              <div className="text-xl text-white font-bold text-center">
                Jennifer Linda
              </div>
              <div className="text-xl font-semibold text-blue-700 text-center">
                Product Designer
              </div>
            </div>
          </div>
        </div>
      </Narrow>

      <Getintouch />
    </>
  );
}

export default Career;
