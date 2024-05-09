import {combineReducers} from 'redux'
import coursesReducer from './coursesReducer'
export default combineReducers({
    allCourses : coursesReducer,
  

})