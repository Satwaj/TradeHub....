import { WHY_CHOOSE_US } from '../../constants/siteData';
import { getIcon } from '../../utils/icons';
import { useInView } from '../../hooks/useAnimations';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { cn } from '../../utils/helpers';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const [ref, isInView] = useInView();

  return (
    <section className="why-choose" id="why-choose">
      <div className="container section-padding">
        <SectionHeader
          badge="Why Choose Us"
          badgeVariant="primary"
          title="Why Choose"
          highlight="TradeHub?"
          subtitle="Discover what makes us Nashik's most trusted trading education platform"
        />

        <div ref={ref} className={cn('why-choose__grid stagger-children', isInView && 'visible')}>
          {WHY_CHOOSE_US.map((item, index) => {
            const Icon = getIcon(item.icon);
            return (
              <Card
                key={index}
                variant="glass"
                glow={index % 3 === 0 ? 'primary' : index % 3 === 1 ? 'accent' : 'success'}
                className="why-choose__card"
              >
                <div className="why-choose__icon-wrap">
                  {Icon && <Icon size={26} strokeWidth={1.5} />}
                </div>
                <h3 className="why-choose__title">{item.title}</h3>
                <p className="why-choose__desc">{item.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
