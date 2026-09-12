import React from 'react'
import { FaChartLine, FaPiggyBank, FaShieldAlt, FaMobileAlt, FaUserTie, FaGlobe, 
  FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare, 
  FaNewspaper, FaQuestionCircle, FaUsers, FaMoneyBillWave, FaGlobeAmericas
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Welcome to RF Bank</h1>
              <p className="text-xl mb-8">Secure, Innovative, and Personalized Banking Solutions</p>
              <Link to="/atm" className="bg-yellow-500 text-blue-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition duration-300">Get Started</Link>
            </div>
            <div className="md:w-1/2">
              <img src="https://media.istockphoto.com/id/640267784/photo/bank-building.jpg?s=612x612&w=0&k=20&c=UTtm4t6WR-MLwO6ATq5l6n3SoCc6HpaClEFZMxO1Nek=" alt="RF Bank Building" className="rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard icon={<FaChartLine className="text-5xl text-blue-600" />} title="Investment Solutions" description="Grow your wealth with our expert-guided investment options" />
            <FeatureCard icon={<FaPiggyBank className="text-5xl text-green-600" />} title="Savings Accounts" description="Competitive interest rates to help your money grow faster" />
            <FeatureCard icon={<FaShieldAlt className="text-5xl text-red-600" />} title="Secure Banking" description="State-of-the-art security measures to protect your assets" />
            <FeatureCard icon={<FaMobileAlt className="text-5xl text-purple-600" />} title="Mobile Banking" description="Bank on-the-go with our user-friendly mobile app" />
            <FeatureCard icon={<FaUserTie className="text-5xl text-yellow-600" />} title="Personal Loans" description="Flexible personal loans tailored to your needs" />
            <FeatureCard icon={<FaGlobe className="text-5xl text-indigo-600" />} title="International Services" description="Seamless international transactions and support" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-blue-800 text-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">RF Bank by the Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard icon={<FaUsers className="text-5xl text-yellow-400" />} number="1M+" description="Happy Customers" />
            <StatCard icon={<FaMoneyBillWave className="text-5xl text-green-400" />} number="$10B+" description="Assets Managed" />
            <StatCard icon={<FaGlobeAmericas className="text-5xl text-blue-400" />} number="50+" description="Countries Served" />
            <StatCard icon={<FaMobileAlt className="text-5xl text-purple-400" />} number="5M+" description="Mobile App Users" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-200 text-gray-800 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience Better Banking?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers who trust RF Bank for their financial needs.</p>
          <Link to="/sign-up" className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-blue-700 transition duration-300">Open an Account</Link>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <TestimonialCard 
              quote="RF Bank has transformed the way I manage my finances. Their mobile app is a game-changer!"
              author="Pitter"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIqOhZWu0aFUCW8yYV7vD8lOs3ITORGY5FCA&s"
            />
            <TestimonialCard 
              quote="The personal attention I receive from RF Bank is unmatched. They truly care about their customers."
              author="Michael T., Retiree"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxXSZtZ1hoBYDjkW5GVOdO0CHHVYXmfzeyg&s"
            />
            <TestimonialCard 
              quote="I've never felt more secure about my investments. RF Bank's expertise is invaluable."
              author="Raven, Young Professional"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF-4TIYvKhftCarsQvZp84zu5oZb51-bXzDA&s"
            />
          </div>
        </div>
      </section>

      {/* News and Updates Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest News and Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <NewsCard 
              title="RF Bank Launches New Rewards Program"
              date="May 15, 2023"
              description="Earn points on every transaction and redeem them for exciting rewards!"
            />
            <NewsCard 
              title="Introducing Green Savings Accounts"
              date="April 28, 2023"
              description="Support eco-friendly initiatives while saving for your future."
            />
            <NewsCard 
              title="RF Bank Expands to 5 New Countries"
              date="March 10, 2023"
              description="We're excited to bring our services to even more customers worldwide."
            />
          </div>
          <div className="text-center mt-8">
            <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">View All News</Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <FAQItem 
              question="How do I open a new account?"
              answer="You can open a new account online through our secure portal or visit any of our branch locations. You'll need to provide identification and proof of address."
            />
            <FAQItem 
              question="What are the benefits of RF Bank's mobile app?"
              answer="Our mobile app allows you to check balances, transfer funds, pay bills, deposit checks, and manage your investments all from your smartphone."
            />
            <FAQItem 
              question="How secure is online banking with RF Bank?"
              answer="We use state-of-the-art encryption and multi-factor authentication to ensure your online banking experience is safe and secure."
            />
            <div className="text-center mt-8">
              <Link to="/" className="text-blue-600 hover:text-blue-800 font-semibold">View All FAQs</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
      <div className="flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function TestimonialCard({ quote, author, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
      <p className="text-gray-600 italic mb-4">"{quote}"</p>
      <div className="flex items-center">
        <img src={image} alt={author} className="w-12 h-12 rounded-full mr-4" />
        <p className="font-semibold text-gray-800">{author}</p>
      </div>
    </div>
  )
}

function StatCard({ icon, number, description }) {
  return (
    <div className="text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-2">{number}</h3>
      <p className="text-lg">{description}</p>
    </div>
  )
}

function NewsCard({ title, date, description }) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-4">{date}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

function FAQItem({ question, answer }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center">
        <FaQuestionCircle className="text-blue-600 mr-2" />
        {question}
      </h3>
      <p className="text-gray-600 ml-6">{answer}</p>
    </div>
  )
}