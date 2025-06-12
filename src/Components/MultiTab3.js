import React, { useState } from "react";

export default function MultiTab3() {
  const [tab, setTab] = useState("Business Strategy");
  return (
    <div>
      <div className="bg-[#F3F6Fd] mt-32 max-xl:mt-5 rounded-xl py-20 px-20 max-xl:py-5 max-xl:px-3">
        <div>
          <h1 className="home1para">SPECIALIZATION</h1>
          <h1 className="text-5xl font-bold mt-3">
            What should our company do for you
          </h1>
        </div>

        <div className="mt-5 grid grid-cols-4 max-xl:grid-cols-1 gap-3">
          <div className="flex">
            {" "}
            <button
              onClick={() => setTab("Business Strategy")}
              className={`${
                tab === "Business Strategy" ? " bg-blue-700 text-white" : "bg-white"
              } py-3 px-3 rounded-full text-sm flex gap-2`}
            >
              {" "}
              <img
                className={`${tab === "Business Strategy" ? 'bg-white' : 'bg-[#F3F6Fd]'} rounded-full h-7 p-2`}
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/hwd-icon-1.svg"
                style={{height:"40px"}}
                alt=""
              />{" "}
              <div className="my-auto">Business Strategy</div>
            </button>{" "}
          </div>
          <div className="flex">
            {" "}
            <button
              onClick={() => setTab("Market Analysis")}
              className={`${
                tab === "Market Analysis" ? "bg-blue-700 text-white" : "bg-white"
              } py-3 px-3 rounded-full text-sm flex gap-2`}
            >
              {" "}
              <img
                className={`${tab === "Market Analysis" ? 'bg-white' : 'bg-[#F3F6Fd]'} rounded-full h-7 p-2`}
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/hwd-icon-1.svg"
                style={{height:"40px"}}
                alt=""
              />{" "}
              <div className="my-auto">Market Analysis</div>
            </button>{" "}
          </div>
          <div className="flex">
            {" "}
            <button
              onClick={() => setTab("Process Optimization")}
              className={`${
                tab === "Process Optimization" ? "bg-blue-700 text-white" : "bg-white"
              } py-3 px-3 rounded-full text-sm flex gap-2`}
            >
              {" "}
              <img
                className={`${tab === "Process Optimization" ? 'bg-white' : 'bg-[#F3F6Fd]'} rounded-full h-7 p-2`}
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/hwd-icon-1.svg"
                style={{height:"40px"}}
                alt=""
              />{" "}
              
              <div className="my-auto">Process Optimization</div>
            </button>{" "}
          </div>
          <div className="flex">
            {" "}
            <button
              onClick={() => setTab("Performance Improvement")}
              className={`${
                tab === "Performance Improvement" ? "bg-blue-700 text-white" : "bg-white"
              } py-3 px-3 rounded-full text-sm flex gap-2`}
            >
              {" "}
              <img
                className={`${tab === "Performance Improvement" ? 'bg-white' : 'bg-[#F3F6Fd]'} rounded-full h-7 p-2`}
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/hwd-icon-1.svg"
                style={{height:"40px"}}
                alt=""
              />{" "}
              
              <div className="my-auto">Performance Improvement</div>
            </button>{" "}
          </div>
          <div className="flex">
            {" "}
            <button
              onClick={() => setTab("Entrepreneurial Guidance")}
              className={`${
                tab === "Entrepreneurial Guidance" ? "bg-blue-700 text-white" : "bg-white"
              } py-3 px-3 rounded-full text-sm flex gap-2`}
            >
              {" "}
              <img
                className={`${tab === "Entrepreneurial Guidance" ? 'bg-white' : 'bg-[#F3F6Fd]'} rounded-full h-7 p-2`}
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/hwd-icon-1.svg"
                style={{height:"40px"}}
                alt=""
              />{" "}
              
              <div className="my-auto">Entrepreneurial Guidance</div>
            </button>{" "}
          </div>
          <div className="flex">
            {" "}
            <button
              onClick={() => setTab("Organizational Excellence")}
              className={`${
                tab === "Organizational Excellence" ? "bg-blue-700 text-white" : "bg-white"
              } py-3 px-3 rounded-full text-sm flex gap-2`}
            >
              {" "}
              <img
                className={`${tab === "Organizational Excellence" ? 'bg-white' : 'bg-[#F3F6Fd]'} rounded-full h-7 p-2`}
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/hwd-icon-1.svg"
                style={{height:"40px"}}
                alt=""
              />{" "}
              
              <div className="my-auto">Organizational Excellence</div>
            </button>{" "}
          </div>
          <div className="flex">
            {" "}
            <button
              onClick={() => setTab("Market Research")}
              className={`${
                tab === "Market Research" ? "bg-blue-700 text-white" : "bg-white"
              } py-3 px-3 rounded-full text-sm flex gap-2`}
            >
              {" "}
              <img
                className={`${tab === "Market Research" ? 'bg-white' : 'bg-[#F3F6Fd]'} rounded-full h-7 p-2`}
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/hwd-icon-1.svg"
                style={{height:"40px"}}
                alt=""
              />{" "}
              
              <div className="my-auto">Market Research</div>
            </button>{" "}
          </div>
        </div>

        {tab === "Business Strategy" && (
          <div className="flex max-xl:flex-col mt-10 gap-4">
            <div className="bg-white p-4 rounded-xl w-1/2 max-xl:w-full">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/about2-tab-1.png"
                alt=""
              />
            </div>
            <div className="bg-white p-4 rounded-xl w-1/2 max-xl:w-full">
              <div className="bg-[#F3F6FD] p-3 rounded-lg">
                <h1 className="text-2xl font-semibold">
                  Elevating your business strategy for success
                </h1>
              </div>
              <div className="bg-[#F3F6FD] p-3 rounded-lg mt-3 text-xl text-gray-600">
                <p>
                  In the ever-evolving landscape of business, are in robust and
                  well defined strategies is the compassing that guides your
                  journey to success. At Strategic Business Solutions, we
                  specialize in crafting business strategies that go beyond mere
                  plans. <br />
                  <br />
                  They are blueprints for growth, innovation, solution and
                  enduring compassing that prosperity.
                </p>
              </div>
            </div>
          </div>
        )}

        {tab === "Market Analysis" && (
          <div className="flex max-xl:flex-col mt-10 gap-4">
            <div className="bg-white p-4 rounded-xl w-1/2 max-xl:w-full">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/about2-tab-2.png"
                alt=""
              />
            </div>
            <div className="bg-white p-4 rounded-xl w-1/2 max-xl:w-full">
              <div className="bg-[#F3F6FD] p-3 rounded-lg">
                <h1 className="text-2xl font-semibold">
                  Unveiling the comprehensive market analysis
                </h1>
              </div>
              <div className="bg-[#F3F6FD] p-3 rounded-lg mt-3 text-xl text-gray-600">
                <p>
                  In the ever-evolving landscape of business, knowledge is
                  power. At Strategic Business Solutions, we offering an
                  unparalleled lens through which you can decipher the
                  complexities and is of your industry. Our Market Analysis
                  serve services provide you with the critical insights needed
                  to make informed decisions. we offering an unparalleled lens
                </p>
              </div>
            </div>
          </div>
        )}

        {tab === "Process Optimization" && (
          <div className="flex max-xl:flex-col mt-10 gap-4">
            <div className="bg-white p-4 rounded-xl w-1/2 max-xl:w-full">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/about2-tab-3.png"
                alt=""
              />
            </div>
            <div className="bg-white p-4 rounded-xl w-1/2 max-xl:w-full">
              <div className="bg-[#F3F6FD] p-3 rounded-lg">
                <h1 className="text-2xl font-semibold">
                  Streamline your operations for maximum efficiency
                </h1>
              </div>
              <div className="bg-[#F3F6FD] p-3 rounded-lg mt-3 text-xl text-gray-600">
                <p>
                  The ever-evolving landscape of business, operational
                  efficiency is the cornerstone of success. At Strategic
                  Business Solutions, we specialize in process optimization a
                  transformative approach that enables your organization <br />
                  <br />
                  we specialize in process optimization a transformative
                  approach that enables your organization.
                </p>
              </div>
            </div>
          </div>
        )}

        {tab === "Performance Improvement" && (
          <div className="flex max-xl:flex-col mt-10 gap-4">
            <div className="bg-white p-4 rounded-xl w-1/2 max-xl:w-full">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/about2-tab-4.png"
                alt=""
              />
            </div>
            <div className="bg-white p-4 rounded-xl w-1/2 max-xl:w-full">
              <div className="bg-[#F3F6FD] p-3 rounded-lg">
                <h1 className="text-2xl font-semibold">
                  Elevate your business performance to new heights
                </h1>
              </div>
              <div className="bg-[#F3F6FD] p-3 rounded-lg mt-3 text-xl text-gray-600">
                <p>
                  In today's fast paced and competitive business and landscape,
                  achieving and sustaining high levels of performance is
                  essential for long-term success. At the Strategic Business
                  Solutions, we specialize in helping our is organizations like
                  yours enhance their performance, optimize operations, and
                  achieve peak efficiency. At the Strategic Business Solutions.
                </p>
              </div>
            </div>
          </div>
        )}

        {tab === "Entrepreneurial Guidance" && (
          <div className="flex max-xl:flex-col mt-10 gap-4">
            <div className="bg-white p-4 rounded-xl w-1/2 max-xl:w-full">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/about2-tab-5.png"
                alt=""
              />
            </div>
            <div className="bg-white p-4 rounded-xl w-1/2 max-xl:w-full">
              <div className="bg-[#F3F6FD] p-3 rounded-lg">
                <h1 className="text-2xl font-semibold">
                  Nurturing entrepreneurial excellence using slack
                </h1>
              </div>
              <div className="bg-[#F3F6FD] p-3 rounded-lg mt-3 text-xl text-gray-600">
                <p>
                  Embarking on the journey of entrepreneurship is an
                  exhilarating endeavor, filled with boundless opportunities and
                  uniq Strategic Business Solutions, we are dedicated to
                  providing you with the indispensable guidance. <br />
                  <br />
                  Strategic Business Solutions, we are dedicated to providing
                  you with the indispensable guidance.
                </p>
              </div>
            </div>
          </div>
        )}

        {tab === "Organizational Excellence" && (
          <div className="flex max-xl:flex-col mt-10 gap-4">
            <div className="bg-white p-4 rounded-xl w-1/2 max-xl:w-full">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/about2-tab-2.png"
                alt=""
              />
            </div>
            <div className="bg-white p-4 rounded-xl w-1/2 max-xl:w-full">
              <div className="bg-[#F3F6FD] p-3 rounded-lg">
                <h1 className="text-2xl font-semibold">
                  Elevating your business strategy for success
                </h1>
              </div>
              <div className="bg-[#F3F6FD] p-3 rounded-lg mt-3 text-xl text-gray-600">
                <p>
                  In the ever-evolving landscape of business, are in robust and
                  well defined strategies is the compassing that guides your
                  journey to success. At Strategic Business Solutions, we
                  specialize in crafting business strategies that go beyond mere
                  plans. <br />
                  <br />
                  They are blueprints for growth, innovation, solution and
                  enduring compassing that prosperity.
                </p>
              </div>
            </div>
          </div>
        )}

        {tab === "Market Research" && (
          <div className="flex  max-xl:flex-col mt-10 gap-4">
            <div className="bg-white p-4 rounded-xl w-1/2 max-xl:w-full">
              <img
                src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/about2-tab-1.png"
                alt=""
              />
            </div>
            <div className="bg-white p-4 rounded-xl w-1/2 max-xl:w-full">
              <div className="bg-[#F3F6FD] p-3 rounded-lg">
                <h1 className="text-2xl font-semibold">
                  Unveiling the comprehensive market analysis
                </h1>
              </div>
              <div className="bg-[#F3F6FD] p-3 rounded-lg mt-3 text-xl text-gray-600">
                <p>
                  In the ever-evolving landscape of business, knowledge is
                  power. At Strategic Business Solutions, we offering an
                  unparalleled lens through which you can decipher the
                  complexities and is of your industry. Our Market Analysis
                  serve services provide you with the critical insights needed
                  to make informed decisions. we offering an unparalleled lens
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}