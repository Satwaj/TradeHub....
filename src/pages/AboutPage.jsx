import { Link } from 'react-router-dom';
import { useInView } from '../hooks/useAnimations';
import { HERO_STATS } from '../constants/siteData';
import { cn } from '../utils/helpers';
import PageHero from '../components/ui/PageHero';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import VisionMission from '../components/sections/VisionMission';
import ReviewsSection from '../components/sections/ReviewsSection';
import Footer from '../components/layout/Footer';
import './AboutPage.css';

const AboutPage = () => {
  const [ref, isInView] = useInView();

  return (
    <>
      <PageHero
        badge="About Us"
        badgeColor="primary"
        title="Building Confident Traders,"
        highlight="Not Just Profits"
        description="We are Nashik's leading professional trading education platform focused on practical, structured, and result-driven learning."
        sub="With live mentorship, real market exposure, and a strong learning community, we guide students from beginner level to professional trading mindset."
      >
        <Link to="/courses">
          <Button variant="primary" size="lg">Explore Courses</Button>
        </Link>
        <Link to="/contact">
          <Button variant="secondary" size="lg">Contact Us</Button>
        </Link>
      </PageHero>

      {/* Stats */}
      <div className="about-stats">
        <div className="container">
          <div ref={ref} className={cn('about-stats__grid stagger-children', isInView && 'visible')}>
            {HERO_STATS.map((stat) => (
              <Card key={stat.label} variant="glass" glow="primary" className="about-stats__card">
                <h2 className="gradient-text">{stat.value}</h2>
                <span>{stat.label}</span>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <WhyChooseUs />
      <VisionMission />
      <ReviewsSection />
      <Footer />
    </>
  );
};

export default AboutPage;
