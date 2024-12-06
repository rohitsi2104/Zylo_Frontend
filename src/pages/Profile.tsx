import React from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../public/styles/calendar.css";

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:grid md:grid-cols-3 gap-6">
      {/* Section 1: User Info */}
      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
        <div className="relative">
          <img
            src="https://via.placeholder.com/150"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover"
          />
          <button className="absolute bottom-1 right-1 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600">
            <i className="fas fa-camera"></i>
          </button>
        </div>
        <h2 className="mt-4 text-xl font-semibold text-gray-800">John Doe</h2>
        <p className="text-gray-500">+91 9876543210</p>
        <p className="text-gray-500">2000-01-01</p>
      </div>

      {/* Section 2: Health Status */}
      <div className="col-span-2 bg-white p-6 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* BMI */}
        <div className="bg-blue-100 rounded-lg p-4 text-center shadow flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold text-gray-700">
            BMI Calculator
          </h3>
          <div className="relative w-20 h-20 mx-auto mt-2 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-blue-500"></div>
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <span className="text-3xl font-extrabold text-blue-500">
                15.8
              </span>
            </div>
          </div>
          <p className="mt-2 text-base text-blue-500 font-medium">
            Underweight
          </p>
        </div>
        {/* BMR */}
        <div className="bg-green-100 rounded-lg p-4 text-center shadow flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold text-gray-700">
            BMR Calculator
          </h3>
          <div className="flex items-center justify-center">
            <p className="text-4xl font-extrabold text-green-500">1261.25</p>
            <span className="ml-1 text-lg text-green-500">kcal/day</span>
          </div>
          <p className="mt-2 text-base text-green-500 font-medium">Low BMR</p>
        </div>
        {/* Ideal Weight */}
        <div className="bg-yellow-100 rounded-lg p-4 text-center shadow flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold text-gray-700">
            Ideal Body Weight
          </h3>
          <div className="flex items-center justify-center">
            <p className="text-4xl font-extrabold text-yellow-500">54.17</p>
            <span className="ml-1 text-lg text-yellow-500">kg</span>
          </div>
          <p className="mt-2 text-base text-yellow-500 font-medium">
            Ideal Weight Range
          </p>
        </div>
      </div>

      {/* Section 3: More Details */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6 md:mt-0">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          More About You
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Height (cm): <span className="font-medium">157.00</span>
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Edit
            </a>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Weight (kg): <span className="font-medium">39.00</span>
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Edit
            </a>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Gender: <span className="font-medium">M</span>
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Edit
            </a>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-600">
              Address: <span className="font-medium">South Delhi, Delhi</span>
            </p>
            <a href="#" className="text-blue-500 hover:underline">
              Edit
            </a>
          </div>
        </div>
      </div>

      {/* Section 4: Attendance Calendar */}
      <div className="bg-white p-6 rounded-lg shadow-md mt-6 md:mt-0 col-span-2">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">
          Attendance Calendar
        </h3>
        <Calendar
          tileClassName={({ date, view }) => {
            if (view === "month") {
              const day = date.getDate();
              if ([10, 27].includes(day))
                return "bg-green-200 text-green-800 rounded-lg";
              if ([2, 9, 16, 23].includes(day))
                return "bg-red-200 text-red-800 rounded-lg";
            }
            return "bg-gray-50 rounded-lg";
          }}
          className="custom-calendar"
        />
      </div>
    </div>
  );
};

export default ProfilePage;
