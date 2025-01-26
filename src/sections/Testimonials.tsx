import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Testimonial } from "../types";

function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Placeholder for fetching testimonials from API
    /*
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://api.example.com/testimonials");
        const data: Testimonial[] = await response.json();
        setTestimonials(data); // Assuming data is an array of objects with { imageUrl }.
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
    */
    // Placeholder data for now
    const placeholderData: Testimonial[] = [
      {
        imageUrl:
          "https://zyraximages.s3.amazonaws.com/testimonials/SpaceCity4.jpeg",
      },
      {
        imageUrl:
          "https://zyraximages.s3.amazonaws.com/testimonials/SpaceCity4.jpeg",
      },
      {
        imageUrl:
          "https://zyraximages.s3.amazonaws.com/testimonials/SpaceCity4.jpeg",
      },
      {
        imageUrl:
          "https://zyraximages.s3.amazonaws.com/testimonials/SpaceCity4.jpeg",
      },
      {
        imageUrl:
          "https://zyraximages.s3.amazonaws.com/testimonials/SpaceCity4.jpeg",
      },
    ];
    setTestimonials(placeholderData);
    setLoading(false);
  }, []);

  const handleViewMore = () => {
    navigate("/testimonials");
  };

  if (loading) {
    return <p className="text-center text-gray-500">Loading testimonials...</p>;
  }

  return (
    <section className="p-6">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
        Zylo Transformations
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials.slice(0, 4).map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={testimonial.imageUrl}
              alt={`Testimonial ${index + 1}`}
              className="w-full h-56 object-contain"
            />
          </div>
        ))}
      </div>
      {testimonials.length > 4 && (
        <div className="text-center mt-6">
          <button
            onClick={handleViewMore}
            className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white px-4 py-2 rounded shadow-md hover:from-teal-500 hover:via-cyan-600 hover:to-blue-600 transition-transform transform hover:scale-105"
          >
            View More
          </button>
        </div>
      )}
    </section>
  );
}

export default Testimonials;
