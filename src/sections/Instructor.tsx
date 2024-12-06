import { useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { Loadable } from "../components";

interface InstructorData {
  first_name: string;
  last_name: string;
  image: string;
  video_link: string;
  description: string;
}

function Instructor() {
  const { request, loading, error } = useApi();
  const [instructors, setInstructors] = useState<InstructorData[] | null>(null);

  const fetchInstructors = async () => {
    const response = await request("get", "/get_tutor_profile/");
    if (response.data) {
      console.log("Data:", response.data);
      setInstructors(response.data);
    } else {
      console.log("Error:", response.error);
    }
  };

  useEffect(() => {
    fetchInstructors();
  }, []);

  const LoadableCard = Loadable(({ instructor }: { instructor: InstructorData }) => (
    <div className="shadow-lg rounded-3xl overflow-hidden">
      <img
        src={instructor.image}
        alt={`${instructor.first_name} ${instructor.last_name}`}
        className="w-full"
      />
      <div className="py-5 text-center bg-white">
        <p className="text-lg font-bold">{`${instructor.first_name} ${instructor.last_name}`}</p>
        <p className="text-sm text-gray-600">{instructor.description}</p>
      </div>
    </div>
  ));

  if (loading || error || !instructors) {
    return null;
  }

  return (
    <section id="instructor_section" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Our Instructors</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <LoadableCard key={index} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Instructor;