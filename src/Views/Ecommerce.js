import { React, useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import Narrow from "../Components/Common/Narrow";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ecommerce from "../Images/commerce.webp";

export default function Ecommerce() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const technologiesData = {
    Frontend: [
      {
        name: "React",
        icon: "https://admin.wac.co/uploads/react_4cfc715018.svg",
        description:
          "Build fast-loading and optimised web applications with rapid page rendering features from the constructive and interactive technology of React.",
        hasLink: true,
        link: "/services/react-js-development",
      },
      {
        name: "Next.js",
        icon: "https://admin.wac.co/uploads/next_js_7413084cb7.svg",
        description:
          "Build web applications of bespoke quality and quick loading times with the exceptional performance of the Next.js technology framework",
        hasLink: false,
      },
      {
        name: "AngularJS",
        icon: "https://admin.wac.co/uploads/Angular_JS_11808eb108.svg",
        description:
          "Our team designs dynamic web and mobile applications that provide an interactive user experience, leveraging AngularJS to deliver an engaging UX.",
        hasLink: false,
      },
      {
        name: "Vue.js",
        icon: "https://admin.wac.co/uploads/Vuejs_9db22dd83c.svg",
        description:
          "Elevate customer engagement with visually stunning, scalable and reliable interfaces for web applications through the boundless possibilities of Vue.js",
        hasLink: false,
      },
    ],
    Backend: [
      {
        name: "PHP",
        icon: "https://admin.wac.co/uploads/php_a3a7eccfb0.svg",
        description:
          "Get assistance from a robust codebase to get dynamic, swift and flexible PHP web development solutions for highly interactive web pages",
        hasLink: true,
        link: "/services/php",
      },
      {
        name: "Node.js",
        icon: "https://admin.wac.co/uploads/Node_js_bdf692ea23.svg",
        description:
          "Develop quick and scalable web pages with real-time Node.js technology to highlight your business's digital strength with solution-focused applications",
        hasLink: true,
        link: "/services/node-js",
      },
      {
        name: "MySQL",
        icon: "https://admin.wac.co/uploads/Mysql_8dd00fedbf.svg",
        description:
          "Well-suited for database management, MySQL is easy to install. Get the most robust database system to build mission-critical applications.",
        hasLink: false,
      },
      {
        name: "MongoDB",
        icon: "https://admin.wac.co/uploads/Mongo_1af6329c73.svg",
        description:
          "Incorporate the flexible schema of MongoDB to scale up and make queries much faster, while following all key features of modern databases.",
        hasLink: false,
      },
    ],
    Integrations: [
      {
        name: "PayPal",
        icon: "https://admin.wac.co/uploads/Paypal_1b285c82c3.svg",
        description:
          "Manage payment complexities for your ecommerce storefronts with PayPal to allow custom payment flows, pre-authorized payments, and reconciliation of funds from various sources.",
        hasLink: false,
      },
      {
        name: "Stripe",
        icon: "https://admin.wac.co/uploads/Stripe_3ec6446e46.svg",
        description:
          "Integrate Stripe with your ecommerce websites and mobile applications to support a wide range of payment options and ensure high-end security to protect businesses and customers.",
        hasLink: false,
      },
      {
        name: "ERP",
        icon: "https://admin.wac.co/uploads/ERP_208cbd7c98.svg",
        description:
          "Integrate your ecommerce platform with ERP to automate manual processes. Integrate payment information, order details, shipping, and customer details to reduce human errors.",
        hasLink: false,
      },
      {
        name: "CRM",
        icon: "https://admin.wac.co/uploads/CRM_d669e0f072.svg",
        description:
          "Get seamless integrations to your e-commerce systems, where CRM improves customer relationship management through expanded software functionality and automated actions.",
        hasLink: false,
      },
      {
        name: "PIM",
        icon: "https://admin.wac.co/uploads/PIM_68eeaa1328.svg",
        description:
          "Improve customer experience, minimise errors, and boost product search functions with Product Information Management (PIM) integrations to scale your marketing and sales efforts.",
        hasLink: false,
      },
    ],
    Cloud: [
      {
        name: "Amazon Web Services",
        icon: "https://admin.wac.co/uploads/AWS_2_1fe8cd3dc6.svg",
        description:
          "Provides reliable, affordable, and on-demand cloud services that enhance access, mobility and collaboration.",
        hasLink: true,
        link: "/services/amazon-web-services",
        theme: "#fef1e4",
      },
      {
        name: "Microsoft Azure",
        icon: "https://admin.wac.co/uploads/AZURE_1_cd9f7d02b0.svg",
        description:
          "Build future-ready cloud solutions, optimise workloads, simplify IT management, and get maximum ROI.",
        hasLink: true,
        link: "/services/microsoft-azure",
        theme: "#EAF8FF",
      },
      {
        name: "Google Cloud Platform",
        icon: "https://admin.wac.co/uploads/Cloud_Logo_1a33956098.svg",
        description:
          "Secure, reliable, scalable cloud services that enable fast deployment, enable smart decisions and save costs.",
        hasLink: true,
        link: "/services/google-cloud-platform",
        theme: "#f0f5ff",
      },
    ],
  };

  const tabs = ["Frontend", "Backend", "Integrations", "Cloud"];

  useEffect(() => {
    const elements = document.querySelectorAll(".ecommerce-card");

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

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <Narrow>
        {/* Page Header */}
        <div className="mb-20 mt-24 max-xl:mt-3">
          <Row className="mb-4">
            <Col>
              <nav className="text-sm text-gray-500">
                <Link
                  to="/"
                  className="hover:underline text-blue-600 transition-colors"
                >
                  Home
                </Link>{" "}
                /{" "}
                <Link
                  to="/portfolio"
                  className="hover:underline text-blue-600 transition-colors"
                >
                  Portfolio
                </Link>{" "}
                /{" "}
                <span className="text-gray-800 font-semibold">E-commerce</span>
              </nav>
            </Col>
          </Row>

          <Row className="items-center max-xl:flex-col-reverse">
            <Col md="6">
              <h1 className="delingheading">E-commerce</h1>
              <h6 className="delingcontent">
                Ready to take your business online? Our comprehensive e-commerce
                solutions help you reach more customers, boost sales, and grow
                in the digital marketplace.
              </h6>
            </Col>
            <Col md="6" className="text-end max-xl:text-center mb-4 mb-md-0">
              <img
                src={ecommerce}
                alt="E-commerce"
                className="rounded-lg w-full max-w-md mx-auto shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </Col>
          </Row>
        </div>

        {/* === Ecommerce Services Section === */}
        <section className="bg-white py-5" id="serviceContentComponent7">
          <div className="container">
            <div className="row mb-5">
              <div className="col text-center">
                <h3 className="delingheading">
                  Ecommerce Development Services
                </h3>
                <h6 className="delingcontent">
                  We adopt a rapid and reliable approach with the best
                  E-commerce services for organisations to achieve their
                  business goals. Eager to know what our expertise can
                  contribute to your business? Here we go!
                </h6>
              </div>
            </div>

            <Narrow>
              <div className="professionalservicescontainer mt-20 max-xl:mt-2 pb-32 max-xl:pb-0">
                <Row className="professionalservicesrow justify-between w-full max-xl:p-3 flex max-xl:flex-col max-xl:gap-3">
                  {[
                    {
                      img: "https://admin.wac.co/uploads/Ecommerce_consulting_a2a0a2ccd5.svg",
                      title: "E-commerce Consulting",
                      desc: "Expert consulting to build result-driven, high-functioning ecommerce sites customers love.",
                    },
                    {
                      img: "https://admin.wac.co/uploads/Hosting_and_infrastructure_0541a89f35.svg",
                      title: "Hosting and Infrastructure Management",
                      desc: "Secure and optimise your server with the best ecommerce hosting services.",
                    },
                    {
                      img: "https://admin.wac.co/uploads/Manage_and_Maintain_Application_d6ef74ee9b.svg",
                      title: "Manage and Maintain Applications",
                      desc: "Manage and maintain ecommerce apps to boost performance, reach, and reliability.",
                    },
                    {
                      img: "https://admin.wac.co/uploads/E_Commerce_Audit_928ce00f5e.svg",
                      title: "E-Commerce Audit",
                      desc: "Boost your ecommerce visibility with audits that reveal gaps in performance, conversions, and ROI.",
                    },
                    {
                      img: "https://admin.wac.co/uploads/Migration_and_Upgrade_7d656374f9.svg",
                      title: "Migration and Upgrades",
                      desc: "Migrate or upgrade with India's top ecommerce experts to unlock advanced features and growth.",
                    },
                  ].map((item, idx) => (
                    <Col key={idx} sm={12} md={2}>
                      <div className="professionalservicescard ecommerce-card">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="services5"
                          width="60"
                          height="60"
                          loading="lazy"
                          style={{ marginBottom: "10px" }}
                        />
                        <div className="text-xl font-bold">{item.title}</div>
                        <p>{item.desc}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            </Narrow>
          </div>
        </section>

        {/* === Technologies Section with Swiper === */}
        <section className="my-5">
          <h5 className="delingheading text-center mb-5">
            Technologies We Use For E-commerce
          </h5>

          <div className="flex justify-center gap-4 mb-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 border rounded transition-all duration-300 ${
                  activeTab === tab
                    ? "border-blue-500 text-blue-600 font-semibold bg-blue-50 shadow-sm"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="h-full mb-5"
          >
            {technologiesData[activeTab].map((tech, idx) => (
              <SwiperSlide key={idx}>
                <div className="h-full min-h-[300px] p-6 border rounded-lg bg-white shadow-md flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:scale-[1.02] hover:bg-gradient-to-b hover:from-white hover:to-blue-50">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-12 w-12 mb-4 object-contain transform transition-transform duration-300 hover:scale-110"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-600">{tech.description}</p>
                  {tech.hasLink && (
                    <Link
                      to={tech.link}
                      className="mt-4 text-blue-600 font-medium inline-block hover:text-blue-700 transition-colors"
                    ></Link>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </Narrow>
    </div>
  );
}
