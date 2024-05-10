// import {url} from "/src/API/constant.js";

// // بتجيب الداتا بتاعتك بس
// const useGetData = async (link, params) => {
//    const res = await url.get(link, params) ;
//    return res.data;
// };

// export default useGetData;


import baseUrl from "../API/constant";

const useGetData = async (url, params) => {
   const res = await baseUrl.get(url , params) ;
   return res.data;
};

export default useGetData;