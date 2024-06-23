import React, { useState } from 'react';
import { graduatedMenIcon, uniLogo } from '../../assets';
import Copyrights from '../../component/Footer/Copyrights';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import axios from 'axios';
import { URLng } from '../../API/constant';

const SeminarRequestForm = () => {
  const userInfo = useSelector((state) => state.user.UserInfo);
  const token = useSelector((state) => state.user.UserInfo?.token);
  const [seminarType, setSeminarType] = useState('');
  const [proposedSeminarDate, setProposedSeminarDate] = useState('');
  const [additionalNotes, setAdditionalNotes] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!seminarType) newErrors.seminarType = 'نوع السيمنار مطلوب';
    if (!proposedSeminarDate)
      newErrors.proposedSeminarDate = 'تاريخ السيمنار مطلوب';
    return newErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      const data = {
        type: `${seminarType}`,
        content: JSON.stringify({
          requesterName: userInfo?.user_data.name,
          requesterNumber: userInfo?.user_data.phone,
          seminarType,
          proposedSeminarDate,
          additionalNotes,
        }),
        date: proposedSeminarDate,
      };
      console.log(data);
      console.log(token);
      try {
        const response = await axios.post(`${URLng}/makereportstudent`, data, {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });

        Swal.fire('تم بنجاح', 'تم إرسال الطلب بنجاح', 'success');
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'فشل في إرسال الطلب',
          text: error.message,
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center h-screen font-bold">
      <div className="flex bg-main w-full items-center justify-around">
        <div>
          <img src={uniLogo} alt="" width={'100px'} height={'100px'} />
        </div>
        <div className="flex-1 text-center">
          <p className="text-lg md:text-3xl font-bold">
            جامعة بنهــــــــــــــا طلب السيمنارات
          </p>
        </div>
        <div>
          <img src={graduatedMenIcon} alt="" width={'100px'} height={'100px'} />
        </div>
      </div>
      <div className="container flex-1 flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full">
          <h1 className="text-2xl font-bold mb-6 text-center">
            طلب سيمنار للدراسات العليا
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="student-name"
                className="block text-gray-700 mb-2"
              >
                اسم الطالب:
              </label>
              <input
                type="text"
                id="student-name"
                name="student-name"
                value={userInfo?.user_data.name}
                className="w-full px-3 py-2 border rounded-lg"
                required
                readOnly={true}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="student-id" className="block text-gray-700 mb-2">
                رقم الطالب:
              </label>
              <input
                type="text"
                id="student-id"
                name="student-id"
                className="w-full px-3 py-2 border rounded-lg"
                value={userInfo?.user_data.phone}
                required
                readOnly={true}
                disabled
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="seminar-type"
                className="block text-gray-700 mb-2"
              >
                نوع السيمنار:
              </label>
              <select
                id="seminar-type"
                name="seminar-type"
                className="w-full px-3 py-2 border rounded-lg"
                value={seminarType}
                onChange={(e) => setSeminarType(e.target.value)}
                required
              >
                <option value="">اختر نوع السيمنار</option>
                <option value="idea-presentation">
                  سيمنار عرض الفكرة البحثية
                </option>
                <option value="discussion-presentation">سيمنار المناقشة</option>
                <option value="results-presentation">سيمنار عرض النتائج</option>
              </select>
              {errors.seminarType && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.seminarType}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="seminar-date"
                className="block text-gray-700 mb-2"
              >
                تاريخ السيمنار المقترح:
              </label>
              <input
                type="date"
                id="seminar-date"
                name="seminar-date"
                className="w-full px-3 py-2 border rounded-lg"
                value={proposedSeminarDate}
                onChange={(e) => setProposedSeminarDate(e.target.value)}
                required
              />
              {errors.proposedSeminarDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.proposedSeminarDate}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label htmlFor="notes" className="block text-gray-700 mb-2">
                ملاحظات إضافية:
              </label>
              <textarea
                id="notes"
                name="notes"
                className="w-full px-3 py-2 border rounded-lg"
                value={additionalNotes}
                onChange={(e) => setAdditionalNotes(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              إرسال الطلب
            </button>
          </form>
        </div>
      </div>
      <div className="bg-main w-full px-2">
        <Copyrights />
      </div>
    </div>
  );
};

export default SeminarRequestForm;
