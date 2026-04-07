import { Link } from 'react-router-dom';
import PageHero from '../components/ui/PageHero';
import CoursesSection from '../components/sections/CoursesSection';
import CurriculumSection from '../components/sections/CurriculumSection';
import Footer from '../components/layout/Footer';

const CoursesPage = () => (
  <>
    <PageHero
      badge="📚 All Programs"
      badgeColor="primary"
      title="Our"
      highlight="Trading Courses"
      description="Choose from Live Online, Live + Recorded, or Offline classes — all led by expert traders from Nashik."
    />
    <CoursesSection showComparison />
    <CurriculumSection />
    <Footer />
  </>
);

export default CoursesPage;
