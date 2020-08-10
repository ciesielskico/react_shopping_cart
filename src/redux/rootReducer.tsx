import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import planetReducer from './planet/planetReducer';

export const reducer = combineReducers({
  planet: planetReducer,
  cart: cartReducer,
});
