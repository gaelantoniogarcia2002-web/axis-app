import { Link } from 'react-router-dom';
import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

export default function Button({ children, variant = 'primary', href, onClick, type = 'button', disabled, className }: ButtonProps) {
  const cls = [styles.btn, styles[variant], className].filter(Boolean).join(' ');

  if (href) {
    const isExternal = href.startsWith('http');
    if (isExternal) {
      return <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>;
    }
    return <Link to={href} className={cls}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
