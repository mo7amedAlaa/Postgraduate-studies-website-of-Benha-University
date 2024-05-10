import {url} from "/src/API/constant.js";

// بتجيب الداتا بتاعتك بس
const useGetData = async (Url, params) => {
   const res = await url.get(Url, params);
   return res.data;
};

export default useGetData;