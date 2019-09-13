import { user } from '../types';

const InitialState = {
    currentUser: null,
};

export default (state = InitialState, action) => {
    switch(action.type) {
        case user.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload,
            };
        default: 
            return state;
    }
}