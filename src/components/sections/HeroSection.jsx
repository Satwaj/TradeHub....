import { Link } from 'react-router-dom';
import { Trophy, ArrowRight } from 'lucide-react';
import { useInView } from '../../hooks/useAnimations';
import { SITE_CONFIG, HERO_STATS } from '../../constants/siteData';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { cn } from '../../utils/helpers';
import './HeroSection.css';

const HeroSection = () => {
  const [ref, isInView] = useInView();
  const [statsRef, statsInView] = useInView();

  return (
    <section className="hero" id="hero">
      {/* Background effects */}
      <div className="hero__bg">
        <div className="hero__orb hero__orb--1" />
        <div className="hero__orb hero__orb--2" />
        <div className="hero__orb hero__orb--3" />
        <div className="hero__grid-pattern" />
      </div>

      <div className="container">
        <div ref={ref} className={cn('hero__content', isInView && 'visible')}>
          <Badge variant="default"><Trophy size={13} strokeWidth={2} /> {SITE_CONFIG.tagline}</Badge>

          <h1 className="hero__title">
            Master the Art of
            <span className="hero__title-highlight"> Professional</span>
            <br />
            <span className="hero__title-gradient">Trading</span>
          </h1>

          <p className="hero__description">
            {SITE_CONFIG.description} We provide practical trading knowledge, live market training, and professional
            strategies that help students build real trading skills — not just theory.
          </p>

          <div className="hero__actions">
            <Link to="/courses">
              <Button variant="primary" size="lg">
                Explore Courses <ArrowRight size={16} />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>

          <p className="hero__mission">
            Our mission is simple: <strong>To create disciplined and profitable traders.</strong>
          </p>
        </div>

        {/* Stats */}
        <div ref={statsRef} className={cn('hero__stats stagger-children', statsInView && 'visible')}>
          {HERO_STATS.map((stat) => (
            <Card key={stat.label} variant="glass" glow="primary" className="hero__stat-card">
              <h3 className="hero__stat-value">{stat.value}</h3>
              <span className="hero__stat-label">{stat.label}</span>
            </Card>
          ))}
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div className="hero__scroll-indicator">
        <div className="hero__scroll-line" />
      </div>
    </section>
  );
};

export default HeroSection;
