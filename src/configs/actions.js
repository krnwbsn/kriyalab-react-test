import axios from 'axios';
import { TYPE } from '../constants';
import { API_URL } from '../services';

export const loadData = () => {
  return (dispatch) => {
    dispatch(loadDataProcess());
    axios
      .get(`${API_URL}/todos`)
      .then(response => {
        const datas = response.data;
        dispatch(loadDataSuccess(datas));
      })
      .catch(error => {
        console.error(error);
        dispatch(loadDataFailure(error.message));
      });
  };
};

export const loadDataProcess = () => {
  return {
    type: TYPE.LOAD_DATA
  };
};

export const loadDataSuccess = datas => {
  return {
    type: TYPE.LOAD_DATA_SUCCESS,
    items: datas
  };
};

export const loadDataFailure = error => {
  return {
    type: TYPE.LOAD_DATA_FAILURE,
    data: error
  };
};

export const setIncrement = (title) => {
  return {
    type: TYPE.SET_INCREMENT,
    selectedItems: {
      title,
      quantity: 1
    }
  };
};

export const setDecrement = () => {
  return {
    type: TYPE.SET_DECREMENT,
  };
};

export const productCheckout = () => {
  return {
    type: TYPE.CHECKOUT_PRODUCT
  };
};
