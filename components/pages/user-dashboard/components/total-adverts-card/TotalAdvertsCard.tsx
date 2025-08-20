import styles from '../../UserDashboard.module.css';
import { Card, CardContent, CardFooter, CardHeader, Icon } from '@/components';
import { faRectangleAd } from '@fortawesome/free-solid-svg-icons';

export const TotalAdvertsCard = () => {
  return (
    <Card className={styles.totalAdverts}>
      <CardContent className={styles.cardContent}>
        <p style={{ fontSize: 20, fontWeight: 500 }}>14</p>
        <p style={{ fontSize: 14 }}>Total adverts</p>
      </CardContent>
      <CardHeader className={styles.cardHeader}>
        <Icon icon={faRectangleAd} size="2x" />
      </CardHeader>
      <CardFooter className={styles.cardFooter}></CardFooter>
    </Card>
  );
};
