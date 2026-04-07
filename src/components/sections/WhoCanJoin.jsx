import { WHO_CAN_JOIN } from '../../constants/siteData';
import { getIcon } from '../../utils/icons';
import { useInView } from '../../hooks/useAnimations';
import SectionHeader from '../ui/SectionHeader';
import Card from '../ui/Card';
import { cn } from '../../utils/helpers';
import './WhoCanJoin.css';

const WhoCanJoin = () => {
  const [ref, isInView] = useInView();

  return (
    <section className="who-join" id="who-can-join">
      <div className="container section-padding">
        <SectionHeader
          badge="Who Can Join?"
          badgeVariant="default"
          title="Anyone Can Start"
          highlight="Trading"
          subtitle="No prior knowledge required — our courses are designed for everyone"
        />

        <div ref={ref} className={cn('who-join__grid stagger-children', isInView && 'visible')}>
          {WHO_CAN_JOIN.map((person) => {
            const Icon = getIcon(person.icon);
            return (
              <Card key={person.label} variant="glass" glow="primary" className="who-join__card">
                <div className="who-join__icon-wrap">
                  {Icon && <Icon size={28} strokeWidth={1.5} />}
                </div>
                <span className="who-join__label">{person.label}</span>
              </Card>
            );
          })}
        </div>

        <div className={cn('who-join__badge-wrap', isInView && 'visible')}>
          <div className="who-join__no-prior">
            <span className="who-join__sparkle">✨</span>
            No Prior Knowledge Required
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoin;
