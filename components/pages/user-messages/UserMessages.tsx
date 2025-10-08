'use client';
import styles from './UserMessages.module.css';
import { deleteMessage } from '@/actions';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { MessageAccordion } from './components';
import { modalMessages, showSuccessToast } from '@/utils-client';
import { startTransition } from 'react';
import { useActionStateReset } from '@/hooks';
import { useControlAccordion } from './hooks';
import { UserMessagesProps } from './types';

import {
  Box,
  Button,
  ButtonGroup,
  Heading,
  Modal,
  NoResults,
  useControlModal,
} from '@/components';

export const UserMessages = ({ messages = [] }: UserMessagesProps) => {
  const action = useActionStateReset({ fnAction: deleteMessage });

  const accordion = useControlAccordion();
  const modal = useControlModal();

  const { description, headerTitle, title } = modalMessages.deleteMessages(
    accordion.deleteIds.length
  );

  return (
    <>
      <Heading level={4} mb="mb-md" mt="mt-sm">
        Messages
      </Heading>
      <ButtonGroup mt="mt-md" mb="mb-md" justify="justify-end" fullWidth>
        <Button
          color="negative"
          disabled={!accordion.deleteIds.length}
          label="Delete messages"
          onClick={modal.onOpen}
          size="size-md"
          variant="outlined"
        />
      </ButtonGroup>
      <Box className={styles.container}>
        {messages.map((message) => (
          <MessageAccordion
            openIds={accordion.openIds}
            key={message.id}
            message={message}
            onClick={accordion.handleSelect}
            onSelect={accordion.handleDelete}
          />
        ))}
        {!messages.length ? (
          <NoResults icon={faEnvelope} level={5} text="No messages found" />
        ) : null}
      </Box>
      <Modal
        color="negative"
        confirmText="Delete"
        title={headerTitle}
        isPending={action.isPending}
        open={modal.isOpen}
        isSuccess={action.state.success}
        onCancel={modal.onClose}
        onClose={modal.onClose}
        onConfirm={() => {
          startTransition(() => {
            const formData = new FormData();
            formData.append('deleteIds', JSON.stringify(accordion.deleteIds));
            action.formAction(formData);
          });
        }}
        onFailed={() => {
          showSuccessToast('Not all messages were deleted successfully');
        }}
        onSuccess={async () => {
          showSuccessToast('Messages deleted successfully');
          modal.onClose();
          action.resetStateAction();
          accordion.handleClearDeleteIds();
        }}
        portal={true}
        variant="outlined"
      >
        {title}
        <br />
        {description}
      </Modal>
    </>
  );
};
