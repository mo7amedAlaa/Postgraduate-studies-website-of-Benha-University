import { graduatedMenIcon, uniLogo } from '../../assets';
import Copyrights from '../../component/Footer/Copyrights';
import { Checkbox } from '@mui/material';

function RecordPoint() {
  return (
    <>
      <div className="flex flex-col  h-screen font-bold">
        <div className="flex  bg-main   items-center justify-around">
          <div>
            <img src={uniLogo} alt="" width={'100px'} height={'100px'} />
          </div>
          <div className="flex-1 text-center">
            <p className=" text-lg md:text-3xl   font-bold ">
              جامعة بنهــــــــــــــا تسجيل النقطة البحثية
            </p>
          </div>
          <div>
            <img
              src={graduatedMenIcon}
              alt=""
              width={'100px'}
              height={'100px'}
            />
          </div>
        </div>
        <div className="container p-5  flex-1  ">
          <form
            action=""
            className="border bg-gray-100 tracking-wider h-full  p-5 rounded-md"
          >
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
              <span>
                أرجو من سيادتكم التكرم بالموافقة علي مد التسجيل لرسالة
              </span>
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
              .وذلك بناء على التقرير السنوي المرفق والموقع من جميع
              السادةالمشرفين
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
        </div>
        <div className="bg-main  px-2  ">
          <Copyrights />
        </div>
      </div>
    </>
  );
}

export default RecordPoint;
