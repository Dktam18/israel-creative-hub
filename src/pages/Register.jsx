import React, { useState } from "react";

export const Register = () => {
  const [formData, setFormData] = useState({ firstname: "", lastname: "", email: "", password: "" });
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
    console.log("Logging in with:", formData);
  };

  return (
    <>
    <script type="module" src="Firebaseauth.js"></script>
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <div>
        <img src="https://i.postimg.cc/rmwmDmWy/favicon.png" alt="" style={{width:'7rem', alignItems : 'centre', textAlign: 'centre', marginLeft:'6rem', position:'relative'}}/>
         </div>
        <h2 className="text-2xl font-bold text-center text-blue-600">Register</h2>

        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-6">
        <div id="signInMessage" class="messageDiv" style="display:none;"></div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Firstname</label>
            <input
              name="firstname"
              type="text"
              placeholder="Enter your firstname"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="fName"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Lastname</label>
            <input
              name="text"
              type="text"
              placeholder="Enter your Lastname"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="lName"
            />
          </div>
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

          <div className="text-right mb-4">
            <a href="google.com" className="text-sm text-blue-500 hover:underline">Forgot password?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
          >
           Signup
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account? <a href="login" className="text-blue-500 hover:underline">Sign in</a>
        </p>
      </div>
    </div>
    </>
  );
}
