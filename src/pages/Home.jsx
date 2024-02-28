import { Link } from 'react-router-dom';
import ImageProgram from '../assets/images/program.jpg';
import { FiPhone } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineMail } from 'react-icons/hi';
import Footer from '../component/Footer/Footer';
import Main from '../component/NavbarHomePage/Main';
import Graduate from '../assets/images/post.png';
function Home() {
  return (
    <>
      <Main />
      {/* <div className="flex justify-center items-center gap-[3rem] flex-wrap  p-3 font-sans shadow-2xl">
        <div className="w-[90%] grid grid-cols-9  gap-3 mt-20 p-5">
          <div className="flex items-center justify-center gap-10 nav hover:bg-main h-10 transition-all hover:rounded-md">
            <img
              src={Graduate}
              style={{ width: '100px' }}
              className="text-center"
              alt="graduate"
            />{' '}
            <button className="nav hover:bg-main h-10 transition-all hover:rounded-md">
              {' '}
              الدراسات{' '}
            </button>
          </div>
          <button className="nav hover:bg-main h-10 transition-all hover:rounded-md">
            عن القطاع{' '}
          </button>
          <button className="nav hover:bg-main h-10 transition-all hover:rounded-md">
            خدمات الدراسات العليا{' '}
          </button>
          <select className="nav hover:bg-main h-10 transition-all hover:rounded-md">
            <option value=" 1">العلاقات الثقافية</option>
            <option value=" 2">العلاقات الثقافية</option>
            <option value=" 3">العلاقات الثقافية</option>
          </select>
          <select className="nav hover:bg-main h-10 transition-all hover:rounded-md">
            <option value=" 1"> الدراسات العليا</option>
            <option value=" 2">العلاقات الثقافية</option>
            <option value=" 3">العلاقات الثقافية</option>
          </select>{' '}
          <button className="nav hover:bg-main h-10 transition-all hover:rounded-md">
            المكتبات{' '}
          </button>
          <select className="nav hover:bg-main h-10 transition-all hover:rounded-md">
            <option value=" 1"> الجوائز</option>
            <option value=" 2">العلاقات الثقافية</option>
            <option value=" 3">العلاقات الثقافية</option>
          </select>
          <button className="nav hover:bg-main h-10 transition-all hover:rounded-md">
            {' '}
            نماذج استمارات{' '}
          </button>
          <button className="nav hover:bg-main h-10 transition-all hover:rounded-md">
            {' '}
            عن الدراسات العليا{' '}
          </button>
        </div>
      </div> */}
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
            <Link
              to={'/login'}
              className=" bg-gradient-to-t w-[13rem] from-[#51ACD0] to-[#5dc6f0] p-2 rounded-md  text-2xl mt-9 text-white font-serif font-semibold cursor-pointer hover:bg-teal-400  "
            >
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
      <div className='services-name ms-10 mt-10 before:content-[""] before:block'>
        <h1 className="font-sans text-5xl font-semibold  text-start">
          الخدمات الذكية
        </h1>
      </div>
      <div className="services flex justify-center items-center gap-[3rem] flex-wrap  p-3 font-sans  mt-20">
        <div className="w-[80%] grid md:grid-cols-3 lg:grid-cols-4  gap-5 ">
          <Link to={'/registration'}>
            <div className="shadow-lg text-center mb-10 rounded-lg w-70 p-5 hover:scale-110 transition-all">
              <div className="flex items-center justify-center">
                <img
                  src="https://www.asu.edu.eg/141090/_mediacenter/2020/png/372c6de72afbddfc800432ce0f8b178b.png"
                  style={{ width: '150px' }}
                  alt=""
                />
              </div>

              <h3 className="mt-5 mb-5 font-Poppins text-xl">
                التقدم للدراسات العليا
              </h3>
            </div>
          </Link>
          <Link to={'/course'}>
            <div className="shadow-lg text-center mb-10 rounded-lg w-70 p-5 hover:scale-110 transition-all">
              <div className="flex items-center justify-center">
                <img
                  src="https://www.asu.edu.eg/141090/_mediacenter/2021/png/6cb561a4bbfa874570ca82c711886eeb.png"
                  style={{ width: '150px' }}
                  alt=""
                />
              </div>

              <h3 className="mt-5 mb-5 font-Poppins text-xl">
                {' '}
                تسجيل واختيار المواد
              </h3>
            </div>
          </Link>

          <div className="shadow-lg text-center mb-10 rounded-lg w-70 p-5 hover:scale-110 transition-all">
            <div className="flex items-center justify-center">
              <img
                src="https://www.asu.edu.eg/141090/_mediacenter/2020/png/ec5aecb3aadf2077d1f2756ede50ee97.png"
                style={{ width: '150px' }}
                alt=""
              />
            </div>

            <h3 className="mt-5 mb-5 font-Poppins text-xl">
              {' '}
              تسجيل نقطة بحث(رفع الفكرة)
            </h3>
          </div>
          <div className="shadow-lg text-center mb-10 rounded-lg w-70 p-5 hover:scale-110 transition-all">
            <div className="flex items-center justify-center">
              <img
                src="https://www.asu.edu.eg/141090/_mediacenter/2022/png/a5e0e61d23d7bb612f9861b2fa43bc18.png"
                style={{ width: '150px' }}
                alt=""
              />
            </div>

            <h3 className="mt-5 mb-5 font-Poppins text-xl">
              {' '}
              الإعلانات ومواعيد السمينارات
            </h3>
          </div>

          <div className="shadow-lg text-center mb-10 rounded-lg w-70 p-5 hover:scale-110 transition-all">
            <div className="flex items-center justify-center">
              <img
                src="https://www.asu.edu.eg/141090/_mediacenter/2020/png/8f8b9a7cc9c5d1c4df4e229124bfe7e0.png"
                style={{ width: '150px' }}
                alt=""
              />
            </div>

            <h3 className="mt-5 mb-5 font-Poppins text-xl">
              {' '}
              نتائج الدراسات العليا{' '}
            </h3>
          </div>
          <div className="shadow-lg text-center mb-10 rounded-lg w-70 p-5 hover:scale-110 transition-all">
            <div className="flex items-center justify-center">
              <img
                src="https://www.asu.edu.eg/141090/_mediacenter/2020/png/fa7959f679b4fd03ef5cafc2fb7c13e1.png"
                style={{ width: '150px' }}
                alt=""
              />
            </div>

            <h3 className="mt-5 mb-5 font-Poppins text-xl">
              جداول الامتحانات{' '}
            </h3>
          </div>
          <div className="shadow-lg text-center mb-10 rounded-lg w-70 p-5 hover:scale-110 transition-all">
            <div className="flex items-center justify-center">
              <img
                src="https://www.asu.edu.eg/141090/_mediacenter/2020/png/cface9a1707183e146e79af56a096971.png"
                style={{ width: '150px' }}
                alt=""
              />
            </div>

            <h3 className="mt-5 mb-5 font-Poppins text-xl">جداول الدراسة </h3>
          </div>
          <Link to={'/payment'}>
            <div className="shadow-lg text-center mb-10 rounded-lg w-70 p-5 hover:scale-110 transition-all">
              <div className="flex items-center justify-center">
                <img
                  src="https://www.asu.edu.eg/141090/_mediacenter/2020/png/ec5aecb3aadf2077d1f2756ede50ee97.png"
                  style={{ width: '150px' }}
                  alt=""
                />
              </div>

              <h3 className="mt-5 mb-5 font-Poppins text-xl">
                الدفع الإلكتروني{' '}
              </h3>
            </div>
          </Link>

          <div className="shadow-lg text-center mb-10 rounded-lg w-70 p-5 hover:scale-110 transition-all">
            <div className="flex items-center justify-center">
              <img
                src="https://www.asu.edu.eg/141090/_mediacenter/2021/png/b4e51525efc6b9eda281948e2087b986.png"
                style={{ width: '150px' }}
                alt=""
              />
            </div>

            <h3 className="mt-5 mb-5 font-Poppins text-xl">
              {' '}
              الاشعارات ومتابعة الطلاب
            </h3>
          </div>
          <div className="shadow-lg text-center mb-10 rounded-lg w-70 p-5 hover:scale-110 transition-all">
            <div className="flex items-center justify-center">
              <img
                src="https://www.asu.edu.eg/141090/_mediacenter/2021/png/4aa70b2c4a21785c4b872fe5e6be37d2.png"
                style={{ width: '150px' }}
                alt=""
              />
            </div>

            <h3 className="mt-5 mb-5 font-Poppins text-xl">
              {' '}
              chatbot لمساعدة الطالب{' '}
            </h3>
          </div>
        </div>
      </div>
      <div className="graduates mt-5 mb-5 flex justify-center flex-col">
        <div className="ms-10  w-[80%] gap-10 text-center">
          <h2 className="bg-main text-white text-4xl p-2 font-sans w-[80%] text-center rounded-md">
            الدراسات العليا
          </h2>
        </div>
        <div className="ms-10">
          <div className="text-2xl p-2 font-semibold font-sans w-[80%] text-start mt-3 flex flex-col">
            <Link to="/upload-data">
              1. الإجراءات المطلوب إتباعها للطلاب المصريين والوافدين للالتحاق
              بمرحلة الدراسات العليا{' '}
            </Link>
            <Link to="" className="mt-5">
              2.لائحة الدراسات العليا بالكليات
            </Link>
            <Link to="" className="mt-5">
              3. دليل الدراسات العليا
            </Link>
          </div>
        </div>
      </div>
      <div className="image2  bg-red-500 h-[550px] mt-10 mb-10">
        <div className="overlay2">
          <h1 className="font-sans text-6xl font-semibold text-white text-center">
            {' '}
            BU<span className="text-[#5dc6f0] text-[66px]">2</span>LEARN
          </h1>
          <p className="font-sans text-3xl font-medium text-white text-center mt-9">
            DISTANE EDUCATION PLATFORM
          </p>
          <div className="flex items-end justify-center">
            <Link
              to={'/'}
              className=" bg-gradient-to-t w-[13rem] from-[#51ACD0] to-[#5dc6f0] p-2 rounded-md  text-2xl mt-9 text-white font-serif font-semibold cursor-pointer hover:bg-teal-400 text-center "
            >
              اقرأ المزيد
            </Link>
          </div>
        </div>
      </div>
      <div className='program-name ms-10 mt-20 mb-20 before:content-[""] before:block'>
        <h1 className="font-sans text-5xl font-semibold  text-start">
          البرامج الأكاديمية
        </h1>
      </div>
      <div className="programs flex justify-center items-center gap-[3rem] flex-wrap  p-3 font-sans  mt-20">
        <div className="w-[80%] grid  md:grid-cols-2 lg:grid-cols-3  gap-3 ">
          <div className="card-program  mb-10 border shadow-md rounded-md hover:scale-110 transition-all ">
            <img
              src="https://www.asu.edu.eg/images/3faf5cd9-e1a6-443a-ab3f-9be87e867a28.jpg"
              className="w-[100%]"
              alt="program"
            />

            <p className="text-center font-sans text-2xl p-4">
              الدبلومات التأهيلية
            </p>
          </div>
          <div className="card-program  mb-10 border shadow-md rounded-md hover:scale-110 transition-all">
            <img
              src="https://www.asu.edu.eg/images/83825ccf-58e5-4c2c-86d7-596c64fd902b.png"
              className="w-[100%]"
              alt="program"
            />

            <p className="text-center font-sans text-2xl p-4">الماجيستير</p>
          </div>
          <div className="card-program  mb-10 border shadow-md rounded-md hover:scale-110 transition-all">
            <img src={ImageProgram} className="w-[100%]" alt="program" />

            <p className="text-center font-sans text-2xl p-4">الدكتوراه</p>
          </div>
        </div>
      </div>
      <div className="  flex justify-center mb-10 mt-20">
        <div className="grid md:grid-cols-1 lg:grid-cols-2  w-[80%] gap-5 text-center">
          <div className="overlay_content">
            <h1 className="text-start font-sans text-5xl font-semibold">
              دليل الدراسات العليا
            </h1>
            <p className="text-start  font-sans  text-2xl text-wrap w-full break-words mt-5">
              يلتزم طلاب الدراسات العليا بالعديد من الجوانب الإدارية المتعلقة
              بشروط الالتحاق بالدراسات العلياوالتي تختلف ما بين درجة علمية
              وأخرى، إضافة إلى البرامج العلمية المميزة في كل كلية من كليات
              الجامعة، واستمارات التقدم والمستندات المطلوبة للالتحاق إضافةإلى
              المصروفات المطلوبة من المصريين والوافدين، إلى جانب الدورات
              التدريبية المتاحة لطلاب الدراسات العليا.. وفيما يلي شرحًا توضيحًا
              يتضمن كل هذه الجوانب وأكثر.
            </p>
            <div className="flex items-end">
              <button className="text-white bg-main hover:bg-[#5dc6f0]  w-[13rem]  text-2xl mt-9 p-2 font-serif font-semibold cursor-pointer rounded-md transition-[2rem]">
                اقرأ المزيد
              </button>
            </div>
          </div>
          <div className="imagee  text-center">
            <img
              src="https://www.asu.edu.eg/images/guide.jpg"
              className="w-[100%] rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="tot_num bg-black mt-15 lg:h-96 flex justify-center items-center gap-[3rem] flex-wrap  p-3 font-sans mb-20 mt-20  ">
        <div className="w-[80%] grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="border rounded-sm text-white h-[180px] hh text-center hover:border-main transition-all p-2">
            <div className="">
              <p className="font-sans text-5xl font-medium text-white text-center mt-5">
                54
              </p>
              <h1 className=" font-sans text-3xl font-semibold  text-white mt-9">
                طالب دراسات عليا{' '}
              </h1>
            </div>
          </div>
          <div className="border rounded-sm text-white h-[180px] hh text-center hover:border-main transition-all p-2">
            <div className="">
              <p className="font-sans text-5xl font-medium text-white text-center mt-5">
                55
              </p>
              <h1 className=" font-sans text-3xl font-semibold  text-white mt-9">
                {' '}
                برنامج للساعات المعتمدة{' '}
              </h1>
            </div>
          </div>
          <div className="border rounded-sm text-white h-[180px] hh text-center hover:border-main transition-all">
            <div className="">
              <p className="font-sans text-5xl font-medium text-white text-center mt-5">
                78
              </p>
              <h1 className=" font-sans text-3xl font-semibold  text-white mt-9">
                {' '}
                مشروع بحثي{' '}
              </h1>
            </div>
          </div>
          <div className="border rounded-sm text-white h-[180px] hh text-center hover:border-main transition-all">
            <div className="">
              <p className="font-sans text-5xl font-medium text-white text-center mt-5">
                99
              </p>
              <h1 className=" font-sans text-3xl font-semibold  text-white mt-9">
                {' '}
                برنامج دولي مشترك{' '}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="descri flex justify-center mb-10 mt-20 b">
        <div className="grid md:grid-cols-1 lg:grid-cols-2  w-[80%] gap-10 text-center">
          <div className="overlay_content w-full text-start">
            <h1 className=" font-sans text-5xl font-semibold">البحث العلمى</h1>
            <p className="  font-sans text-2xl mt-5 text-wrap">
              يعد الباحثين من بين الفئات المهمة في جامعة بنها .. لذا يحرص قطاع
              الدراسات العليا والبحوث على توفير كافة السبل وأفضلها لتقديم
              الخدمات العلمية والبحثية والتعليمة التي تساهم في مساعدتهم على
              الرقي بالبحث العلمي وتكون في الوقت نفسه عاملا محفزا لهم على
              الإبداع والتفوق والتميز ليتمكنوا من المساهمة في حل مشاكل المجتمع
              من ناحية والنهوض بالبحث العلمي من ناحية ثانية والصعود بتصنيف
              الجامعة عالميا من ناحية ثالثة.
            </p>
            <div className="flex items-end">
              <button className="text-white bg-main hover:bg-[#5dc6f0]  w-[13rem]  text-2xl mt-9 p-2 font-serif font-semibold cursor-pointer rounded-md transition-[2rem]">
                اقرأ المزيد
              </button>
            </div>
          </div>
          <div className="imagee  text-center">
            <img
              src="https://www.asu.edu.eg/images/16.jpg"
              className="w-[100%] rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="address_details flex justify-center mt-20 shadow-2xl">
        <div className="content grid lg:grid-cols-3  w-[80%] gap-10 text-center bg-black  rounded-3xl p-5 ">
          <div className="flex flex-col items-center">
            <CiLocationOn
              className="color-white flex justify-center items-center  "
              size={30}
              color="white"
            />
            <h1 className="font-sans text-2xl font-semibold text-white mt-3">
              العنوان
            </h1>
            <p className="p color-white font-sans text-xl mt-5">
              طريق اسكندرية الزراعى
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FiPhone
              className="color-white flex justify-center items-center  "
              size={30}
              color="white"
            />
            <h1 className="font-sans text-2xl font-semibold text-white mt-3">
              رقم التليفون
            </h1>
            <p className="p color-white font-sans text-xl mt-5">
              {' '}
              +20 106 528 4676
            </p>
          </div>
          <div className="flex flex-col items-center">
            <HiOutlineMail
              className="color-white flex justify-center items-center  "
              size={30}
              color="white"
            />
            <h1 className="font-sans text-2xl font-semibold text-white mt-3">
              البريد الالكترونى
            </h1>
            <p className="p color-white font-sans text-xl mt-5">
              {' '}
              Example@gmail.com
            </p>
          </div>{' '}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
