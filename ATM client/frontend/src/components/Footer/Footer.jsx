import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-wrap justify-between">
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h3 className="text-2xl font-bold mb-4">RF Bank</h3>
          <p>Secure, Innovative, and Personalized Banking Solutions</p>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul>
            <li><Link to="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link to="/services" className="hover:text-blue-400">Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400">Contact</Link></li>
            <li><Link to="/careers" className="hover:text-blue-400">Careers</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p>1234 Banking Street</p>
          <p>Cityville, State 12345</p>
          <p>Phone: (555) 123-4567</p>
          <p>Email: info@rfbank.com</p>
        </div>
        <div className="w-full md:w-1/4">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-2xl hover:text-blue-400"><FaFacebookSquare /></a>
            <a href="#" className="text-2xl hover:text-blue-400"><FaTwitterSquare /></a>
            <a href="#" className="text-2xl hover:text-blue-400"><FaLinkedin /></a>
            <a href="#" className="text-2xl hover:text-blue-400"><FaInstagramSquare /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
        <p>&copy; 2023 RF Bank. All rights reserved.</p>
      </div>
    </div>
  </footer>
  )
}