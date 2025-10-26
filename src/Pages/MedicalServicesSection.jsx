import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Phone } from "lucide-react";

// Replace these with your own image paths
import doctorImg from "../assets/doctor-main1.jpg";
import vaccineImg from "../assets/doctor-main.jpg";

const MedicalServicesSection = () => {
  return (
    <section className="w-full bg-white px-6 md:px-16 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">

        {/* LEFT Image & Video Card */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Main Image */}
          <img
            src={doctorImg}
            alt="Medical Service"
            className="rounded-3xl w-full md:w-[520px] shadow-xl"
          />

          {/* Floating Video Box */}
          {/* <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute left-[-30px] `-bottom-10` bg-white shadow-2xl rounded-2xl p-4 w-40 text-center"
          >
            <div className="relative">
              <img
                src={vaccineImg}
                alt="Watch Video"
                className="rounded-xl"
              />
              <button className="absolute inset-0 m-auto bg-white rounded-full p-2 shadow-md">
                ▶
              </button>
            </div>
            <p className="mt-3 font-medium text-gray-700">Watch our video</p>
          </motion.div> */}
        </motion.div>

        {/* RIGHT Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <p className="text-[14px] font-semibold text-purple-700 tracking-wide mb-2">
            THE NO 1 HOSPITAL
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2b2540] leading-tight mb-6">
            Access our range <br /> of medical services
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8">
            Med always help to provide proper treatment for most of get the
            proper cure and healthy life which is the cooperate focus thing
            for us patient our main propriety services.
          </p>

          {/* Feature List */}
          <div className="space-y-5 mb-10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-purple-600 w-6 h-6" />
              <span className="font-medium text-gray-800">
                Compassionate care for patients
              </span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-purple-600 w-6 h-6" />
              <span className="font-medium text-gray-800">
                24/7 nurse staff available here
              </span>
            </div>
          </div>

          {/* Button */}
          <button className="flex items-center gap-3 bg-purple-700 hover:bg-purple-800 text-white px-8 py-4 rounded-full text-lg shadow-md transition mx-auto md:mx-0">
            <Phone className="w-5 h-5" />
            123 456 4890
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default MedicalServicesSection;
