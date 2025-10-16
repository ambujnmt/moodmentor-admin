import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import { IoLanguage } from "react-icons/io5"; 
import Link from "next/link";

export default function Login() {
  return (
    <section className="loginForm">
      <div className="relative overflow-hidden">
          
        <div className="grid grid-cols-12">
          <div className="col-span-6 min-h-screen flex items-center justify-center">
            <div className="p-10 flex items-center justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/previews/003/689/228/non_2x/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg"
                alt="Login Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="col-span-6">
            <div className="p-10 bg-[#346748] min-h-screen flex items-center justify-center">
              <div className="items-start justify-center w-[80%]">

                <div className="flex-col z-20">
                  <h2 className="font-semibold mb-[30px] text-white"> Mood Mentor </h2>
                </div>

                <h2 className="text-xl font-semibold text-white mb-6 border-l-4 border-[#fff] pl-2">
                  Login as an Admin User
                </h2> 

                <form className="w-full">
                  {/* Email Input */}
                  <div className="w-full mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-100 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="user@demo.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm bg-transparent text-white"
                    /> 
                  </div>

                  {/* Password Input */}
                  <div className="mb-3">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-100 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-sm bg-transparent text-white"
                    /> 
                  </div>

                  <Link href="javascript:void(0);" className="text-gray-200 text-sm hover:no-underline hover:text-gray-400">
                    Forgot password?
                  </Link>

                  {/* Submit Button */}
                  <button
                    type="button"
                    className="flex justify-center items-center gap-2 font-bold w-full text-[15px] md:text-[14px] lg:text-[16px] xl:text-[16px] my-2 text-center text-[#346748] rounded-[600px] bg-[#fff] hover:bg-[#000] hover:text-white duration-300 py-2 hover:border mb-4 mt-4"
                  >
                    Login
                  </button>

                  <p className="text-gray-200 text-sm">New to Mood Mentor? <Link href="javascript:void(0);" className="text-white hover:no-underline hover:text-gray-400"> Sign Up </Link></p>
                </form>
              </div>
            </div>
          </div>
        </div>
 
      </div>
    </section>
  );
}
