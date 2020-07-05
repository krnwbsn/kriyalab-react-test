import React, { Fragment } from 'react';
import { TableCell, TableRow } from '@material-ui/core';

const AcccessibleTable = (props) => {
  const { title, quantity } = props;

  return (
    <Fragment>
      <TableRow>
        <TableCell component="th" scope="row">
          {title}
        </TableCell>
        <TableCell align="right">{quantity}</TableCell>
      </TableRow>
    </Fragment>
  );
};

export default AcccessibleTable;
