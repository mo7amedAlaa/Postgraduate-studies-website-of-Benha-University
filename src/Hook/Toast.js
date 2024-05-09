import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//to make notification to many components
const notify = (msg, type) => {
    if (type === "warn") {
      toast.warning(msg);
    } else if (type === "success") {
      toast.success(msg);
    } else if (type === "error") {
      toast.error(msg);
    }
  };

  export default notify