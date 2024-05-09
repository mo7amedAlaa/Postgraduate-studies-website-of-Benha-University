import baseURL from "../Api/constant";

// بتجيب الداتا بتاعتك بس
const useGetData = async(url , params )=>{
   const res =await baseURL.get(url , params )
   return res.data
}
export default useGetData