import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import type { PreguntaFrecuente } from '../../types';
import styles from './Accordion.module.css';

interface AccordionProps {
  items: PreguntaFrecuente[];
}

export default function Accordion({ items }: AccordionProps) {
  const [abiertoId, setAbiertoId] = useState<string | null>(null);

  return (
    <div className={styles.accordion}>
      {items.map(item => {
        const abierto = abiertoId === item.id;
        return (
          <div key={item.id} className={styles.item}>
            <button
              type="button"
              className={styles.pregunta}
              onClick={() => setAbiertoId(abierto ? null : item.id)}
              aria-expanded={abierto}
            >
              <span>{item.pregunta}</span>
              <FontAwesomeIcon icon={faChevronDown} className={[styles.icon, abierto && styles.iconOpen].filter(Boolean).join(' ')} />
            </button>
            {abierto && <p className={styles.respuesta}>{item.respuesta}</p>}
          </div>
        );
      })}
    </div>
  );
}
