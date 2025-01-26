import { useState, useEffect } from "react";
import { Testimonial } from "../types";

function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Placeholder for fetching testimonials from API
    /*
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("https://api.example.com/testimonials");
        const data: Testimonial[] = await response.json();
        setTestimonials(data);
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
        imageUrl: "https://zyraximages.s3.amazonaws.com/testimonials/SpaceCity4.jpeg",
      },
      {
        imageUrl: "https://zyraximages.s3.amazonaws.com/testimonials/SpaceCity4.jpeg",
      },
      {
        imageUrl: "https://zyraximages.s3.amazonaws.com/testimonials/SpaceCity4.jpeg",
      },
      {
        imageUrl: "https://zyraximages.s3.amazonaws.com/testimonials/SpaceCity4.jpeg",
      },
      {
        imageUrl: "https://zyraximages.s3.amazonaws.com/testimonials/SpaceCity4.jpeg",
      },
      {
        imageUrl: "https://zyraximages.s3.amazonaws.com/testimonials/SpaceCity4.jpeg",
      },
      {
        imageUrl: "https://zyraximages.s3.amazonaws.com/testimonials/SpaceCity4.jpeg",
      },
      {
        imageUrl: "https://zyraximages.s3.amazonaws.com/testimonials/SpaceCity4.jpeg",
      },
    ];
    setTestimonials(placeholderData);
    setLoading(false);
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading testimonials...</p>;
  }

  return (
    <section className="p-6">
      <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">
        All Zylo Transformations
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={testimonial.imageUrl}
              alt={`Testimonial ${index + 1}`}
              className="w-full h-56 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default TestimonialsPage;