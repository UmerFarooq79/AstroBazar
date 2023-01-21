import { combineReducers } from 'redux';

import auth from './auth/reducer';
import app from './app/reducer';

export default combineReducers({
    auth,
    app,
});
