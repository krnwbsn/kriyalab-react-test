import React, { useEffect, Fragment } from 'react';
import { Grid, TableContainer, Table, Button, TableHead, TableRow, TableCell, TableBody, Paper } from '@material-ui/core';
import { Pagebase, AcccessibleTable } from '../../components';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { loadData, productCheckout } from '../../configs/actions';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  body: {
    padding: 25
  },
  head: {
    fontWeight: 600,
    textTransform: 'uppercase'
  },
  button: {
    textTransform: 'none',
    fontWeight: 600,
    marginRight: 10
  }
});

const Cart = ({ selectedItems, loadData, productCheckout }) => {
  const classes = useStyles();
  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Fragment>
      <Pagebase />
      <Grid className={classes.body}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="caption table">
            <caption>
              <Link to="/">
                <Button className={classes.button} variant="outlined" color="secondary">
                  Back
                </Button>
              </Link>
              <Link to="/">
                <Button className={classes.button} onClick={productCheckout} variant="outlined" color="primary">
                  Buy
                </Button>
              </Link>
            </caption>
            <TableHead>
              <TableRow>
                <TableCell className={classes.head}>Items to buy</TableCell>
                <TableCell className={classes.head} align="right">Quantity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {selectedItems.map((item, index) =>
                <AcccessibleTable title={item.title} key={index} quantity={item.quantity} />
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const productCart = state.reducer.selectedItems;
  const arrayOfItems = [];
  productCart.reduce((a, b) => {
    if (!a[b.title]) {
      a[b.title] = { title: b.title, quantity: 0 };
      arrayOfItems.push(a[b.title]);
    }
    a[b.title].quantity += b.quantity;
    return a;
  }, {});

  return {
    items: state.reducers,
    selectedItems: arrayOfItems
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadData()),
    productCheckout: () => dispatch(productCheckout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
