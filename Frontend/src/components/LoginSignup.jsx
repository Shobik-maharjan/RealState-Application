import React, { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";
import { defaultCountries, PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import signuphome from "../assets/images/signupHome.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginSignup = () => {
  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(
          /^[0-9]+$/, // Regex to allow only digits (you can modify for better formats)
          "Phone number is not valid. Only digits are allowed."
        )
        .required("Please enter your number"),
    }),
    onsubmit: (values, action) => {
      console.log(values);
    },
  });

  return (
    <>
      <div className="flex justify-center items-center z-10 bg-white">
        <div className="flex md:flex-row flex-col h-[500px] relative shadow-md shadow-slate-400">
          {/* <RxCross1 className="absolute right-4 top-4 cursor-pointer text-xl" /> */}
          <div className="hidden md:flex flex-col gap-2 bg-slate-100 p-6 md:justify-center w-[42%] text-sm">
            <img src={signuphome} alt="" width="30%" />
            <div className="font-bold">Login / Sign up</div>
            <div className="flex items-center opacity-80 text-xs">
              <IoMdCheckmark /> Zero Brokerage.
            </div>
            <div className="flex items-center opacity-80 text-xs">
              <IoMdCheckmark /> Thousands of new listings daily.
            </div>
            <div className="flex items-center opacity-80 text-xs">
              <IoMdCheckmark /> 100 Cr+ Brokerage saved monthly.
            </div>
          </div>
          <div className="flex flex-col md:h-auto h-full justify-between p-4 md:p-8 md:mt-4 md:w-7/12">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="mb-0 text-lg font-medium">
                Enter phone to continue
              </div>
              <div>
                <PhoneInput
                  defaultCountry="np"
                  value={values.phone}
                  name="phone"
                  onChange={handleChange}
                  inputStyle={{ width: "100%" }}
                />
              </div>
              <div className="text-red-500">
                {errors.phone && touched.phone ? errors.phone : null}
              </div>
              <button
                type="submit"
                className="bg-[#ff5800] hover:bg-[#ff5800]/90 text-white w-full px-4 py-2 rounded-md"
              >
                Continue
              </button>
            </form>
            <div className="text-center">
              <span className="text-xs">By continuing, you agree to our </span>
              <span className="hover:underline font-bold text-xs cursor-pointer">
                Terms & Conditions
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
