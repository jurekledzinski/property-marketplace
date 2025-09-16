import styles from '../../UserDashboard.module.css';
import { Card, CardContent, CardFooter, CardHeader, Icon } from '@/components';
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons';
import { TotalAdvertsCardProps } from './types';

export const TotalAdvertsCard = ({ amount }: TotalAdvertsCardProps) => {
  return (
    <Card className={styles.totalAdverts}>
      <CardContent className={styles.cardContent}>
        <p className={styles.cardTitle}>{amount}</p>
        <p className={styles.cardText}>Total adverts</p>
      </CardContent>
      <CardHeader className={styles.cardHeader}>
        <Icon icon={faRectangleAd} size="1x" />
      </CardHeader>
      <CardFooter className={styles.cardFooter}></CardFooter>
    </Card>
  );
};
