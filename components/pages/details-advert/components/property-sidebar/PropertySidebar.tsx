import { PropertySidebarProps } from './types';
import styles from './PropertySidebar.module.css';
import { Box, Heading } from '@/components';

export const PropertySidebar = ({
  advertiser,
  email,
  phone,
}: PropertySidebarProps) => {
  return (
    <Box className={styles.sidebar}>
      <Heading level={4}>Contact</Heading>
    </Box>
  );
};
