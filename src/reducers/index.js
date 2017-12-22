import {combineReducers} from 'redux';
import flashMessages from './flashMessages';
import {reducer as formReducer} from 'redux-form';
import auth from './auth_reducer';

const RootReducer = combineReducers({
    flashMessages,
    form: formReducer,
    auth
});

export default RootReducer;