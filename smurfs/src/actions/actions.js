import axios from 'axios';

export const GET_SMURFS_REQUEST = 'GET_SMURFS_REQUEST';
export const GET_SMURFS_SUCCESS = 'GET_SMURFS_SUCCESS';
export const GET_SMURFS_FAILURE = 'GET_SMURFS_FAILURE';
export const MAKE_THE_SMURF_REQUEST = 'MAKE_THE_SMURF_REQUEST';
export const MAKE_THE_SMURF_SUCCESS = 'MAKE_THE_SMURF_SUCCESS';
export const MAKE_THE_SMURF_FAILURE = 'MAKE_THE_SMURF_FAILURE';

export const getSmurfs = () => dispatch => {
    dispatch({type: GET_SMURFS_REQUEST});
    axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response);
            dispatch({type: GET_SMURFS_SUCCESS, payload: response.data});
        })
        .catch(error => {
            dispatch({type: GET_SMURFS_FAILURE, payload: error.response})
        })
}


export const makeSmurf = (villager) => dispatch => {
    dispatch({type: MAKE_THE_SMURF_REQUEST});
    axios
    .post('http://localhost:3333/smurfs',villager)
    .then(response => {
        console.log(response);
        dispatch({type: MAKE_THE_SMURF_SUCCESS, payload: response.data})
    })
    .catch(error => {
        console.log(error)
        dispatch({type: MAKE_THE_SMURF_FAILURE, payload: error.response})
    })
    
        

}