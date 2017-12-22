import axios from 'axios';
import {SET_CURRENT_USER, LOG_OUT} from './type_constants';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    }
}

export function login(data){
    return dispatch => {
        return axios.get('/api/games').then(res =>{
            res.data.games.map((e)=> {
                if((e.title===data.title) && (e.password===data.password)){
                    dispatch(setCurrentUser(data));
                }
            });
        } );
    };
}

export function logoutUser() {
    return {
        type: LOG_OUT

    }
}
export function logout() {
    return dispatch => {
        return dispatch(logoutUser());
    };
}