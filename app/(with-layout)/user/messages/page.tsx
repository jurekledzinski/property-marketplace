import { UserMessages } from '@/components';

const dataMessages = [
  {
    id: '1',
    userId: '64f123abc456def789012345',
    sender: {
      name: 'Joe Doe 1',
      email: 'joedoe@gmail.com',
    },
    title:
      'Modern 2-Bedroom Apartment with Stunning City Views – Move-In Ready!',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    userId: '64f123abc456def789012345',
    sender: {
      name: 'Joe Doe 2',
      email: 'joedoe@gmail.com',
    },
    title: 'Chic Urban Living: Spacious Apartment for Rent in Prime Location',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    userId: '64f123abc456def789012345',
    sender: {
      name: 'Joe Doe 3',
      email: 'joedoe@gmail.com',
    },
    title:
      'For Sale: Stylish Apartment with Balcony & Parking – Great Investment Opportunity',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    createdAt: new Date().toISOString(),
  },
];

const UserMessagesPage = () => {
  return <UserMessages messages={dataMessages} />;
};

<p></p>;

export default UserMessagesPage;
