import { Advert } from '@/models';

export type PropertySidebarProps = {
  advertiser: Advert['advertiser'];
  phone: Advert['phone'];
  email: Advert['email'];
};
