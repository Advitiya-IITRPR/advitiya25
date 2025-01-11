"use client";

import { useState } from "react";

export default function Frame2() {
  const [inputValues, setInputValues] = useState({
    name: "",
    mobile: "",
    email: "",
    college: "",
  });

  // Handle input change to update values and apply border when typing
  const handleChange = (field, value) => {
    setInputValues({ ...inputValues, [field]: value });
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-6 px-4">
      <div className="w-full max-w-3xl flex flex-col justify-start items-center gap-6">
        {/* Form Section 1 */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-6 md:gap-10">
          {/* Name Field */}
          <div className="w-full md:w-[48%] flex flex-col justify-start items-start gap-4">
            <div className="text-white text-lg md:text-[18px] font-medium font-['Kodchasan'] capitalize">
              Name
            </div>
            <input
              type="text"
              placeholder="Enter Name"
              className={`w-full p-4 bg-[#0f161c] rounded-[54px] text-[#636363] text-xl font-medium font-['Kodchasan'] capitalize focus:outline-none focus:border-[#3be174] ${
                inputValues.name ? "border-[#3be174]" : ""
              }`}
              value={inputValues.name}
              onChange={(e) => handleChange("name", e.target.value)}
            />
          </div>
          {/* Mobile Number Field */}
          <div className="w-full md:w-[48%] flex flex-col justify-start items-start gap-4">
            <div className="text-white text-lg md:text-[18px] font-medium font-['Kodchasan'] capitalize">
              Mobile Number
            </div>
            <input
              type="tel"
              placeholder="Enter mobile number"
              className={`w-full p-4 bg-[#0f161c] rounded-[54px] text-[#636363] text-xl font-medium font-['Kodchasan'] capitalize focus:outline-none focus:border-[#3be174] ${
                inputValues.mobile ? "border-[#3be174]" : ""
              }`}
              value={inputValues.mobile}
              onChange={(e) => handleChange("mobile", e.target.value)}
            />
          </div>
        </div>

        {/* Form Section 2 */}
        <div className="w-full flex flex-col md:flex-row justify-between gap-6 md:gap-10">
          {/* Email Field */}
          <div className="w-full md:w-[48%] flex flex-col justify-start items-start gap-4">
            <div className="text-white text-lg md:text-[18px] font-medium font-['Kodchasan'] capitalize">
              Email
            </div>
            <input
              type="email"
              placeholder="kenzi.lawson@example.com"
              className={`w-full p-4 bg-[#0f161c] rounded-[54px] text-white text-xl font-medium font-['Kodchasan'] capitalize focus:outline-none focus:border-[#3be174] ${
                inputValues.email ? "border-[#3be174]" : ""
              }`}
              value={inputValues.email}
              onChange={(e) => handleChange("email", e.target.value)}
            />
          </div>
          {/* College Name Field */}
          <div className="w-full md:w-[48%] flex flex-col justify-start items-start gap-4">
            <div className="text-white text-lg md:text-[18px] font-medium font-['Kodchasan'] capitalize">
              College Name
            </div>
            <input
              type="text"
              placeholder="Jenny"
              className={`w-full p-4 bg-[#0f161c] rounded-[54px] text-white text-xl font-medium font-['Kodchasan'] capitalize focus:outline-none focus:border-[#3be174] ${
                inputValues.college ? "border-[#3be174]" : ""
              }`}
              value={inputValues.college}
              onChange={(e) => handleChange("college", e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        className="w-full sm:w-[290px] h-[86px] px-6 py-2.5 bg-gradient-to-b from-[#43f27f] to-[#09772f] rounded-[60px] border border-white/50 flex justify-center items-center gap-2.5 mt-8"
        onClick={() => alert("Form Submitted")}
      >
        <div className="text-center text-white text-lg sm:text-[22px] font-semibold font-['Exo']">
          SUBMIT
        </div>
      </button>
    </div>
  );
}
