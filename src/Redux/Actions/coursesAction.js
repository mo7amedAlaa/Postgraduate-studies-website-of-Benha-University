import useGetData from "../../Hooks/useGetData"
import { GET_ALL_COURSES, GET_ERROR } from "../type"

//Get All Courses 
export const getAllCourses =()=> async(dispatch)=>{
  try{
    const response = await useGetData(`/courses`)
    console.log(response.data)
    dispatch( {
     type : GET_ALL_COURSES,
     payload : response ,
     loading : true
    })
  }catch(e){
     dispatch( {
         type : GET_ERROR ,
         payload :"ERROR : " + e 
        })
  }
}

