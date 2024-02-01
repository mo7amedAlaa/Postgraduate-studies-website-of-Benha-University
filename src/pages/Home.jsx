import Navbar from '../component/NavBar/Navbar';
import LogoUniversity from '../assets/images/شعار_جامعة_بنها.png';
import { TfiEmail } from 'react-icons/tfi';
import { MdOutlinePhoneEnabled } from 'react-icons/md';
function Home() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 justify-center items-center gap-4 p-1 font-sans   ">
        <div className=" text-center flex justify-center items-center gap-5">
          <MdOutlinePhoneEnabled size={43} />
          <div className=" ">
            <h2 className="text-md text-start font-semibold		">تواصل معنا</h2>
            <p className="text-gray-400">اترك لنا رسالة لنتواصل معك</p>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <img
            src={LogoUniversity}
            className=""
            style={{ width: '170px' }}
            alt="شعار الجامعة"
          />
        </div>
        <div className=" text-center flex justify-center items-center gap-6 ">
          <TfiEmail size={43} />
          <div className=" ">
            <h2 className="text-md text-start font-semibold		">تواصل معنا</h2>
            <p className="text-gray-400">اترك لنا رسالة لنتواصل معك</p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#51ACD0] to-[#5dc6f0] mt-3 flex justify-center items-center flex-wrap gap-[6rem] p-3 font-sans">
        <div className="">
          <i className="fas fa-book-reader  rounded-md p-1 ml-2"></i>
          الطلاب
        </div>
        <div>
          <i className="fa fa-users  rounded-md p-1 ml-2"></i>هيئة التدريس{' '}
        </div>
        <div>
          الدراسات العليا{' '}
          <i className="fas fa-user-graduate  rounded-md p-1 ml-2"></i>{' '}
        </div>
        <div>
          الخريجين{' '}
          <i className="fas fa-graduation-cap  rounded-md p-1 ml-2"></i>
        </div>
        <div>
          الموظفون <i className="fa fa-users  rounded-md p-1 ml-2"></i>
        </div>
        <div>
          الزائرون <i className="fas fa-globe  rounded-md p-1 ml-2"></i>
        </div>
      </div>
      <div className="image bg-red-500 h-[550px]">
        <div className="overlay">
          <h1 className="font-sans text-6xl font-semibold text-white text-start">
            {' '}
            الدراسات العليا
          </h1>
          <p className="font-sans text-2xl font-medium text-white text-start mt-9">
            كل مايحتاجه الطالب من مدخل واحد: تسجيل المقررات، دفع المصروفات
            <br />، منصة التعليم الإلكترونى، الجداول الدراسية، جداول الامتحانات،
            النتائج
          </p>
          <div className="flex items-end">
            <button className=" bg-gradient-to-t w-[13rem] from-[#51ACD0] to-[#5dc6f0] p-2 rounded-md  text-2xl mt-9 text-white font-serif font-semibold cursor-pointer hover:bg-teal-400  ">
              تسجيل الدخول
            </button>
          </div>
        </div>
      </div>
      <div className='services-name ms-10 mt-10 before:content-[""] before:block'>
        <h1 className="font-sans text-5xl font-semibold  text-start">
          الخدمات الذكية
        </h1>
      </div>
      <div className="services flex justify-center items-center gap-[3rem] flex-wrap  p-3 font-sans  mt-20">
        <div className="shadow-lg text-center mb-10 rounded-lg w-90 p-5 hover:scale-110 transition-all">
          <img
            src="https://www.asu.edu.eg/141090/_mediacenter/2020/png/372c6de72afbddfc800432ce0f8b178b.png"
            style={{ width: '150px' }}
            alt=""
          />
          <h3 className="mt-5 mb-5">التقدم للدراسات العليا</h3>
        </div>
        <div className="shadow-lg text-center mb-10 rounded-lg w-90 p-5 hover:scale-110 transition-all">
          <img
            src="https://www.asu.edu.eg/141090/_mediacenter/2020/png/372c6de72afbddfc800432ce0f8b178b.png"
            style={{ width: '150px' }}
            alt=""
          />
          <h3 className="mt-5 mb-5 font-sans ">التقدم للدراسات العليا</h3>
        </div>
        <div className="shadow-lg text-center mb-10 rounded-lg w-90 p-5 hover:scale-110 transition-all">
          <img
            src="https://www.asu.edu.eg/141090/_mediacenter/2020/png/372c6de72afbddfc800432ce0f8b178b.png"
            style={{ width: '150px' }}
            alt=""
          />
          <h3 className="mt-5 mb-5">التقدم للدراسات العليا</h3>
        </div>{' '}
        <div className="shadow-lg text-center mb-10 rounded-lg w-90 p-5 hover:scale-110 transition-all">
          <img
            src="https://www.asu.edu.eg/141090/_mediacenter/2020/png/372c6de72afbddfc800432ce0f8b178b.png"
            style={{ width: '150px' }}
            alt=""
          />
          <h3 className="mt-5 mb-5">التقدم للدراسات العليا</h3>
        </div>{' '}
        <div className="shadow-lg text-center mb-10 rounded-lg w-90 p-5 hover:scale-110 transition-all">
          <img
            src="https://www.asu.edu.eg/141090/_mediacenter/2020/png/372c6de72afbddfc800432ce0f8b178b.png"
            style={{ width: '150px' }}
            alt=""
          />
          <h3 className="mt-5 mb-5">التقدم للدراسات العليا</h3>
        </div>{' '}
        <div className="shadow-lg text-center mb-10 rounded-lg w-90 p-5 hover:scale-110 transition-all">
          <img
            src="https://www.asu.edu.eg/141090/_mediacenter/2020/png/372c6de72afbddfc800432ce0f8b178b.png"
            style={{ width: '150px' }}
            alt=""
          />
          <h3 className="mt-5 mb-5">التقدم للدراسات العليا</h3>
        </div>{' '}
        <div className="shadow-lg text-center mb-10 rounded-lg w-90 p-5 hover:scale-110 transition-all">
          <img
            src="https://www.asu.edu.eg/141090/_mediacenter/2020/png/372c6de72afbddfc800432ce0f8b178b.png"
            style={{ width: '150px' }}
            alt=""
          />
          <h3 className="mt-5 mb-5">التقدم للدراسات العليا</h3>
        </div>{' '}
        <div className="shadow-lg text-center mb-10 rounded-lg w-90 p-5 hover:scale-110 transition-all">
          <img
            src="https://www.asu.edu.eg/141090/_mediacenter/2020/png/372c6de72afbddfc800432ce0f8b178b.png"
            style={{ width: '150px' }}
            alt=""
          />
          <h3 className="mt-5 mb-5">التقدم للدراسات العليا</h3>
        </div>
      </div>
    </>
  );
}

export default Home;
