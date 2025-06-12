import React,{useEffect,useState} from 'react'
import Narrow from '../Components/Common/Narrow'
import { Row, Col, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import ShowcaseSlider from '../Components/ShowcaseSlider'
import Getintouch from '../Components/Getintouch'

export default function PortfolioDetails() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
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
                        <span className="abouta1">Portfolio</span>
                    </Col>
                </Row>
                <Row
                    className={`header ${isVisible ? "fade-in" : ""}`}
                    style={{ marginTop: "10px" }}
                >
                    <Col>
                        <p className="text-6xl aboutheader1 text-center max-xl:text-3xl font-semibold">
                            E-commerce platform development
                        </p>
                        <p className="text-6xl aboutheader1 text-center max-xl:text-3xl font-semibold">

                            for london based company
                        </p>

                        <p className="aboutheader2 max-xl:px-3">
                            The makers of AI have announced the company will be dedicating 20% of its <br /> compute processing power over the next four years
                        </p>
                    </Col>
                </Row>
            </div>

            <div className="background rounded-lg p-32 max-xl:p-3 mt-32 mb-32">
                <h1 className="text-5xl font-bold mb-5">Introduction</h1>
                <p className="text-2xl leading-10 text-gray-700">
                    In today's fast-paced and technologically advanced world, businesses
                    rely heavily on Information Technology (IT) services to remain
                    competitive, innovative, and efficient. From streamlining operations
                    to enhancing customer experience <br />
                    <br />
                    IT services play a crucial role in transforming businesses across
                    all industries. In this blog, we will explore the significance of IT
                    services, the key benefits they offer, and how they can empower your
                    business to reach new heights. <br />
                    <br />
                    IT services encompass a wide range of solutions aimed at managing,
                    optimizing, and supporting the technology infrastructure of a
                    business. This includes hardware and software management, network
                    administration, cybersecurity, data backup and recovery, cloud
                    services, and more. Whether you run a small startup or a large
                    enterprise, leveraging the right IT services can have a profound
                    impact on your business's success. One of the primary benefits of
                    adopting IT services is their ability to streamline various business
                    operations. Automated processes, such as enterprise resource
                    planning (ERP) systems, can integrate different departments and make
                    data accessible in real-time.
                </p>

                <img
                    src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/portfolio-details-2.jpg"
                    className="mt-10"
                    alt=""
                />

                <p className="text-2xl leading-10 text-gray-700 mt-10">
                    As businesses increasingly rely on digital technologies, the risk of
                    cyber threats also grows. A robust IT service provider will
                    implement cutting-edge cybersecurity measures to safeguard your
                    valuable data, sensitive information, and intellectual property.
                    From firewall protection to regular vulnerability assessments, a
                    comprehensive security strategy ensures that your business stays
                    protected against cyberattacks.
                </p>

                <div className="mt-20 text-3xl font-normal text-black px-32 border-l-8 border-blue-700 py-16 max-xl:p-3">
                    <i>
                        In a dynamic business environment, scalability is crucial. IT
                        services provide the flexibility to scale up or down your
                        resources based on changing business needs. Cloud services, for
                        instance, allow seamless expansion of storage and computational
                        power
                    </i>

                    <div className="flex gap-4 mt-16">
                        <div className="">
                            <svg
                                className="m-auto"
                                xmlns="http://www.w3.org/2000/svg"
                                height={40}
                                viewBox="0 0 448 512"
                            >
                                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-lg font-semibold">Serana Belluci</p>
                            <p className="text-lg font-normal">Product Designer</p>
                        </div>
                    </div>
                </div>

                <p className="text-2xl leading-10 text-gray-700 mt-20">
                    Customer experience has become a key differentiator in today's
                    competitive landscape. IT services enable businesses to personalize
                    customer interactions, provide efficient support through various
                    channels, and offer seamless online experiences. <br />
                    <br />
                    IT services facilitate data collection, storage, analysis, and
                    visualization, turning raw information into actionable intelligence.
                    By harnessing the power of data analytics, businesses can identify
                    trends, customer preferences, and areas for improvement, leading to
                    more effective strategies and increased profitability. Disruptions,
                    such as natural disasters or system failures, can severely impact a
                    business's operations. IT services include robust disaster recovery
                    and backup solutions, ensuring that critical data is protected and
                    can be swiftly recovered in case of any unforeseen events. This
                    level of preparedness helps maintain business continuity and
                    minimizes downtime, <br />
                    <br />
                    Whether it's through chatbots, mobile apps, or responsive websites,
                    IT services empower businesses to exceed customer expectations and
                    build lasting relationships. Data is a goldmine of valuable insights
                    that can help businesses make informed decisions.
                </p>

                <h1 className="text-5xl font-bold mb-5 mt-20">
                    Ensuring Business Continuitiy
                </h1>
                <p className="text-2xl leading-10 text-gray-700 mt-16">
                    Disruptions, such as natural disasters or system failures, can
                    severely impact a business's operations. IT services include robust
                    disaster recovery and backup solutions, ensuring that critical data
                    is protected and can be swiftly recovered in case of any unforeseen
                    events. <br />
                    <br />
                    This level of preparedness helps maintain business continuity and
                    minimizes downtime, thus safeguarding your reputation and revenue.
                    This includes hardware and software management, network
                    administration, cybersecurity, data backup and recovery, cloud
                    services, and more. Whether you run a small startup or a large
                    enterprise, leveraging the right IT services can have a profound
                    impact on your business's success. One of the primary benefits of
                    adopting IT services is their ability to streamline various business
                    operations.From firewall protection to regular vulnerability
                    assessments provide efficient support through various channels, and
                    offer seamless online experiences.
                </p>

                <h1 className="text-5xl font-bold mb-5 mt-20">
                    Enhancing Cybersecurity
                </h1>
                <p className="text-2xl leading-10 text-gray-700 mt-16">
                    For businesses without an in-house IT team, managed IT support services are invaluable. A reliable IT service provider offers proactive monitoring, maintenance, and troubleshooting for your IT systems. They can identify and resolve potential issues before they escalate, <br />
                    <br />
                    Virtualization is the process of creating virtual versions of hardware or software resources, allowing multiple applications or operating systems to run on a single physical server. This technology optimizes resource utilization, reduces hardware costs, and simplifies IT management. By embracing virtualization services, businesses can enhance flexibility, increase efficiency, and easily deploy new applications without the need for additional physical hardware. Data-driven decision-making is a key factor in modern business success. IT services provide advanced business intelligence and analytics tools that can process and analyze vast amounts of data, extracting meaningful insights.
                </p>
                <img src='https://wpriverthemes.com/synck/wp-content/uploads/2024/01/portfolio-details-3.jpg' alt="image1" className="my-10" />
                <p className="text-2xl leading-10 text-gray-700 mt-16">As cyber threats continue to evolve, having a robust network security solution is paramount. IT service providers offer comprehensive security measures such as firewalls, intrusion detection systems, and antivirus software to safeguard your network from unauthorized access.<br />
                    <br />
                    IT services have evolved into an indispensable component of modern business success. From cloud computing and managed IT support to network security and data analytics, each service plays a crucial role in empowering businesses to thrive in a technology-driven world. By embracing these IT solutions and partnering with the right service provider, your business can unlock its full potential, achieve operational excellence, and stay ahead of the competition in today's dynamic market. In conclusion, IT services have become the backbone of modern businesses, providing a multitude of benefits that drive growth, efficiency, and success.</p>
            </div>
            <div className="assitance py-28 mb-32">
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
                    <div className="assitanttext w-9/12 mx-auto text-center">
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
        </Narrow >
        </>
    )
}
