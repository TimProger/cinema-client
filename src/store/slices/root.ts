import { combineReducers } from 'redux';
import mainSlice from './main.slice';

const rootReducer = combineReducers({
    main: mainSlice
})

export default rootReducer