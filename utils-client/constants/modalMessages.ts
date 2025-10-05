export const modalMessages = {
  deleteMessages: (amount: number) => {
    const plural = amount > 1 ? 'these' : 'this';
    const target = amount > 1 ? 'messages' : 'message';

    return {
      title: `Are you sure you want to delete ${plural} ${target}?`,
      description: `This action is permanent and cannot be undone. The ${target} will be permanently deleted from your account.`,
    };
  },

  deleteAdvert: () => ({
    title: `Are you sure you want to delete this advert?`,
    description: `This action is permanent and cannot be undone. The advert will be permanently deleted from your account.`,
  }),

  deleteAccount: () => ({
    title: `Are you sure you want to delete your account?`,
    description: `This action is permanent and cannot be undone. All your data will be permanently deleted.`,
  }),

  warningLeaveForm: () => ({
    title: `Warning: Data you have entered will be lost.`,
    description: `If you leave this page without saving.`,
  }),
};
