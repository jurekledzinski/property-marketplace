'use client';
import styles from './UserMessages.module.css';
import { Box, Button, ButtonGroup, Heading } from '@/components';
import { MessageAccordion } from './components';
import { useControlAccordion } from './hooks';
import { UserMessagesProps } from './types';

export const UserMessages = ({ messages = [] }: UserMessagesProps) => {
  const { handleSelect, handleDelete, selectedIds } = useControlAccordion();

  return (
    <>
      <Heading level={4} mb="mb-md" mt="mt-sm">
        Messages
      </Heading>

      <ButtonGroup mt="mt-md" mb="mb-md" justify="justify-end" fullWidth>
        <Button
          color="negative"
          label="Delete messages"
          size="size-md"
          variant="outlined"
        />
      </ButtonGroup>

      <Box className={styles.container}>
        {messages.map((message) => (
          <MessageAccordion
            selectedIds={selectedIds}
            key={message.id}
            message={message}
            onChangeDelete={handleDelete}
            onClick={handleSelect}
          />
        ))}
      </Box>
    </>
  );
};
