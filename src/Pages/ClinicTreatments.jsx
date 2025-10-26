import { ArrowRight } from "lucide-react";
import service1 from "../assets/Service1.jpg";
import service2 from "../assets/Service2.jpg";
import service3 from "../assets/Service3.jpg";

export default function ClinicTreatments() {
  const services = [
    {
      title: "General surgery",
      desc: "Lorem ipsum dolor sit amet. Ut inventore consequatur eos nobisa utem sit",
      img: service1,
    },
    {
      title: "Cardiology",
      desc: "Lorem ipsum dolor sit amet. Ut inventore consequatur eos nobisa utem sit",
      img: service2,
    },
    {
      title: "Primary care",
      desc: "Lorem ipsum dolor sit amet. Ut inventore consequatur eos nobisa utem sit",
      img: service3,
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="flex justify-between items-center mb-12">
        <div>
          <p className="text-sm font-semibold text-purple-500 tracking-widest uppercase">
            Our Exclusive Service
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#2b2540] mt-2">
            Our clinic treatments
          </h2>
        </div>

        <a
          href="#"
          className="text-purple-600 font-semibold hover:underline transition"
        >
          All Treatments
        </a>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-cyan-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="rounded-lg h-56 w-full object-cover mb-6"
            />

            <h3 className="text-2xl font-bold text-[#2b2540] mb-2 text-center">
              {service.title}
            </h3>

            <p className="text-gray-500 text-center mb-6 text-sm max-w-[90%] mx-auto">
              {service.desc}
            </p>

            <div className="flex justify-center">
              <a
                href="#"
                className="group font-semibold text-[#2b2540] flex items-center gap-2 hover:text-purple-600"
              >
                Know More
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
