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

  const handleUpload = async () => {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        accept: 'image/*',
        'aria-label': 'Upload your profile picture',
      },
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: 'Your uploaded picture',
          imageUrl: e.target.result,
          imageAlt: 'The uploaded picture',
        });
      };
      reader.readAsDataURL(file);

      setUploadedFile(file);
    }
  };

  const handleChangeSub = (e) => {
    setSub(e.target.value);
  };

  // const handleChangeDep = (e) => {
  //   setDep(e.target.value);
  // };
  const [dep, setDep] = useState([]);

  const validateForm = () => {
    let formErrors = {};
    if (!sub) formErrors.sub = 'Subject is required';
    if (!dep) formErrors.dep = 'Department ID is required';
    if (!uploadedFile) formErrors.uploadedFile = 'Material file is required';
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const formData = new FormData();
    formData.append('sub', sub);
    formData.append('department_id', dep);
    formData.append('material', uploadedFile);

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        Swal.fire('Success', 'Material added successfully!', 'success');
      } else {
        Swal.fire('Error', 'Failed to add material', 'error');
      }
    } catch (error) {
      Swal.fire('Error', 'Failed to add material', 'error');
    }
  };

  const courseData = {
    message: "Material Added Successfully.",
    course: {
      id: 9,
      code: "1238",
      name: "MATH",
      hours: "2",
      material: "course/materials/6674b14deed57.png",
      time: "last",
      chose: "elective",
      created_at: "2024-06-19T16:51:54.000000Z",
      updated_at: "2024-06-20T22:46:38.000000Z",
    }
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
      console.log(res.data)
    }
    fetchReports();

  }, []);

  return (
    <MainLayout>
      <div className="container mx-auto p-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">Course Details</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Course ID</label>
                <input type="text" value={courseData.course.id} className="w-full p-3 border rounded bg-gray-100" readOnly />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Course Code</label>
                <input type="text" value={courseData.course.code} className="w-full p-3 border rounded bg-gray-100" readOnly />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Course Name</label>
                <input type="text" value={courseData.course.name} className="w-full p-3 border rounded bg-gray-100" readOnly />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Course Hours</label>
                <input type="text" value={courseData.course.hours} className="w-full p-3 border rounded bg-gray-100" readOnly />
              </div>
             
              <div>
                <label className="block text-gray-700 font-medium mb-2">Time</label>
                <input type="text" value={courseData.course.time} className="w-full p-3 border rounded bg-gray-100" readOnly />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Chose</label>
                <input type="text" value={courseData.course.chose} className="w-full p-3 border rounded bg-gray-100" readOnly />
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Department ID</label>
                <select   className="w-full p-3 border rounded bg-gray-100">
                    {
                     dep?.map((department)=>{<option value={department.type}>{department.type }</option>})
                    }
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Subject</label>
                <input type="text" value={sub} onChange={handleChangeSub} className="w-full p-3 border rounded" />
                {errors.sub && <p className="text-red-500 text-sm mt-1">{errors.sub}</p>}
              </div>
              
              <div>
                <label className="block text-gray-700 font-medium mb-2">Material</label>
                <button type="button" onClick={handleUpload} className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 flex items-center justify-center">
                  <LuUploadCloud className="mr-2" />
                  Upload Material
                </button>
                {errors.uploadedFile && <p className="text-red-500 text-sm mt-1">{errors.uploadedFile}</p>}
              </div>
            </div>
            <button type="submit" className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}

export default UploadMaterial;
