import axios from 'axios';

export function userSignupRequest(userData) {
    return dispatch => {
        return axios.post('/api/games', userData);
    }
}

export function isUserExists(val) {
    return dispatch =>{
        return axios.get('/api/games');
    }
}