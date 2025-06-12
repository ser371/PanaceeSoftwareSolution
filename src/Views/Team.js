import React, { useState, useEffect } from "react";
import Narrow from "../Components/Common/Narrow";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Getintouch from "../Components/Getintouch";

export default function Team() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div>
      <div className="darkbg bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-1-1.svg')] bg-cover bg-left py-1 mb-44">
        <Narrow>
          <div className="mb-36 mt-24 max-xl:mt-3">
            <div>
              <div className="firstbtnsec ">
                <span className="abouta1 bg-white">Team</span>
              </div>
            </div>
            <div
              className={`header ${isVisible ? "fade-in" : ""}`}
              style={{ marginTop: "10px" }}
            >
              <div>
                <p className="aboutheader1 max-xl:text-3xl font-semibold text-white">
                  Meet our highly talented team
                </p>
                <p className="aboutheader1 max-xl:text-3xl font-semibold"> </p>

                <p className="aboutheader2 max-xl:px-3 text-2xl text-white leading-10">
                  Our team is a vibrant tapestry of backgrounds, expertise, and
                  perspectives. We believe that <br /> diversity fuels
                  innovation and creativity
                </p>
              </div>
              <div className="bg-blue-600 w-1/6 max-xl:w-1/2 mx-auto text-center rounded-lg mt-10">
                <Link to="/contactus">
                <button className="text-white p-3">
                  Book an appointment now
                </button></Link>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <Narrow>
        <div className="mb-20">
          <div className="home1para">LEADERSHIP</div>
          <div className="text-5xl font-bold mt-3">
            Our Company Leading Members
          </div>
          <p className="text-2xl text-gray-600 mt-3">
            Are you busy putting out IT fires instead of focusing on your core
            business
          </p>
        </div>

        <div className="grid grid-cols-4 mb-20 gap-4">
          <div className=" bg-[#F3F6FD] p-4 rounded-xl">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/team-2.jpg"
              alt=""
            />
            <div className="text-2xl font-semibold mt-3">Annie Coral</div>
            <div className="text-xl text-blue-700 mt-2">Team Lead</div>
          </div>
          <div className=" bg-[#F3F6FD] p-4 rounded-xl">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/team-2.jpg"
              alt=""
            />
            <div className="text-2xl font-semibold mt-3">Annie Coral</div>
            <div className="text-xl text-blue-700 mt-2">Team Lead</div>
          </div>
          <div className=" bg-[#F3F6FD] p-4 rounded-xl">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/team-2.jpg"
              alt=""
            />
            <div className="text-2xl font-semibold mt-3">Annie Coral</div>
            <div className="text-xl text-blue-700 mt-2">Team Lead</div>
          </div>
          <div className=" bg-[#F3F6FD] p-4 rounded-xl">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/team-2.jpg"
              alt=""
            />
            <div className="text-2xl font-semibold mt-3">Annie Coral</div>
            <div className="text-xl text-blue-700 mt-2">Team Lead</div>
          </div>
          <div className=" bg-[#F3F6FD] p-4 rounded-xl">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/team-2.jpg"
              alt=""
            />
            <div className="text-2xl font-semibold mt-3">Annie Coral</div>
            <div className="text-xl text-blue-700 mt-2">Team Lead</div>
          </div>
          <div className=" bg-[#F3F6FD] p-4 rounded-xl">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/team-2.jpg"
              alt=""
            />
            <div className="text-2xl font-semibold mt-3">Annie Coral</div>
            <div className="text-xl text-blue-700 mt-2">Team Lead</div>
          </div>
          <div className=" bg-[#F3F6FD] p-4 rounded-xl">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/team-2.jpg"
              alt=""
            />
            <div className="text-2xl font-semibold mt-3">Annie Coral</div>
            <div className="text-xl text-blue-700 mt-2">Team Lead</div>
          </div>
          <div className=" bg-[#F3F6FD] p-4 rounded-xl">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/12/team-2.jpg"
              alt=""
            />
            <div className="text-2xl font-semibold mt-3">Annie Coral</div>
            <div className="text-xl text-blue-700 mt-2">Team Lead</div>
          </div>
        </div>
      </Narrow>

      <div className="darkbg bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2023/11/bg-shape-1-1.svg')] bg-cover bg-bottom py-40 mb-32">
        <Narrow>
          <div className="flex max-xl:flex-col">
            <div className="w-1/3 pr-32 border-r border-gray-600 my-auto py-14">
              <div className="home1para">FEATURES</div>
              <div className="text-5xl text-white font-bold mt-4">
                Boosting your business using our team
              </div>
              <p className="text-gray-200 text-lg mt-4">
                Our team is a melting pot of diverse expertise and skills. From
                seasoned industry to young talents, member brings a unique set
                of experiences
              </p>
            </div>
            <div className="w-2/3 pl-32">
              <div className="grid grid-cols-2 gap-x-5 gap-y-20">
                <div>
                  <div className="text-2xl font-semibold text-white">
                    Diverse Expertise
                  </div>
                  <p className="mt-3 text-gray-200 text-lg leading-8">
                    Our team boasts a diverse range of the expertise, compassing
                    various disciplines and industries. This wealth of knowledge
                    allows us
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">
                    Diverse Expertise
                  </div>
                  <p className="mt-3 text-gray-200 text-lg leading-8">
                    Our team boasts a diverse range of the expertise, compassing
                    various disciplines and industries. This wealth of knowledge
                    allows us
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">
                    Diverse Expertise
                  </div>
                  <p className="mt-3 text-gray-200 text-lg leading-8">
                    Our team boasts a diverse range of the expertise, compassing
                    various disciplines and industries. This wealth of knowledge
                    allows us
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">
                    Diverse Expertise
                  </div>
                  <p className="mt-3 text-gray-200 text-lg leading-8">
                    Our team boasts a diverse range of the expertise, compassing
                    various disciplines and industries. This wealth of knowledge
                    allows us
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">
                    Diverse Expertise
                  </div>
                  <p className="mt-3 text-gray-200 text-lg leading-8">
                    Our team boasts a diverse range of the expertise, compassing
                    various disciplines and industries. This wealth of knowledge
                    allows us
                  </p>
                </div>
                <div>
                  <div className="text-2xl font-semibold text-white">
                    Diverse Expertise
                  </div>
                  <p className="mt-3 text-gray-200 text-lg leading-8">
                    Our team boasts a diverse range of the expertise, compassing
                    various disciplines and industries. This wealth of knowledge
                    allows us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <Narrow>
        <div className="ourexpert1 p-28 max-xl:p-3  max-xl:py-20 mt-32 max-xl:mt-0 mb-32 max-xl:mb-10">
          <div className="flex max-xl:flex-col max-xl:text-center max-xl:mx-auto">
            <div className="w-2/3 max-xl:w-full">
              <p className="delinglogheading">WHAT WE’RE OFFERING</p>
              <h1 className="text-5xl font-bold mt-3">
                Our professional experts
              </h1>
              <p className="text-xl mt-3">
                Our team is a collective force of top talents, experts, and{" "}
                <br />
                visionaries from diverse fields.
              </p>
            </div>
            <div className="max-xl: mt-5">
              <Link to="/contactus">
                <Button className="bookappwexp bg-blue-600 hover:bg-black font-semibold">
                  Book an appointment with our expert now
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Narrow>

      <Getintouch/>
    </div>
  );
}
