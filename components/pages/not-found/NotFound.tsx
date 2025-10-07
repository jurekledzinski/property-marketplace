import styles from './NotFound.module.css';
import { Button, Heading } from '@/components';

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <Heading level={3}>404 - Page Not Found</Heading>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Button
        color="secondary"
        href="/"
        label="Go back home"
        variant="outlined"
      />
    </div>
  );
};
