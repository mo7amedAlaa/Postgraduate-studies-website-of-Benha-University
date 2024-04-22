import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoArrowBack, IoArrowForward, IoCaretBack } from 'react-icons/io5';
import { graduatedMenIcon, uniLogo, cx, ifoPdf } from '../../assets';
import { useState } from 'react';
import { LuAlertOctagon, LuDownloadCloud, LuUploadCloud } from 'react-icons/lu';
import Swal from 'sweetalert2';
import Copyrights from '../../component/Footer/copyrights';
const Step1 = () => (
  <div>
    <div className=" flex items-center mb-5 justify-center">
      <label htmlFor="" className="lableStyle w-1/4  mx-5  ">
        الكلية المراد التسجيل بها(*)
      </label>
      <select name="fact" className="inputStyle w-2/4  text-center" id="fact">
        <option value="الحاسبات والذكاء الاصطناعي ">
          {' '}
          الحاسبات والذكاء الاصطناعي{' '}
        </option>
        <option value="الهندسة"> الهندسة</option>
        <option value=" التربية الرياضية"> التربية الرياضية</option>
        <option value="التربية"> التربية</option>
        <option value="التمريض"> التمريض</option>
        <option value="تجارة"> تجارة</option>
        <option value="اداب"> اداب</option>
      </select>
    </div>
    <div>
      <fieldset className="border my-2 border-gray-600 p-3 ">
        <legend>اسم الطالب بالغة العربية</legend>

        <div className="inline-block  my-2">
          <label htmlFor="" className="lableStyle   mx-5 ">
            اسم الطالب
          </label>
          <input type="text" className="inputStyle " />
        </div>
        <div className="inline-block my-2">
          <label htmlFor="" className="lableStyle mx-5  ">
            اسم الاب
          </label>
          <input type="text" className="inputStyle " />
        </div>
        <div className="inline-block my-2">
          <label htmlFor="" className="lableStyle mx-5  ">
            اسم الجد
          </label>
          <input type="text" className="inputStyle " />
        </div>
        <div className="inline-block my-2">
          <label htmlFor="" className="lableStyle mx-5  ">
            اللقب
          </label>
          <input type="text" className="inputStyle" />
        </div>
        <div className="flex items-center  my-2">
          <label htmlFor="" className="lableStyle  mx-5">
            الاسم بالكامل(*)
          </label>
          <input type="text" className="inputStyle flex-grow  " />
        </div>
      </fieldset>
    </div>
    <div>
      <fieldset className="border my-2 border-gray-600 p-3 ">
        <legend>اسم الطالب بالغة الإنجليزية</legend>

        <div className="inline-block my-2">
          <label htmlFor="" className="lableStyle mx-5 ">
            اسم الطالب
          </label>
          <input type="text" className="inputStyle " />
        </div>
        <div className="inline-block my-2">
          <label htmlFor="" className="lableStyle mx-5  ">
            اسم الاب
          </label>
          <input type="text" className="inputStyle " />
        </div>
        <div className="inline-block my-2">
          <label htmlFor="" className="lableStyle mx-5  ">
            اسم الجد
          </label>
          <input type="text" className="inputStyle " />
        </div>
        <div className="inline-block my-2">
          <label htmlFor="" className="lableStyle mx-5  ">
            اللقب
          </label>
          <input type="text" className="inputStyle" />
        </div>
        <div className="flex items-center  my-2">
          <label htmlFor="" className="lableStyle  mx-5">
            الاسم بالكامل(*)
          </label>
          <input type="text" className="inputStyle flex-grow  " />
        </div>
      </fieldset>
    </div>
    <div>
      <div className="inline-block my-2">
        <label htmlFor="" className="lableStyle mx-5  ">
          البريد الالكتروني (*){' '}
        </label>
        <input
          type="email  "
          placeholder="example@gmail.com"
          className="inputStyle text-sm"
        />
      </div>
      <div className="inline-block my-2">
        <label htmlFor="" className="lableStyle mx-5  ">
          الجنسية
        </label>
        <select
          name="Nationality"
          className="inputStyle  text-center"
          id="Nationality"
        >
          <option value="مصري"> مصري </option>
          <option value="سعودي"> سعودي</option>
          <option value="اخري"> اخري</option>
        </select>
      </div>
      <div className="inline-block">
        <label htmlFor="IDNUM" className="lableStyle mx-5">
          الرقم القومي:
        </label>
        <input type="text" id="IDNUM" className="inputStyle" />
      </div>
      <div className=" inline-block pb-2">
        <label htmlFor="IDNUM" className="lableStyle mx-5">
          الديانة:
        </label>
        <select
          name="Religion"
          className="inputStyle  text-center"
          id="Religion"
        >
          <option value="مسلم"> مسلم </option>
          <option value="مسيحي"> مسيحي</option>
          <option value="اخري"> اخري</option>
        </select>
      </div>
      {/* <div className="inline-block my-2">
        <label htmlFor="GuardiaName" className="lableStyle mx-5  ">
          كلمة المرور (*){' '}
        </label>
        <input type="text" className="inputStyle" id="GuardiaName" />
      </div>
      <div className="inline-block my-2">
        <label htmlFor="GuardiaName" className="lableStyle mx-5  ">
          تأكيد كلمة المرور (*){' '}
        </label>
        <input type="text" className="inputStyle" id="GuardiaName" />
      </div> */}
      <div className="inline-block my-2">
        <label htmlFor="maritalStatus" className="lableStyle mx-5  ">
          الحالة الاجتماعية
        </label>
        <select
          name="maritalStatus"
          className="inputStyle  text-center"
          id="maritalStatus"
        >
          <option value="اعزب"> اعزب </option>
          <option value="متزوج"> متزوج</option>
          <option value="مطلق"> مطلق</option>
          <option value="اخري"> اخري</option>
        </select>
      </div>
      <div className="inline-block my-2">
        <label htmlFor="maritalStatus" className="lableStyle mx-5  ">
          النوع{' '}
        </label>
        <select
          name="maritalStatus"
          className="inputStyle  text-center"
          id="maritalStatus"
        >
          <option value="ذكر"> ذكر </option>
          <option value="انثي"> انثي</option>
        </select>
      </div>
      <div className="inline-block my-2">
        <label htmlFor="" className="lableStyle mx-5  ">
          وظيفة الطالب
        </label>
        <input type="text" className="inputStyle" id="GuardiaName" />
      </div>
      <div className="inline-block my-2">
        <label htmlFor="maritalStatus" className="lableStyle mx-5  ">
          المحمول (*){' '}
        </label>
        <input type="text" className="inputStyle" id="GuardiaName" />
      </div>
    </div>
  </div>
);

const Step2 = () => {
  const handleUpload = async () => {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        accept: 'image/*',
        'aria-label': 'Upload your profile picture',
      },
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: 'Your uploaded picture',
          imageUrl: e.target.result,
          imageAlt: 'The uploaded picture',
        });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <div>
        <p className="font-bold text-sm mt-3 flex items-center  ">
          <LuAlertOctagon className="mx-2" />
          برجاء استكمال البيانات التالية والتحقق من وضوحها وسلامتها لضمان وصولها
          بشكل صحيح .
        </p>
      </div>
      <div>
        <div className="flex gap-5  justify-between my-5">
          <h1 className="text-2xl ">1- الاوراق والملفات المطلوبة </h1>
          <div className="flex w-1/6 items-center  gap-10">
            <a
              href={ifoPdf}
              download="reqFile"
              className="main-btn flex-1 flex items-center justify-center"
            >
              تنزيل
              <LuDownloadCloud />
            </a>
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl">
            {' '}
            2- شهادة البكالوريوس(مؤقتة)العدد 1 اصل + صورة
          </h1>
          <div className="flex w-1/6 gap-10">
            <button
              className="main-btn flex-1 flex items-center justify-center gap-3"
              onClick={handleUpload}
            >
              رفع
              <LuUploadCloud />
            </button>
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl">
            {' '}
            3- شهادة تقديرات اربع سنوات دراسية العدد 1 اصل + صورة{' '}
          </h1>
          <div className="flex w-1/6 gap-10">
            <button
              className="main-btn flex flex-1 items-center justify-center gap-3"
              onClick={handleUpload}
            >
              رفع
              <LuUploadCloud />
            </button>
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl">
            {' '}
            4. شهادة الماجستير(بالنسبة للقيد لدرجة الدكتوراة) العدد 1 اصل + صورة{' '}
          </h1>
          <div className="flex w-1/6 gap-10">
            <button
              className="main-btn flex flex-1 items-center justify-center gap-3"
              onClick={handleUpload}
            >
              رفع
              <LuUploadCloud />
            </button>
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl"> 5- شهادة الميلاد + صورة منها</h1>
          <div className="flex w-1/6 gap-10">
            <button
              className="main-btn flex flex-1 items-center justify-center gap-3"
              onClick={handleUpload}
            >
              رفع
              <LuUploadCloud />
            </button>
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl">6- صورة البطاقة الشخصية </h1>
          <div className="flex w-1/6 gap-10">
            <button
              className="main-btn flex flex-1 items-center justify-center gap-3"
              onClick={handleUpload}
            >
              رفع
              <LuUploadCloud />
            </button>
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl">7- الموقف التجنيدي للذكور + صورة منه </h1>
          <div className="flex w-1/6 gap-10">
            <button
              className="main-btn flex flex-1 items-center justify-center gap-3"
              onClick={handleUpload}
            >
              رفع
              <LuUploadCloud />
            </button>
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl ">8- موافقة جهة العمل + صورة منها </h1>
          <div className="flex w-1/6 gap-10">
            <button
              className="main-btn flex flex-1  items-center justify-center gap-3"
              onClick={handleUpload}
            >
              رفع
              <LuUploadCloud />
            </button>
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl">9- عدد 4 صورة شخصية 4*6</h1>
          <div className="flex w-1/6 gap-10">
            <button
              className="main-btn flex flex-1 items-center justify-center gap-3"
              onClick={handleUpload}
            >
              رفع
              <LuUploadCloud />
            </button>
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl">
            {' '}
            10- طلب قيد باسم الاستاذ الدكتور\وكيل الكلية للدراسات العليا والبحوث
          </h1>
          <div className="flex w-1/6 gap-1">
            <a
              href={cx}
              download="طلب قيد"
              className="main-btn flex-1 flex items-center justify-center gap-3"
            >
              تنزيل
              <LuDownloadCloud />
            </a>
            <button
              className="main-btn flex flex-1 items-center justify-center gap-3"
              onClick={handleUpload}
            >
              رفع
              <LuUploadCloud />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RegistrationToApply() {
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefult();
  };

  return (
    <div className=" bg-slate-100     min-h-screen">
      <div className="flex   bg-main mx-auto items-center justify-around">
        <div>
          <img src={uniLogo} alt="" width={'100px'} height={'100px'} />
        </div>
        <div className="flex-1 text-center">
          <p className=" text-lg md:text-3xl   font-bold ">
            جامعة بنهــــــــــــــا <br />
            التسجيل للتقدم للدراسات العليا
          </p>
        </div>
        <div>
          <img src={graduatedMenIcon} alt="" width={'100px'} height={'100px'} />
        </div>
      </div>
      <div className="flex items-center  container   min-w-3/4  py-5 justify-center   ">
        <div className="bg-white p-0 md:p-6  rounded-lg shadow-md  m-12">
          <h2 className="font-medium mb-4">خطوة {step} من 2</h2>
          <div className="flex mb-4">
            <div
              className={`w-1/2 border-r border-gray-400 ${
                step === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
              } p-2 text-center cursor-pointer`}
              onClick={() => setStep(1)}
            >
              الخطوة 1
            </div>
            <div
              className={`w-1/2 ${
                step === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'
              } p-2 text-center cursor-pointer`}
              onClick={() => setStep(2)}
            >
              الخطوة 2
            </div>
          </div>
          <form action="">
            <div className=" border rounded-md p-5  ">
              {step === 1 ? <Step1 /> : <Step2 />}
            </div>

            <div className="flex justify-between mt-6">
              {step == 2 && (
                <input
                  type="submit"
                  value={'حفظ'}
                  className="main-btn"
                  onClick={handleSubmit}
                />
              )}
              {step > 1 && (
                <button
                  className="bg-gray-300 flex items-center justify-center px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400"
                  onClick={handleBack}
                >
                  السابق
                  <IoArrowBack />
                </button>
              )}
              {step < 2 && (
                <button
                  className="main-btn flex gap-1 items-center justify-center"
                  onClick={handleNext}
                >
                  <IoArrowForward />
                  التالي
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
      <div className="bg-main  px-2  ">
        <Copyrights />
      </div>
    </div>
  );
}
