import { Item } from '../shop/Shop.data';

import { CartItem } from './cart.reducer';

export const addItemToCart = (items: CartItem[], newItem: Item): CartItem[] => {
  const existingCartItem = items.find((item) => item.id === newItem.id);

  if (existingCartItem) {
    return items.map((item) => {
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

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: Item
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem) {
    if (existingCartItem.quantity === 1) {
      return cartItems.filter(
        (cartItem) => cartItem.id !== cartItemToRemove.id
      );
    }

    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }

  return cartItems;
};
