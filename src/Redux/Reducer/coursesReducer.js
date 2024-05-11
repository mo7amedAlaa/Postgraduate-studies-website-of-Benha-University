import { GET_ALL_COURSES , GET_ERROR, GET_SELECTED_COURSE } from "../type"

const inital = {
    courses:[],
    selectedCourses :[],
    loading : true,

}
const coursesReducer = (state = inital , action)=>{
    switch(action.type){
        case GET_ALL_COURSES: 
            return {...state , courses :action.payload , loading : false}
            case GET_SELECTED_COURSE :
                return { selectedCourses:action.payload , loading : false}

            case GET_ERROR :
                return {...state , courses : action.payload , loading : true}
                
            default :
            return state
    }
}

export default coursesReducer