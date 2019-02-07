import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types';


export const getItems = () => {
  return function(dispatch) {
    dispatch(setItemsLoading());
    axios
      .get('/api/items')
      .then(res => 
        dispatch({
          type: GET_ITEMS,
          payload: res.data
        }),
        error => console.log(error)
      )
  }
}

export const deleteItem = id => dispatch => {
  axios
    .delete(`/api/items/${id}`)
    .then(res => 
      dispatch({
        type: DELETE_ITEM,
        id
      }))
}

export const addItem = item => dispatch => {
  axios
    .post('/api/items', item)
    .then(res => 
      dispatch({
        type: ADD_ITEM,
        item: res.data
      }))
}

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING
  }
}