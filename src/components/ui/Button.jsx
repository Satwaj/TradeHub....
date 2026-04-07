import { cn } from '../../utils/helpers';
import './Button.css';

const Button = ({ children, variant = 'primary', size = 'md', onClick, className = '', href, ...props }) => {
  const classes = cn('btn', `btn--${variant}`, `btn--${size}`, className);

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;
