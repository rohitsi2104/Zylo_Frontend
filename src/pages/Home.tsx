import {
  DancingBoy,
  HeroBannerSection,
  Instructor,
  OffersCard,
  SignUp,
  Testimonials,
} from "../sections";


const Home = () => {
  return (
    <div className="">
      {/* Hero Section */}
      <HeroBannerSection />

      {/* Dancing Boy */}
      <DancingBoy />

      {/* Zumba Festival Cards Section */}
      <OffersCard />

      {/* Sign Up for Classes Section */}
      <SignUp />

      {/* Our Instructors Section */}
      <Instructor />

      <Testimonials />
    </div>
  );
};

export default Home;
