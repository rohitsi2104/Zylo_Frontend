import { useState } from "react";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    // Handle signup logic here, such as API request
    console.log("Signup:", { username, email, password });
  };

  return (
    <div className="auth-page min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 p-8">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Join us and start your journey today!
        </p>
        <div className="mb-4 flex items-center border rounded p-3 bg-white">
          <FaUser className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full outline-none bg-white text-gray-800"
          />
        </div>
        <div className="mb-4 flex items-center border rounded p-3 bg-white">
          <FaEnvelope className="text-gray-500 mr-3" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full outline-none bg-white text-gray-800"
          />
        </div>
        <div className="mb-6 flex items-center border rounded p-3 bg-white">
          <FaLock className="text-gray-500 mr-3" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none bg-white text-gray-800"
          />
        </div>
        <button
          onClick={handleSignup}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded hover:from-purple-600 hover:to-blue-600 transition w-full font-semibold"
        >
          Sign Up
        </button>
        <p className="text-center text-gray-500 mt-6">
          Already a member?{" "}
          <Link to="/auth/login" className="text-blue-500 hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
