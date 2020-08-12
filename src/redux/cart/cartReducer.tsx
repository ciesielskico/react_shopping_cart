import { AnyAction } from 'redux';
import { CartState } from '../../models/cart.model';
import { Planet, PlanetInCart } from '../../models/planet.model';
import { CartActionTypes } from './cartTypes';

const initialState: CartState = {
  planets: [],
};

const cartReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return {
        ...state,
        planets: addToCart(state, action.payload),
      };
    case CartActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        planets: state.planets.filter((planet) => planet !== action.payload),
      };
    case CartActionTypes.CHANGE_PRODUCT_AMOUNT:
      return {
        ...state,
        planets: changeProductAmount(state, action.payload.planet, action.payload.increment),
      };

    default:
      return state;
  }
};

const addToCart = (state: CartState, planet: Planet) => {
  const planetInCart = state.planets.find((filteredPlanet) => filteredPlanet.url === planet.url);
  return planetInCart
    ? [
        ...state.planets.filter((filteredPlanet) => filteredPlanet.url !== planet.url),
        { ...planetInCart, amount: planetInCart.amount + 1 },
      ]
    : [...state.planets, { ...planet, amount: 1 }];
};

const changeProductAmount = (state: CartState, planet: PlanetInCart, increment: boolean) => {
  const planetInCart = state.planets.find((foundPlanet) => foundPlanet === planet);
  if (planetInCart) {
    increment ? planetInCart.amount++ : planetInCart.amount--;
  }
  return state.planets;
};

export default cartReducer;
