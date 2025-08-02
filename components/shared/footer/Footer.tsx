import styles from './Footer.module.css';
import { Container } from '../container';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container margin="m-center">
        All rights reserved © {new Date().getFullYear()}
      </Container>
    </footer>
  );
};
