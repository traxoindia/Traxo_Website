import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Footer from "../Footer";
import V2X from "../../images/C55.png"; // replace with actual V2X image if available

function V2XCommunication() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-white text-black py-20 pt-32">
        <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 space-y-6"
          >
            <h1 className="text-4xl lg:text-5xl text-black font-bold leading-tight">
              V2X Communication
            </h1>
            <p className="text-lg text-black">
              Vehicle-to-Everything (V2X) Communication is a cutting-edge
              technology that enables vehicles to interact with each other,
              roadside infrastructure, pedestrians, and networks. This enhances
              road safety, reduces traffic congestion, and paves the way for
              autonomous mobility.
            </p>
            <div className="flex space-x-4">
              <a
                href="/customercare"
                className="bg-black px-6 text-yellow-400 py-3 rounded-xl font-semibold hover:bg-green-700"
              >
                Request Demo
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <img src={V2X} alt="V2X Communication" className="" />
          </motion.div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Features & Specifications
          </motion.h2>

          <div className="space-y-6 max-w-3xl mx-auto">
            {[
              {
                title: "Key Features",
                content:
                  "• Real-time Vehicle-to-Vehicle (V2V) alerts\n• Vehicle-to-Infrastructure (V2I) traffic updates\n• Enhanced road safety through collision avoidance\n• Low-latency communication with 5G and DSRC",
              },
              {
                title: "Technical Specs",
                content:
                  "• Communication: DSRC / C-V2X (5G NR)\n• Range: Up to 1km in open areas\n• Latency: <10ms ultra-low delay\n• Integration: On-board units (OBU) & Roadside units (RSU)",
              },
              {
                title: "Use Cases",
                content:
                  "• Smart Traffic Management Systems\n• Collision Warning & Avoidance\n• Autonomous Vehicle Support\n• Emergency Vehicle Priority Routing",
              },
              {
                title: "Benefits",
                content:
                  "• Saves lives by reducing accidents\n• Improves urban traffic efficiency\n• Reduces fuel consumption & emissions\n• Enables seamless autonomous driving ecosystem",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group bg-white shadow-md rounded-xl p-6 cursor-pointer"
              >
                <summary className="flex justify-between items-center font-semibold text-lg">
                  {item.title}
                  <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-gray-600 whitespace-pre-line">
                  {item.content}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-yellow-600 py-16 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Drive the Future with V2X Technology
        </h2>
        <p className="text-lg mb-6">
          Enhance road safety and mobility with Vehicle-to-Everything
          Communication.
        </p>
        <a
          href="/customercare"
          className="bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
}

export default V2XCommunication;
