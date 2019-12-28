import {FETCH_VIDEOS_SUCCESS, FETCH_VIDEO_DETAILS_SUCCESS, CREATE_VIDEO_SUCCESS, DELETE_VIDEO_SUCCESS} from './actionTypes';
import {beginAjax, endAjax} from './ajaxStatusActions'
import {fetchItems, fetchOne, createProduct, deleteItem, } from '../infrastructore/remote';

function fetchVideoSuccess (data) {
    return {
      type: FETCH_VIDEOS_SUCCESS,
      data
    }
  }

  function fetchVideoDetailsSuccess(data) {
    return {
        type: FETCH_VIDEO_DETAILS_SUCCESS,
        data
    }
}

function createVideoSuccess(data) {
  return {
      type: CREATE_VIDEO_SUCCESS,
data
  }
}

function deleteVideoSuccess(id) {
  return {
      type: DELETE_VIDEO_SUCCESS,
      id
  }
}

export function deleteVideoAction(id, collection) {
  return (dispatch) => {
      dispatch(beginAjax())
      return deleteItem(id, collection)
          .then(json => {
              if (json.success) {
                  dispatch(deleteVideoSuccess(id))
              } else {
                  console.log('err');

              }
              dispatch(endAjax())
          })
  }
}
  
export function fetchVideoAction (collection) {
    return async (dispatch) => {
      dispatch(beginAjax())
      const data = await fetchItems(collection)
      dispatch(fetchVideoSuccess(data))
      dispatch(endAjax())
    }
  }

  export function fetchVideoDetailsAction(id, collection) {
    return async (dispatch) => {
        dispatch(beginAjax())
        const data = await fetchOne(id, collection)
        dispatch(fetchVideoDetailsSuccess(data))
        dispatch(endAjax())
    }
}



export function createVideoAction (data, collection) {
  return (dispatch) => {
    dispatch(beginAjax())
    return createProduct(data, collection)
      .then(json => {
        if (json.success) {
          dispatch(createVideoSuccess(json.video))
        } else {
          console.log('err');
          
        }
        dispatch(endAjax())
      })
  }
}
  