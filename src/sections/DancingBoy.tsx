function DancingBoy() {
  return (
    <section className="text-center bg-blue-50 min-h-screen py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-16">
        {/* Breakdancer Image */}
        <div className="relative w-full md:w-1/2 flex justify-center">
          <div className="w-full max-w-md">
            <img
              src="src/assets/images/dancer.png"
              alt="Breakdancer"
              className="object-contain w-full h-screen"
            />
          </div>
        </div>

        {/* Zigzag Cards */}
        <div className="space-y-16 md:w-1/2 py-2 px-16">
          {/* Card 1 */}
          <div className="flex items-start md:items-center space-x-4 bg-white relative w-full text-left px-8">
            <div className="absolute -top-10 left-10 w-20 h-20 border-white border-[5px] rounded-full flex items-center justify-center">
              <img src="src/assets/icons/className.png" alt="Class Icon" />
            </div>
            <div className="pt-12 pb-8">
              <h3 className="font-bold text-2xl md:text-3xl">Join Our Class</h3>
              <p className="text-gray-600">
                Learn from the best dance choreographers. Sign up for our dance
                lessons today.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start md:items-center space-x-4 bg-white relative w-full text-left px-8 md:ml-8">
            <div className="absolute -top-10 left-10 w-20 h-20 border-white border-[5px] rounded-full flex items-center justify-center">
              <img
                src="src/assets/icons/choreography.png"
                alt="Choreography Icon"
              />
            </div>
            <div className="pt-12 pb-8">
              <h3 className="font-bold text-2xl md:text-3xl">
                Community
              </h3>
              <p className="text-gray-600">
                Follow our dance choreography videos to learn different dance
                styles.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start md:items-center space-x-4 bg-white relative w-full text-left px-8">
            <div className="absolute -top-10 left-10 w-20 h-20 border-white border-[5px] rounded-full flex items-center justify-center">
              <img src="src/assets/icons/stage.png" alt="Stage Icon" />
            </div>
            <div className="pt-12 pb-8">
              <h3 className="font-bold text-2xl md:text-3xl">
                Perform Onstage
              </h3>
              <p className="text-gray-600">
                Perform onstage at our annual dance festival and gain worldwide
                recognition.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DancingBoy;
