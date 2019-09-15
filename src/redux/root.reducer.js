import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import user from './user/user.reducer';
import card from './card/card.reducers';
import calculate from './calculate/calculate.reducer';

const reducer = combineReducers({
    user,
    calculate,
    card,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['card'],
}

export default persistReducer(persistConfig, reducer);