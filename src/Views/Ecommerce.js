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
  const [isVisible, setIsVisible] = useState(false);
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
    setIsVisible(true);
  }, []);

  return (
    <div>
      <Narrow>
        {/* Page Header */}
        <div className="mb-36 mt-24 max-xl:mt-3">
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
              <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                E-commerce
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ready to take your business online? Our comprehensive e-commerce
                solutions help you reach more customers, boost sales, and grow
                in the digital marketplace.
              </p>
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
                <h2 className="display-5 fw-regular mb-3 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                  Ecommerce Development Services
                </h2>
                <p className="lead text-muted max-w-3xl mx-auto">
                  We adopt a rapid and reliable approach with the best
                  E-commerce services for organisations to achieve their
                  business goals. Eager to know what our expertise can
                  contribute to your business? Here we go!
                </p>
              </div>
            </div>

            <div className="row row-cols-md-2 row-cols-lg-3 g-4">
              {[
                {
                  img: "https://admin.wac.co/uploads/Ecommerce_consulting_a2a0a2ccd5.svg",
                  title: "E-commerce Consulting",
                  desc: "Get our consulting services that guide your business for result-oriented and highly functional ecommerce sites with delightful customer experiences.",
                },
                {
                  img: "https://admin.wac.co/uploads/Hosting_and_infrastructure_0541a89f35.svg",
                  title: "Hosting and Infrastructure Management",
                  desc: "Secure and optimise your server with the best ecommerce hosting services and ensure peak performance with infrastructure management.",
                },
                {
                  img: "https://admin.wac.co/uploads/Manage_and_Maintain_Application_d6ef74ee9b.svg",
                  title: "Manage and Maintain Applications",
                  desc: "We manage and maintain applications across multiple channels to maximise opportunities with professional ecommerce development services.",
                },
                {
                  img: "https://admin.wac.co/uploads/E_Commerce_Audit_928ce00f5e.svg",
                  title: "E-Commerce Audit",
                  desc: "Scale your ecommerce site's visibility through an ecommerce audit to identify the key areas of improvement, performance, conversions, and ROI.",
                },
                {
                  img: "https://admin.wac.co/uploads/Migration_and_Upgrade_7d656374f9.svg",
                  title: "Migration and Upgrades",
                  desc: "Get the services of the top ecommerce development company in India and migrate to ecommerce platforms or upgrade for the advanced features.",
                },
                {
                  img: "https://admin.wac.co/uploads/Integration_16e4b2da81.svg",
                  title: "Integration",
                  desc: "Integrate your ecommerce site with a huge array of third-party platforms and solutions to gain additional business capabilities and expand to new markets.",
                },
              ].map((item, idx) => (
                <div className="col" key={idx}>
                  <div className="p-4 border h-100 bg-white rounded-lg shadow-sm text-center transition-all duration-300 hover:shadow-xl hover:border-blue-200 hover:scale-[1.02] hover:bg-gradient-to-b hover:from-white hover:to-blue-50">
                    <div className="mb-4 p-3 bg-blue-50 rounded-full inline-block transform transition-transform duration-300 hover:scale-110">
                      <img
                        alt={item.title}
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        src={item.img}
                        className="mb-0"
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <h3 className="fw-bold text-xl mb-3 text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray mb-0 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Technologies Section with Swiper === */}
        <section className="my-20">
          <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Technologies We Use For E-commerce
          </h2>

          <div className="flex justify-center gap-4 mb-6">
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
            className="h-full"
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
                    >
                      Learn more →
                    </Link>
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
