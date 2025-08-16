import { DetailsAdvert } from '@/components';

const images: string[] = [
  'https://cdn.pixabay.com/photo/2019/06/10/09/00/village-4263755_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/07/07/13/55/giethoorn-2481483_1280.jpg',
  'https://cdn.pixabay.com/photo/2013/10/01/15/01/holiday-home-189181_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/06/21/16/33/farm-2427751_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/05/28/18/48/ivy-2351778_960_720.jpg',
];

const amenities = [
  'Air Conditioning',
  'Balcony',
  'Basement',
  'Elevator',
  'Garage',
  'Garden',
  'Fireplace',
  'Furnished',
  'Heating',
  'Internet',
  'Parking',
  'Smart Home Features',
  'Security System',
  'Storage Room',
  'Swimming Pool',
  'Wheelchair Accessible',
];

const data = {
  advertiser: 'Joe Doe',
  email: 'joedoe@gmail.com',
  phone: '0657123123',

  type: 'house',
  status: 'sale',
  images,

  country: 'Netherlands',
  state: 'Limburg',
  city: 'Sittard',
  street: 'Avenue 15',
  postalCode: '5324 JK',
  price: 1200,

  title: 'Modern 2-bedroom apartment in downtown',
  description: 'Hello description',

  condition: 'good condition',
  style: 'modern',
  year: 2000,
  area: 100,
  rooms: 6,
  bathrooms: 2,
  amenities,
};

const DetailsAdvertPage = () => {
  return <DetailsAdvert advertDetails={data} />;
};

export default DetailsAdvertPage;
