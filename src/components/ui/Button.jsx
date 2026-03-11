import { Link } from 'react-router-dom';

export default function Button({ to, href, variant = 'primary', size = 'md', children, className = '', ...props }) {
  const base = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 no-underline';

  const variants = {
    primary: 'bg-xplore-green text-white hover:bg-xplore-green-dark shadow-sm hover:shadow-md',
    secondary: 'bg-white text-xplore-green border-2 border-xplore-green hover:bg-xplore-green hover:text-white',
    dark: 'bg-xplore-dark text-white hover:bg-gray-800',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>;
  }
  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>;
  }
  return <button className={classes} {...props}>{children}</button>;
}
