import { Button, CircularProgress, makeStyles } from '@material-ui/core';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Planet } from '../models/planet.model';
import { addToCart } from '../redux/cart/cartActions';
import { fetchPlanets } from '../redux/planet/planetActions';

const useStyles = makeStyles(() => ({
  button: {
    margin: '1rem',
  },
}));

const PlanetList = ({ planetData, fetchPlanets, addToCart }: any) => {
  const classes = useStyles();

  useEffect(() => {
    fetchPlanets();
  }, []);

  return planetData.loading ? (
    <CircularProgress />
  ) : planetData.errorMsg ? (
    <h2>{planetData.errorMsg}</h2>
  ) : (
    <Fragment>
      <h2>Planet List</h2>
      <div>
        {planetData &&
          planetData.planets &&
          planetData.planets.map((planet: any) => (
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => addToCart(planet)}
              key={planet.created}
            >
              {planet.name}
            </Button>
          ))}
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    planetData: state.planet,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchPlanets: () => dispatch(fetchPlanets()),
    addToCart: (planet: Planet) => dispatch(addToCart(planet)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanetList);
