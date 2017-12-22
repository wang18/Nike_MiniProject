import {SET_CURRENT_USER, LOG_OUT} from '../actions/type_constants';
import _ from 'lodash';

const initialState = {
    isAuthenticated: false,
    user: {}
};

export default (state=initialState, action) => {
    switch(action.type){
        case SET_CURRENT_USER:
            return {
                isAuthenticated: !_.isEmpty(action.user),
                user: action.user
            };
        case LOG_OUT:
            return initialState;
        default:
            return state;
    }
}