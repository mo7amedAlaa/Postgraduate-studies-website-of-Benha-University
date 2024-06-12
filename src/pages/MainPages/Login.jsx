import { useState } from 'react';
import { facLogo, uniLogo } from '../../assets';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({});
  const [loginDone, setloginDone] = useState(true);
  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <section className="h-screen flex flex-col   md:flex-row md:justify-center  space-y-10  md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <div className="md:w-1/3 max-w-  hidden        md:block">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample image"
        />
      </div>
      <div className="md:w-1/3 max-w-sm">
        <div className="text-center flex items-center gap-1 justify-center ">
          <label className="mr-1">{t('Banha university')}</label>
          <button
            type="button"
            className="mx-1 h-7 w-7 p-1  rounded-full bg-main hover:bg-cyan-400   text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <img
              src={uniLogo}
              alt="bfcai Image"
              className="flex justify-center items-center h-full  w-full"
            />
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-7 w-7  p-1 rounded-full bg-main hover:bg-cyan-400 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <img
              src={facLogo}
              alt=""
              className="flex justify-center items-center h-full w-full"
            />
          </button>
        </div>
        <div className="my-5 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">
            تسجيل دخول الدراسات العليا
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 ">
          <select
            name="type"
            id="type"
            className="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option value="" selected disabled hidden>
              اختر نوع
            </option>
            <option value="Student">طالب</option>
            <option value="Employee">موظف</option>
            <option value="Doctor">دكتور</option>
            <option value="DepartmentHead">رئيس قسم</option>
            <option value="CollegeViceDean">وكيل الكلية</option>
            <option value="Admin">ادمن</option>
          </select>

          <input
            className="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            type="text"
            placeholder="عنوان البريد الإلكتروني"
            name="email"
            onChange={handleChange}
          />
          <input
            className="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="password"
            placeholder="كلمة المرور"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="m-1" type="checkbox" />
            <span>تذكرنى</span>
          </label>
          <Link
            className=" text-main hover:text-cyan-400 hover:underline hover:underline-offset-4"
            to="/restpassword"
          >
            هل نسيت كلمة السر؟
          </Link>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4  bg-main hover:bg-cyan-400 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
            onClick={handleSubmit}
          >
            تسجيل الدخول
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          ليس لديك حساب كطالب ؟
          <Link
            className="text-red-600 hover:underline hover:underline-offset-4 m-2"
            to="/registration"
          >
            تسجيل
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
