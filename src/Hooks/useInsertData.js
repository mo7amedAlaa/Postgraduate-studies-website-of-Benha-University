import baseURL from '../Api/constant';

// بتضيف data من غير صور

const useInsertData = async (url, params) => {
  const res = await baseURL.post(url, params);
  return res;
};

//  ممكن تضيف الصور والداتا كصور ب استخدام

const useInsertDataWithImage = async (url, params) => {
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
  };
  const res = await baseURL.post(url, params, config);
  return res;
};
export { useInsertData, useInsertDataWithImage };
