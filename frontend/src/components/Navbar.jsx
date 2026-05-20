import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import { FaRobot, FaUserCircle } from "react-icons/fa";
import { RiCoinFill } from "react-icons/ri";
import { MdLogout } from "react-icons/md";
import { Await, useNavigate } from "react-router-dom";
import { setUserData } from "../redux/userSlice.js";
import { googleLogout } from "../services/apiService.js";
import AuthModel from "./AuthModel.jsx";

const Navbar = () => {
  const { userData } = useSelector((state) => state.user);
  const [showCreditPopup, setShowCreditPopup] = useState(false);
  const [showUserPopup, setShowUserPopup] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showAuth, setShowAuth] = useState(false);

  const handleLogout = async () => {
    try {
      await googleLogout();
      dispatch(setUserData(null));
      setShowCreditPopup(false);
      setShowUserPopup(false);
      setShowAuth(true)
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-[#f3f3f3] flex justify-center px-4 pt-6">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-6xl bg-white rounded-[24px] shadow-sm border border-gray-200 px-8 py-4 flex justify-between items-center relative"
      >
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <div className="bg-black text-white p-2 rounded-lg">
            <FaRobot size={18} />
          </div>

          <h1 className="text-xl font-semibold">Interviewiq.AI</h1>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5 relative">
          <div className="relative">
            <button
              onClick={() => {
                if (!userData) {
                  setShowAuth(true);
                  return;
                }
                setShowCreditPopup(!showCreditPopup);
                setShowUserPopup(false);
              }}
              className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full text-md hover:bg-gray-200 transition"
            >
              <RiCoinFill className="text-yellow-500" size={20} />
              {userData?.credits || 0}
            </button>
            {showCreditPopup && (
              <div className="absolute right-[-50px] mt-3 w-64 bg-white shadow-xl border border-gray-200 rounded p-5 z-50">
                <p className="text-sm text-gray-600 mb-4">
                  Need more credits to continue interviews?
                </p>
                <button
                  onClick={() => navigate("/pricing")}
                  className="w-full bg-black text-white py-2.5 rounded-lg text-sm 
                hover:bg-white hover:text-black border border-black 
                  transition-all duration-300 hover:scale-90"
                >
                  Buy More Credits
                </button>
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => {
                if (!userData) {
                  setShowAuth(true);
                  return;
                }
                setShowUserPopup(!showUserPopup);
                setShowCreditPopup(false);
              }}
              className="w-9 h-9 bg-black text-white rounded-full flex items-center justify-center font-semibold"
            >
              {userData ? (
                userData.name.slice(0, 1).toUpperCase()
              ) : (
                <FaUserCircle size={16} />
              )}
            </button>
            {showUserPopup && (
              <div className="absolute right-0 mt-3 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl p-5 z-50">
                <p className="text-left px-4  text-blue-600 font-semibold mb-3 capitalize">
                  {userData?.name}
                </p>

                <button
                  onClick={() => navigate("/history")}
                  className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 text-gray-700 transition-all duration-200"
                >
                  Interview History
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-all duration-200"
                >
                  <MdLogout size={16} />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
      {showAuth && <AuthModel onClose={()=>setShowAuth(false)} />}
    </div>
  );
};

export default Navbar;
