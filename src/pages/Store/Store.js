import React, { Fragment, useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { Pagebase, MediaCard } from '../../components';
import { setIncrement, setDecrement, loadData } from '../../configs/actions';
import { connect } from 'react-redux';

const Store = ({ items, loadData, setIncrement, setDecrement }) => {
  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <Fragment>
      <Pagebase />
      <Grid container spacing={2} justify="center">
        {items.map((item, index) =>
          <MediaCard key={index} title={item.title} handleDecrease={setDecrement} handleIncrease={() => setIncrement(item.title)} />
        )}
      </Grid>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.reducer.items
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadData: () => dispatch(loadData()),
    setIncrement: (item) => dispatch(setIncrement(item)),
    setDecrement: () => dispatch(setDecrement())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Store);
