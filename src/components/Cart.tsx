import { makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from '@material-ui/icons/Remove';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Planet, PlanetInCart } from '../models/planet.model';
import { changeProductAmount, removeFromCart } from '../redux/cart/cartActions';

const useStyles = makeStyles(() => ({
  item: {
    width: '80%',
    padding: '2rem',
    margin: '1rem auto',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  content: {
    textAlign: 'left',
  },
}));

const Cart = ({ cartData, removeFromCart, changeProductAmount }: any) => {
  const classes = useStyles();

  return (
    <Fragment>
      <h2>CART</h2>
      {cartData && cartData.planets.length ? (
        cartData.planets.map((planet: PlanetInCart) => (
          <Paper className={classes.item} elevation={3} key={planet.url}>
            <div className={classes.header}>
              <Typography variant="h6">{planet.name}</Typography>
              <IconButton onClick={() => removeFromCart(planet)}>
                <CloseIcon></CloseIcon>
              </IconButton>
            </div>
            <div className={classes.content}>
              <p>Climate:&nbsp;{planet.climate}</p>
              <p>Diameter:&nbsp;{planet.diameter}</p>
              <p>Terrain:&nbsp;{planet.terrain}</p>
            </div>
            <div className={classes.actions}>
              <IconButton
                disabled={planet.amount === 1}
                onClick={() => changeProductAmount(planet, false)}
              >
                <RemoveIcon></RemoveIcon>
              </IconButton>
              <p>{planet.amount}</p>
              <IconButton onClick={() => changeProductAmount(planet, true)}>
                <AddIcon></AddIcon>
              </IconButton>
            </div>
          </Paper>
        ))
      ) : (
        <h5>Cart is empty</h5>
      )}
    </Fragment>
  );
};

const mapStateToProps = (state: any) => {
  return {
    cartData: state.cart,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    removeFromCart: (planet: Planet) => dispatch(removeFromCart(planet)),
    changeProductAmount: (planet: Planet, increment: boolean) =>
      dispatch(changeProductAmount(planet, increment)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
