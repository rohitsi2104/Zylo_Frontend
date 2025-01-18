import dancer from "/src/assets/images/dancer.png";
import classes from "/src/assets/icons/classes.png";
import community from "/src/assets/icons/community.png";
import testimonial from "/src/assets/icons/testimonial.png";

function DancingBoy() {
  return (
    <section className="text-center bg-blue-50 min-h-screen py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
        {/* Breakdancer Image */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-md">
            <img
              src={dancer}
              alt="Breakdancer"
              className="object-contain w-full h-screen"
            />
          </div>
        </div>

        {/* Zigzag Cards */}
        <div className="space-y-16 md:w-1/2 py-2 px-16">
          {/* Card 1 */}
          <div className="flex items-start md:items-center space-x-4 bg-white relative w-full text-left px-8">
            <div className="absolute -top-10 left-10 w-20 h-20 border-white border-[5px] rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src={classes} 
                alt="Class Icon"
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="pt-12 pb-8">
              <h3 className="font-bold text-2xl md:text-3xl">Join Our Class</h3>
              <p className="text-gray-600">
                Master your moves by learning from world-class choreographers.
                Explore dance lessons tailored to all skill levels and styles.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start md:items-center space-x-4 bg-white relative w-full text-left px-8 md:ml-8">
            <div className="absolute -top-10 left-10 w-20 h-20 border-white border-[5px] rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={community}
                alt="Community Icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-12 pb-8">
              <h3 className="font-bold text-2xl md:text-3xl">Community</h3>
              <p className="text-gray-600">
                Connect with fellow dance enthusiasts, share your passion, and
                grow together. Join forums, events, and online meetups.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start md:items-center space-x-4 bg-white relative w-full text-left px-8">
            <div className="absolute -top-10 left-10 w-20 h-20 border-white border-[5px] rounded-full flex items-center justify-center overflow-hidden">
              <img 
                src={testimonial} 
                alt="Stage Icon" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="pt-12 pb-8">
              <h3 className="font-bold text-2xl md:text-3xl">Testimonials</h3>
              <p className="text-gray-600">
                Hear from our dancers about their journey, experiences, and the
                joy of learning and performing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DancingBoy;
