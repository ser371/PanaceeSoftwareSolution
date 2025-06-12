import React, { useState } from "react";
import JobForm from "../Views/JobForm"

const JobCard = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  

  return (
    <div>
      <div className="bg-white p-8 mt-5 rounded-lg">
        <div className="flex justify-between">
          <div>
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold">
                {props.position} -
                <span className="text-blue-600 font-normal">{props.field}</span>
              </h1>
              <span className="ml-20 text-gray-600 font-normal text-xl my-auto">
                #{props.jobId}
              </span>
            </div>

            <div className="text-gray-500 mt-2 text-lg">{props.type}</div>
            <div className="mt-3">
              <span className="bg-[#F3F6FD] text-blue-600 p-2 rounded-full mt-3">
                {props.location}
              </span>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-5">
          <div className="flex gap-2">
            <svg
              className="my-auto"
              height={20}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
            </svg>
            <p className="text-gray-600">{props.time}</p>
          </div>
        </div>
        <div className="mt-5">
          <button
            onClick={toggleModal}
            className="bg-blue-600 rounded-full py-2 px-3 text-white hover:cursor-pointer"
          >
            Apply Now
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="fixed inset-0 bg-gray-800 bg-opacity-75"></div>
          <div className="bg-white w-[50vw] h-[80vh] max-xl:w-[90vw] max-xl:h-[70vh] p-20 max-xl:p-3 rounded-lg shadow-lg relative overflow-y-auto mt-20">
            <button
              onClick={toggleModal}
              className="absolute top-5 right-5 text-gray-600 hover:text-gray-800"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* <h2 className="text-2xl font-bold mb-4">Software Developers, Welcome</h2> */}
            <div className="formstart">
              <div className="text-4xl font-bold">
                Job Title: {props.position}
              </div>
              <div className="mt-2 text-xl">Location: {props.location}</div>
              <div className="mt-2 text-xl">Job Type: {props.time}</div>
              <div className="mt-2 text-xl">Job ID: #{props.jobId}</div>
              <div className="text-3xl font-semibold mt-5">About Us</div>
              <p className="text-lg text-gray-600 font-normal">
                Panacea Infosolutions is a leading provider of innovative
                software solutions, specializing in web technologies, artificial
                intelligence, and automation. We are dedicated to delivering
                high-quality, customized software solutions that drive business
                success.
              </p>
              <div className="text-3xl font-semibold mt-5">Job Description</div>
              <p className="text-lg text-gray-600 font-normal">
                {props.jobDesc}
              </p>
              <div className="text-3xl font-semibold mt-5">
                Key Responsibilities
              </div>
              <div>
                <ul style={{ listStyleType: 'disc' }}>
                {props.responsibilites.map((item, index) => (
                  <div className="flex gap-3">
                    <svg height={15} className="my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <li className="text-lg" key={index}>{item}</li>
                  </div>
                ))}
                </ul>
              </div>
              <div className="text-3xl font-semibold mt-5">
                Requirements
              </div>
              <div>
                <ul style={{ listStyleType: 'disc' }}>
                {props.requirements.map((item, index) => (
                  <div className="flex gap-3">
                    <svg height={15} className="my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <li className="text-lg" key={index}>{item}</li>
                  </div>
                ))}
                </ul>
              </div>
              <div className="text-3xl font-semibold mt-5">
                Preferred Skills
              </div>
              <div>
                <ul style={{ listStyleType: 'disc' }}>
                {props.skills.map((item, index) => (
                  <div className="flex gap-3">
                    <svg height={15} className="my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <li className="text-lg" key={index}>{item}</li>
                  </div>
                ))}
                </ul>
              </div>
              <div className="text-3xl font-semibold mt-5">
                Benefits
              </div>
              <div>
                <ul style={{ listStyleType: 'disc' }}>
                {props.benefits.map((item, index) => (
                  <div className="flex gap-3">
                    <svg height={15} className="my-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
                    <li className="text-lg" key={index}>{item}</li>
                  </div>
                ))}
                </ul>
              </div>

              <JobForm position={props.position} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JobCard;
