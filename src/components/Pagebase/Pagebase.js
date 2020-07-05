import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Badge, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { loadData } from '../../configs/actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    fontWeight: 600,
    textTransform: 'uppercase'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  button: {
    border: '1px solid #fff',
    padding: '10px',
    color: '#fff',
    margin: '15px 0px 15px 15px',
    fontWeight: 600
  },
  appBar: {
    backgroundColor: '#333',
  }
}));

const Pagebase = ({ items }) => {
  const classes = useStyles();

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Kriyalab
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show total cart" color="inherit">
              <Badge badgeContent={items.totalItems} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Link to="/cart">
              <Button className={classes.button}>
                Checkout
              </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.reducer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagebase);
