import {combineReducers} from '@reduxjs/toolkit'
import homeSlice from '../HomePage/homeSlice';

const appReducer = combineReducers({
    homeSlice:homeSlice,
})

const rootReducer = (state,action) => {
    return appReducer(state,action)
}

export default rootReducer