import React, {useState , useEffect} from 'react'
import Narrow from '../Components/Common/Narrow'
import Slider from '../Components/Slider'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Getintouch from '../Components/Getintouch';

export default function Partners() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className='mt-20 mb-20'>
      <Narrow>
      <div>
          <div className="firstbtnsec ">
            <span className="abouta1">Partner</span>
          </div>
        </div>
        <div
          className={`header ${isVisible ? "fade-in" : ""} mb-32`}
          style={{ marginTop: "10px" }}
        >
          <div>
            <p className="aboutheader1 max-xl:text-3xl font-semibold">
            We have great partners in{" "}
            </p>
            <p className="aboutheader1 max-xl:text-3xl font-semibold">
              {" "}
              modern world
            </p>

            <p className="aboutheader2 max-xl:px-3">
            Our partners play a pivotal role in our journey, bringing diverse expertise, resources, and <br /> shared values to the table.
            </p>
          </div>
        </div>

        <Slider/>
      </Narrow>

      <div className="bg-[#F3F6FD]">
        <Narrow>
          <div className="OURCOMPANY py-5 px-3">
            <p className="delinglogheading">WHAT WE’RE OFFERING</p>
            <div className="flex justify-between max-md:flex-col">
              <div className="w-9/12">
                <h1 style={{ fontSize: "45px" }} className=" font-semibold">
                What our partners think about us?
                </h1>
                <h5 style={{ marginTop: "20px" }} className="text-lg">
                We invite you to explore our blog and become part of our journey towards growth.
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
                  src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/hero-partner-about.jpg"
                  alt=""
                  className="ourpopulaityimage w-full"
                />
                <p className='text-xl' style={{ marginTop: "30px" }}>
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


      <div className='bg-[#1C1C1C] py-40'>
        <Narrow>
          <div className='flex gap-32 max-xl:flex-col max-xl:gap-3'>
            <div className='w-3/12 max-xl:w-full'>
              <div className='home1para'>PARTNERS</div>
              <div className='text-5xl font-bold text-white mt-3'>Trusted by our customers & partners</div>
              <p className='text-xl text-gray-200 mt-10'>Our commitment to excellence extends beyond immediate team. We actively seek out partners who share our values, vision and dedication.</p>
            </div>
            <div className='bg-white w-9/12 max-xl:w-full rounded-xl p-10 max-xl:p-3'>
              <div className='flex flex-col gap-3'>
                <div className='flex justify-between max-xl:flex-col'>
                  <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/client-logo7.svg" alt="" />
                  <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/client-logo7.svg" alt="" />
                  <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/client-logo7.svg" alt="" />
                  <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/client-logo7.svg" alt="" />
                </div>
                <hr className='my-4 max-xl:hidden' />
                <div className='flex justify-between max-xl:flex-col'>
                  <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/client-logo7.svg" alt="" />
                  <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/client-logo7.svg" alt="" />
                  <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/client-logo7.svg" alt="" />
                  <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/client-logo7.svg" alt="" />
                </div>
                <hr className='my-4 max-xl:hidden' />
                <div className='flex justify-between max-xl:flex-col'>
                  <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/client-logo7.svg" alt="" />
                  <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/client-logo7.svg" alt="" />
                  <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/client-logo7.svg" alt="" />
                  <img src="https://wpriverthemes.com/synck/wp-content/uploads/2024/01/client-logo7.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </Narrow>
      </div>

      <Getintouch/>


    </div>
  )
}
