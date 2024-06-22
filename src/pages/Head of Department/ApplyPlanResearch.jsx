import React, { useState } from 'react';
import Swal from 'sweetalert2';
import MainLayout from '../../component/Main/MainLayout';
import { URLng } from '../../API/constant';
import { useSelector } from 'react-redux';
import axios from 'axios';

const ApplyPlanResearch = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const userInfo = useSelector((state) => state.user.UserInfo);
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      Swal.fire({
        title: 'ملف تم اختياره',
        text: `لقد اخترت الملف: ${selectedFile.name}`,
        icon: 'success',
        confirmButtonText: 'حسنًا',
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userInfo);

    if (!title || !description || !file) {
      Swal.fire({
        title: 'خطأ',
        text: 'يرجى ملء جميع الحقول واختيار ملف قبل الإرسال',
        icon: 'error',
        confirmButtonText: 'حسنًا',
      });
      return;
    }

    Swal.fire({
      title: 'هل أنت متأكد؟',
      text: 'هل تريد حقًا رفع هذه الخطة البحثية؟',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'نعم، ارفعها',
      cancelButtonText: 'إلغاء',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('file', file);
        try {
          console.log(formData);
          const response = await axios.post(
            `${URLng}/courses/addplan/9`,
            formData,
            {
              headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${userInfo?.token}`,
              },
            }
          );
          console.log(response.data);
        } catch (error) {
          console.log(error.message);
        }
      }
    });
  };

  return (
    <MainLayout>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            العنوان:
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            الوصف:
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            الملف:
            <input
              type="file"
              onChange={handleFileChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          رفع الخطة البحثية
        </button>
      </form>
    </MainLayout>
  );
};

export default ApplyPlanResearch;
