import React, { useState, useEffect } from "react";
import Narrow from "../Components/Common/Narrow";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Getintouch from "../Components/Getintouch";

export default function Events() {
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
                <span className="abouta1 bg-white">Events</span>
              </div>
            </div>
            <div
              className={`header ${isVisible ? "fade-in" : ""}`}
              style={{ marginTop: "10px" }}
            >
              <div>
                <p className="aboutheader1 max-xl:text-3xl font-semibold text-white">
                  Our mentor teaching everywhere
                </p>
                <p className="aboutheader1 max-xl:text-3xl font-semibold"> </p>

                <p className="aboutheader2 max-xl:px-3 text-2xl text-white leading-10">
                  Every event we organize is a unique opportunity to craft
                  memorable experiences. We go <br />
                  beyond the ordinary, paying attention to every detail
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
          <div className="home1para">OUR UPCOMING EVENTS</div>
          <div className="text-5xl font-bold mt-3">Upcoming Events</div>
          <p className="text-2xl text-gray-600 mt-3">Event management can be a complex undertaking.</p>
        </div>

        <div className="grid grid-cols-2 max-xl:grid-cols-1 mb-20 gap-4">
            <div className="bg-[#F3F6FD] p-4 rounded-xl">
                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/event-1.jpg" alt="" />
                <div className="home1para mt-5">FRI, APRIL 17</div>
                <div className="text-3xl font-bold mt-3">Slack Cloud Computing and Cloud Service Solutions Undertaken</div>
                <p className="text-gray-600 text-xl mt-3">Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace payment terminals at point of sale.</p>
                <hr className="my-5" />
                <div className="grid grid-cols-2 gap-y-5 text-xl text-gray-600">
                    <div>9 AM - 2 PM</div>
                    <div>New Embassy, Florida</div>
                    <div>17-05-2023</div>
                    <div>Host - Serena lee</div>
                </div>
            </div>
            <div className="bg-[#F3F6FD] p-4 rounded-xl">
                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/event-1.jpg" alt="" />
                <div className="home1para mt-5">FRI, APRIL 17</div>
                <div className="text-3xl font-bold mt-3">Slack Cloud Computing and Cloud Service Solutions Undertaken</div>
                <p className="text-gray-600 text-xl mt-3">Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace payment terminals at point of sale.</p>
                <hr className="my-5" />
                <div className="grid grid-cols-2 gap-y-5 text-xl text-gray-600">
                    <div>9 AM - 2 PM</div>
                    <div>New Embassy, Florida</div>
                    <div>17-05-2023</div>
                    <div>Host - Serena lee</div>
                </div>
            </div>
            <div className="bg-[#F3F6FD] p-4 rounded-xl">
                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/event-1.jpg" alt="" />
                <div className="home1para mt-5">FRI, APRIL 17</div>
                <div className="text-3xl font-bold mt-3">Slack Cloud Computing and Cloud Service Solutions Undertaken</div>
                <p className="text-gray-600 text-xl mt-3">Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace payment terminals at point of sale.</p>
                <hr className="my-5" />
                <div className="grid grid-cols-2 gap-y-5 text-xl text-gray-600">
                    <div>9 AM - 2 PM</div>
                    <div>New Embassy, Florida</div>
                    <div>17-05-2023</div>
                    <div>Host - Serena lee</div>
                </div>
            </div>
            <div className="bg-[#F3F6FD] p-4 rounded-xl">
                <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/event-1.jpg" alt="" />
                <div className="home1para mt-5">FRI, APRIL 17</div>
                <div className="text-3xl font-bold mt-3">Slack Cloud Computing and Cloud Service Solutions Undertaken</div>
                <p className="text-gray-600 text-xl mt-3">Small UK merchants, businesses, and other enterprises can now use Tap to Pay on service to replace payment terminals at point of sale.</p>
                <hr className="my-5" />
                <div className="grid grid-cols-2 gap-y-5 text-xl text-gray-600">
                    <div>9 AM - 2 PM</div>
                    <div>New Embassy, Florida</div>
                    <div>17-05-2023</div>
                    <div>Host - Serena lee</div>
                </div>
            </div>
           
        </div>
      </Narrow>

      <Narrow>
        <div className="darkbg bg-[url('https://wpriverthemes.com/synck/wp-content/uploads/2024/01/bg-shape-12.png')] bg-cover p-28 max-xl:p-3  max-xl:py-20 mt-32 max-xl:mt-0 mb-32 rounded-xl">
          <div className="flex max-xl:flex-col max-xl:text-center max-xl:mx-auto justify-between">
            <div className="w-2/3 max-xl:w-full">
              <h1 className="text-3xl text-white font-bold mt-3">
                Build your project with us, Make it world class
              </h1>
              <p className="text-xl mt-3 text-white">
                Our projects are born from a passion for innovation that knows
                no
                <br />
                bounds.
              </p>
            </div>
            <div className="max-xl: mt-5">
              <Link to="/contactus">
                <Button className="bookappwexp bg-blue-600 hover:bg-black font-semibold px-5">
                  Book an appointment now
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
