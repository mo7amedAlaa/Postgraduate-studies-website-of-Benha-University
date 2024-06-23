import Copyrights from '../../component/Footer/Copyrights';
import { ExamTables, Laypdf, StudyTables, graduatedMenIcon, uniLogo } from '../../assets';
import axios from 'axios';
import { URLImage, URLng } from '../../API/constant';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

function StudyTable() {
  const [schedules, setSchedules] = useState();
  const userToken = useSelector((state) => state.user.UserInfo?.token);

  useEffect(() => {
    async function fetchTable() {
      const res = await axios.post(`${URLng}/schedules`);
      console.log(res.data);
      setSchedules(res.data);
      console.log(userToken)
    }
    fetchTable();
    console.log("Clicked");
    
  }, []);
  return (
    <div className="bg-slate-100 flex flex-col min-h-screen">
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
    <div className="p-10 container flex-1 mx-auto">
      <h1 className="text-3xl tracking-wider font-bold">
     
        
        جداول الدراسات العليا
      </h1>
      <div>
        <div className="my-5">
       
          <h2 className="my-5 font-bold text-lg">جداول الدراسات العليا 2024-2023</h2>
          <div className="my-5">
            {schedules &&
              schedules
                .filter((schedule) => schedule.type === "study")
                .map((schedule, index) => (
                  <div key={index} className="my-4 bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
                  <a
                    href={`${URLImage}/${schedule.content}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block "
                  >
                    
                    <img
                      className="w-4/6 mx-auto"
                      src={`${URLImage}/${schedule.content}`}
                      alt="Study Image"
                    />
                  </a>
                
                  <div className="text-center">
                    <p className="text-gray-700 text-lg font-bold">
                      نشرت يوم  : {schedule.created_at.slice(0, 10)}
                    </p>
                    <span className="inline-block bg-gray-200 rounded-md px-3 py-3 text-lg font-semibold text-gray-700 mt-2">
                      الجدول المعتمد من ادارة كلية الحاسبات والذكاء الاصطناعى جامعة بنها
                    </span>
                  </div>
                </div>
                
                ))}
          </div>
        </div>
      </div>
    </div>
    <div className="bg-main px-2">
      <Copyrights />
    </div>
  </div>
  

  );
}

export default StudyTable;
