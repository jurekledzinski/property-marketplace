import styles from '../../UserDashboard.module.css';
import { Card, CardContent, CardFooter, CardHeader, Icon } from '@/components';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { TopAdvertCardProps } from './types';

export const TopAdvertCard = ({ title }: TopAdvertCardProps) => {
  return (
    <Card className={styles.topAdvert}>
      <CardContent className={styles.cardContent}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardText}>Top viewed advert</p>
      </CardContent>
      <CardHeader className={styles.cardHeader}>
        <Icon icon={faEye} size="1x" />
      </CardHeader>
      <CardFooter className={styles.cardFooter}></CardFooter>
    </Card>
  );
};
