import React from "react";
import { motion } from "framer-motion";
import doctorMain from "../../src/assets/doctor-main.jpg";
import doctorThumb from "../../src/assets/doctor-thumb.jpg";
import { IoVideocamOutline } from "react-icons/io5";
import { BsBalloonHeartFill } from "react-icons/bs";
import { LuClipboardPenLine } from "react-icons/lu";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Banner() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10 bg-linear-to-r from-pink-50 via-pink-100 to-purple-100 overflow-hidden">
      {/* Left text */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 py-12"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#2b2540]">
          Medical and <br />
          clinic centre <br />
          <span className="underline decoration-purple-400 underline-offset-8">
            services
          </span>
        </h1>

        <p className="mt-6 text-gray-600 max-w-xl">
          Chesterton, a writer of paradoxical stories, is the contrarian who
          speaks for the pig-headed and visionary alike. Professional doctors,
          easy booking and online consultations.
        </p>

        <div className="mt-8 flex gap-4">
          <motion.button
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg flex items-center gap-3"
          >
            <LuClipboardPenLine />
            Book an Appointment
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-white text-gray-800 rounded-xl border border-gray-200 shadow-sm flex items-center gap-3"
          >
            <IoVideocamOutline />
            Video Call
          </motion.button>
        </div>
      </motion.div>

      {/* Right image / decorations */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex justify-center relative py-8"
      >
        {/* soft decorative circles / pattern (SVG background) */}
        <svg
          className="absolute -right-6 top-8 w-[420px] h-[420px] pointer-events-none"
          viewBox="0 0 400 400"
          fill="none"
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#FDE8F2" />
              <stop offset="100%" stopColor="#EEF2FF" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="180" fill="url(#g1)" opacity="0.6" />
        </svg>

        {/* main doctor image */}
        <img
          src={doctorMain}
          alt="Doctor"
          className="relative w-[280px] md:w-[420px] rounded-3xl shadow-2xl z-10"
        />

        {/* small floating rounded card with doctor thumbnail */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute top-50 right-6 w-36 md:w-44 bg-white rounded-2xl p-2 shadow-xl flex items-center gap-3 z-20"
        >
          <img
            src={doctorThumb}
            alt="Dr"
            className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-cover"
          />
          <div>
            <div className="text-sm md:text-base font-semibold text-[#2b2540]">
              Dr. Stella
            </div>
            <div className="text-xs text-gray-500">Cardiologist</div>
          </div>
        </motion.div>

        {/* floating heart badge */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute left-10 bottom-40 bg-white p-4 rounded-full shadow-lg z-20 text-red-500 text-3xl"
        >
          <BsBalloonHeartFill />
        </motion.div>

        {/* service chip */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute left-40 bottom-20 bg-linear-to-r from-[#6b46c1] to-[#8b5cf6] text-white text-sm py-4 px-4 rounded-full shadow-xl z-20 flex items-center gap-2"
        >
          <FaRegCircleCheck />
          Regular checkup service
        </motion.div>
      </motion.div>
    </section>
  );
}
