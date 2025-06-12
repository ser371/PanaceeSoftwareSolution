import React,{useEffect,useState} from 'react'
import { Row, Col } from 'reactstrap';

import Narrow from '../Components/Common/Narrow'
import Getintouch from '../Components/Getintouch'

export default function Portfolio() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      setIsVisible(true);
    }, []);


    return (
        <Narrow class="max-md:px-2">
            <div className="mb-24 mt-24 max-xl:mt-3">
                <Row>
                    <Col className="firstbtnsec ">
                        <span className="abouta1">Our Projects</span>
                    </Col>
                </Row>
                <Row
                    className={`header ${isVisible ? "fade-in" : ""}`}
                    style={{ marginTop: "10px" }}
                >
                    <Col>
                        <p className="aboutheader1 max-xl:text-3xl font-semibold">
                            We are doing world class {" "}
                        </p>
                        <p className="aboutheader1 max-xl:text-3xl font-semibold">
                            {" "}
                            projects in your way
                        </p>

                        <p className="aboutheader2 max-xl:px-3">
                            Our projects are born from a passion for innovation that knows no bounds. We see challenges<br /> as opportunities to push the envelope and explore new frontiers.
                        </p>
                    </Col>
                </Row>
            </div>
            

            <div className='grid grid-cols-4 gap-3 max-lg:grid-cols-2 my-5 max-md:grid-cols-1 max-md:px-4 max-md:gap-40 '>
                <div className='flex flex-col h-full max-md:mb-10'>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-1.png')] bg-cover bg-center rounded-xl p-5 text-2xl text-white" style={{ minHeight: '500px' }}>
                        <div>E-commerce platform development.</div>
                    </div>
                    <div className='flex h-full flex-col bg-[#1C1C1C] text-white rounded-xl px-5 py-4 my-3' >
                        <div className='mb-3  text-xl'>Woo Commerce</div>
                        <div className='text-sm text-[#ffffffb3]'>A E-commerce site for london based company</div>
                    </div>
                </div>

                <div className='flex flex-col h-full'>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-2.png')] bg-cover bg-center rounded-xl p-5 text-2xl " style={{ minHeight: '500px' }}>
                        <div className='w-2/3'>Electronic brand marketing.</div>

                    </div>
                    <div className=' flex h-full flex-col bg-[#CECDCB] text-black rounded-xl px-5 py-4 my-3' >
                        <div className='mb-3  text-xl'>Branding for Studio</div>
                        <div className='text-sm text-[#1c1c1cb3]'>Boosting service for electronic based company</div>
                    </div>
                </div>
                <div className='flex flex-col h-full'>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2024/01/project-3.jpg')] bg-cover bg-center rounded-xl p-5 text-2xl " style={{ minHeight: '500px' }}>
                        <div className='w-2/3'>Mobile app development in ios.</div>
                    </div>
                    <div className='flex h-full flex-col bg-[#F1F1F1] text-black rounded-xl px-5 py-4 my-3' >
                        <div className='mb-3 text-xl'>Swift App Development</div>
                        <div className='text-sm text-[#1c1c1cb3]'>Mobile app for productivity in Iphone</div>
                    </div>
                </div>
                <div className='flex flex-col h-full'>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/project-4.png')] bg-cover bg-center rounded-xl p-5 text-2xl text-white" style={{ minHeight: '500px' }}>
                        <div className='w-2/3'>Get into a virtual reality world.</div>
                    </div>
                    <div className='flex h-full flex-col bg-[#1C1C1C] text-white rounded-xl px-5 py-4 my-3' >
                        <div className='mb-3 text-xl'>VR Development</div>
                        <div className='text-sm text-[#ffffffb3]'>Watch everything in virtual reality world </div>
                    </div>
                </div>

            </div>
            <hr style={{height:'1px'}}/>
            <div className='grid grid-cols-4 gap-3 max-lg:grid-cols-2 my-5 max-md:grid-cols-1 max-md:px-4 '>
                <div className='flex flex-col h-full max-md:mb-10'>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2024/01/project-5.png')] bg-cover bg-center rounded-xl p-5 text-2xl text-white" style={{ minHeight: '500px' }}>
                        <div>Cloud services development by bluebase</div>
                    </div>
                    <div className='flex h-full flex-col bg-[#62759A] text-white rounded-xl px-5 py-4 my-3' >
                        <div className='mb-3 text-xl'>Cloud Service</div>
                        <div className='text-sm text-[#ffffffb3]'> Building a server for a new start up company</div>
                    </div>
                </div>

                <div className='flex flex-col h-full'>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2024/01/project-6.png')] bg-cover bg-center rounded-xl p-5 text-2xl " style={{ minHeight: '500px' }}>
                        <div className='w-2/3'>Productivity app in your hand</div>

                    </div>
                    <div className=' flex h-full flex-col bg-[#F1F1F1] text-black rounded-xl px-5 py-4 my-3' >
                        <div className='mb-3 text-xl'>Application for Watch</div>
                        <div className='text-sm text-[#1c1c1cb3]'>Our slack app for your wrist smartwatch</div>
                    </div>
                </div>
                <div className='flex flex-col h-full'>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2024/01/project-7.png')] bg-cover bg-center rounded-xl p-5 text-2xl " style={{ minHeight: '500px' }}>
                        <div className='w-2/3'>Customer crm in salesforce</div>
                    </div>
                    <div className='flex h-full flex-col bg-[#CECDCB] text-black rounded-xl px-5 py-4 my-3' >
                        <div className='mb-3 text-xl'>CRM Solutions</div>
                        <div className='text-sm text-[#1c1c1cb3]'>Customer relationship app using Salesforce</div>
                    </div>
                </div>
                <div className='flex flex-col h-full'>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2024/01/project-8.png')] bg-cover bg-center rounded-xl p-5 text-2xl text-black" style={{ minHeight: '500px' }}>
                        <div className='w-2/3'>Erp solutions implemented bluebase</div>
                    </div>
                    <div className='flex h-full flex-col bg-[#EEEEDD] text-black rounded-xl px-5 py-4 my-3' >
                        <div className='mb-3 text-xl'>Erp Solutions</div>
                        <div className='text-sm text-[#1c1c1cb3]'>Saas Service for a brand new Woo Commerce Company </div>
                    </div>
                </div>

            </div>

            <hr style={{height:'1px'}}/>

            <div className='grid grid-cols-4 gap-3 max-lg:grid-cols-2 my-5 max-md:grid-cols-1 max-md:px-4 '>
                <div className='flex flex-col h-full max-md:mb-10'>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2024/01/project-9.png')] bg-cover bg-center rounded-xl p-5 text-2xl text-white" style={{ minHeight: '500px' }}>
                        <div>Unique personal prtfolio on market</div>
                    </div>
                    <div className='flex h-full flex-col bg-[#999999] text-white rounded-xl px-5 py-4 my-3' >
                        <div className='mb-3 text-xl'>Uniqe Personal Portfolio</div>
                        <div className='text-sm text-white'> Personal portfolio that hits everybody resume</div>
                    </div>
                </div>

                <div className='flex flex-col h-full'>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2024/01/project-10.png')] bg-cover bg-center rounded-xl p-5 text-2xl " style={{ minHeight: '500px' }}>
                        <div className='w-2/3'>Perfecct crm for market in salesforce</div>

                    </div>
                    <div className=' flex h-full flex-col bg-[#CECDCB] text-black rounded-xl px-5 py-4 my-3' >
                        <div className='mb-3 text-xl'>Clean Dashboard</div>
                        <div className='text-sm text-[#1c1c1cb3]'>Creating a dashboard for newly launched market</div>
                    </div>
                </div>
                <div className='flex flex-col h-full'>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2024/01/project-11.png')] bg-cover bg-center rounded-xl p-5 text-2xl " style={{ minHeight: '500px' }}>
                        <div className='w-2/3'>Premier support and solutions by bluebase</div>
                    </div>
                    <div className='flex h-full flex-col bg-[#F1F1F1] text-black rounded-xl px-5 py-4 my-3' >
                        <div className='mb-3 text-xl'>Fast IT Support</div>
                        <div className='text-sm text-[#1c1c1cb3]'>Our team give a quick response for the clients</div>
                    </div>
                </div>
                <div className='flex flex-col h-full'>
                    <div className="bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2024/01/project-12.png')] bg-cover bg-center rounded-xl p-5 text-2xl text-white" style={{ minHeight: '500px' }}>
                        <div className='w-2/3'>Electro online platform development</div>
                    </div>
                    <div className='flex h-full flex-col bg-[#443355] text-white rounded-xl px-5 py-4 my-3' >
                        <div className='mb-3 text-xl'>Electro E-commerce</div>
                        <div className='text-sm text-[#ffffffb3]'>A site that hits entire online themeforest site</div>
                    </div>
                </div>

            </div>
            <hr style={{height:'1px'}}/>
            <Getintouch/>
        </Narrow>
    )
}
