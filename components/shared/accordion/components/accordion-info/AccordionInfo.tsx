import styles from '../../Accordion.module.css';
import { AccordionInfoProps } from './types';

export const AccordionInfo = ({ title, text }: AccordionInfoProps) => {
  return (
    <div className={styles.info}>
      <p className={styles.title}>{title}</p>
      {text ? <p className={styles.subTitle}>{text}</p> : null}
    </div>
  );
};
