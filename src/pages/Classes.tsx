import React, { useState, useEffect } from 'react';
import { FaCalendarAlt, FaVideo } from 'react-icons/fa';
import { useApi } from '../hooks/useApi';
import { ClassDetails } from '../types';
import { format } from 'date-fns';

const JoinClassesPage: React.FC = () => {
  const [classes, setClasses] = useState<ClassDetails[]>([]);
  const { request } = useApi();

  const fetchClasses = async () => {
    const response = await request("get", "/classes/");
    if (response.data) {
      console.log("Data:", response.data);
      const transformedClasses = transformClassesData(response.data);
      setClasses(transformedClasses);
    } else {
      console.log("Error:", response.error);
    }
  };

  useEffect(() => {
    fetchClasses();
  }, []);

  const transformClassesData = (apiData: any[]): ClassDetails[] => {
    return apiData.map((classItem) => {
      const startTime = format(new Date(`2024-11-25T${classItem.time}`), "h:mm a");
      const endTime = format(
        new Date(new Date(`2024-11-25T${classItem.time}`).getTime() + classItem.duration * 60000),
        "h:mm a"
      );
      const schedule = `${format(new Date(classItem.class_date), "EEEE")}, ${startTime} - ${endTime}`;

      return {
        id: classItem.id.toString(),
        title: classItem.title,
        instructor: "", // Instructor data is not available in the response
        schedule,
        meetingLink: classItem.zoom_link,
      };
    });
  };

  const handleJoinClass = (meetingLink: string) => {
    window.open(meetingLink, '_blank');
  };

  return (
    <div className="join-classes-page min-h-screen pb-20">
      <div className="classes-feed grid gap-6">
        {classes.map((classItem) => (
          <div key={classItem.id} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="font-semibold text-2xl mb-2">{classItem.title}</h2>
            {/* <p className="text-gray-600 mb-1">Instructor: {classItem.instructor}</p> */}
            <div className="flex items-center text-gray-600 mb-4">
              <FaCalendarAlt className="mr-2" />
              <span>{classItem.schedule}</span>
            </div>
            <button
              onClick={() => handleJoinClass(classItem.meetingLink)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition flex items-center gap-2"
            >
              <FaVideo />
              Join Class
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinClassesPage;