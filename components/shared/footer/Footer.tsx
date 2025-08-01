import styles from './Footer.module.css';
import { Container } from '../container';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container margin="m-center">Footer</Container>
    </footer>
  );
};
