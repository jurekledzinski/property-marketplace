import styles from '../../UserDashboard.module.css';
import { Card, CardContent, CardFooter, CardHeader, Icon } from '@/components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const MessagesCard = () => {
  return (
    <Card className={styles.messagesAdvert}>
      <CardContent className={styles.cardContent}>
        <p style={{ fontSize: 20, fontWeight: 500 }}>14</p>
        <p style={{ fontSize: 14 }}>Total messages</p>
      </CardContent>
      <CardHeader className={styles.cardHeader}>
        <Icon icon={faEnvelope} size="2x" />
      </CardHeader>
      <CardFooter className={styles.cardFooter}></CardFooter>
    </Card>
  );
};
