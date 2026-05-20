import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMyInterviewData } from "../services/apiService";
import {
  BsArrowRight,
  BsClockHistory,
  BsBarChartFill,
  BsCheckCircleFill,
} from "react-icons/bs";
import { motion } from "framer-motion";

const InterviewHistory = () => {
  const [interviews, setInterviews] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getMyInterviews = async () => {
      try {
        const result = await getMyInterviewData();
        console.log(result.data);
        setInterviews(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getMyInterviews();
  }, []);

  const averageScore =
    interviews.length > 0
      ? (
          interviews.reduce((acc, item) => acc + (item.finalScore || 0), 0) /
          interviews.length
        ).toFixed(1)
      : 0;

  const bestScore =
    interviews.length > 0
      ? Math.max(...interviews.map((item) => item.finalScore || 0))
      : 0;

  return (
    <div
      className="min-h-screen bg-gradient-to-br 
    from-gray-50 via-white to-emerald-50 px-4 sm:px-6 py-10"
    >
      <div className="w-full max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-5 mb-10">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Interview History
            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              Track your interview performance and reports
            </p>
          </div>

          <button
            onClick={() => navigate("/")}
            className="bg-gradient-to-r from-emerald-600 to-teal-500 
            text-white px-6 py-3 rounded-2xl shadow-lg 
            hover:opacity-90 transition-all duration-300 
            flex items-center gap-2 font-semibold"
          >
            Start New Interview
            <BsArrowRight size={18} />
          </button>
        </div>
        {interviews.length === 0 ? (
          <div className="bg-white p-10 rounded-2xl shadow text-center">
            <p className="text-gray-500">
              No interviews found.Start your first Interview
            </p>
          </div>
        ) : (
          <div className="grid gap-3">
            {interviews.map((item, index) => {
              return (
                <div
                onClick={()=>navigate(`/report/${item._id}`)}
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-md hover:shadow-2xl 
        transition-all duration-300 cursor-pointer border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.role}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        {item.experience} • {item.mode}
                      </p>

                      <p className="text-xs text-gray-400 mt-2">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <div className="flex items-center gap-6">
                      {/* SCORE */}
                      <div className="text-right">
                        <p className="text-4xl font-bold text-emerald-600">
                          {item.finalScore || 0}/10
                        </p>

                        <p className="text-xs text-gray-400">Overall Score</p>
                      </div>

                      {/* STATUS */}
                      <span
                        className={`px-4 py-1 rounded-full text-sm font-medium
              ${
                item.status === "completed"
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default InterviewHistory;
