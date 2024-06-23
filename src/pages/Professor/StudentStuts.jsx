import { Checkbox } from '@mui/material';
import MainLayout from '../../component/Main/MainLayout';
import { useState } from 'react';
import axios from 'axios';
import { URLng } from '../../API/constant';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

function StudentStuts() {
  const token = useSelector((state) => state.user.UserInfo?.token);
  const [degree, setDegree] = useState('');
  const [studentName, setStudentName] = useState('');
  const [requestType, setRequestType] = useState(
    'StudentStatusFollow-upReport'
  );
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [studentStatus, setStudentStatus] = useState('');
  const [supervisorName, setSupervisorName] = useState('');
  const [supervisorTitle, setSupervisorTitle] = useState('');
  const [supervisorDate, setSupervisorDate] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      type: 'StudentStatusFollow-upReport',
      content: JSON.stringify({
        degree,
        studentName,
        startDate,
        endDate,
        studentStatus,
        supervisor: {
          name: supervisorName,
          title: supervisorTitle,
        },
      }),
      date: supervisorDate,
    };
    console.log(data);
    axios
      .post(`${URLng}/makereportprof`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Response from server:', response.data);
        Swal.fire({
          icon: 'success',
          title: 'تم إرسال الطلب بنجاح!',
          showConfirmButton: false,
          timer: 300,
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
  };
  return (
    <MainLayout title={'تقرير بمتابعة الطالب كل ست شهور'}>
      <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Department and Degree */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              السيد الأستاذ الدكتور / رئيس قسم
            </label>
            <select className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
              <option value="" disabled>
                اختر القسم
              </option>
              <option value="IS">IS</option>
              <option value="CS">CS</option>
              <option value="AI">AI</option>
              <option value="SC">SC</option>
            </select>
          </div>
          <div className="space-y-2">
            <p className="block text-sm font-medium text-gray-700">
              مرسل لسيادتكم تقرير لمتابعة حالة الطال المسجل في درجة:
            </p>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              الدرجة
            </label>
            <select
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="" disabled>
                اختر الدرجة
              </option>
              <option value="Master's">ماجستير</option>
              <option value="PhD">الدكتوراة</option>
            </select>
          </div>
          <div className="space-y-2">
            <p className="block text-sm font-medium text-gray-700">
              خلال المدة الزمنية{' '}
            </p>
          </div>
          {/* Date Range */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              تاريخ البداية والنهاية
            </label>
            <div className="flex space-x-2">
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="block w-1/2 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              حالة الطالب
            </label>
            <textarea
              value={studentStatus}
              onChange={(e) => setStudentStatus(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="حالة الطالب"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              المشرف
            </label>
            <input
              type="text"
              value={supervisorName}
              onChange={(e) => setSupervisorName(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="اسم المشرف"
            />
          </div>
          <div className="space-y-2">
            <input
              type="text"
              value={supervisorTitle}
              onChange={(e) => setSupervisorTitle(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="اللقب الأكاديمي للمشرف"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              تاريخ ارسال المشرف
            </label>
            <input
              type="date"
              value={supervisorDate}
              onChange={(e) => setSupervisorDate(e.target.value)}
              className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <div>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              إرسال التقرير
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}

export default StudentStuts;
