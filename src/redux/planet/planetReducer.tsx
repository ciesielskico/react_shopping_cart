import { AnyAction } from 'redux';
import { PlanetState } from '../../models/planet.model';
import { PlanetActionTypes } from './planetTypes';

const initialState: PlanetState = {
  loading: false,
  planets: [],
  error: '',
};

const planetReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case PlanetActionTypes.FETCH_PLANETS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PlanetActionTypes.FETCH_PLANETS_SUCCESS:
      return {
        loading: false,
        planets: action.payload,
        error: '',
      };
    case PlanetActionTypes.FETCH_PLANETS_ERROR:
      return {
        loading: false,
        planets: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default planetReducer;
