import HeroSection from '../components/sections/HeroSection';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import WhatYouLearn from '../components/sections/WhatYouLearn';
import CoursesSection from '../components/sections/CoursesSection';
import CurriculumSection from '../components/sections/CurriculumSection';
import WhoCanJoin from '../components/sections/WhoCanJoin';
import VisionMission from '../components/sections/VisionMission';
import ReviewsSection from '../components/sections/ReviewsSection';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseUs />
      <WhatYouLearn />
      <CoursesSection showComparison={false} />
      <CurriculumSection />
      <WhoCanJoin />
      <VisionMission />
      <ReviewsSection />
      <Footer />
    </>
  );
};

export default Home;
