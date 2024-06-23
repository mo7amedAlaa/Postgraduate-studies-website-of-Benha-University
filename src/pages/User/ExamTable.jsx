import { useEffect, useState } from 'react';
import { graduatedMenIcon, uniLogo } from '../../assets';
import Copyrights from '../../component/Footer/Copyrights';
import axios from 'axios';
import { URLImage, URLng } from '../../API/constant';

function ExamTable() {
  const [schedules, setSchedules] = useState();
  useEffect(() => {
    async function fetchTable() {
      const res = await axios.post(`${URLng}/schedules`);
      console.log(res.data);
      setSchedules(res.data);
    }
    fetchTable();
    console.log('Clicked');
  }, []);

  return (
    <div className="bg-slate-100 flex flex-col min-h-screen font-sans">
      <div className="flex bg-main items-center justify-around">
        <div>
          <img src={uniLogo} alt="" width={'100px'} height={'100px'} />
        </div>
        <div className="flex-1 text-center">
          <p className="text-lg md:text-3xl font-bold">
            جامعة بنهــــــــــــــا <br />
            رؤية جدول الامتحانات
          </p>
        </div>
        <div>
          <img src={graduatedMenIcon} alt="" width={'100px'} height={'100px'} />
        </div>
      </div>
      <div className="p-6 md:p-10 container flex-1 mx-auto">
        <h1 className="text-2xl md:text-4xl tracking-wider font-bold mb-6 text-center text-gray-800">
          جداول الدراسات العليا
        </h1>
        <div>
          <h2 className="my-5 font-bold text-xl text-gray-700 border-b-2 border-blue-500 pb-2">
            جداول الدراسات العليا 2024-2023
          </h2>
          <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {schedules &&
              schedules
                .filter((schedule) => schedule.type === 'exam')
                .map((schedule, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center transition transform hover:-translate-y-1 hover:shadow-2xl border border-gray-200 hover:border-blue-500"
                  >
                    <embed
                      src={`${URLImage}/${schedule.content}`}
                      type="application/pdf"
                      className="w-full h-48 md:h-64 lg:h-80 mb-4"
                    />
                    <div className="text-center">
                      <p className="text-gray-700 text-md font-bold mb-2">
                        نشرت يوم : {schedule.created_at.slice(0, 10)}
                      </p>
                      <span className="inline-block bg-gray-200 rounded-md px-4 py-2 text-md font-semibold text-gray-700">
                        الجدول المعتمد من ادارة كلية الحاسبات والذكاء الاصطناعى
                        جامعة بنها
                      </span>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </div>
      <div className="bg-main px-2">
        <Copyrights />
      </div>
    </div>
  );
}

export default ExamTable;
