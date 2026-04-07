import { WHAT_YOU_LEARN, SPECIAL_FEATURES } from '../../constants/siteData';
import { useInView } from '../../hooks/useAnimations';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { cn } from '../../utils/helpers';
import './WhatYouLearn.css';

const WhatYouLearn = () => {
  const [cardsRef, cardsInView] = useInView();
  const [featuresRef, featuresInView] = useInView();

  return (
    <section className="learn" id="what-you-learn">
      <div className="learn__bg-glow bg-glow bg-glow--accent" />
      <div className="container section-padding">
        <SectionHeader
          badge="What You Will Learn"
          badgeVariant="success"
          title="Build Real"
          highlight="Trading Skills"
          subtitle="From market basics to advanced technical analysis — everything you need to trade confidently"
        />

        {/* Two columns: Basics & Technical */}
        <div ref={cardsRef} className={cn('learn__columns stagger-children', cardsInView && 'visible')}>
          {Object.values(WHAT_YOU_LEARN).map((category) => (
            <Card key={category.title} variant="glass" className="learn__category">
              <h3 className="learn__category-title">{category.title}</h3>
              <ul className="learn__list">
                {category.items.map((item) => (
                  <li key={item} className="learn__list-item">
                    <span className="learn__check">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Special Features Grid */}
        <div className="learn__features-header">
          <h3>Our Special Features</h3>
        </div>
        <div ref={featuresRef} className={cn('learn__features stagger-children', featuresInView && 'visible')}>
          {SPECIAL_FEATURES.map((feature) => (
            <div key={feature} className="learn__feature-tag">
              <span className="learn__feature-check">✔</span>
              {feature}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
