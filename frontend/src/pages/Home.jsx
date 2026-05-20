import React, { useState } from "react";
import Navbar from "../components/Navbar";
import {
  BsRobot,
  BsMic,
  BsClock,
  BsBarChart,
  BsFileEarmarkText,
  BsCreditCard,
  BsOpenai,
} from "react-icons/bs";
import { useSelector } from "react-redux";
import { HiSparkles } from "react-icons/hi";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import AuthModel from "../components/AuthModel.jsx";
import evalImg from "../assets/ai-ans.png";
import confiImg from "../assets/confi.png";
import creditImg from "../assets/credit.png";
import heroImg from "../assets/hero.png";
import historyImg from "../assets/history.png";
import hrImg from "../assets/HR.png";
import mmImg from "../assets/MM.png";
import pdfImg from "../assets/pdf.png";
import resumeImg from "../assets/resume.png";
import techImg from "../assets/tech.png";
import Footer from "../components/Footer.jsx";

const Home = () => {
  const [showAuth, setShowAuth] = useState(false);
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex flex-col">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-100 text-gray-600 text-sm px-4 py-2 rounded-full flex items-center gap-2">
            <HiSparkles size={16} className="bg-green-50" />
            AI Powered Smart Interivew Platforms
          </div>
        </div>
        <div className="text-center mb-28">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-semibold leading-tight max-w-4xl mx-auto"
          >
            Practice interviews with
            <span className="relative inline-block">
              <span className="bg-green-100 text-green-600 px-5 py-1 rounded-full">
                AI Inteligence
              </span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg "
          >
            Role based mock interview with smart follow-ups adaptive difficulty
            and real-time performance evaluation.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <motion.button
              onClick={() => {
                if (!userData) {
                  setShowAuth(true);
                  return;
                }
                navigate("/interview");
              }}
              whileHover={{ opacity: 0.9, scale: 1.03 }}
              whileTap={{ opacity: 1, scale: 0.9 }}
              className="bg-black text-white px-10 py-3 rounded-full hover:opacity-90 transition shadow-md"
            >
              Start Interview
            </motion.button>

            <motion.button
              onClick={() => {
                if (!userData) {
                  setShowAuth(true);
                  return;
                }
                navigate("/history");
              }}
              whileHover={{ opacity: 0.9, scale: 1.03 }}
              whileTap={{ opacity: 1, scale: 0.9 }}
              className="border border-gray-300 px-10 py-3 rounded-full hover:bg-gray-100 transition"
            >
              View History
            </motion.button>
          </div>
        </div>
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mb-20">
            {[
              {
                icon: <BsRobot size={24} />,
                step: "STEP 1",
                title: "Role & Experience Selection",
                desc: "AI adjusts interview difficulty based on your selected job role and experience level.",
              },
              {
                icon: <BsMic size={24} />,
                step: "STEP 2",
                title: "AI Voice Interaction",
                desc: "Answer interview questions naturally using real-time voice conversations with AI.",
              },
              {
                icon: <BsClock size={24} />,
                step: "STEP 3",
                title: "Real-Time Interview",
                desc: "Practice under realistic interview timing and adaptive follow-up questions.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`
      relative bg-white rounded-3xl border-2 border-green-100 
      hover:border-green-500 p-10 w-80 max-w-[90%] shadow-md 
      hover:shadow-2xl transition-all duration-300

      ${index === 0 ? "rotate-[-4deg]" : ""}
      ${index === 1 ? "rotate-[3deg] md:-mt-6 shadow-xl" : ""}
      ${index === 2 ? "rotate-[-3deg]" : ""}
    `}
              >
                <div
                  className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white border-2 border-green-600
            text-green-600 w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                >
                  {item.icon}
                </div>

                <div className="pt-10 text-center">
                  <div className="text-sm text-green-600 font-semibold mb-2 tracking-wider">
                    {item.step}
                  </div>

                  <h2 className="text-xl font-semibold mb-3 text-gray-900">
                    {item.title}
                  </h2>

                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mb-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-semibold text-center mb-16"
            >
              Advanced AI{""}
              <span className="text-green-600"> Capabilities</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  img: evalImg,
                  icon: <BsBarChart size={20} />,
                  title: "AI Answer Evaluation",
                  desc: "Scores communication, technical accuracy and confidence in real-time.",
                },
                {
                  img: resumeImg,
                  icon: <BsFileEarmarkText size={20} />,
                  title: "Resume Based Interview",
                  desc: "Project-specifi questiONS Based on uploaded resume",
                },
                {
                  img: pdfImg,
                  icon: <BsFileEarmarkText size={20} />,
                  title: "PDF Interview Analysis",
                  desc: "Extracts key insights from uploaded PDFs and generates smart questions.",
                },
                {
                  img: historyImg,
                  icon: <BsBarChart size={20} />,
                  title: "Interview History",
                  desc: "Stores all your past interviews with detailed performance reports.",
                },
              ].map((mode, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white border border-gray-200 rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="w-1/2">
                        <h3 className="font-semibold text-xl mb-3">
                          {mode.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {mode.desc}
                        </p>
                      </div>

                      <div className="w-1/2 flex justify-enD">
                        <img
                          src={mode.img}
                          alt="mode.title"
                          className="w_28 H-28 object-contain"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="mb-32">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-semibold text-center mb-16"
            >
              Multiple interview{""}
              <span className="text-green-600"> Modes</span>
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  image: hrImg,
                  icon: <BsRobot size={20} />,
                  title: "HR Interview Simulation",
                  desc: "AI simulates real HR interviews with behavioral and situational questions.",
                },
                {
                  image: techImg,
                  icon: <BsOpenai size={20} />,
                  title: "Technical Interview Mode",
                  desc: "Practice coding and technical questions tailored to your skill level.",
                },
                {
                  image: confiImg,
                  icon: <BsBarChart size={20} />,
                  title: "Confidence Analysis",
                  desc: "Tracks your speaking confidence and provides improvement feedback.",
                },
                {
                  image: creditImg,
                  icon: <BsCreditCard size={20} />,
                  title: "Credit System",
                  desc: "Earn and manage credits for interviews, analytics, and AI usage.",
                },
              ].map((item, index) => {
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -6 }}
                    className="bg-white border border-gray-200 rounded-3xl p-6 shadow-md hover:shadow-2xl transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="w-full md:w-1/2 flex justify-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-auto object-contain max-h-64 rounded-2xl"
                        />
                      </div>

                      <div className="w-full md:w-1/2 flex flex-col gap-3">
                        <div className="flex items-center gap-2 text-green-600">
                          {item.icon}
                          <h3 className="text-xl font-semibold text-gray-900">
                            {item.title}
                          </h3>
                        </div>

                        <p className="text-gray-500 text-sm leading-relaxed">
                          {item.desc}
                        </p>

                        <button className="mt-3 w-fit px-5 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition">
                          Learn More
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {showAuth && <AuthModel onClose={() => setShowAuth(false)} />}
        <Footer/>
    </div>
  );
};

export default Home;
