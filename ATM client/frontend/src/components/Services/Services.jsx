import React from "react";
import { FaBuilding, FaCreditCard, FaMoneyBillAlt, FaShieldAlt } from "react-icons/fa"; // React Icons

export default function Services() {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-blue-600 mb-12">Our Services</h2>
        <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
          Explore a variety of financial services designed to help you achieve your personal and business goals.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Service 1: Business Banking */}
          <div className="service-card bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl p-8 text-center">
            <div className="icon-container mb-6">
              <FaBuilding className="text-5xl text-blue-600 mx-auto" />
            </div>
            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Business Banking</h4>
            <p className="text-gray-700 mb-6">
              Personalized banking solutions for entrepreneurs and small businesses, designed to fuel growth and innovation.
            </p>
            <ul className="text-gray-600 mb-6">
              <li>✔ Flexible payment options</li>
              <li>✔ Business loans with competitive rates</li>
              <li>✔ Comprehensive business advice</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Learn More
            </button>
          </div>

          {/* Service 2: Credit Cards */}
          <div className="service-card bg-blue-50 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl p-8 text-center">
            <div className="icon-container mb-6">
              <FaCreditCard className="text-5xl text-blue-600 mx-auto" />
            </div>
            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Credit Cards</h4>
            <p className="text-gray-700 mb-6">
              Enjoy flexible credit options with attractive rewards, low interest rates, and added benefits for your spending needs.
            </p>
            <ul className="text-gray-600 mb-6">
              <li>✔ Earn cashback on all purchases</li>
              <li>✔ Low APR rates</li>
              <li>✔ No annual fee</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Apply Now
            </button>
          </div>

          {/* Service 3: Personal Loans */}
          <div className="service-card bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl p-8 text-center">
            <div className="icon-container mb-6">
              <FaMoneyBillAlt className="text-5xl text-blue-600 mx-auto" />
            </div>
            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Personal Loans</h4>
            <p className="text-gray-700 mb-6">
              Get access to personal loans at competitive rates with flexible repayment terms tailored to your needs.
            </p>
            <ul className="text-gray-600 mb-6">
              <li>✔ Low interest rates</li>
              <li>✔ Quick approval process</li>
              <li>✔ Flexible repayment options</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Get Started
            </button>
          </div>

          {/* Service 4: Insurance */}
          <div className="service-card bg-blue-50 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl p-8 text-center">
            <div className="icon-container mb-6">
              <FaShieldAlt className="text-5xl text-blue-600 mx-auto" />
            </div>
            <h4 className="text-2xl font-semibold text-blue-600 mb-4">Insurance</h4>
            <p className="text-gray-700 mb-6">
              Secure your future with comprehensive life, health, and asset protection policies tailored for your peace of mind.
            </p>
            <ul className="text-gray-600 mb-6">
              <li>✔ Life and health coverage</li>
              <li>✔ Customized plans</li>
              <li>✔ 24/7 customer support</li>
            </ul>
            <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Service Options Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-blue-600 text-center mb-8">Explore Our Service Options</h3>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Each of our services is tailored to meet your specific needs. Whether you're managing personal finances or running a business, we have a solution for you.
          </p>

          {/* Service Options Details */}
          <div className="flex flex-wrap justify-center gap-8">
            <div className="service-option bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center w-64">
              <h4 className="text-2xl font-semibold text-blue-600 mb-4">Premium Business Account</h4>
              <p className="text-gray-700 mb-4">
                Get access to exclusive business tools, higher transaction limits, and customized support.
              </p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Learn More
              </button>
            </div>

            <div className="service-option bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center w-64">
              <h4 className="text-2xl font-semibold text-blue-600 mb-4">Custom Credit Solutions</h4>
              <p className="text-gray-700 mb-4">
                Tailored credit solutions with flexible limits, competitive rates, and rewards for all spending.
              </p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Apply Now
              </button>
            </div>

            <div className="service-option bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition duration-300 text-center w-64">
              <h4 className="text-2xl font-semibold text-blue-600 mb-4">Health & Life Insurance</h4>
              <p className="text-gray-700 mb-4">
                Comprehensive insurance plans that protect you, your family, and your assets.
              </p>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
