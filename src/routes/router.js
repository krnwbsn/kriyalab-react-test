import { Cart, Store } from '../pages';

const router = [
  {
    name: 'Cart',
    component: Cart,
    exact: false,
    path: '/cart'
  },
  {
    name: 'Store',
    component: Store,
    exact: true,
    path: '/'
  },
];

export default router;
