import styles from '../../UserDashboard.module.css';
import { Card, CardContent, CardFooter, CardHeader, Icon } from '@/components';
import { faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons';

export const AdvertsTypeStatsCard = () => {
  return (
    <Card className={styles.typeAdverts}>
      <CardContent className={styles.cardContentHorizontal}>
        <div>
          <p style={{ fontSize: 20, fontWeight: 500 }}>1</p>
          <p style={{ fontSize: 14 }}>Total rent</p>
        </div>
        <div>
          <p style={{ fontSize: 20, fontWeight: 500 }}>2</p>
          <p style={{ fontSize: 14 }}>Total sale</p>
        </div>
      </CardContent>
      <CardHeader className={styles.cardHeader}>
        <Icon icon={faHouseCircleCheck} size="2x" />
      </CardHeader>
      <CardFooter className={styles.cardFooter}></CardFooter>
    </Card>
  );
};
