import { Link } from 'react-router-dom';
import ImageProgram from '../../assets/images/program.jpg';
import { FiPhone } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineMail } from 'react-icons/hi';
import Footer from '../../component/Footer/Footer';
import Main from '../../component/NavbarHomePage/MainNavbar';
import Graduate from '../../assets/images/post.png';
import Material from '../User/Material';

function Home() {
  return (
    <>
      <Main />
      <div className=" hidden md:flex justify-center sticky top-0 left-0 z-50   items-center    p-1 font-sans shadow-2xl bg-white      ">
        <ul className="w-[950%]  flex justify-around flex-wrap  items-center ">
          <Link to={'./'}>
            <li className="flex  items-center justify-items-center ">
              <img
                src={Graduate}
                style={{ width: '70px', height: '50px' }}
                className="text-center"
                alt="graduate"
              />
              <span className=" ">الدرسات العليا</span>
            </li>
          </Link>
          <Link>
            <li className="nav-link">عن القطاع </li>
          </Link>
          <Link>
            <li className="nav-link">خدمات الدراسات العليا </li>
          </Link>
          <li className="nav-link">
            <select>
              <option value=" 1">العلاقات الثقافية</option>
              <option value=" 2">العلاقات الثقافية</option>
              <option value=" 3">العلاقات الثقافية</option>
            </select>
          </li>
          <li className="nav-link">
            <select>
              <option value=" 1"> الدراسات العليا</option>
              <option value=" 2">العلاقات الثقافية</option>
              <option value=" 3">العلاقات الثقافية</option>
            </select>
          </li>

          <li className="nav-link">المكتبات </li>
          <li className="nav-link">
            <select>
              <option value=" 1"> الجوائز</option>
              <option value=" 2">العلاقات الثقافية</option>
              <option value=" 3">العلاقات الثقافية</option>
            </select>
          </li>

          <li className="nav-link"> نماذج استمارات </li>
          <li className="nav-link"> عن الدراسات العليا </li>
        </ul>
      </div>
      <div className="image bg-red-500 h-[550px]">
        <div className="overlay">
          <h1 className="font-sans text-6xl font-semibold text-white text-start">
            الدراسات <span className="text-main ">العليا</span>
          </h1>
          <p className="font-sans text-2xl font-medium text-white text-start mt-9 tracking-wide leading-relaxed     ">
            كل مايحتاجه الطالب من مدخل واحد: تسجيل المقررات، دفع المصروفات
            <br />، منصة التعليم الإلكترونى، الجداول الدراسية، جداول الامتحانات،
            النتائج.
          </p>
          <div className="flex items-end">
            <Link to={'/login'} className="home-btn  ">
              تسجيل الدخول
            </Link>
          </div>
        </div>
      </div>
      <div className="services-name ms-10 mt-10  ">
        <h1 className="font-sans lg:text-5xl md:text-4xl sm:text-3xl font-semibold  text-start">
          الخدمات الالكترونية
        </h1>
      </div>
      <div className="services flex justify-center items-center gap-[3rem] flex-wrap  p-3 font-sans  mt-20">
        <div className="w-[80%] grid md:grid-cols-3  lg:grid-cols-4  gap-5 ">
          <Link to={'/registration'}>
            <div className="ser-card">
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
          <Link to={'/payment'}>
            <div className="ser-card">
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
          <Link to={'/course'}>
            <div className="ser-card ">
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
          <Link to={'/recordpoint'}>
            <div className="ser-card">
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
          </Link>

          <Link to={'/Material'}>
            <div className="ser-card">
              <div className="flex items-center justify-center">
                <img
                  src="https://www.asu.edu.eg/141090/_mediacenter/2022/png/a5e0e61d23d7bb612f9861b2fa43bc18.png"
                  style={{ width: '150px' }}
                  alt=""
                />
              </div>

              <h3 className="mt-5 mb-5 font-Poppins text-xl">
                {' '}
                الكتب و مصارد المواد{' '}
              </h3>
            </div>
          </Link>
          <Link to={'/examtable'}>
            <div className="ser-card">
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
          </Link>
          <Link to={'/studytable'}>
            <div className="ser-card">
              <div className="flex items-center justify-center">
                <img
                  src="https://www.asu.edu.eg/141090/_mediacenter/2020/png/cface9a1707183e146e79af56a096971.png"
                  style={{ width: '150px' }}
                  alt=""
                />
              </div>

              <h3 className="mt-5 mb-5 font-Poppins text-xl">جداول الدراسة </h3>
            </div>
          </Link>

          <Link to={'showgrade'}>
            <div className="ser-card">
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
          </Link>

          <div className="ser-card">
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
          <div className="ser-card">
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
          <div className="ser-card">
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
      <div className="graduates mt-5 mb-5 flex lg:justify-center flex-col">
        <div className="ms-10  w-[80%] gap-10 text-center">
          <h2 className="bg-main text-white text-4xl p-2 font-sans lg:w-[80%] text-center rounded-md">
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
      <div className="image2   h-[550px] mt-10 mb-10">
        <div className="overlay2 z-10">
          <h1 className="font-sans text-6xl font-semibold text-white text-center">
            BU<span className="text-[#5dc6f0] text-[66px]">2</span>LEARN
          </h1>
          <p className="font-sans text-3xl font-medium text-white text-center mt-9">
            DISTANE EDUCATION PLATFORM
          </p>
          <div className="flex items-end justify-center z-30  ">
            <Link to="/">
              <button className="home-btn"> اقرأ المزيد</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="program-name ms-10 mt-20 mb-20  ">
        <h1 className="font-sans lg:text-5xl md:text-4xl sm:text-3xl font-semibold  text-start">
          البرامج الأكاديمية
        </h1>
      </div>
      <div className="programs flex justify-center items-center gap-[3rem] flex-wrap  p-3 font-sans  mt-20">
        <div className="w-[80%] flex justify-center  items-center gap-5">
          <div className="ser-card w-1/3">
            <img
              src="https://www.asu.edu.eg/images/3faf5cd9-e1a6-443a-ab3f-9be87e867a28.jpg"
              className="w-[100%]"
              alt="program"
            />

            <p className="text-center font-sans text-2xl p-4">
              الدبلومات التأهيلية
            </p>
          </div>
          <div className="ser-card  w-1/3">
            <img
              src="https://www.asu.edu.eg/images/83825ccf-58e5-4c2c-86d7-596c64fd902b.png"
              className="w-[100%]"
              alt="program"
            />

            <p className="text-center font-sans text-2xl p-4">الماجيستير</p>
          </div>
          <div className="ser-card  w-1/3    ">
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
            <p className="text-justify         font-sans  text-2xl text-wrap w-full break-words mt-5">
              يلتزم طلاب الدراسات العليا بالعديد من الجوانب الإدارية المتعلقة
              بشروط الالتحاق بالدراسات العلياوالتي تختلف ما بين درجة علمية
              وأخرى، إضافة إلى البرامج العلمية المميزة في كل كلية من كليات
              الجامعة، واستمارات التقدم والمستندات المطلوبة للالتحاق إضافةإلى
              المصروفات المطلوبة من المصريين والوافدين، إلى جانب الدورات
              التدريبية المتاحة لطلاب الدراسات العليا.. وفيما يلي شرحًا توضيحًا
              يتضمن كل هذه الجوانب وأكثر.
            </p>
            <div className="flex items-end">
              <button className="home-btn">اقرأ المزيد</button>
            </div>
          </div>
          <div className="flex p-4 items-center text-center">
            <img
              src="https://www.asu.edu.eg/images/guide.jpg"
              className="w-full h-full rounded-lg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="  bg-black mt-15 lg:h-96 flex justify-center items-center gap-[3rem] flex-wrap  p-3 font-sans mb-20 mt-20  ">
        <div className="w-[80%] grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div className="stats-card ">
            <div className="flex flex-col items-center justify-around p-2 ">
              <p className="stats-num">54</p>
              <h1 className="stats-name">طالب دراسات عليا </h1>
            </div>
          </div>
          <div className="stats-card">
            <div className="flex flex-col items-center justify-around p-2">
              <p className="stats-num">55</p>
              <h1 className="stats-name"> برنامج للساعات المعتمدة </h1>
            </div>
          </div>
          <div className="stats-card">
            <div className="flex flex-col items-center justify-around p-2">
              <p className="stats-num">78</p>
              <h1 className="stats-name"> مشروع بحثي </h1>
            </div>
          </div>
          <div className="stats-card">
            <div className="flex flex-col items-center justify-around p-2">
              <p className="stats-num">99</p>
              <h1 className="stats-name">برنامج دولي مشترك</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="descri flex justify-center mb-10 mt-20 b">
        <div className="grid md:grid-cols-1 lg:grid-cols-2  w-[80%] gap-10 text-center">
          <div className="overlay_content w-full text-start">
            <h1 className=" font-sans text-5xl font-semibold">البحث العلمى</h1>
            <p className=" text-justify   font-sans text-2xl mt-5 text-wrap">
              يعد الباحثين من بين الفئات المهمة في جامعة بنها .. لذا يحرص قطاع
              الدراسات العليا والبحوث على توفير كافة السبل وأفضلها لتقديم
              الخدمات العلمية والبحثية والتعليمة التي تساهم في مساعدتهم على
              الرقي بالبحث العلمي وتكون في الوقت نفسه عاملا محفزا لهم على
              الإبداع والتفوق والتميز ليتمكنوا من المساهمة في حل مشاكل المجتمع
              من ناحية والنهوض بالبحث العلمي من ناحية ثانية والصعود بتصنيف
              الجامعة عالميا من ناحية ثالثة.
            </p>
            <div className="flex items-end">
              <button className=" home-btn">اقرأ المزيد</button>
            </div>
          </div>
          <div className=" flex p-4 text-center">
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
              Example@gmail.com
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
