import styles from '../../UserDashboard.module.css';
import { Card, CardContent, CardFooter, CardHeader, Icon } from '@/components';
import { faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons';

export const AdvertsTypeStatsCard = () => {
  return (
    <Card className={styles.typeAdverts}>
      <CardContent className={styles.cardContentHorizontal}>
        <div>
          <p className={styles.text}>1</p>
          <p className={styles.subText}>Total rent</p>
        </div>
        <div>
          <p className={styles.text}>2</p>
          <p className={styles.subText}>Total sale</p>
        </div>
      </CardContent>
      <CardHeader className={styles.cardHeader}>
        <Icon icon={faHouseCircleCheck} size="2x" />
      </CardHeader>
      <CardFooter className={styles.cardFooter}></CardFooter>
    </Card>
  );
};
