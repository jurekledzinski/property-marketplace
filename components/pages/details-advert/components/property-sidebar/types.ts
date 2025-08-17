import { Advert } from '@/models';
import { useContactForm } from '@/components';

export type PropertySidebarProps = {
  advertiser: Advert['advertiser'];
  phone: Advert['phone'];
  email: Advert['email'];
  controls: ReturnType<typeof useContactForm>;
};
