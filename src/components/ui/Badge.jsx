import './Badge.css';
import { cn } from '../../utils/helpers';

const Badge = ({ children, variant = 'default', className = '' }) => {
  return (
    <span className={cn('badge', `badge--${variant}`, className)}>
      {children}
    </span>
  );
};

export default Badge;
