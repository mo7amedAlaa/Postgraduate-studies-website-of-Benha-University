 
// import axios from "axios";

// // const  url = axios.create({ url:"https://f675-45-242-154-147.ngrok-free.app/api" })
// const  url = axios.create({ baseURL:"https://f675-45-242-154-147.ngrok-free.app/api" })

// export {url};



import axios from "axios";

const baseUrl = axios.create({ baseURL: "https://fakestoreapi.com" });

export default baseUrl