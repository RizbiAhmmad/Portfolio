import { HeartPulse, Stethoscope, Award, Smile } from "lucide-react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import aboutImg from "../assets/AboutBanner.png";

const stats = [
  { number: 25, suffix: "+", label: "Years Experience" },
  { number: 10000, suffix: "+", label: "Happy Patients" },
  { number: 25, suffix: "+", label: "Dental Specialists" },
  { number: 98, suffix: "%", label: "Success Rate" },
];

const features = [
  {
    icon: <Smile className="w-10 h-10 text-indigo-600" />,
    title: "Cosmetic Excellence",
    desc: "Advanced treatments to help you achieve the perfect smile.",
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-indigo-600" />,
    title: "Modern Equipment",
    desc: "World-class technology ensures painless and accurate care.",
  },
  {
    icon: <HeartPulse className="w-10 h-10 text-indigo-600" />,
    title: "Comfort First",
    desc: "Friendly doctors and relaxing environment for stress-free visits.",
  },
  {
    icon: <Award className="w-10 h-10 text-indigo-600" />,
    title: "Certified Dentists",
    desc: "Highly trained specialists with years of proven expertise.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const testimonials = [
  {
    name: "Ayesha Rahman",
    review:
      "The best dental experience I have ever had. The doctors are so gentle and caring. Finally loving my smile again!",
    location: "Dhanmondi, Dhaka",
  },
  {
    name: "Arif Hossen",
    review:
      "Modern equipment and painless treatment. I was scared of dentists before, not anymore!",
    location: "Chattogram",
  },
  {
    name: "Simran Jahan",
    review:
      "Friendly environment and very professional doctors. Highly recommended.",
    location: "Uttara, Dhaka",
  },
];


const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      {/* Hero */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="bg-linear-to-r from-pink-50 via-pink-100 to-purple-100 py-24 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
          About Our Dental Care
        </h1>
        <p classname="text-lg max-w-2xl mx-auto mt-4 text-gray-600">
          Modern treatments. Comfortable care. Beautiful smiles.
        </p>
      </motion.div>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-indigo-500 font-semibold mb-2">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            We are here to give you a healthy smile
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed">
            Our clinic provides top-level dental care with the latest technology
            and a personalized approach.
          </p>
          <p className="mt-3 text-gray-600">
            Your comfort and trust matter to us, always.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <img src={aboutImg} className="w-full h-full object-cover" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-linear-to-r from-pink-50 via-pink-100 to-purple-100 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="text-4xl font-extrabold text-indigo-700 drop-shadow-sm">
                <CountUp end={stat.number} duration={2} />
                {stat.suffix}
              </h3>
              <p className="text-gray-700 mt-2 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-14"
        >
          We care for your smile like our own
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ scale: 1.05}}
              className="bg-white shadow-md p-8 rounded-xl text-center border border-transparent hover:border-indigo-200 hover:bg-cyan-50"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg text-gray-900">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
