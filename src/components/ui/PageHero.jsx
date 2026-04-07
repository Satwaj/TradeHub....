import { cn } from '../../utils/helpers';
import './PageHero.css';

/**
 * Shared hero header used across all inner pages (About, Courses, Contact).
 * Eliminates the copy-paste pattern across 3 page files.
 */
const PageHero = ({
  badge,
  badgeColor = 'primary',
  title,
  highlight,
  description,
  sub,
  children,
}) => (
  <div className={cn('page-hero', `page-hero--${badgeColor}`)}>
    <div className="page-hero__orb" />
    <div className="container">
      {badge && (
        <span className={cn('page-hero__badge', `page-hero__badge--${badgeColor}`)}>
          {badge}
        </span>
      )}
      <h1 className="page-hero__title">
        {title}{' '}
        {highlight && <span className="gradient-text">{highlight}</span>}
      </h1>
      {description && <p className="page-hero__desc">{description}</p>}
      {sub && <p className="page-hero__sub">{sub}</p>}
      {children && <div className="page-hero__actions">{children}</div>}
    </div>
  </div>
);

export default PageHero;
