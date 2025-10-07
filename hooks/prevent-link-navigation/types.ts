export type UsePreventLinkNavigationProps = {
  currentUrl: string;
  isDirty: boolean;
  onOpen: (url: string, href?: string | null) => void;
  selectors: string[];
};
