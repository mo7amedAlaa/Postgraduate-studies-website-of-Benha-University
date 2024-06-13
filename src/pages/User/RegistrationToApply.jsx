import { graduatedMenIcon, uniLogo, cx, ifoPdf } from '../../assets';
import Copyrights from '../../component/Footer/copyrights';
import { useEffect, useState } from 'react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { LuAlertOctagon, LuDownloadCloud, LuUploadCloud } from 'react-icons/lu';
import Swal from 'sweetalert2';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UseApiRequest } from '../../Hooks/RestApi';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { registering } from '../../Redux/Slices/userSlice';
import axios from 'axios';

export default function RegistrationToApply() {
  const dispatch = useDispatch();
  const registered = useSelector((state) => state.user.reged);
  const accpeted = useSelector((state) => state.user.accpeted);
  const loged = useSelector((state) => state.user.loged);
  const [t] = useTranslation();
  const [step, setStep] = useState(1);

  const [registerDone, setRegisterDone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    english_name: '',
    nationality: '',
    region: '',
    job: '',
    age: '',
    SSN: '',
    phone: '',
    address: '',
    department_id: '',
    gender: '',
    marital_status: '',
    email: '',
    type: '',
    enrollment_papers: [],
    original_bachelors_degree: [],
  });
  const handleNext = () => {
    setStep(step + 1);
  };
  const handleBack = () => {
    setStep(step - 1);
  };
  const stepChange = () => {
    switch (step) {
      case 1:
        return Step1;
      case 2:
        return Step2;
      case 3:
        return Step3;
      default:
        return Step1;
    }
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleFileChange = (event) => {
    const { name, files } = event.target;
    console.log(files);
    setFormData({
      ...formData,
      enrollment_papers: [...formData.enrollment_papers, files[0]],
    });
  };
  const handleCustomFileChange = (event) => {
    const { name, files } = event.target;
    console.log(files);
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Check if all required fields are filled
    // if (
    //   Object.values(formData).some(
    //     (value) => value === '' || (Array.isArray(value) && value.length === 0)
    //   )
    // ) {
    //   Swal.fire('Error', 'All fields are required', 'error');
    //   return;
    // }

    // Convert files to base64 to include them in JSON payload
    const convertFilesToBase64 = async (files) => {
      return Promise.all(
        files.map((file) => {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
          });
        })
      );
    };

    try {
      // const enrollmentPapersBase64 = await convertFilesToBase64(
      //   formData.enrollment_papers
      // );
      // const bachelorsDegreeBase64 = await convertFilesToBase64(
      //   formData.original_bachelors_degree
      // );

      // const jsonPayload = {
      //   ...formData,
      //   enrollment_papers: enrollmentPapersBase64,
      //   original_bachelors_degree: bachelorsDegreeBase64,
      // };

      console.log(formData);
      await axios.post('/auth/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      Swal.fire('Success', 'Data uploaded successfully!', 'success');
    } catch (error) {
      Swal.fire('Error', 'Failed to upload data', 'error');
    }
  };

  const Step1 = (
    <div className="min-h-full w-full ">
      <div>
        <fieldset className="border my-2 border-gray-600 p-3 ">
          <legend>اسم الطالب بالغة العربية</legend>
          <div className="inline-block  my-2">
            <label htmlFor="firstName" className="lableStyle   mx-5 ">
              اسم الطالب
            </label>
            <input type="text" className="inputStyle" id="firstName" />
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
            <input
              type="text"
              className="inputStyle flex-grow  "
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
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
            <input type="text" className="inputStyle" />
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
            <input
              type="text"
              className="inputStyle flex-grow  "
              name="english_name"
              value={formData.english_name}
              onChange={handleInputChange}
            />
          </div>
        </fieldset>
      </div>
      <div>
        <div className="inline-block my-2">
          <label htmlFor="" className="lableStyle mx-5  ">
            البريد الالكتروني (*){' '}
          </label>
          <input
            type="email"
            placeholder="example@gmail.com"
            className="inputStyle text-sm"
            name="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="inline-block my-2">
          <label htmlFor="department_id" className="lableStyle mx-5 w-fit ">
            القسم المراد التسجيل فيه:(*)
          </label>
          <select
            name="department_id"
            className="inputStyle  text-center"
            id="department_id"
            onChange={handleInputChange}
          >
            <option value="1">IS</option>
            <option value="2">AI</option>
            <option value="3">CS</option>
            <option value="4">SC</option>
          </select>
        </div>
        <div className="inline-block my-2">
          <label htmlFor="" className="lableStyle mx-5  ">
            الجنسية:(*)
          </label>
          <select
            name="nationality"
            className="inputStyle  text-center"
            id="Nationality"
            onChange={handleInputChange}
          >
            <option value="مصري"> مصري </option>
            <option value="سعودي"> سعودي</option>
            <option value="اخري"> اخري</option>
          </select>
        </div>

        <div className="inline-block">
          <label htmlFor="IDNUM" className="lableStyle mx-5">
            الرقم القومي:(*)
          </label>
          <input
            type="text"
            id="IDNUM"
            className="inputStyle"
            name="SSN"
            onChange={handleInputChange}
          />
        </div>
        <div className=" inline-block pb-2">
          <label htmlFor="IDNUM" className="lableStyle mx-5">
            الديانة:
          </label>
          <select
            name="religion"
            className="inputStyle  text-center"
            id="Religion"
            onChange={handleInputChange}
          >
            <option value="مسلم"> مسلم </option>
            <option value="مسيحي"> مسيحي</option>
            <option value="اخري"> اخري</option>
          </select>
        </div>

        <div className="inline-block my-2">
          <label htmlFor="maritalStatus" className="lableStyle mx-5  ">
            الحالة الاجتماعية
          </label>
          <select
            name="marital_status"
            className="inputStyle  text-center"
            id="maritalStatus"
            onChange={handleInputChange}
          >
            <option value="اعزب"> اعزب </option>
            <option value="متزوج"> متزوج</option>
            <option value="مطلق"> مطلق</option>
            <option value="اخري"> اخري</option>
          </select>
        </div>
        <div className="inline-block my-2">
          <label htmlFor="gender" className="lableStyle mx-5  ">
            النوع
          </label>
          <select
            name="gender"
            className="inputStyle  text-center"
            id="gender"
            onChange={handleInputChange}
          >
            <option value="ذكر"> ذكر </option>
            <option value="انثي"> انثي</option>
          </select>
        </div>
        <div className="inline-block my-2">
          <label htmlFor="gender" className="lableStyle mx-5  ">
            معيد/غير ذلك
          </label>
          <select
            name="type"
            className="inputStyle  text-center"
            id="type"
            onChange={handleInputChange}
          >
            <option value="moed"> معيد </option>
            <option value="external"> خارجي</option>
          </select>
        </div>
        <div className="inline-block my-2">
          <label htmlFor="job" className="lableStyle mx-5  ">
            وظيفة الطالب
          </label>
          <input
            type="text"
            className="inputStyle"
            id="job"
            name="job"
            onChange={handleInputChange}
          />
        </div>
        <div className="inline-block my-2">
          <label htmlFor="address" className="lableStyle mx-5  ">
            العنوان (*)
          </label>
          <input
            type="text"
            className="inputStyle"
            id="address"
            name="address"
            onChange={handleInputChange}
          />
        </div>
        <div className="inline-block my-2">
          <label htmlFor="age" className="lableStyle mx-5  ">
            االعمر
          </label>
          <input
            type="number"
            className="inputStyle"
            id="age"
            name="age"
            onChange={handleInputChange}
          />
        </div>
        <div className="inline-block my-2">
          <label htmlFor="maritalStatus" className="lableStyle mx-5  ">
            المحمول (*){' '}
          </label>
          <input
            type="tel"
            className="inputStyle"
            id="GuardiaName"
            name="phone"
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button
          className="main-btn flex gap-1 items-center justify-center"
          onClick={handleNext}
        >
          <IoArrowForward />
          التالي
        </button>
      </div>
    </div>
  );
  const Step2 = (
    <div className="min-h-full w-full ">
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
            <label
              className="main-btn flex flex-1 items-center justify-center gap-3"
              htmlFor="bachelors_degree"
            >
              رفع
              <LuUploadCloud />
            </label>
            <input
              type="file"
              id="bachelors_degree"
              className="hidden"
              name="bachelors_degree"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl">
            {' '}
            3- شهادة تقديرات اربع سنوات دراسية العدد 1 اصل + صورة{' '}
          </h1>
          <div className="flex w-1/6 gap-10">
            <label
              className="main-btn flex flex-1 items-center justify-center gap-3"
              htmlFor="four_years_grades"
            >
              رفع
              <LuUploadCloud />
            </label>
            <input
              type="file"
              id="four_years_grades"
              className="hidden"
              name="four_years_grades"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl">
            {' '}
            4. شهادة الماجستير(بالنسبة للقيد لدرجة الدكتوراة) العدد 1 اصل + صورة{' '}
          </h1>
          <div className="flex w-1/6 gap-10">
            <label
              className="main-btn flex flex-1 items-center justify-center gap-3"
              htmlFor="original_bachelors_degree"
            >
              رفع
              <LuUploadCloud />
            </label>
            <input
              type="file"
              id="original_bachelors_degree"
              className="hidden"
              name="original_bachelors_degree"
              onChange={handleCustomFileChange}
            />
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl"> 5- شهادة الميلاد + صورة منها</h1>
          <div className="flex w-1/6 gap-10">
            <label
              className="main-btn flex flex-1 items-center justify-center gap-3"
              htmlFor="BirthCertificate"
            >
              رفع
              <LuUploadCloud />
            </label>
            <input
              type="file"
              id="BirthCertificate"
              className="hidden"
              name="BirthCertificate"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl">6- صورة البطاقة الشخصية </h1>
          <div className="flex w-1/6 gap-10">
            <label
              className="main-btn flex flex-1 items-center justify-center gap-3"
              htmlFor="IDCardCopy"
            >
              رفع
              <LuUploadCloud />
            </label>
            <input
              type="file"
              id="IDCardCopy"
              className="hidden"
              name="IDCardCopy"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl">7- الموقف التجنيدي للذكور + صورة منه </h1>
          <div className="flex w-1/6 gap-10">
            <label
              className="main-btn flex flex-1 items-center justify-center gap-3"
              htmlFor="RecruitmentPosition"
            >
              رفع
              <LuUploadCloud />
            </label>
            <input
              type="file"
              id="RecruitmentPosition"
              className="hidden"
              name="RecruitmentPosition"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl ">8- موافقة جهة العمل + صورة منها </h1>
          <div className="flex w-1/6 gap-10">
            <label
              className="main-btn flex flex-1 items-center justify-center gap-3"
              htmlFor="EmployerApproval"
            >
              رفع
              <LuUploadCloud />
            </label>
            <input
              type="file"
              id="EmployerApproval"
              className="hidden"
              name="EmployerApproval"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="flex gap-5 my-5  justify-between ">
          <h1 className="text-2xl">9- عدد 4 صورة شخصية 4*6</h1>
          <div className="flex w-1/6 gap-10">
            <label
              className="main-btn flex flex-1 items-center justify-center gap-3"
              htmlFor="Photograph"
            >
              رفع
              <LuUploadCloud />
            </label>
            <input
              type="file"
              id="Photograph"
              className="hidden "
              name="Photograph"
              onChange={handleFileChange}
            />
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
            <label
              className="main-btn flex flex-1 items-center justify-center gap-3"
              htmlFor="superAccpet"
            >
              رفع
              <LuUploadCloud />
            </label>
            <input
              type="file"
              id="superAccpet"
              className="hidden "
              name="superAccpet"
              onChange={handleFileChange}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button
          className="main-btn flex gap-1 items-center justify-center"
          onClick={handleNext}
        >
          <IoArrowForward />
          التالي
        </button>
        <button
          className="bg-gray-300 flex items-center justify-center px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400"
          onClick={handleBack}
        >
          السابق
          <IoArrowBack />
        </button>
      </div>
    </div>
  );
  const Step3 = (
    <div className="min-h-full w-full ">
      <div>
        <p className="text-xl tracking-wider my-5 ">الاقرارات المطلوبة</p>
        <div className=" p-5 my-3">
          <input type="checkbox" className="mx-5  " id="e1" />
          <label htmlFor="e1" className="font-semibold  ">
            اقر انا الطالب المتقدم للدرسة بالدرسات العليا بكلية الحاسبات والذكاء
            الاصطناعي جامعة بنها(ماجيستير/ دكتوراه) بانني لا اعمل بالقطاع
            الحكومي ولا قطاع الاعمال وهذا اقرار مني بذلك.
          </label>
        </div>
      </div>

      <div className="flex justify-between mt-6">
        <input
          type="submit"
          value={'حفظ'}
          className="main-btn"
          onClick={handleSubmit}
        />

        <button
          className="bg-gray-300 flex items-center justify-center px-6 py-1.5 rounded-lg text-gray-700 hover:bg-gray-400"
          onClick={handleBack}
        >
          السابق
          <IoArrowBack />
        </button>
      </div>
    </div>
  );

  return (
    <>
      <div className=" flex   flex-col bg-slate-100 items-center   min-h-screen">
        <ToastContainer />
        <div className="flex    w-full bg-main   items-center justify-around">
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
            <img
              src={graduatedMenIcon}
              alt=""
              width={'100px'}
              height={'100px'}
            />
          </div>
        </div>
        <div className="flex flex-1 items-center   container   min-w-3/4  py-5 justify-center   ">
          <div className="bg-white p-0 md:p-6   w-[90%]  rounded-lg shadow-md  ">
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
              <div
                className={`w-1/2 ${
                  step === 3 ? 'bg-blue-500 text-white' : 'bg-gray-200'
                } p-2 text-center cursor-pointer`}
                onClick={() => setStep(3)}
              >
                الخطوة 3
              </div>
            </div>
            <form action="" autoComplete="true">
              <div className=" border  h-full      rounded-md p-5  ">
                {stepChange()}
              </div>
            </form>
          </div>
        </div>
        <div className="bg-main  w-full px-2  ">
          <Copyrights />
        </div>
      </div>
    </>
  );
}
