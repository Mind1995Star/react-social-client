import { combineReducers } from 'redux';
import stateReducer from './state-reducer';



const rootReducer = combineReducers({
     userState: stateReducer,
});

export default rootReducer;