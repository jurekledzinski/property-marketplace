import styles from '../../UserDashboard.module.css';
import {
  AdvertsTypeStatsCardProps,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Icon,
} from '@/components';
import { faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons';

export const AdvertsTypeStatsCard = ({
  rent,
  sale,
}: AdvertsTypeStatsCardProps) => {
  return (
    <Card className={styles.typeAdverts}>
      <CardContent className={styles.cardContentHorizontal}>
        <div>
          <p className={styles.text}>{rent}</p>
          <p className={styles.subText}>Total rent</p>
        </div>
        <div>
          <p className={styles.text}>{sale}</p>
          <p className={styles.subText}>Total sale</p>
        </div>
      </CardContent>
      <CardHeader className={styles.cardHeader}>
        <Icon className={styles.icon} icon={faHouseCircleCheck} size="1x" />
      </CardHeader>
      <CardFooter className={styles.cardFooter}></CardFooter>
    </Card>
  );
};
