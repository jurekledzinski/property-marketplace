import { DetailsAdvert } from '@/components';

const images: string[] = [
  'https://cdn.pixabay.com/photo/2019/06/10/09/00/village-4263755_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/07/07/13/55/giethoorn-2481483_1280.jpg',
  'https://cdn.pixabay.com/photo/2013/10/01/15/01/holiday-home-189181_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/06/21/16/33/farm-2427751_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/05/28/18/48/ivy-2351778_960_720.jpg',
];

const amenities = [
  'air conditioning',
  'balcony',
  'basement',
  'elevator',
  'garage',
  'garden',
  'fireplace',
  'furnished',
  'heating',
  'internet',
  'parking',
  'smart home features',
  'security system',
  'storage room',
  'swimming pool',
  'wheelchair accessible',
];

const description =
  'For sale: a beautifully presented three-bedroom family home offering comfort, style and convenience in a highly sought-after location. This property features a spacious open-plan living and dining area that fills with natural light, a modern kitchen with excellent storage and quality finishes, and a master bedroom complete with en-suite bathroom and fitted wardrobes. Two further bedrooms provide plenty of space for family or guests, complemented by a contemporary family bathroom. Outside, the private landscaped garden is ideal for relaxing or entertaining, while the driveway and garage offer secure parking. Situated close to schools, shops, parks and transport links, this home is perfect for families or professionals seeking a welcoming and move-in ready property.';

const data = {
  advertiser: 'Joe Doe',
  email: 'joedoe@gmail.com',
  phone: '0657123123',
  userId: '123',

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
  description,

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
