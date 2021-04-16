import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authRedcuer from './authReducer';

export default combineReducers({
  auth: authRedcuer,
  form: formReducer
});
