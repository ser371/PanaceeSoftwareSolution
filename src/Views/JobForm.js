import React, { useState } from "react";

const JobForm = (props) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    position: props.position,
    resume: null,
    institution: "",
    degree: "",
    location: "",
    description: "",
    jobtitle: "",
    company: "",
    officeLocation: "",
    experienceDescription: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    const position = formData.position;
    // e.preventDefault();
    console.log(formData);
    alert(`Your application has been sent for the position of ${position}`);
    setFormData({
      firstName: "",
      lastName: "",
      contactNumber: "",
      email: "",
      position: props.position,
      resume: null,
      institution: "",
      degree: "",
      location: "",
      description: "",
      jobtitle: "",
      company: "",
      officeLocation: "",
      experienceDescription: "",
    });
    // Handle form submission, e.g., send the data to an API endpoint
  };

  return (
    <div className="w-full mx-auto mt-10 p-4 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Job Application Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-3">
          <div className="w-1/2">
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="w-1/2">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="flex max-xl:flex-col gap-3">
          <div className="w-1/2 max-xl:w-full">
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Number
            </label>
            <input
              type="number"
              name="contactNumber"
              id="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="w-1/2 max-xl:w-full">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="position"
            className="block text-sm font-medium text-gray-700"
          >
            Position Applying For
          </label>
          <input
            name="position"
            id="position"
            readOnly
            value={formData.position}
            onChange={handleChange}
            className="mt-1 p-2 bg-blue-50 w-full border hover:cursor-not-allowed border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          ></input>
        </div>

        <div className="text-3xl mt-5 font-bold">Education</div>
        <div>
          <label
            htmlFor="institution"
            className="block text-sm font-medium text-gray-700"
          >
            Institution
          </label>
          <input
            type="text"
            name="institution"
            id="institution"
            value={formData.institution}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="flex gap-3 max-xl:flex-col">
          <div className="w-1/2 max-xl:w-full">
            <label
              htmlFor="degree"
              className="block text-sm font-medium text-gray-700"
            >
              Degree
            </label>
            <input
              type="text"
              name="degree"
              id="degree"
              value={formData.degree}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          <div className="w-1/2 max-xl:w-full">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700"
            >
              Institute Location
            </label>
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            rows={4}
            type="text"
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <div className="text-3xl font-bold mt-5">Experience</div>
        <div>
          <label
            htmlFor="jobtitle"
            className="block text-sm font-medium text-gray-700"
          >
            Job Title
          </label>
          <input
            type="text"
            name="jobtitle"
            id="jobtitle"
            value={formData.jobtitle}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex max-xl:flex-col gap-3">
          <div className="w-1/2 max-xl:w-full">
            <label
              htmlFor="company"
              className="block text-sm font-medium text-gray-700"
            >
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div className="w-1/2 max-xl:w-full">
            <label
              htmlFor="officeLocation"
              className="block text-sm font-medium text-gray-700"
            >
              Office Location
            </label>
            <input
              type="text"
              name="officeLocation"
              id="officeLocation"
              value={formData.officeLocation}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="experienceDescription"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            rows={4}
            type="text"
            name="experienceDescription"
            id="experienceDescription"
            value={formData.experienceDescription}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label
            htmlFor="resume"
            className="block text-sm font-medium text-gray-700"
          >
            Resume (PDF)
          </label>
          <input
            type="file"
            name="resume"
            id="resume"
            accept="application/pdf"
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Apply Now
        </button>
      </form>
    </div>
  );
};

export default JobForm;
