import { Link } from 'react-router-dom';
import ImageProgram from '../../assets/images/program.jpg';
import { FiPhone } from 'react-icons/fi';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineMail } from 'react-icons/hi';
import Footer from '../../component/Footer/Footer';

import Graduate from '../../assets/images/post.png';
import { BsChatRightText } from 'react-icons/bs';
import MainNavbar from '../../component/NavbarHomePage/MainNavbar';
import { useState } from 'react';
import Notifications from '../User/Notification';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

function Home() {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const isLoged = useSelector((state) => state.user.loged);
  const [t] = useTranslation();
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'New user registered', type: 'info' },
    { id: 2, message: 'Server downtime alert', type: 'warning' },
    { id: 3, message: 'New comment on your post', type: 'warning' },
    { id: 4, message: 'New user registered', type: 'info' },
    { id: 5, message: 'Server downtime alert', type: 'warning' },
    { id: 6, message: 'New comment on your post', type: 'info' },
  ]);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className={darkMode ? 'bg-black  text-main     ' : 'bg-white  '}>
      <div className="relative ">
        <MainNavbar notS={toggleDropdown} count={notifications.length} />
        {isDropdownVisible && <Notifications notifications={notifications} />}
      </div>

      <div
        className={
          darkMode
            ? 'bg-gray-600 hidden md:flex justify-center sticky top-0 left-0 z-40   items-center    p-1 font-sans shadow-2xl  text-second  '
            : ' hidden md:flex justify-center sticky top-0 left-0 z-40   items-center    p-1 font-sans shadow-2xl bg-white      '
        }
      >
        <ul className="w-[950%]  flex justify-around flex-wrap  items-center ">
          <Link to={'./'}>
            <li className="flex  items-center justify-items-center ">
              <img
                src={Graduate}
                style={{ width: '70px', height: '50px' }}
                className="text-center"
                alt="graduate"
              />
              <span className=" ">{t('GraduateStudies')}</span>
            </li>
          </Link>
          <Link
            to={
              'https://ar.wikipedia.org/wiki/%D8%AF%D8%B1%D8%A7%D8%B3%D8%A7%D8%AA_%D8%B9%D9%84%D9%8A%D8%A7#%D8%A7%D9%86%D8%B8%D8%B1_%D8%A3%D9%8A%D8%B6%D9%8B%D8%A7'
            }
          >
            <li className="nav-link">{t('AboutTheSector')}</li>
          </Link>
          <a href="#servicesID">
            <li className="nav-link">{t('GraduateServices')}</li>
          </a>
          <li className="nav-link">
            <select className="bg-inherit ">
              <option value=" 1">{t('CulturalRelations')}</option>
              <option value=" 2">{t('CulturalRelations')}</option>
              <option value=" 3">{t('CulturalRelations')}</option>
            </select>
          </li>
          <li className="nav-link">
            <select className="bg-inherit ">
              <option value=" 1">{t('GraduateStudies')}</option>
              <option value=" 2">{t('CulturalRelations')}</option>
              <option value=" 3">{t('CulturalRelations')}</option>
            </select>
          </li>

          <li className="nav-link">{t('Libraries')}</li>
          <li className="nav-link">
            <select className="bg-inherit ">
              <option value=" 1"> {t('Awards')}</option>
              <option value=" 2">{t('CulturalRelations')}</option>
              <option value=" 3">{t('CulturalRelations')}</option>
            </select>
          </li>

          <li className="nav-link"> {t('FormsModels')}</li>
          <li className="nav-link"> {t('AboutGraduateStudies')}</li>
        </ul>
      </div>
      <div className="image  h-[550px]">
        <div className="overlay">
          <h1
            className={
              darkMode
                ? 'font-sans text-6xl font-semibold text-second text-start'
                : 'font-sans text-6xl font-semibold text-white text-start'
            }
          >
            {t('Graduate')}
            <span className="text-main ">{t('Studies')}</span>
          </h1>
          <p
            className={
              darkMode
                ? 'font-sans text-2xl font-medium text-second  text-start mt-9 tracking-wide leading-relaxed  '
                : 'font-sans text-2xl font-medium text-white text-start mt-9 tracking-wide leading-relaxed     '
            }
          >
            {t('AllStudentNeeds')}
            <br />
            {t('learning')}
          </p>
          <div className={isLoged ? '  items-end hidden' : 'flex items-end'}>
            <Link to={'/login'} className="home-btn  ">
              {t('Login')}
            </Link>
          </div>
        </div>
      </div>
      <div id="servicesID" className="services-name ms-10 mt-10  ">
        <h1 className="font-sans lg:text-5xl md:text-4xl sm:text-3xl font-semibold  text-start">
          {t('ElectronicServices')}
        </h1>
      </div>
      <div className="services flex justify-center items-center gap-[3rem] flex-wrap  p-3 font-sans  mt-20">
        <div className="w-[80%]  flex flex-wrap gap-6 ">
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
                {t('ApplyForGraduateStudies')}
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
                {t('ElectronicPayment')}{' '}
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
                {t('RegisterAndChooseSubjects')}
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
                {t('RecordResearchPoint')}
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
                {t('BooksAndSubjectResources')}
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
                {t('ExamSchedules')}
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

              <h3 className="mt-5 mb-5 font-Poppins text-xl">
                {t('StudySchedules')}
              </h3>
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
                {t('GraduateResults')}
              </h3>
            </div>
          </Link>

          <div className="ser-card">
            <div className="flex items-center justify-center">
              <img
                src="https://www.asu.edu.eg/141090/_mediacenter/2021/png/b4e51525efc6b9eda281948e2087b986.png"
                style={{ width: '150px' }}
                alt=""
              />
            </div>

            <h3 className="mt-5 mb-5 font-Poppins text-xl">
              {t('RequestsAndDeclarations')}
            </h3>
          </div>
          <div className="ser-card">
            <div className="flex items-center justify-center">
              <img
                src="https://www.asu.edu.eg/141090/_mediacenter/2022/png/a5e0e61d23d7bb612f9861b2fa43bc18.png"
                style={{ width: '150px' }}
                alt=""
              />
            </div>

            <h3 className="mt-5 mb-5 font-Poppins text-xl">
              {t('AnnouncementsAndSeminarDates')}
            </h3>
          </div>
          {/* <div className="ser-card">
            <div className="flex items-center justify-center">
              <img
                src="https://www.asu.edu.eg/141090/_mediacenter/2021/png/b4e51525efc6b9eda281948e2087b986.png"
                style={{ width: '150px' }}
                alt=""
              />
            </div>

            <h3 className="mt-5 mb-5 font-Poppins text-xl">
              {t('NotificationsAndStudentFollowUp')}
            </h3>
          </div> */}
          <div className="ser-card">
            <div className="flex items-center justify-center">
              <img
                src="https://www.asu.edu.eg/141090/_mediacenter/2021/png/4aa70b2c4a21785c4b872fe5e6be37d2.png"
                style={{ width: '150px' }}
                alt=""
              />
            </div>

            <h3 className="mt-5 mb-5 font-Poppins text-xl">
              {t('ChatbotToAssistTheStudent')}
            </h3>
          </div>
        </div>
      </div>
      <div className="graduates mt-5 mb-5 flex lg:justify-center flex-col">
        <div className="ms-10  w-[80%] gap-10 text-center">
          <h2 className="bg-main text-white text-4xl p-2 font-sans lg:w-[80%] text-center rounded-md">
            {t('GraduateStudies')}
          </h2>
        </div>
        <div className="ms-10">
          <div className="text-2xl p-2 font-semibold font-sans w-[80%]  mt-3 flex flex-col text-justify">
            {} <p> 1. {t('GraduateStudentsAreRequired')} </p>
            <p>2. {t('GraduateStudiesGuide')}</p>
          </div>
        </div>
      </div>
      <div className="image2   h-[550px] mt-10 mb-10">
        <div className="overlay2 z-10">
          <h1 className="font-sans text-6xl font-semibold text-white text-center">
            BU<span className="text-[#5dc6f0] text-[66px]">2</span>LEARN
          </h1>
          <p className="font-sans text-3xl font-medium text-white text-center mt-9">
            {t('DISTANCEEDUCATIONPLATFORM')}
          </p>
          <div className="flex items-end justify-center z-30  ">
            <Link to="/">
              <button className="home-btn"> {t('ReadMore')}</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="program-name ms-10 mt-20 mb-20  ">
        <h1 className="font-sans lg:text-5xl md:text-4xl sm:text-3xl font-semibold  text-start">
          {t('AcademicPrograms')}
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
              {t('QualifyingDiplomas')}
            </p>
          </div>
          <div className="ser-card  w-1/3">
            <img
              src="https://www.asu.edu.eg/images/83825ccf-58e5-4c2c-86d7-596c64fd902b.png"
              className="w-[100%]"
              alt="program"
            />

            <p className="text-center font-sans text-2xl p-4"> {t('Master')}</p>
          </div>
          <div className="ser-card  w-1/3    ">
            <img src={ImageProgram} className="w-[100%]" alt="program" />

            <p className="text-center font-sans text-2xl p-4">
              {' '}
              {t('Doctorate')}
            </p>
          </div>
        </div>
      </div>
      <div className="  flex justify-center mb-10 mt-20">
        <div className="grid md:grid-cols-1 lg:grid-cols-2  w-[80%] gap-5 text-center">
          <div className="overlay_content">
            <h1 className="text-start font-sans text-5xl font-semibold">
              {t('GraduateStudiesGuide')}
            </h1>
            <p className="text-justify         font-sans  text-2xl text-wrap w-full break-words mt-5">
              {t('GraduateStudentsAreRequired')}
            </p>
            <div className="flex items-end">
              <button className="home-btn">{t('ReadMore')}</button>
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
              <h1 className="stats-name">{t('GraduateStudents')}</h1>
            </div>
          </div>
          <div className="stats-card">
            <div className="flex flex-col items-center justify-around p-2">
              <p className="stats-num">55</p>
              <h1 className="stats-name"> {t('ProgramForAccreditedHours')}</h1>
            </div>
          </div>
          <div className="stats-card">
            <div className="flex flex-col items-center justify-around p-2">
              <p className="stats-num">78</p>
              <h1 className="stats-name"> {t('ResearchProject')} </h1>
            </div>
          </div>
          <div className="stats-card">
            <div className="flex flex-col items-center justify-around p-2">
              <p className="stats-num">99</p>
              <h1 className="stats-name">t{t('JointInternationalProgram')}</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="descri flex justify-center mb-10 mt-20 b">
        <div className="grid md:grid-cols-1 lg:grid-cols-2  w-[80%] gap-10 text-center">
          <div className="overlay_content w-full text-start">
            <h1 className=" font-sans text-5xl font-semibold">
              {t('ScientificResearch')}
            </h1>
            <p className=" text-justify   font-sans text-2xl mt-5 text-wrap">
              {t('ResershD')}
            </p>
            <div className="flex items-end">
              <button className=" home-btn">{t('ReadMore')}</button>
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
              {t('Address')}
            </h1>
            <p className="p color-white font-sans text-xl mt-5">
              {t('AlexandriaAgriculturalRoad')}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FiPhone
              className="color-white flex justify-center items-center  "
              size={30}
              color="white"
            />
            <h1 className="font-sans text-2xl font-semibold text-white mt-3">
              {t('PhoneNumbers')}
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
              {t('EmailAddresss')}
            </h1>
            <p className="p color-white font-sans text-xl mt-5">
              Example@gmail.com
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <Link
            to="/chats"
            className="block w-14  h-14 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <div className="object-cover object-center w-full h-full rounded-full p-5 bg-main ">
              <BsChatRightText className="w-full h-full object-cover object-center  " />
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
