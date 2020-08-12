import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
}));

const Navbar = ({ cartData }: any) => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link}>
              Shopping cart
            </Link>
          </Typography>
          <Link to="/cart">
            <IconButton>
              <Badge badgeContent={cartData.planets.length} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({ cartData: state.cart });

export default connect(mapStateToProps)(Navbar);
