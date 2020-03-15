import * as actionTyps from '../actions/types';
import {combineReducers} from 'redux';
const initalUserState = {
    currentUser: null,
    isLoading: true
};
const user_reducer = (state = initalUserState, action) => {
    switch(action.type) {
        case actionTyps.SET_USER:
            return {
                currentUser: action.payload.currentUser,
                isLoading: false
            }
        case actionTyps.CLEAR_USER:
            return {
               ...initalUserState,
               isLoading: false 
            }
        default:
            return state;
    };

}

const initalChannelState = {
    currentChannel: null
};

const channel_reducer = (state = initalChannelState, action) => {
    switch(action.type) {
        case actionTyps.SET_CUREENT_CHANNEL:
            return {
                ...state,
                currentChannel: action.payload.currentChannel
            }
        default:
            return state;
    }
}
const rootReducer = combineReducers({
    user: user_reducer,
    channel: channel_reducer
});

export default rootReducer;