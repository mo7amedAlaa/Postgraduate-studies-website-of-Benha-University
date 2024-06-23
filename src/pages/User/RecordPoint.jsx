import { useEffect, useState } from 'react';
import axios from 'axios';

import { graduatedMenIcon, uniLogo } from '../../assets';
import Copyrights from '../../component/Footer/Copyrights';
import Swal from 'sweetalert2'; // Import SweetAlert
import { URLImage, URLng } from '../../API/constant';
import { useSelector } from 'react-redux';

function RecordPoint() {
  const userInfo = useSelector((state) => state.user.UserInfo);
  const token = useSelector((state) => state.user.UserInfo?.token);
  console.log(token);
  const [degree, setDegree] = useState('Masters');

  const [topicArabic, setTopicArabic] = useState('');
  const [topicEnglish, setTopicEnglish] = useState('');
  const [supervisors, setSupervisors] = useState([
    { name: '', title: '', department: '' },
  ]);
  const [supervisorName, setSupervisorName] = useState('');
  const [supervisorTitle, setSupervisorTitle] = useState('');
  const [supervisorDate, setSupervisorDate] = useState('');
  const [resUrl, setResUrl] = useState(null);
  useEffect(() => {
    async function fetchReports() {
      const res = await axios.post(
        `${URLng}/researchplan`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResUrl(res.data.research_plan);
      console.log(res.data.research_plan);
    }
    fetchReports();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      type: 'recordPoint',
      content: JSON.stringify({
        degree,
        topicArabic,
        topicEnglish,
        supervisors,
        supervisorName,
        supervisorTitle,
      }),
      date: supervisorDate,
    };
    console.log(data);
    axios
      .post(`${URLng}/makereportstudent`, data, {
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

  const addSupervisor = () => {
    setSupervisors([...supervisors, { name: '', title: '', department: '' }]);
  };

  const handleSupervisorChange = (index, field, value) => {
    const newSupervisors = [...supervisors];
    newSupervisors[index][field] = value;
    setSupervisors(newSupervisors);
  };

  return (
    <>
      <div className="flex flex-col items-center h-screen font-bold">
        <div className="flex bg-main w-full items-center justify-around py-4">
          <div>
            <img src={uniLogo} alt="" className="w-24 h-24" />
          </div>
          <div className="flex-1 text-center">
            <p className="text-lg md:text-3xl font-bold">
              جامعة بنهــــــــــــــا تسجيل النقطة البحثية
            </p>
          </div>
          <div>
            <img src={graduatedMenIcon} alt="" className="w-24 h-24" />
          </div>
        </div>
        <div className="container p-10 flex-1">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block">
                اختر الدرجة العلمية المراد التسجيل بيها:
              </label>
              <select
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Masters">ماجستير</option>
                <option value="PhD">دكتوراه</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block">عنوان الرسالة باللغة العربية:</label>
              <textarea
                value={topicArabic}
                onChange={(e) => setTopicArabic(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block">عنوان الرسالة باللغة الإنجليزية:</label>
              <textarea
                value={topicEnglish}
                onChange={(e) => setTopicEnglish(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block">قائمة الأساتذة المشرفين:</label>
              <table className="w-full mb-4">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-2">الاسم</th>
                    <th className="border border-gray-300 p-2">الرتبة</th>
                    <th className="border border-gray-300 p-2">القسم</th>
                  </tr>
                </thead>
                <tbody>
                  {supervisors.map((supervisor, index) => (
                    <tr key={index}>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="text"
                          value={supervisor.name}
                          onChange={(e) =>
                            handleSupervisorChange(
                              index,
                              'name',
                              e.target.value
                            )
                          }
                          className="w-full p-1 border border-gray-300 rounded-md"
                        />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="text"
                          value={supervisor.title}
                          onChange={(e) =>
                            handleSupervisorChange(
                              index,
                              'title',
                              e.target.value
                            )
                          }
                          className="w-full p-1 border border-gray-300 rounded-md"
                        />
                      </td>
                      <td className="border border-gray-300 p-2">
                        <input
                          type="text"
                          value={supervisor.department}
                          onChange={(e) =>
                            handleSupervisorChange(
                              index,
                              'department',
                              e.target.value
                            )
                          }
                          className="w-full p-1 border border-gray-300 rounded-md"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                type="button"
                onClick={addSupervisor}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                إضافة مشرف جديد
              </button>
            </div>
            <div className="mb-4">
              <label className="block">
                اسم المشرف الرئيسي/الشرط الأكاديمي:
              </label>
              <input
                type="text"
                value={supervisorName}
                onChange={(e) => setSupervisorName(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">الرتبة:</label>
              <input
                type="text"
                value={supervisorTitle}
                onChange={(e) => setSupervisorTitle(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block">التاريخ:</label>
              <input
                type="date"
                value={supervisorDate}
                onChange={(e) => setSupervisorDate(e.target.value)}
                className="block w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
              >
                إرسال الطلب
              </button>
            </div>
          </form>
          <p>الخطة البحثة الخاصة بالقسم</p>
          <div className="  flex items-center justify-center  ">
            {resUrl && (
              <embed
                src={`${URLImage}/${resUrl}`}
                alt="suc"
                className="w-full h-96     "
              />
            )}
          </div>
        </div>
        <div className="bg-main w-full px-2">
          <Copyrights />
        </div>
      </div>
    </>
  );
}

export default RecordPoint;
