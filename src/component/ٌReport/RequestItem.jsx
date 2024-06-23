import React from 'react';
import Swal from 'sweetalert2';
import { URLng } from '../../API/constant';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Bounce, toast } from 'react-toastify';

const RequestItem = ({ request }) => {
  const { id, content, date, type, status, student } = request;
  const token = useSelector((state) => state.user.UserInfo?.token);
  const contentData = JSON.parse(content);
  function handleApprove(id) {
    axios
      .post(
        `${URLng}/acceptReport/${id}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log('Response from server:', response.data);
        toast.success(' تم الموافقة علي الطلب بنجاح', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
          transition: Bounce,
        });
      })
      .catch((error) => {
        console.error('Error sending data:', error);
        Swal.fire({
          icon: 'error',
          title: 'حدث خطأ أثناء إرسال البيانات',
          text: 'يرجى المحاولة مرة أخرى',
          confirmButtonText: 'حسناً',
        });
      });
    console.log(`تم الموافقة على الطلب: ${id}`);
  }

  const handleDelete = () => {
    console.log(`تم حذف الطلب: ${id}`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        نوع الطلب: {type}
      </h3>
      <p className="text-gray-600 mb-2">التاريخ: {date}</p>
      <p className="text-gray-600 mb-2">
        الحالة:
        <span
          className={`ml-2 px-2 py-1 rounded-full text-sm ${
            status === 'approved'
              ? 'bg-green-200 text-green-800'
              : 'bg-yellow-200 text-yellow-800'
          }`}
        >
          {status}
        </span>
      </p>
      {type === 'recordPoint' && (
        <>
          <p className="text-gray-600 mb-2">
            الموضوع بالعربية: {contentData.topicArabic}
          </p>
          <p className="text-gray-600 mb-2">
            الموضوع بالإنجليزية: {contentData.topicEnglish}
          </p>
          <p className="text-gray-600 mb-2">
            اسم المشرف: {contentData.supervisorName}
          </p>
          <p className="text-gray-600 mb-2">
            لقب المشرف: {contentData.supervisorTitle}
          </p>
          <p className="text-gray-600 mb-2">المشرفون:</p>
          <ul className="text-gray-600 list-disc list-inside mb-2">
            {contentData.supervisors.map((supervisor, index) => (
              <li key={index}>
                الاسم: {supervisor.name}، اللقب: {supervisor.title}، القسم:{' '}
                {supervisor.department}
              </li>
            ))}
          </ul>
          <p className="text-gray-600 mb-2">المرسل: {student?.name}</p>
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => handleApprove(id)}
              className="bg-green-500 text-white px-4 w-1/3 py-2 rounded hover:bg-green-700 transition-colors duration-200 mr-2"
            >
              موافقة
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white  w-1/3 px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
            >
              حذف
            </button>
          </div>
        </>
      )}
      {type === 'StudentStatusFollow-upReport' && (
        <>
          <p className="text-gray-600 mb-2">رقم الطلب: {id}</p>
          <p className="text-gray-600 mb-2">
            الدرجة العلمية للطالب: {contentData.degree}
          </p>
          <p className="text-gray-600 mb-2">
            حالة للطالب: {contentData.studentStatus}
          </p>
          <p className="text-gray-600 mb-2">
            تاريخ البداية: {contentData.startDate}
          </p>
          <p className="text-gray-600 mb-2">
            تاريخ النهاية: {contentData.startDate}
          </p>
          <p className="text-gray-600 mb-2">
            اسم المشرف: {contentData.supervisorName}
          </p>
          <p className="text-gray-600 mb-2">
            لقب المشرف: {contentData.supervisorTitle}
          </p>
          <p className="text-gray-600 mb-2">المرسل: {student?.name}</p>
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => handleApprove(id)}
              className="bg-green-500 text-white px-4 w-1/3 py-2 rounded hover:bg-green-700 transition-colors duration-200 mr-2"
            >
              موافقة
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white  w-1/3 px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
            >
              حذف
            </button>
          </div>
        </>
      )}
      {type === 'discussion-presentation' && (
        <>
          <p className="text-gray-600 mb-2">رقم الطلب: {id}</p>
          <p className="text-gray-600 mb-2">
            اسم المرسل : {contentData.requesterName}
          </p>
          <p className="text-gray-600 mb-2">
            الموعد المقترح : {contentData.proposedSeminarDate}
          </p>
          <p className="text-gray-600 mb-2">
            رقم الهاتف: {contentData.requesterNumber}
          </p>
          <p className="text-gray-600 mb-2">
            تاريخ النهاية: {contentData.startDate}
          </p>
          <p className="text-gray-600 mb-2">
            ملاحظات اضافية: {contentData.additionalNotes}
          </p>

          <p className="text-gray-600 mb-2">المرسل: {student?.name}</p>
          <div className="mt-4 flex items-center justify-between">
            <button
              onClick={() => handleApprove(id)}
              className="bg-green-500 text-white px-4 w-1/3 py-2 rounded hover:bg-green-700 transition-colors duration-200 mr-2"
            >
              موافقة
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-500 text-white  w-1/3 px-4 py-2 rounded hover:bg-red-700 transition-colors duration-200"
            >
              حذف
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default RequestItem;
