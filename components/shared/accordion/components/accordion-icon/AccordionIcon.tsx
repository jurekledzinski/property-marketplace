import styles from '../../Accordion.module.css';
import { AccordionIconProps } from './types';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Icon, useAccordion } from '@/components';

export const AccordionIcon = ({
  icons = [faChevronUp, faChevronDown],
}: AccordionIconProps) => {
  const context = useAccordion();

  return (
    <span className={styles.icon}>
      {context.open ? <Icon icon={icons[0]} /> : <Icon icon={icons[1]} />}
    </span>
  );
};
