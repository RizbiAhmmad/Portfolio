import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import doctorImg1 from "../assets/doctor1.jpg";
import doctorImg2 from "../assets/doctor2.jpg";
import doctorImg3 from "../assets/doctor3.jpg";
import doctorImg4 from "../assets/doctor4.jpg";

const doctors = [
  {
    name: "Dr. Jennifer Catlin",
    specialty: "Neurologist",
    img: doctorImg1,
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dr. Harshal Achayra",
    specialty: "Cardiologist",
    img: doctorImg2,
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dr. Bhumi Chauan",
    specialty: "Endocrinologist",
    img: doctorImg3,
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Dr. Nisha Gurain",
    specialty: "Dermatologist",
    img: doctorImg4,
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    linkedin: "https://linkedin.com",
  },
];

const QualifiedDoctors = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMobileToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <div>
          <p className="text-sm font-semibold text-indigo-500 mb-2">
            MEET WITH OUR SPECIALIST
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our qualified doctors
          </h2>
        </div>
        <Link to="/doctors" className="text-indigo-600 font-medium hover:underline">
          View all Doctors
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {doctors.map((doctor, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className="group cursor-pointer transition relative"
              onClick={() => handleMobileToggle(index)}
            >
              <div className="bg-[#E3DAFF] rounded-2xl relative h-[330px] flex justify-center items-center overflow-hidden">

                <img
                  src={doctor.img}
                  alt={doctor.name}
                  className="w-full max-w-[250px] object-cover rounded-xl transition group-hover:scale-105 duration-300"
                />

                {/* Overlay */}
                <div
                  className={`absolute bottom-0 left-0 w-full h-full bg-linear-to-t from-black/50 to-transparent transition-all duration-500
                    md:opacity-0 md:group-hover:opacity-100
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                  `}
                ></div>

                {/* Social Icons */}
                <div
                  className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10 transition-all duration-500
                    md:opacity-0 md:translate-y-6
                    md:group-hover:opacity-100 md:group-hover:translate-y-0
                    ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                  `}
                >
                  <a
                    href={doctor.facebook}
                    target="_blank"
                    className="bg-white p-2 rounded-full shadow hover:bg-indigo-100 transition"
                  >
                    <Facebook className="text-indigo-600 w-5 h-5" />
                  </a>

                  <a
                    href={doctor.youtube}
                    target="_blank"
                    className="bg-white p-2 rounded-full shadow hover:bg-indigo-100 transition"
                  >
                    <Youtube className="text-indigo-600 w-5 h-5" />
                  </a>

                  <a
                    href={doctor.linkedin}
                    target="_blank"
                    className="bg-white p-2 rounded-full shadow hover:bg-indigo-100 transition"
                  >
                    <Linkedin className="text-indigo-600 w-5 h-5" />
                  </a>
                </div>

              </div>

              <h3 className="text-xl font-semibold text-center mt-4 text-gray-900">
                {doctor.name}
              </h3>
              <p className="text-center text-sm text-gray-600">{doctor.specialty}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default QualifiedDoctors;