import {ADD_FLASH_MESSAGE, DELETE_FLASH_MESSAGE} from '../actions/type_constants';
import shortid from 'shortid';
import _ from 'lodash';
export default (state=[], action)=>{
    switch (action.type){
        case ADD_FLASH_MESSAGE:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    type: action.message.type,
                    text: action.message.text
                }
            ];
        case DELETE_FLASH_MESSAGE:
            const ind = _.findIndex(state, {'id': action.id});
            if(ind>=0){
                return [
                    ...state.splice(0,ind),
                    ...state.splice(ind+1)
                ];
            }
            return state;
        default:
            return state;
    }
}
