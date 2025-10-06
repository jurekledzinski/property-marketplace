import { faArrowDown, faArrowUp } from '@fortawesome/free-solid-svg-icons';

export const options = [
  { id: '', label: 'Default' },
  { id: 'createdAt+asc', label: 'Date: Oldest First', icon: faArrowUp },
  { id: 'createdAt+dsc', label: 'Date: Newest First', icon: faArrowDown },
  { id: 'price+asc', label: 'Price: Low to High', icon: faArrowUp },
  { id: 'price+dsc', label: 'Price: High to Low', icon: faArrowDown },
];
