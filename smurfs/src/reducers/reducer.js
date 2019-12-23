import {
  GET_SMURFS_REQUEST, 
  GET_SMURFS_SUCCESS, 
  GET_SMURFS_FAILURE,
  MAKE_THE_SMURF_REQUEST,
  MAKE_THE_SMURF_SUCCESS,
  MAKE_THE_SMURF_FAILURE } from '../actions/actions';
  
  const initialState = {
    smurfs: [],
    error: '',
    isFetching: false
  };
  
  function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
      case GET_SMURFS_REQUEST:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case GET_SMURFS_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false,
          error: ''
        };
      case GET_SMURFS_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      case MAKE_THE_SMURF_REQUEST:
        return {
          ...state,
          isFetching: true,
          error: ''
        };
      case MAKE_THE_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          isFetching: false,
          error: ''
        };
      case MAKE_THE_SMURF_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  }
  
  export default reducer;