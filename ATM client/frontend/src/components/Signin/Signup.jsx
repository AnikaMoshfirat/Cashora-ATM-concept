import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errormessage, setErrorMessage] = useState(null);
  const [successmessage, setSuccessMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle form input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  // Handle form submission (Registration)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    // Validation checks
    if (!formData.username || !formData.password || !formData.confirmPassword) {
      return setErrorMessage("All fields are required.");
    }

    if (formData.password !== formData.confirmPassword) {
      return setErrorMessage("Passwords do not match.");
    }

    try {
      setLoading(true);
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
      });

      const data = await response.json();
      setLoading(false);

      if (!response.ok) {
        return setErrorMessage(data.message || "Registration failed.");
      }

      // Save token in cookies if provided
      Cookies.set("auth_token", data.token); // Assume `token` is returned
      Cookies.set("isAdmin", data.isAdmin); // Assume `isAdmin` is returned

      setSuccessMessage("Registration successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/sign-in");
      }, 3000);
    } catch (error) {
      setLoading(false);
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen  flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-blue-500">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Confirm Password Field */}
          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
            >
              {loading ? "Registering..." : "Register"}
            </button>
          </div>
        </form>

        {/* Error Message */}
        {errormessage && (
          <div className="mt-4 p-3 text-sm text-white bg-red-500 rounded-md">
            {errormessage}
          </div>
        )}

        {/* Success Message */}
        {successmessage && (
          <div className="mt-4 p-3 text-sm text-white bg-blue-500 rounded-md">
            {successmessage}
          </div>
        )}

        {/* Redirect to Login */}
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Already have an account?</span>
          <Link to="/sign-in" className="text-blue-500 hover:underline ml-2">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
