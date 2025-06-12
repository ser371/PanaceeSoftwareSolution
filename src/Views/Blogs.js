import React, { useState, useEffect } from "react";
import Narrow from "../Components/Common/Narrow";
import Getintouch from "../Components/Getintouch";

export default function Blogs() {

  useEffect(() => {

    window.scrollTo(0, 0);
  }, [])
  
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="mt-10 mb-20">
      <Narrow>
        <div>
          <div className="firstbtnsec ">
            <span className="abouta1">Blog</span>
          </div>
        </div>
        <div
          className={`header ${isVisible ? "fade-in" : ""}`}
          style={{ marginTop: "10px" }}
        >
          <div>
            <p className="aboutheader1 max-xl:text-3xl font-semibold">
              Explore our blog for expert{" "}
            </p>
            <p className="aboutheader1 max-xl:text-3xl font-semibold">
              {" "}
              knowledge and inspiration
            </p>

            <p className="aboutheader2 max-xl:px-3">
              Stay connected with us by subscribing to our blog updates. By
              doing so, <br />
              you'll receive notifications whenever we publish new articles.
            </p>
          </div>
        </div>

        <hr className="mt-20 mb-20 max-xl:hidden" />

        <div className=" bg-black flex max-xl:flex-col gap-14 max-xl:gap-3 p-4 rounded-xl max-xl:mt-5">
          <img
            src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/news-1.png"
            className="h-[50%] w-[50%] max-xl:h-[100%] max-xl:w-[100%] rounded-lg"
            alt=""
          />
          <div>
            <div className="home1para mt-5">MOBILE DEVELOPMENT</div>
            <div className="text-3xl text-white font-semibold mt-3">
              OpenAI launches new alignment division to tackle risks of
              superintelligent AI
            </div>
            <div className="text-gray-300 mt-10 text-lg">
              The makers of AI have announced the company will be dedicating 20%
              of its compute processing power over the next four years
            </div>
            <hr className="bg-gray-300 mt-8 mb-8" />
            <div className="tasksign">
              <img
                src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                alt=""
                className="righticonimagesize h-5"
              />
              <h5 className="fetureproductabout text-base my-auto">
                Collaboration Tools{" "}
              </h5>
            </div>
            <div className="tasksign mt-3">
              <img
                src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                alt=""
                className="righticonimagesize h-5"
              />
              <h5 className="fetureproductabout text-base my-auto">
                Smart Reminders{" "}
              </h5>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 max-xl:grid-cols-1 mt-5">
          <div className="bg-[#1351D80D] p-4 rounded-xl">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-2.jpg"
              className="rounded-lg"
              alt=""
            />
            <div className="home1para mt-4">WEB DEVELOPMENT</div>
            <div className="text-black text-3xl mt-3 font-semibold">
              Bluebase launches Tap to Pay on smartphone for international and
              domestic business
            </div>
            <p className="text-gray-600 mt-3 text-lg">
              Small UK merchants, businesses, and other enterprises can now use
              Tap to Pay on service to replace payment terminals at point of
              sale.
            </p>
            <hr className="my-3" />
            <div className="grid grid-cols-2 max-xl:grid-cols-1">
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Collaborative Tools </h5>
              </div>
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Smart Reminders </h5>
              </div>
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Requirement </h5>
              </div>
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Task Management </h5>
              </div>
            </div>
          </div>
          <div className="bg-[#1351D80D] p-4 rounded-xl">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-3.jpg"
              className="rounded-lg"
              alt=""
            />
            <div className="home1para mt-4">WEB DEVELOPMENT</div>
            <div className="text-black text-3xl mt-3 font-semibold">
              Bluebase launches Tap to Pay on smartphone for international and
              domestic business
            </div>
            <p className="text-gray-600 mt-3 text-lg">
              Small UK merchants, businesses, and other enterprises can now use
              Tap to Pay on service to replace payment terminals at point of
              sale.
            </p>
            <hr className="my-3" />
            <div className="grid grid-cols-2 max-xl:grid-cols-1">
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Collaborative Tools </h5>
              </div>
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Smart Reminders </h5>
              </div>
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Requirement </h5>
              </div>
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Task Management </h5>
              </div>
            </div>
          </div>
          <div className="bg-[#1351D80D] p-4 rounded-xl">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/news-4.jpg"
              className="rounded-lg"
              alt=""
            />
            <div className="home1para mt-4">WEB DEVELOPMENT</div>
            <div className="text-black text-3xl mt-3 font-semibold">
              Bluebase launches Tap to Pay on smartphone for international and
              domestic business
            </div>
            <p className="text-gray-600 mt-3 text-lg">
              Small UK merchants, businesses, and other enterprises can now use
              Tap to Pay on service to replace payment terminals at point of
              sale.
            </p>
            <hr className="my-3" />
            <div className="grid grid-cols-2 max-xl:grid-cols-1">
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Collaborative Tools </h5>
              </div>
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Smart Reminders </h5>
              </div>
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Requirement </h5>
              </div>
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Task Management </h5>
              </div>
            </div>
          </div>
          <div className="bg-[#1351D80D] p-4 rounded-xl">
            <img
              src="https://wpriverthemes.com/synck/wp-content/uploads/2023/11/news-2.jpg"
              className="rounded-lg"
              alt=""
            />
            <div className="home1para mt-4">WEB DEVELOPMENT</div>
            <div className="text-black text-3xl mt-3 font-semibold">
              Bluebase launches Tap to Pay on smartphone for international and
              domestic business
            </div>
            <p className="text-gray-600 mt-3 text-lg">
              Small UK merchants, businesses, and other enterprises can now use
              Tap to Pay on service to replace payment terminals at point of
              sale.
            </p>
            <hr className="my-3" />
            <div className="grid grid-cols-2 max-xl:grid-cols-1">
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Collaborative Tools </h5>
              </div>
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Smart Reminders </h5>
              </div>
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Requirement </h5>
              </div>
              <div className="tasksign mt-3">
                <img
                  src="https://ik.imagekit.io/2q7cgnqzi/icon/check.png?updatedAt=1711451555962"
                  alt=""
                  className="righticonimagesize h-5"
                />
                <h5 className=" text-base my-auto">Task Management </h5>
              </div>
            </div>
          </div>
        </div>

        <Getintouch />
      </Narrow>
    </div>
  );
}
