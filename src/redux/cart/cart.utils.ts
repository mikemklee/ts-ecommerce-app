import { Item } from './../../pages/Shop/Shop.data';

import { CartItem } from './cart.reducer';

export const addItemToCart = (items: CartItem[], newItem: Item): CartItem[] => {
  const existingCartItem = items.find(item => item.id === newItem.id);

  if (existingCartItem) {
    return items.map(item => {
      if (item.id === newItem.id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
  }

  return [...items, { ...newItem, quantity: 1 }];
};
