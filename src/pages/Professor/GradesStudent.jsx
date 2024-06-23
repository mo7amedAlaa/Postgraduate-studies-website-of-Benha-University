import MainLayout from "../../component/Main/MainLayout";
import { IoMdAddCircleOutline } from "react-icons/io";
import { DataGrid } from "@mui/x-data-grid";
import { CiSearch } from "react-icons/ci";
import axios from "axios";
import { useEffect, useState } from "react";
import { UseApiRequest } from "../../Hooks/RestApi";
import { URLng } from "../../API/constant";
import { useSelector } from "react-redux";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "title", headerName: "كود المادة", width: 130 },
  { field: "description", headerName: "اسم المادة", width: 130 },
  { field: "price", headerName: "عدد الساعات", width: 130 },
  { field: "category", headerName: "الدرجة العظمي", width: 130 },
  { field: "rating", headerName: "الدرجة الصغري", width: 130 },
];
const rows = [
  {
    id: 1,
    title: "ggffg",
    description: "fggfgffg",
    price: 5,
    category: 100,
    rating: 45,
  },
];
// const {
//   data: courses,
//   loading: GetLoad,
//   error: GetError,
//   callApi,
// } = UseApiRequest(
//   "/courses",
//   "GET",
//   null,
//   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vNTE3ZC0xOTctMzMtMTE4LTExOC5uZ3Jvay1mcmVlLmFwcC9hcGkvYXV0aC9sb2dpbnN0dWRlbnQiLCJpYXQiOjE3MTgyMTYxNTIsImV4cCI6MTcxODU3NjE1MiwibmJmIjoxNzE4MjE2MTUyLCJqdGkiOiJUUlpBdjVabnkyVGZBWEtXIiwic3ViIjoiMzUiLCJwcnYiOiI5YzQyOWU2YTYwY2Q1Mjg1NDczZjJjOGJjNzAxZWMwOTQ4ZGY0ZDhjIn0.68p9K_BWaA30wRVLCMRhKdrloXazPBEyaOZwgebC91U"
// );

function GradesStudent() {
  const handelSubmit = async (event) => {
    event.preventDefault();

    // callApi();
  };
  const [name, setName] = useState("");
  const [codeSt, setCodeSt] = useState("");
  const [codeSub, setCodeSub] = useState("");
  const [degree, setDegree] = useState("");
  const [allcourses , setAllCourses] = useState(null)

  const token = useSelector((state) => state.user.UserInfo.token);
  console.log(token);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.post(
          `${URLng}/showallcourses`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAllCourses(res.data)
        console.log(allcourses);
        console.log("Courses");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (token) {
      fetchData();
    }
    console.log(token);
    console.log("load");
  }, [token]);

  //  const handleChangeName = (e)=>{
  //   e.preventDefault()
  //   setName(e.target.value)
  //   console.log(name)
  //  }

  //  const handleChangeCodeSub = (e)=>{
  //   e.preventDefault()
  //   setCodeSub(e.target.value)

  //   console.log(codeSub)
  //  }
  //  const handleChangeCodeSt = (e)=>{
  //   e.preventDefault()
  //   setCodeSt(e.target.value)

  //   console.log(codeSt)
  //  }
  //  const handleChangeDegree = (e)=>{
  //   e.preventDefault()
  //   setDegree(e.target.value)

  //   console.log(degree)
  //  }
  //  const handleSubmit =(e)=>{
  //   e.preventDefault()
  //   const formData = new FormData()
  //   formData.append("", name)
  //  }
  const handleCourChange = (e)=>{
    e.preventDefault()
    console.log(e.target.value)
  }
  const handleSemChange = (e)=>{
    e.preventDefault()
    console.log(e.target.value)
  }
  // const handleSemChange = (e)=>{
  //   e.preventDefault()
  //   console.log(e.target.value)
  // }
  const handleDegChange = (e)=>{
    e.preventDefault()
    console.log(e.target.value)
  }
  return (
    <div>
      <MainLayout>
        <div className="mx-auto">
       
          <form action="">
            <div>
              <fieldset className="border my-2 border-gray-600 p-3 ">
                <legend>درجات الطالب بالتفصيل </legend>
                
                <div className="w-4/5 mr-2 ">
                  <label
                    className="block text-gray-700 font-bold mb-2 text-xl"
                    htmlFor="id"
                  >
                    اسم الطالب
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="id"
                    type="text"
                    placeholder="من فضلك ادخل اسم الطالب"
                    
                  />
                </div>

                <div className="w-4/5 mr-2 mt-2">
                  <label
                    className="block text-gray-700 font-bold mb-2 text-xl"
                    htmlFor="id"
                  >
                    اسم الكورس
                  </label>
                  <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleCourChange} >
                    {
                      allcourses &&
                        allcourses.map((course) => (
                          <option key={course.id} value={course.id}>
                            {course.name}
                          </option>
                        ))
                    }
                   
                 

                   </select>
                </div>
                <div className="w-4/5 mr-2 mt-2">
                  <label
                    className="block text-gray-700 font-bold mb-2 text-xl"
                    htmlFor="id"
                  >
                    الترم
                  </label>
                   <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleSemChange} >
                    <option value="first">First</option>
                    <option value="Last">Last</option>
                   </select>
                </div>
                <div className="w-4/5 mr-2 mt-2">
                  <label
                    className="block text-gray-700 font-bold mb-2 text-xl"
                    htmlFor="id"
                  >
                    الدرجة
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleDegChange}
                    id="id"
                    type="text"
                    placeholder="من فضلك ادخل درجة الطالب"
                    
                  />
                </div>
              </fieldset>
            </div>
            <div className="flex justify-center gap-5 mt-1 mb-3">
              <div className="relative ">
                <input
                  type="submit"
                  value={"اضافة"}
                  className="main-btn"
                  onClick={handelSubmit}
                />
                <IoMdAddCircleOutline className=" absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2  right-4" />
              </div>
              <div className="relative">
                <button type="button" className="main-btn ">
                  بحث
                </button>
                <CiSearch className=" absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2  right-4" />
              </div>
            </div>
          </form>
        </div>
        <div className="p-10 container mx-auto">
          <div style={{ height: 400, width: "100%", direction: "ltr" }}>
            <DataGrid
              checkboxSelection
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default GradesStudent;
