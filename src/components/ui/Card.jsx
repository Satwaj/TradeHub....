import { cn } from '../../utils/helpers';
import './Card.css';

const Card = ({ children, variant = 'default', className = '', hover = true, glow, ...props }) => {
  const classes = cn(
    'card',
    `card--${variant}`,
    hover && 'card--hover',
    glow && `card--glow-${glow}`,
    className
  );

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

export default Card;
