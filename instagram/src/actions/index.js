import _ from 'lodash';
import jsonImageList from '../apis/jsonImageList';

export const fetchImages = () => async (dispatch, getState) => {
  await dispatch(fetchImage());

  _.chain(getState().images)
    .map('imageId')
    .uniq()
    .value();
};

export const fetchImage = () => async dispatch => {
  const response = await jsonImageList.get('/search?q=star');

  dispatch({ type: 'FETCH_IMAGES', payload: response.data.collection.items });
};
