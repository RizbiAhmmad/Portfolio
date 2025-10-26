import React from "react";
import { motion } from "framer-motion";
import { Accessibility, ClipboardList } from "lucide-react";

// Replace with your actual image imports
import nurse1 from "../assets/nurse1.jpg";
import nurse2 from "../assets/nurse2.jpg";
import nurse3 from "../assets/nurse3.jpg";

export default function HealthcareSolutions() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 bg-white overflow-hidden">
      {/* LEFT IMAGE GRID */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full md:w-1/2 flex justify-center"
      >
        <div className="grid grid-cols-2 gap-4 md:gap-16 relative">
          <img
            src={nurse1}
            alt="Doctor and patient"
            className="w-full h-40 md:w-60 md:h-72 object-cover rounded-2xl shadow-lg"
          />
          <img
            src={nurse2}
            alt="Dentist"
            className="w-full h-40 md:w-60 md:h-72 object-cover rounded-2xl shadow-lg mt-4 md:mt-12"
          />
          {/* Desktop: absolute stylish position */}
          <img
            src={nurse3}
            alt="Smiling Nurse"
            className="
    md:absolute 
    md:bottom-[-170px] 
    md:left-[60px] 
    w-full 
    h-48 
    md:w-72 
    md:h-72 
    object-cover 
    rounded-2xl 
    bg-white
    col-span-2
    mt-4
  "
          />
        </div>
      </motion.div>

      {/* RIGHT TEXT CONTENT */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 mt-16 md:mt-0 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#2b2540] leading-tight mb-6">
          Quality healthcare <br /> solution for all
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto md:mx-0 mb-10">
          Med always helps to provide proper treatment to ensure a healthy life.
          Our mission is to make healthcare more accessible, advanced, and
          caring for everyone.
        </p>

        {/* FEATURES */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
            <div className="flex items-center gap-3 bg-purple-50 rounded-full p-3 shadow-sm">
              <Accessibility className="w-6 h-6 text-purple-600" />
              <span className="font-semibold text-[#2b2540]">
                Modern instruments
              </span>
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left">
              Chesterton of paradoical <br /> He speaks headed
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8">
            <div className="flex items-center gap-3 bg-purple-50 rounded-full p-3 shadow-sm">
              <ClipboardList className="w-6 h-6 text-purple-600" />
              <span className="font-semibold text-[#2b2540]">
                Easy billing systems
              </span>
            </div>
            <p className="text-gray-500 text-sm text-center md:text-left">
              Chesterton of paradoical <br /> He speaks headed
            </p>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-center md:justify-start gap-4 mt-10">
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full shadow-lg transition">
            About Hospital
          </button>
          <button className="border border-gray-300 text-gray-800 rounded-full px-6 py-3 hover:bg-gray-100 transition">
            ⏰ Check Timetable
          </button>
        </div>
      </motion.div>
    </section>
  );
}
