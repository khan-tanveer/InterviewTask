import { combineReducers } from 'redux';
import childReducer from '../component/childReducer';

const rootReducer = combineReducers({
    child: childReducer,
});


export default rootReducer;