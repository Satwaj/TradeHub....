import './SectionHeader.css';
import { useInView } from '../../hooks/useAnimations';
import Badge from '../ui/Badge';
import { cn } from '../../utils/helpers';

const SectionHeader = ({ badge, badgeVariant = 'default', title, highlight, subtitle, align = 'center' }) => {
  const [ref, isInView] = useInView();

  return (
    <div ref={ref} className={cn('section-header', `section-header--${align}`, isInView && 'visible')}>
      {badge && <Badge variant={badgeVariant}>{badge}</Badge>}
      <h2 className="section-header__title">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
