import React from "react";
import { FaHandsHelping, FaRegLightbulb, FaUsers, FaCheckCircle } from "react-icons/fa"; // Importing React Icons

export default function About() {
  return (
    <section className="py-16 px-6 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-blue-600 mb-8">About Us</h2>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          We are a modern financial institution committed to providing personalized, innovative, and secure banking solutions for individuals and businesses alike.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Section 1: Helping You Grow */}
          <div className="bg-blue-50 rounded-lg p-8 shadow-lg text-center">
            <FaHandsHelping className="text-4xl text-blue-600 mb-6" />
            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Helping You Grow</h4>
            <p className="text-gray-700">
              Our goal is to empower you to achieve financial growth with innovative solutions tailored to your needs.
            </p>
          </div>

          {/* Section 2: Innovation */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center border-2 border-blue-500">
            <FaRegLightbulb className="text-4xl text-blue-600 mb-6" />
            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Innovation at Its Core</h4>
            <p className="text-gray-700">
              We provide state-of-the-art financial services that are designed to stay ahead of the curve and cater to modern banking needs.
            </p>
          </div>

          {/* Section 3: Our Community */}
          <div className="bg-blue-50 rounded-lg p-8 shadow-lg text-center">
            <FaUsers className="text-4xl text-blue-600 mb-6" />
            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Our Community</h4>
            <p className="text-gray-700">
              We build strong relationships with our clients, focusing on trust, support, and collaboration.
            </p>
          </div>

          {/* Section 4: Excellence */}
          <div className="bg-white rounded-lg p-8 shadow-lg text-center border-2 border-blue-500">
            <FaCheckCircle className="text-4xl text-blue-600 mb-6" />
            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Commitment to Excellence</h4>
            <p className="text-gray-700">
              We are dedicated to delivering top-notch services, setting the standard for quality and reliability in the industry.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-semibold text-blue-600">Why Choose Us?</h3>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We prioritize your financial well-being, offering a range of products and services that are both flexible and secure. From personal banking to corporate solutions, we make banking a seamless experience.
          </p>
        </div>
      </div>
    </section>
  );
}
