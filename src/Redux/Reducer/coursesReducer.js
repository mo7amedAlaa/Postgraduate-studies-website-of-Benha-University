import { GET_ALL_COURSES , GET_ERROR } from "../type"

const inital = {
    courses:[],
    loading : true,

}
const coursesReducer = (state = inital , action)=>{
    switch(action.type){
        case GET_ALL_COURSES: 
            return {...state , courses :action.payload , loading : false}
            case GET_ERROR :
                return {...state , courses : action.payload , loading : true}
                
            default :
            return state
    }
}

export default coursesReducer