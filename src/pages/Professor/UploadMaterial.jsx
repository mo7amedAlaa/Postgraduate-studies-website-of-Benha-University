import { LuUploadCloud } from 'react-icons/lu';
import Swal from 'sweetalert2';
import MainLayout from '../../component/Main/MainLayout';
import { useEffect, useState } from 'react';
import { URLng } from '../../API/constant';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useSSR } from 'react-i18next';

function UploadMaterial() {
  const [sub, setSub] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChangeSub = (e) => {
    setSub(e.target.value);
  };

  // const handleChangeDep = (e) => {
  //   setDep(e.target.value);
  // };
  const [dep, setDep] = useState(null);

  const validateForm = () => {
    let formErrors = {};
    if (!sub) formErrors.sub = 'Subject is required';
    if (!dep) formErrors.dep = 'Department ID is required';
    if (!uploadedFile) formErrors.uploadedFile = 'Material file is required';
    return formErrors;
  };

 


  const token = useSelector((state) => state.user.UserInfo?.token);
  useEffect(() => {
    async function fetchReports() {
      const res = await axios.post(
        `${URLng}/departmentss`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setDep(res.data);
      console.log(dep)
      console.log(res.data)

    }
    fetchReports();
    console.log(uploadedFile)

  }, []);
 const [courCode , setCourCode] = useState('')
 const [courName , setCourName] = useState('')
 const [choice , setChoice] = useState('')
 const [department , setDepartment] = useState('')
 const [courHours , setCourHours] = useState('')
 const [time , setTime] = useState('')
 const [allcourses , setAllCourses] = useState([])

 const HandleCourCodeChange = (e)=>{
  e.preventDefault()
  setCourCode(e.target.value)
  console.log(e.target.value)
 }
 const HandleCourNameChange = (e)=>{
  e.preventDefault()
  setCourName(e.target.value)
  console.log(e.target.value)
 }
 const HandleChoiceChange = (e)=>{
  e.preventDefault()
  setChoice(e.target.value)
  console.log(e.target.value)
 }

 const HandleTimeChange = (e)=>{
  e.preventDefault()
  setTime(e.target.value)
  console.log(e.target.value)
 }
 const HandleDepChange = (e)=>{
  e.preventDefault()
  setDepartment(e.target.value)
  console.log(e.target.value)
 }
 const HandleCourHoursChange = (e)=>{
  e.preventDefault()
  setCourHours(e.target.value)
  console.log(e.target.value)
 }
 const handleChangeFile = (e) => {
  setUploadedFile(e.target.files[0]);
  console.log(e.target.files[0]);
 }
 const handleSubmit = async (e) => {
   
  e.preventDefault();
   
  const formData = new FormData();
  formData.append('code', courCode);
  formData.append('name', courName);
  formData.append('hours', courHours);
  formData.append('material', uploadedFile);
  formData.append('time', time);
  formData.append('chose',choice );
  formData.append('department_id',department);
  console.log(formData)
  try {
    const response = await axios.post(`${URLng}/courses/addmatrial/9`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,


      },
    });

     
      Swal.fire('Success', 'Material added successfully!', 'success');
     }catch (error) {
    Swal.fire('Error', 'Failed to add material', 'error');
  }
  console.log(formData)
  setAllCourses([])
  setChoice('')
  setCourCode('')
  setCourHours('')
  setCourName('')
  setDep('')
  setDepartment('')
};

useEffect(() => {
  async function fetchReports() {
    const res = await axios.post(
      `${URLng}/showcourses`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setAllCourses(res.data);
    console.log(res.data)
  }
  fetchReports();
  
}, []);



  return (
    <MainLayout>
      <div className="container mx-auto p-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">تفاصيل الكورس</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">كود الكورس</label>
                <input type="text"  className="w-full p-3 border rounded bg-gray-100" onChange={HandleCourCodeChange}  />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">اسم الكورس</label>
                <select name="" id="" className="w-full p-3 border rounded bg-gray-100" onChange={HandleChoiceChange} >
                  <option value="Elective">Elective</option>
                  <option value="Mandatory">Mandatory</option>

                </select>               </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">ساعات المعتمدة للكورس</label>
                <input type="text"  className="w-full p-3 border rounded bg-gray-100" onChange={HandleCourHoursChange}  />
              </div>
             
              <div>
                <label className="block text-gray-700 font-medium mb-2">التوقيت</label>
                <select name="" id="" className="w-full p-3 border rounded bg-gray-100" onChange={HandleTimeChange} >
                  <option value="First">First</option>
                  <option value="Last">Last</option>

                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">اختار</label>
                <select name="" id="" className="w-full p-3 border rounded bg-gray-100" onChange={HandleChoiceChange} >
                  <option value="Elective">Elective</option>
                  <option value="Mandatory">Mandatory</option>

                </select>              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">قسم </label>
                <select className="w-full p-3 border rounded bg-gray-100" onChange={HandleDepChange}>
  {
    dep?.map((department) => (
      <option key={department.id} value={department.id}>{department.type}</option>
    ))
  }
</select>

              </div>
              
              
              <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            ملف
            <input
              type="file"
              onChange={handleChangeFile}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>
         </div>
            </div>
            <button type="submit" className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default UploadMaterial;
