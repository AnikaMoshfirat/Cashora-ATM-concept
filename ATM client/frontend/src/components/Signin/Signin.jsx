import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInStart, signInSuccess, signInError } from '../../Redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie'; // Import js-cookie

function SignIn() {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errormessage, setErrorMessage] = useState(null);
  const [successmessage, setSuccessMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { error: reduxError } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (!formData.username || !formData.password) {
      return setErrorMessage("All fields are required.");
    }

    try {
      setIsSubmitting(true); // Show spinner
      dispatch(signInStart()); // Start loading state

      const response = await fetch("http://localhost:3000/auth/login", {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        dispatch(signInError(data.message || "Login failed."));
        setErrorMessage(data.message || "Invalid username or password.");
        setIsSubmitting(false); // Stop spinner
        return;
      }

      // Dispatch Redux success and save token
      dispatch(signInSuccess(data));
      Cookies.set('auth_token', data.token); // Assuming response includes a token
      Cookies.set('isAdmin', data.isAdmin); // Store admin status

      setSuccessMessage("Login successful! Redirecting...");
      setTimeout(() => {
        navigate('/');
        setIsSubmitting(false); // Stop spinner after redirect
      }, 2000);
    } catch (error) {
      dispatch(signInError(error.message));
      setErrorMessage("An unexpected error occurred. Please try again.");
      setIsSubmitting(false); // Stop spinner
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 py-12">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">

        {/* Sign In Header */}
        <h2 className="text-3xl font-semibold text-center text-blue-700 mb-8">Sign In</h2>

        {/* Sign In Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          {/* Username */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter your username"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full p-3 mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-blue-300 flex items-center justify-center"
          >
            {isSubmitting ? (
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 border-2 border-t-2 border-t-white border-blue-500 rounded-full animate-spin"></div>
                <span>Signing in...</span>
              </div>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="flex gap-2 text-sm mt-4 justify-center">
          <span>Don't Have an Account?</span>
          <Link to="/sign-up" className="text-blue-500 hover:text-blue-700">Sign Up</Link>
        </div>

        {/* Error and Success Alerts */}
        {reduxError && (
          <div className="mt-4 p-3 text-sm text-white bg-red-500 rounded-lg">
            {reduxError}
          </div>
        )}
        {errormessage && (
          <div className="mt-4 p-3 text-sm text-white bg-red-500 rounded-lg">
            {errormessage}
          </div>
        )}
        {successmessage && (
          <div className="mt-4 p-3 text-sm text-white bg-blue-600 rounded-lg">
            {successmessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default SignIn;
