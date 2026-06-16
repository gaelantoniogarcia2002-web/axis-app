import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../../data/config';
import styles from './Navigation.module.css';

interface NavigationProps {
  mobile: boolean;
  onClose?: () => void;
}

export default function Navigation({ mobile, onClose }: NavigationProps) {
  return (
    <nav className={mobile ? styles.navMobile : styles.navDesktop}>
      {NAV_LINKS.map(link => (
        <NavLink
          key={link.href}
          to={link.href}
          className={({ isActive }) =>
            [styles.link, mobile && styles.linkMobile, isActive && styles.active].filter(Boolean).join(' ')
          }
          end={link.href === '/'}
          onClick={onClose}
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
