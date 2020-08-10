import { Planet } from '../../models/planet.model';
import { CartActionTypes } from './cartTypes';

export const addToCart = (planet: Planet) => {
  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: planet,
  };
};

export const removeFromCart = (planet: Planet) => {
  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: planet,
  };
};

export const changeProductAmount = (planet: Planet, increment: boolean) => {
  return {
    type: CartActionTypes.CHANGE_PRODUCT_AMOUNT,
    payload: { planet, increment },
  };
};
