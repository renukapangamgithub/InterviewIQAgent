import React from "react";
import {
  BsRobot,
  BsGithub,
  BsLinkedin,
  BsTwitterX,
} from "react-icons/bs";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#f5f7fb] px-4 py-12">
      <div className="max-w-7xl mx-auto bg-white border border-gray-200 rounded-[32px] shadow-lg overflow-hidden">
        
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10 px-8 md:px-14 py-14">
          
          {/* LEFT */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-3 rounded-2xl shadow-md">
                <BsRobot size={22} />
              </div>

              <h2 className="text-3xl font-bold text-gray-900">
                InterviewIQ
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed text-[15px] max-w-lg">
              AI-powered interview preparation platform designed to help
              students and professionals practice smarter, improve confidence,
              and crack interviews with real-time feedback and personalized
              analysis.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8">
              <button className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition duration-300">
                Start Practicing
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 gap-8">
            
            {/* QUICK LINKS */}
            <div>
              <h3 className="font-semibold text-lg mb-5 text-gray-900">
                Quick Links
              </h3>

              <ul className="space-y-3 text-gray-600">
                <li className="hover:text-green-600 cursor-pointer transition">
                  Home
                </li>

                <li className="hover:text-green-600 cursor-pointer transition">
                  Features
                </li>

                <li className="hover:text-green-600 cursor-pointer transition">
                  AI Mock Interview
                </li>

                <li className="hover:text-green-600 cursor-pointer transition">
                  Resume Analyzer
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="font-semibold text-lg mb-5 text-gray-900">
                Contact
              </h3>

              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <FiMail size={18} />
                  <span>support@interviewiq.com</span>
                </div>

                <div className="flex items-center gap-4 mt-6">
                  <div className="bg-gray-100 p-3 rounded-xl hover:bg-black hover:text-white transition cursor-pointer">
                    <BsGithub size={18} />
                  </div>

                  <div className="bg-gray-100 p-3 rounded-xl hover:bg-[#0077b5] hover:text-white transition cursor-pointer">
                    <BsLinkedin size={18} />
                  </div>

                  <div className="bg-gray-100 p-3 rounded-xl hover:bg-black hover:text-white transition cursor-pointer">
                    <BsTwitterX size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-200 px-8 md:px-14 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-sm text-gray-500 text-center md:text-left">
            © 2026 InterviewIQ. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm text-gray-500">
            <span className="hover:text-black cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="hover:text-black cursor-pointer transition">
              Terms & Conditions
            </span>

            <span className="hover:text-black cursor-pointer transition">
              Support
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;