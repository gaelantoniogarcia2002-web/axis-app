import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import Button from '../ui/Button';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={[styles.header, scrolled && styles.scrolled].filter(Boolean).join(' ')}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>AXIS</span>
          <span className={styles.logoSub}>Red Médica</span>
        </Link>

        <Navigation mobile={false} />

        <div className={styles.actions}>
          <Button href="/contacto" variant="primary">Agendar consulta</Button>
          <button
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
          >
            <span className={[styles.bar, menuOpen && styles.barTop].filter(Boolean).join(' ')} />
            <span className={[styles.bar, menuOpen && styles.barMid].filter(Boolean).join(' ')} />
            <span className={[styles.bar, menuOpen && styles.barBot].filter(Boolean).join(' ')} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <Navigation mobile={true} onClose={() => setMenuOpen(false)} />
          <div className={styles.mobileActions}>
            <Button href="/contacto" variant="primary">Agendar consulta</Button>
          </div>
        </div>
      )}
    </header>
  );
}
