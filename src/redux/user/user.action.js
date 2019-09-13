import { user as User} from '../types';
 
export const setUser = user => ({
    type: User.SET_CURRENT_USER,
    payload: user,
})