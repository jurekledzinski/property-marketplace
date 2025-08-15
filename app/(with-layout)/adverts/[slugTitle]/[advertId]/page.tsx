import { DetailsAdvert } from '@/components';

const images: string[] = [
  'https://cdn.pixabay.com/photo/2019/06/10/09/00/village-4263755_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/07/07/13/55/giethoorn-2481483_1280.jpg',
  'https://cdn.pixabay.com/photo/2013/10/01/15/01/holiday-home-189181_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/06/21/16/33/farm-2427751_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/05/28/18/48/ivy-2351778_960_720.jpg',
];

const DetailsAdvertPage = () => {
  return (
    <DetailsAdvert
      dataDetailsAdvert={{
        images,
        title: 'Modern 2-bedroom apartment in downtown',
        type: 'rent',
        price: '1200',
      }}
    />
  );
};

export default DetailsAdvertPage;
