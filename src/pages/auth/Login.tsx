import { useState } from "react";
import { FaPhone, FaLock } from "react-icons/fa";
import { useApi } from "../../hooks/useApi";
import { useUser } from "../../store/UserContext";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { request, loading, error } = useApi();
  const { login } = useUser();
  const navigate = useNavigate();
  const [formError, setFormError] = useState("");

  const handleLogin = async () => {
    setFormError("");

    if (!phoneNumber || !password) {
      setFormError("Phone number and password are required.");
      return;
    }

    const formattedPhoneNumber = `${countryCode}${phoneNumber}`;
    const payload = { username: formattedPhoneNumber, password };

    const response = await request("post", "/login/", payload, {
      headers: { "Content-Type": "application/json" },
    });

    if (response.data) {
      const { access, refresh } = response.data;
      login(
        { id: "user-id", name: "User Name", phone: formattedPhoneNumber },
        { access, refresh }
      );
      navigate("/");
    } else {
      setFormError(error || "Login failed. Please try again.");
    }
  };

  return (
    <div className="auth-page min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500 p-8">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-full max-w-md">
        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-8">Log in to your account</p>
        {formError && <p className="text-red-500 text-center mb-4">{formError}</p>}
        <div className="mb-4 flex items-center border rounded p-3 bg-white">
          <select
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="border-none bg-transparent outline-none text-gray-800 mr-3"
          >
            <option value="+91">+91</option>
            <option value="+1">+1</option>
            <option value="+44">+44</option>
            <option value="+61">+61</option>
            <option value="+81">+81</option>
          </select>
          <FaPhone className="text-gray-500 mr-3" />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
          onClick={handleLogin}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded hover:from-blue-600 hover:to-purple-600 transition w-full font-semibold"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
        <p className="text-center text-gray-500 mt-6">
          Not a user?{" "}
          <a href="/auth/signup" className="text-blue-500 hover:underline">
            SignUp now
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signin;