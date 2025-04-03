import React, { useState } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({ 
    firstname: "", 
    lastname: "", 
    email: "", 
    password: "" 
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user types
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Both fields are required.");
      return;
    }
    console.log("Registering with:", formData);
  };

  return (
    <>
      <link rel="stylesheet" href="Ref.css" />
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
        <div className="bg-white shadow-lg rounded-xl p-8 w-96">
          
          {/* Logo Image */}
          <div className="flex justify-center mb-4">
            <img 
              src="https://i.postimg.cc/rmwmDmWy/favicon.png" 
              alt="Logo" 
              style={{ width: '7rem' }} 
            />
          </div>

          <h2 className="text-2xl font-bold text-center text-blue-600">Register</h2>

          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

          <form onSubmit={handleSubmit} method="POST" className="mt-6">
            <div id="signInMessage" className="messageDiv" style={{ display: 'none' }}></div>

            {/* Firstname Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                name="firstname"
                type="text"
                placeholder="Enter your firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="fName"
              />
            </div>

            {/* Lastname Input */}
            {/* <div className="mb-4">
              <label className="block text-gray-700 font-medium">Lastname</label>
              <input
                name="lastname"
                type="text"
                placeholder="Enter your lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="lName"
              />
            </div> */}

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="rEmail"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-700 font-medium">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                id="rPassword"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right mb-4">
              <a href="google.com" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Signup
            </button>
          </form>

          {/* Redirect to Login */}
          <p className="text-center text-sm text-gray-600 mt-4">
            Already have an account? <a href="login" className="text-blue-500 hover:underline">Sign in</a>
          </p>
        </div>
      </div>
    </>
  );
};
