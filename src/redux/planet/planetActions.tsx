import axios, { AxiosResponse } from 'axios';
import { Planet, PlanetResponse } from '../../models/planet.model';
import { PlanetActionTypes } from './planetTypes';

export const fetchPlanetsRequest = () => {
  return { type: PlanetActionTypes.FETCH_PLANETS_REQUEST };
};
export const fetchPlanetsSuccess = (planets: Planet[]) => {
  return {
    type: PlanetActionTypes.FETCH_PLANETS_SUCCESS,
    payload: planets,
  };
};
export const fetchPlanetsError = (errorMsg: string) => ({
  type: PlanetActionTypes.FETCH_PLANETS_ERROR,
  payload: errorMsg,
});

export const fetchPlanets = () => {
  return (dispatch: any) => {
    dispatch(fetchPlanetsRequest());
    axios
      .get('https://swapi.dev/api/planets')
      .then((response: AxiosResponse<PlanetResponse>) => {
        const planets = response.data.results;
        dispatch(fetchPlanetsSuccess(planets));
      })
      .catch((error: Error) => {
        const errorMsg = error.message;
        dispatch(fetchPlanetsError(errorMsg));
      });
  };
};
