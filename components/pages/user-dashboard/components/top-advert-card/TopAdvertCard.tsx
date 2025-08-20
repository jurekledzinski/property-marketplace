import styles from '../../UserDashboard.module.css';
import { Card, CardContent, CardFooter, CardHeader, Icon } from '@/components';
import { faEye } from '@fortawesome/free-solid-svg-icons';

export const TopAdvertCard = () => {
  return (
    <Card className={styles.topAdvert}>
      <CardContent className={styles.cardContent}>
        <p style={{ fontSize: 20, fontWeight: 500 }}>14</p>
        <p style={{ fontSize: 14 }}>Top viewed advert</p>
      </CardContent>
      <CardHeader className={styles.cardHeader}>
        <Icon icon={faEye} size="2x" />
      </CardHeader>
      <CardFooter className={styles.cardFooter}></CardFooter>
    </Card>
  );
};
