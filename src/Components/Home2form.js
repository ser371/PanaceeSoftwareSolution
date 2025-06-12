import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Narrow from "./Common/Narrow";

export default function Home2form() {
  const companyTypes = ["SAAS", "Banking", "Agency", "Business", "Other"];
  const options = [
    "App design",
    "Web design",
    "Branding",
    "Development",
    "Cloud service",
    "Other",
  ];

  const [message, setMessage] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    country: "",
  });

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [value, setValue] = useState(100);
  const [isChecked, setIsChecked] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      country: formData.country,
      companyType: selectedType,
      services: selectedOptions.join(", "),
      message: message,
      budget: value,
    };

    emailjs
      .send(
        "service_tp0xe6o", // Replace with your EmailJS service ID
        "template_pwq19c5", // Replace with your EmailJS template ID
        templateParams,
        "ZUPy5599PTvnFBYus" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Email sent successfully");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed");
        }
      );

    // Reset form fields after submission
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      country: "",
    });
    setSelectedType("");
    setSelectedOptions([]);
    setMessage("");
    setValue(100);
    setIsChecked(false);
  };

  const toggleOption = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };

  const handleSliderChange = (event) => {
    setValue(event.target.value);
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  useEffect(() => {
    const slider = document.getElementById("budget-slider");
    const percentage = (value / 200) * 100;
    slider.style.setProperty("--value", `${percentage}%`);
  }, [value]);

  useEffect(() => {
    // Check if all required fields are filled
    const isFormValid =
      formData.firstName &&
      formData.lastName &&
      formData.email &&
      formData.phoneNumber &&
      formData.country &&
      message &&
      selectedType &&
      selectedOptions.length > 0 &&
      isChecked;

    setIsFormValid(isFormValid);
  }, [formData, message, selectedType, selectedOptions, value, isChecked]);

  return (
    <div>
      <Narrow>
        <div className="bg-[#F3F6FD] p-2 rounded-lg">
          <div className="bg-[#1351d80d] p-20 max-xl:p-2 border-[#1351d81a] border-2">
            <div className="bg-white py-5 px-9 max-xl:px-3 rounded-lg">
              <h1 className="text-xl text-gray-600">
                You can reach us anytime via{" "}
                <span className="text-blue-700 font-semibold">
                  infopanacee@gmail.com
                </span>
              </h1>

              <hr className="mt-5 mb-5" />

              <div className="">
                <div className="">
                  <form onSubmit={handleSubmit} className="rounded mb-4 flex gap-16 max-xl:flex-col">
                    <div className="w-1/2 max-xl:w-full">
                      <div className="flex justify-between">
                        <div style={{ width: "48%" }} className="mb-4">
                          <label
                            className="block text-gray-700 font-semibold text-sm mb-2"
                            htmlFor="firstName"
                          >
                            First Name
                          </label>
                          <input
                            className="appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="firstName"
                            name="firstName"
                            placeholder="First Name"
                            type="text"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div style={{ width: "48%" }} className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="lastName"
                          >
                            Last Name
                          </label>
                          <input
                            className="appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-gray-700 text-sm font-semibold mb-2"
                          htmlFor="email"
                        >
                          Email
                        </label>
                        <input
                          className="appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="flex justify-between">
                        <div style={{ width: "48%" }} className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="phoneNumber"
                          >
                            Phone Number
                          </label>
                          <input
                            className="appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="phoneNumber"
                            name="phoneNumber"
                            type="number"
                            placeholder="Your Number"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div style={{ width: "48%" }} className="mb-4">
                          <label
                            className="block text-gray-700 text-sm font-semibold mb-2"
                            htmlFor="country"
                          >
                            Country
                          </label>
                          <input
                            className="appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="country"
                            name="country"
                            type="text"
                            placeholder="Your Country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="flex flex-col">
                        <label className="mb-4 text-md font-medium">
                          What's the type of your company?
                        </label>
                        <div className="grid grid-cols-4 gap-2 max-xl:grid-cols-2">
                          {companyTypes.map((type) => (
                            <button
                              key={type}
                              type="button"
                              onClick={() => setSelectedType(type)}
                              className={`px-4 py-2 border rounded ${
                                selectedType === type
                                  ? "bg-blue-600 text-white"
                                  : "bg-white text-gray-500"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col items-start mt-3">
                        <label className="mb-4 text-md font-medium">
                          What you need from us?
                        </label>
                        <div className="grid grid-cols-3 gap-2 max-xl:grid-cols-2">
                          {options.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => toggleOption(option)}
                              className={`flex items-center justify-center px-2 py-2 border rounded ${
                                selectedOptions.includes(option)
                                  ? "bg-blue-600 text-white"
                                  : "bg-white text-gray-500"
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="w-1/2 max-xl:w-full">
                      <div className="w-full mt-10">
                        <label
                          className="block text-md font-medium mb-2"
                          htmlFor="message"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Leave us a message..."
                          className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          rows="6"
                          required
                        />
                      </div>

                      <div className="w-full max-w-lg mt-10">
                        <label
                          htmlFor="budget-slider"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Budget
                        </label>
                        <input
                          type="range"
                          id="budget-slider"
                          min="0"
                          max="200"
                          value={value}
                          onChange={handleSliderChange}
                          className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                          style={{
                            background: `linear-gradient(to right, #3b82f6 ${
                              value / 2
                            }%, #d1d5db ${value / 2}%)`,
                          }}
                        />
                        <div className="flex justify-between mt-2 text-sm text-gray-600">
                          <span>$0</span>
                          <span>${value}</span>
                          <span>$200k</span>
                        </div>
                      </div>

                      <div className="flex items-center mt-10">
                        <input
                          type="checkbox"
                          id="terms"
                          className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                          checked={isChecked}
                          onChange={handleCheckboxChange}
                          required
                        />
                        <label
                          htmlFor="terms"
                          className="ml-2 text-base text-gray-500"
                        >
                          Click the box and agree to our{" "}
                          <u>terms and conditions</u>.
                        </label>
                      </div>
                      <div className="mt-10">
                        <button
                          className={`bg-blue-700 w-full text-xl hover:bg-black text-white py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ${
                            !isFormValid ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                          type="submit"
                          disabled={!isFormValid}
                        >
                          Get Started
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Narrow>
    </div>
  );
}
