// import React, { useState } from "react";
import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
const [formData, setFormData] = useState({ email: "", password: "" });
const [error, setError] = useState("");

const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
  setError(""); // Clear error when user types
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formData.email || !formData.password) {
    setError("Both fields are required.");
    return;
  }
  try {
    const response = await axios.post("http://localhost:5000/Login", formData);
    localStorage.setItem("token", response.data.token);
    alert("Login successful");
  } catch (error) {
    console.error(error);
    setError("Login failed. Please try again.");
  }
};

<script type="module" src="Firebaseauth.js"></script>
  return (
    <>
    <link rel="stylesheet" href="Ref.css" />
    
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <div className="bg-white shadow-lg rounded-xl p-8 w-96">
        <div>
        <img src="https://i.postimg.cc/rmwmDmWy/favicon.png" alt="" style={{width:'7rem', alignItems : 'centre', textAlign: 'centre', marginLeft:'6rem', position:'relative'}}/>
         </div>
        <h2 className="text-2xl font-bold text-center text-blue-600">Login</h2>

        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

        <form onSubmit={handleSubmit} className="mt-6">
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
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account? <a href="Register" className="text-blue-500 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
    </>
  );
};

// import { useState } from "react";
// import axios from "axios";

// export const Login = () => {
//     const [formData, setFormData] = useState({ email: "", password: "" });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:5000/Login", formData);
//             localStorage.setItem("token", response.data.token);
//             alert("Login successful");
//         } catch (error) {
//             console.error(error);
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
//             <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
//             <button type="submit">Login</button>
//         </form>
//     );
// };

// // export default Login;
