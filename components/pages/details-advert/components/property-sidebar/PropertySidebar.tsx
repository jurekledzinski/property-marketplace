import styles from './PropertySidebar.module.css';
import { Box, ContactForm, Heading, Icon, List, ListItem } from '@/components';
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { PropertySidebarProps } from './types';

export const PropertySidebar = ({
  advertiser,
  email,
  phone,
  controls,
}: PropertySidebarProps) => {
  return (
    <Box className={styles.sidebar}>
      <Heading level={4} mb="mb-md">
        Contact
      </Heading>
      <List className={styles.userList}>
        <ListItem className={styles.capitalized}>
          <Icon icon={faUser} />
          {advertiser}
        </ListItem>
        <ListItem className={styles.lowerCased}>
          <Icon icon={faPhone} />
          {phone}
        </ListItem>
        <ListItem className={styles.lowerCased}>
          <Icon icon={faEnvelope} />
          {email}
        </ListItem>
      </List>

      <ContactForm
        controls={controls.formControls}
        onSubmit={controls.onSubmit}
      />
    </Box>
  );
};
