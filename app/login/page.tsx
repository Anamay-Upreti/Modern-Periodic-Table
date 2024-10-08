"use client";

import { useState } from 'react';
import Link from 'next/link';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#002240] to-[#001f3d] p-4">
      <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-[#002240] mb-6">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
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
              className="mt-1 block w-full p-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002240] focus:ring-opacity-50"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="mt-1 block w-full p-3 bg-gray-100 text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-[#002240] focus:ring-opacity-50"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#002240] text-white py-3 rounded-md font-semibold hover:bg-[#003366] transition-colors"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Don't have an account?{' '}
          <Link href="/register" className="text-[#002240] hover:underline">
            Register
          </Link>
        </p>

        <p className="mt-2 text-center text-gray-500">
          <Link href="/forgot-password" className="text-[#002240] hover:underline">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
