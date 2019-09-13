import { combineReducers } from 'redux';
import user from './user/user.reducer';
import card from './card/card.reducers';
import calculate from './calculate/calculate.reducer';

export default combineReducers({
    user,
    calculate,
    card,
});