import { useState } from "react";
import { FaUser, FaPhone, FaCalendar, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useApi } from "../../hooks/useApi";
import { useNavigate } from "react-router-dom";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
  const { request, loading, error } = useApi();
  const navigate = useNavigate();

  const handleSignup = async () => {
    setFormError("");

    if (!firstName || !lastName || !phoneNumber || !dateOfBirth || !password) {
      setFormError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setFormError("Passwords do not match.");
      return;
    }

    const formattedPhoneNumber = `${countryCode}${phoneNumber}`;

    const payload = {
      first_name: firstName,
      last_name: lastName,
      phone_number: formattedPhoneNumber,
      date_of_birth: dateOfBirth,
      password,
      confirm_password: confirmPassword
    };

    const response = await request("post", "/register/", payload, {
      headers: { "Content-Type": "application/json" },
    });

    if (response.data) {
      navigate("/auth/login");
    } else {
      setFormError(error || "Registration failed. Please try again.");
    }
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
        {formError && <p className="text-red-500 text-center mb-4">{formError}</p>}
        <div className="mb-4 flex items-center border rounded p-3 bg-white">
          <FaUser className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full outline-none bg-white text-gray-800"
          />
        </div>
        <div className="mb-4 flex items-center border rounded p-3 bg-white">
          <FaUser className="text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full outline-none bg-white text-gray-800"
          />
        </div>
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
        <div className="mb-4 flex items-center border rounded p-3 bg-white">
          <FaCalendar className="text-gray-500 mr-3" />
          <input
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="w-full outline-none bg-white text-gray-800"
          />
        </div>
        <div className="mb-4 flex items-center border rounded p-3 bg-white">
          <FaLock className="text-gray-500 mr-3" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full outline-none bg-white text-gray-800"
          />
        </div>
        <div className="mb-6 flex items-center border rounded p-3 bg-white">
          <FaLock className="text-gray-500 mr-3" />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full outline-none bg-white text-gray-800"
          />
        </div>
        <button
          onClick={handleSignup}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded hover:from-purple-600 hover:to-blue-600 transition w-full font-semibold"
          disabled={loading}
        >
          {loading ? "Registering..." : "Sign Up"}
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