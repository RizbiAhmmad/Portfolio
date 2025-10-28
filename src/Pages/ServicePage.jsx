import { motion } from "framer-motion";
import {  Sparkles, HeartPulse, ShieldCheck, Smile } from "lucide-react";
import serviceImg from "../assets/serviceBanner.png"; 

const services = [
  {
    icon: <Smile className="w-10 h-10 text-indigo-600" />,
    title: "General Dentistry",
    desc: "Routine checkups, cleaning, fillings. Comprehensive care to keep your teeth healthy.",
  },
  {
    icon: <Sparkles className="w-10 h-10 text-indigo-600" />,
    title: "Cosmetic Dentistry",
    desc: "Whitening, veneers, smile design to bring out the best version of your teeth.",
  },
  {
    icon: <HeartPulse className="w-10 h-10 text-indigo-600" />,
    title: "Root Canal Treatment",
    desc: "Safe and painless root canal treatment to relieve tooth pain efficiently.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-indigo-600" />,
    title: "Dental Implants",
    desc: "Permanent and natural replacement for missing teeth to restore your smile.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const ServicesPage = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">

      {/* Hero */}
      <section className="bg-linear-to-r from-pink-50 via-pink-100 to-purple-100 py-24 text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-4xl md:text-6xl font-bold text-gray-900"
        >
          Our Dental Services
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="text-lg max-w-2xl mx-auto mt-4 text-gray-700"
        >
          Bright smiles need expert care. Discover treatments designed for every age.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14"
        >
          What We Offer
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              className="bg-white shadow-lg p-8 rounded-2xl text-center border border-transparent hover:border-indigo-200 hover:bg-indigo-50 transition"
            >
              <div className="flex justify-center mb-5">{service.icon}</div>
              <h3 className="font-semibold text-xl text-gray-900">{service.title}</h3>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-linear-to-r from-indigo-50 via-purple-50 to-pink-50">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12"
        >
          Your Comfort Is Always First
        </motion.h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          {[
            "Book Appointment",
            "Consultation & Diagnosis",
            "Personalized Treatment",
          ].map((step, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-xl"
            >
              <span className="text-3xl font-bold text-indigo-600">{idx + 1}</span>
              <p className="font-medium text-gray-800 mt-3">{step}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-center">
        <motion.h3
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-2xl font-bold text-gray-900"
        >
          Ready for a Healthier Smile?
        </motion.h3>
        <motion.button
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-6 bg-indigo-600 hover:bg-indigo-700 px-8 py-3 text-white rounded-full font-medium shadow-lg"
        >
          Book Appointment
        </motion.button>
      </section>

    </div>
  );
};

export default ServicesPage;
