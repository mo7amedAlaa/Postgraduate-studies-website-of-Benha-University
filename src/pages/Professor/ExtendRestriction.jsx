import MainLayout from '../../component/Main/MainLayout';
import { Checkbox } from '@mui/material';

function ExtendRestriction() {
  return (
    <MainLayout title={'طلب مد الفيد'}>
      <form action="" className="  tracking-wider      p-5 rounded-md">
        <div className="my-3">
          <label htmlFor="welcome" className="me-5">
            السيد الأستاذ الدكتور/ رئيس قسم
          </label>
          <select id="welcome" className="px-2 text-center  bg-withe  ">
            <option value="1">IS</option>
            <option value="2">AI</option>
            <option value="3">CS</option>
            <option value="4">SC</option>
          </select>
          <p> تحية طيبة وبعد،، </p>
        </div>
        <div className="my-3">
          <span>أرجو من سيادتكم التكرم بالموافقة علي مد التسجيل لرسالة</span>
          <Checkbox value={'  ماجستير '} id="studytype" name="master" />
          <label htmlFor="Studytype">ماجستير </label>
          <Checkbox value={' الدكتوراة '} id="studytype" name="doctor" />
          <label htmlFor="Studytype">الدكتوراة </label>
        </div>
        <div className="my-3">
          <label htmlFor="name" className="me-2 ">
            للطالب
          </label>
          <input type="text" id="name" className="px-2" />
        </div>
        <div className="flex gap-5   ">
          <span>وذلك لمدة/</span>
          <input type="text" />
          <span> اعتبارامن/</span>
          <input type="date" />
          <span>حتي/</span>
          <input type="date" />
        </div>
        <p className="my-5">
          .وذلك بناء على التقرير السنوي المرفق والموقع من جميع السادةالمشرفين
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

export default ExtendRestriction;
