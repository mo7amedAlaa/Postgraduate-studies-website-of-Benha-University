import baseURL from "../Api/constant.js";

// بتجيب الداتا بتاعتك بس
const useGetData = async(url , params )=>{
   const res =await baseURL.get(url , params )
   return res.data
}
export default useGetData