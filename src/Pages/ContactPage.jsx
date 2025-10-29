import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const ContactPage = () => {
  return (
    <div className="bg-white text-gray-800">
      
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        className="bg-linear-to-r from-pink-50 via-pink-100 to-purple-100 py-24 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Contact Us
        </h1>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          Reach out to us for appointments, inquiries, or personalized dental care.
        </p>
      </motion.div>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start">

        
        {/* Contact Info */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="text-gray-600">
            Our team is always ready to help you. Let us know how we can assist you today.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Phone className="text-indigo-600 w-7 h-7" />
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-gray-600">+880 1234 567890</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-indigo-600 w-7 h-7" />
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600">support@dental.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-indigo-600 w-7 h-7" />
              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p className="text-gray-600">Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="rounded-xl overflow-hidden shadow-md h-64">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="bg-white shadow-xl p-8 rounded-2xl border border-indigo-50"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Send us a message
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-indigo-600 text-white font-semibold flex items-center justify-center gap-2 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            Send Message <Send className="w-5 h-5" />
          </button>
        </motion.form>
      </section>

    </div>
  );
};

export default ContactPage;