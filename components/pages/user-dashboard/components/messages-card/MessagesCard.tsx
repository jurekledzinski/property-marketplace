import styles from '../../UserDashboard.module.css';
import { Card, CardContent, CardFooter, CardHeader, Icon } from '@/components';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MessagesCardProps } from './types';

export const MessagesCard = ({ amount }: MessagesCardProps) => {
  return (
    <Card className={styles.messagesAdvert}>
      <CardContent className={styles.cardContent}>
        <p className={styles.cardTitle}>{amount}</p>
        <p className={styles.cardText}>Total messages</p>
      </CardContent>
      <CardHeader className={styles.cardHeader}>
        <Icon icon={faEnvelope} size="1x" />
      </CardHeader>
      <CardFooter className={styles.cardFooter}></CardFooter>
    </Card>
  );
};
