import { Checkbox } from '@mui/material';
import MainLayout from '../../component/Main/MainLayout';
import { useState } from 'react';

function StudentStuts() {
  const [deg, setDeg] = useState();
  return (
    <MainLayout title={'تقرير بمتابعة الطالب كل ست شهور'}>
      <form action="" className="  tracking-wider      p-5 rounded-md">
        <div className="my-3">
          <label htmlFor="welcome" className="me-5">
            السيد الأستاذ الدكتور/ رئيس قسم
          </label>
          <select id="welcome" className="px-2 text-center  bg-withe  ">
            <option value="is">IS</option>
            <option value="ai">AI</option>
            <option value="cs">CS</option>
            <option value="sc">SC</option>
          </select>
          <p> تحية طيبة وبعد،، </p>
        </div>
        <div className="my-3">
          <span>مرفق لسيادكم تقرير بمتابعة حالة الطالب المسجل لدرجة </span>
          <Checkbox value={'  ماجستير '} id="studytype" name="master" />
          <label htmlFor="Studytype">ماجستير </label>
          <Checkbox value={' الدكتوراة '} id="studytype" name="doctor" />
          <label htmlFor="Studytype">الدكتوراة </label>
        </div>
        <div className="my-3">
          <label htmlFor="name" className="me-2 ">
            للطالب
          </label>
          <input type="text" id="name" className="px-2 w-[80%] " />
        </div>
        <div className="flex gap-5   ">
          <span>ذلك اثناء الفترة</span>

          <span> اعتبارامن/</span>
          <input type="date" />
          <span>حتي/</span>
          <input type="date" />
        </div>
        <div className="flex items-center justify-start my-5 gap-5">
          <label htmlFor="degree">
            النسبة المئوية التي تعبر عن حالة الطالب
          </label>

          <input
            type="range"
            className="w-[50%]"
            onChange={(e) => setDeg(e.target.value)}
            value={deg}
          />
          <span className="text-xl">{deg}%</span>
        </div>
        <p className="my-5">
          .وذلك بناء على التقرير المرفق والموقع من جميع السادةالمشرفين
        </p>
        <p className="text-center">وتفضلوا بقبول وافر الشكر والتقدير،،،</p>
        <div className="flex mt-10 flex-col gap-3 justify-center text-center items-end     ">
          <p> المشرف الرئيسى /المرشد الأكاديمى :</p>
          <div>
            <label htmlFor="namej">الاسم :</label>
            <input type="text" id="namej" />
          </div>
          <div>
            <label htmlFor="ku"> التوقيع:</label>
            <input type="text" id="ku" />
          </div>
          <div>
            <label htmlFor="datej">التاريخ :</label>
            <input type="date" id="datej" />
          </div>
        </div>
      </form>
    </MainLayout>
  );
}

export default StudentStuts;
