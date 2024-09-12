"use client";

import { useState } from 'react';

const ForgotPassword = () => {
  const [isEmail, setIsEmail] = useState(true); // Toggle between email and phone
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEmail) {
      console.log('Sending code to email:', formData.email);
      // Add logic to send code to the user's email
    } else {
      console.log('Sending OTP to phone:', formData.phone);
      // Add logic to send OTP to the user's phone
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#002240] to-[#001f3d] p-4">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-[#002240] mb-6">Forgot Password</h2>

        {/* Toggle between Email and Phone */}
        <div className="flex justify-center mb-4">
          <button
            className={`px-4 py-2 text-sm font-medium rounded-l-md ${isEmail ? 'bg-[#002240] text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => setIsEmail(true)}
          >
            Via Email
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium rounded-r-md ${!isEmail ? 'bg-[#002240] text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => setIsEmail(false)}
          >
            Via Mobile
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          {isEmail ? (
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002240] focus:ring-opacity-50"
                required
              />
            </div>
          ) : (
            /* Phone Input */
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-medium">
                Mobile Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="mt-1 block w-full p-3 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002240] focus:ring-opacity-50"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#002240] text-white py-3 rounded-md font-semibold hover:bg-[#003366] transition-colors"
          >
            {isEmail ? 'Send Code to Email' : 'Send OTP to Mobile'}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Remember your password?{' '}
          <a href="/login" className="text-[#002240] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
