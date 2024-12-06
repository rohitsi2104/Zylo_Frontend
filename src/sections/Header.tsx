import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useUser } from "../store/UserContext";
import { FaHome, FaUsers, FaChalkboardTeacher, FaServicestack, FaUserCircle } from "react-icons/fa";

function Header() {
  const navigate = useNavigate();
  const { user, isLoggedIn, logout } = useUser();
  const [isProfileDropdownVisible, setIsProfileDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownVisible(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogoutClick = () => {
    setIsProfileDropdownVisible(false);
    logout();
  };

  return (
    <header className="py-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <img
          src="src/assets/images/logo.png"
          alt="Logo"
          className="h-24 cursor-pointer"
          onClick={() => navigate("/")}
        />
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/community" className="text-gray-800 text-lg font-medium">
            Community
          </a>
          <a href="/classes" className="text-gray-800 text-lg font-medium">
            Classes
          </a>
          <a href="/services" className="text-gray-800 text-lg font-medium">
            Services
          </a>
          <a href="/#instructor_section" className="text-gray-800 text-lg font-medium">
            Instructors
          </a>
        </nav>
        {/* Profile Section */}
        {isLoggedIn ? (
          <div className="relative" ref={dropdownRef}>
            {/* Profile Icon */}
            <div
              className="w-10 h-10 rounded-full cursor-pointer flex items-center justify-center bg-gray-200 overflow-hidden"
              onClick={() => setIsProfileDropdownVisible((prev) => !prev)}
            >
              {user?.profileImage ? (
                <img
                  src={user.profileImage}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <FaUserCircle className="text-gray-600 text-3xl" />
              )}
            </div>
            {/* Dropdown Panel */}
            {isProfileDropdownVisible && (
              <div
                className="absolute top-10 right-0 bg-white shadow-md rounded-lg flex flex-col p-1 z-50"
                style={{ minWidth: "100px" }}
              >
                <button
                  className="block w-full text-left px-2 py-1 text-gray-800 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setIsProfileDropdownVisible(false);
                    navigate("/profile");
                  }}
                >
                  Profile
                </button>
                <button
                  className="block w-full text-left px-2 py-1 text-gray-800 hover:bg-gray-100 cursor-pointer"
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-600 transition-all"
            onClick={() => navigate("/login")}
          >
            Sign In
          </button>
        )}
      </div>
      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white bg-opacity-90 shadow-t-md p-4 flex justify-around items-center z-40">
        <a
          href="/"
          className="text-gray-800 text-lg font-medium flex flex-col items-center"
        >
          <FaHome className="text-2xl" />
          <span className="text-sm">Home</span>
        </a>
        <a
          href="/community"
          className="text-gray-800 text-lg font-medium flex flex-col items-center"
        >
          <FaUsers className="text-2xl" />
          <span className="text-sm">Community</span>
        </a>
        <a
          href="/classes"
          className="text-gray-800 text-lg font-medium flex flex-col items-center"
        >
          <FaChalkboardTeacher className="text-2xl" />
          <span className="text-sm">Classes</span>
        </a>
        <a
          href="/services"
          className="text-gray-800 text-lg font-medium flex flex-col items-center"
        >
          <FaServicestack className="text-2xl" />
          <span className="text-sm">Services</span>
        </a>
      </div>
    </header>
  );
}

export default Header;