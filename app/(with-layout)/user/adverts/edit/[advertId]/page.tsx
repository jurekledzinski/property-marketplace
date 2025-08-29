import { auth } from '@/auth';
import { UserEditAdvert } from '@/components';
import { EditAdvertPageProps } from './types';

const editAdvert = {
  advertiser: 'Joe Doe',
  amenities: ['parking'],
  area: '200',
  bathrooms: '2',
  city: 'Some city',
  condition: 'new',
  country: 'Some country',
  description: 'Description',
  email: 'joedoe@gmail.com',
  files: [],
  phone: '555444333',
  postalCode: '4534HG',
  price: '200',
  rooms: '4',
  status: 'sale',
  street: 'Some street',
  style: 'modern',
  title: 'Modern house',
  type: 'house',
  userId: '123',
  year: '2000',
  images: [
    'https://cdn.pixabay.com/photo/2019/06/10/09/00/village-4263755_960_720.jpg',
    'https://cdn.pixabay.com/photo/2017/05/28/18/48/ivy-2351778_1280.jpg',
    'https://cdn.pixabay.com/photo/2015/11/15/08/21/house-1044132_1280.jpg',
    'https://cdn.pixabay.com/photo/2019/05/13/21/12/house-4200922_1280.jpg',
  ],
};

// Tu trzeba params i pobierać będzie advert na podstawie advertId
const EditAdvertPage = async ({ params }: EditAdvertPageProps) => {
  const { advertId } = await params;

  //   console.log('SERVER ADVERT EDIT PAGE ID ADVERT', advertId);

  const session = await auth();

  //   console.log('Edit advert server session', session);

  return <UserEditAdvert advert={editAdvert} userId={session?.user.id ?? ''} />;
};

export default EditAdvertPage;
