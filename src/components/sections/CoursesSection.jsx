import { useState } from 'react';
import { Star, Clock, Users2, CheckCircle2, ArrowRight } from 'lucide-react';
import { COURSE_DATA, INCLUDED_FEATURES, COMPARISON_DATA, COURSE_TABS } from '../../constants/siteData';
import { useInView } from '../../hooks/useAnimations';
import SectionHeader from '../ui/SectionHeader';
import Button from '../ui/Button';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { cn } from '../../utils/helpers';
import './CoursesSection.css';

const CoursesSection = ({ showComparison = true }) => {
  const [active, setActive] = useState('live');
  const current = COURSE_DATA[active];
  const [ref, isInView] = useInView();
  const [compRef, compInView] = useInView();

  return (
    <section className="courses-sec" id="courses-section">
      <div className="container section-padding">
        <SectionHeader
          badge="Masterclass Programs"
          badgeVariant="primary"
          title="Choose Your"
          highlight="Learning Experience"
          subtitle="Flexible learning paths designed for every type of learner"
        />

        {/* Tabs */}
        <div className="courses-sec__tabs">
          {COURSE_TABS.map((tab) => (
            <button
              key={tab.key}
              className={cn('courses-sec__tab', active === tab.key && 'active')}
              onClick={() => setActive(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Program Card */}
        <div ref={ref} className={cn('courses-sec__program fade-up', isInView && 'visible')}>
          <Card variant="glass" className="courses-sec__card">
            <div className="courses-sec__card-top">
              <div className="courses-sec__card-left">
                <h2>{current.title}</h2>
                <p>{current.desc}</p>
                <div className="courses-sec__meta">
                  <span className="courses-sec__rating">
                    <Star size={13} fill="currentColor" strokeWidth={0} /> 4.9
                    <span className="courses-sec__rating-count">(1,247 reviews)</span>
                  </span>
                  <Badge variant="success">{current.badge}</Badge>
                </div>
              </div>
              <div className="courses-sec__card-right">
                <h3 className="courses-sec__price">{current.price}</h3>
                <span className="courses-sec__price-label">One-time payment</span>
              </div>
            </div>

            <div className="courses-sec__info-row">
              <div className="courses-sec__info-item">
                <Clock size={14} strokeWidth={2} /> {current.duration}
              </div>
              <div className="courses-sec__info-item">
                <Users2 size={14} strokeWidth={2} /> {current.students}
              </div>
            </div>

            <Button variant="accent" size="lg" className="courses-sec__cta">
              Get Pricing & Register <ArrowRight size={16} />
            </Button>
          </Card>
        </div>

        {/* Included */}
        <div className="courses-sec__included">
          <Card variant="glass" className="courses-sec__included-card">
            <h3><CheckCircle2 size={18} strokeWidth={2} /> What's Included</h3>
            <div className="courses-sec__included-grid">
              {INCLUDED_FEATURES.map((feature) => (
                <p key={feature}>
                  <CheckCircle2 size={14} className="courses-sec__check" strokeWidth={2} /> {feature}
                </p>
              ))}
            </div>
          </Card>

          <div className="courses-sec__stats-group">
            <Card variant="glass" glow="success" className="courses-sec__stat-card">
              <h2 className="gradient-text-green">2.5K+</h2>
              <span>Graduates</span>
            </Card>
            <Card variant="glass" glow="primary" className="courses-sec__stat-card">
              <h2 className="gradient-text">92%</h2>
              <span>Success Rate</span>
            </Card>
          </div>
        </div>

        {/* Comparison */}
        {showComparison && (
          <>
            <div className="courses-sec__comparison-header">
              <h2>Quick Comparison</h2>
            </div>
            <div ref={compRef} className={cn('courses-sec__comparison stagger-children', compInView && 'visible')}>
              {COMPARISON_DATA.map((plan) => (
                <Card
                  key={plan.type}
                  variant="glass"
                  glow="primary"
                  className={cn('courses-sec__compare-card', plan.popular && 'popular')}
                >
                  {plan.popular && <div className="courses-sec__popular-badge">Most Popular</div>}
                  <h3>{plan.title}</h3>
                  <ul>
                    {plan.features.map((f) => (
                      <li key={f}>
                        <CheckCircle2 size={13} className="courses-sec__check" strokeWidth={2} /> {f}
                      </li>
                    ))}
                  </ul>
                  <div className="courses-sec__compare-price">{plan.price}</div>
                  <Button variant={plan.popular ? 'accent' : 'secondary'}>Register Now</Button>
                </Card>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CoursesSection;
