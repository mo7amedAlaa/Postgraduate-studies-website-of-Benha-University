import { useState } from 'react';
import { facLogo, uniLogo } from '../../assets';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SetUserInfo, loging } from '../../Redux/Slices/userStatusSlice';
import { ClipLoader } from 'react-spinners';
import { URLng } from '../../API/constant';
import Swal from 'sweetalert2';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import { setStudentNotifaction } from '../../Redux/Slices/notificationsSlice';

const Login = () => {
  const { t } = useTranslation();
  const [userType, setUserType] = useState('student');
  const [account, setAccount] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    const loginData =
      userType === 'student' ? { account, password } : { email, password };
    // Basic validation
    if (
      (userType === 'student' && !account) ||
      (userType !== 'student' && !email) ||
      !password
    ) {
      toast.error('Validation Error, All fields are required.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
      });

      return;
    }
    // Email format validation (for  user types)
    // if (
    //   (userType !== 'student' &&
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) ||
    //   (userType === 'student' &&
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(account))
    // ) {
    //   toast.error('Please enter a valid email/account address.', {
    //     position: 'top-right',
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: 'light',
    //     transition: Bounce,
    //   });
    //   return;
    // }
    try {
      setLoading(true);
      const response = await axios.post(
        `${URLng}/auth/loginall/${userType}`,
        loginData
      );
      console.log(response.data);
      setLoading(false);
      dispatch(loging(true));
      dispatch(SetUserInfo(response.data));
      // route after login
      switch (response.data.user_data.login_type) {
        case 'student':
          navigate('/');
          break;
        case 'admin':
          navigate('/admin');
          break;
        case 'collegeDean':
          navigate('/CollegeVice');
          break;
        case 'prof':
          navigate('/professor');
          break;
        case 'employee':
          navigate('/employee');
          break;
        case 'heads':
          navigate('/headofdepartment');
          break;
        default:
          navigate('/');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: 'Server not response',
      });
      dispatch(setStudentNotifaction({ message: 'fgghtty', type: 'error' }));

      console.error('Error during login:', error);
      dispatch(SetUserInfo(''));
      setLoading(false);
    }
  };

  return (
    <section className="h-screen flex flex-col md:flex-row md:justify-center space-y-10 md:space-y-0 md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0">
      <ToastContainer />
      <div className="md:w-1/3 max-w- hidden md:block">
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
            className="mx-1 h-7 w-7 p-1 rounded-full bg-main hover:bg-cyan-400 text-white shadow-[0_4px_9px_-4px_#3b71ca]"
          >
            <img
              src={uniLogo}
              alt="bfcai Image"
              className="flex justify-center items-center h-full w-full"
            />
          </button>
          <button
            type="button"
            className="inlne-block mx-1 h-7 w-7 p-1 rounded-full bg-main hover:bg-cyan-400 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca]"
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
        <div className="flex flex-col items-center justify-center gap-3">
          <select
            name="type"
            id="type"
            className="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            onChange={(e) => setUserType(e.target.value)}
          >
            <option selected disabled hidden>
              اختر نوع
            </option>
            <option value="student">طالب</option>
            <option value="employee">موظف</option>
            <option value="prof">دكتور</option>
            <option value="head">رئيس قسم</option>
            <option value="vice_dean">وكيل الكلية</option>
            <option value="admin">ادمن</option>
          </select>
          {userType === 'student' ? (
            <input
              className="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="email"
              placeholder="عنوان البريد الإلكتروني"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />
          ) : (
            <input
              className="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              type="text"
              placeholder="عنوان البريد الإلكتروني"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          )}
          <input
            className="bg-white border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            type="password"
            required
            placeholder="كلمة المرور"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="m-1" type="checkbox" />
            <span>تذكرنى</span>
          </label>
          <Link
            className="text-main hover:text-cyan-400 hover:underline hover:underline-offset-4"
            to="/restpassword"
          >
            هل نسيت كلمة السر؟
          </Link>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-main hover:bg-cyan-400 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            onClick={handleLogin}
            disabled={loading}
          >
            {loading ? (
              <ClipLoader size={20} color={'#123abc'} loading={loading} />
            ) : (
              'تسجيل الدخول'
            )}
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
