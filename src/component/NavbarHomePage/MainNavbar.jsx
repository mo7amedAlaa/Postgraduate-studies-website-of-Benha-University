import LogoWuni from '../../assets/images/شعار_جامعة_بنها.png';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import { GrNotification } from 'react-icons/gr';
import { MdOutlineDarkMode } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../Redux/Slices/darkModeSlice';
import { Link } from 'react-router-dom';

function MainNavbar({ notS, count }) {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.theme.darkMode);
  const userInfo = useSelector((state) => state.user.UserInfo);
  const [settOpen, setSettOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav
      className={
        dark == true
          ? 'bg-black '
          : ' bg-white dark:bg-main    w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600 shadow-lg'
      }
    >
      <div className=" flex flex-wrap items-center justify-between   p-4">
        <img src={LogoWuni} className="h-8" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          {t('BanhaUniversity')}
        </span>

        <div className="flex items-center gap-2">
          <FiPhone
            className="color-white flex justify-center items-center  "
            size={30}
            color="white"
          />{' '}
          <p className="text-white ">+20 106 528 467</p>
        </div>
        <div className="flex items-center  gap-2">
          <HiOutlineMail
            className="color-white flex justify-center items-center  "
            size={30}
            color="white"
          />
          <p className="text-white ">Exaple@gmail.com</p>
        </div>

        <div className="flex gap-5 me-[15rem] ">
          <button>
            {' '}
            <FaFacebookF color="white" size={20} />
          </button>
          <button>
            {' '}
            <FaLinkedinIn color="white" size={20} />
          </button>
          <button>
            <FaTwitter color="white" size={20} />
          </button>
          <button>
            <FiInstagram color="white" size={20} />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <div className="flex gap-2 items-center justify-between  ">
            <div className="flex  relative  p-2">
              <GrNotification
                onClick={notS}
                className=" text-2xl text-white hover:cursor-pointer "
              />
              <span>
                {count > 0 && (
                  <span className=" font-bold absolute  top-0 -right-1 w-5 h-5 flex items-center justify-center rounded-lg bg-red-600 text-whiteText ">
                    {count}
                  </span>
                )}
              </span>
            </div>
            <div className="p-2">
              <MdOutlineDarkMode
                className=" text-3xl text-white  hover:cursor-pointer  "
                onClick={() => dispatch(toggleDarkMode())}
              />
            </div>
            <div className="p-2  relative">
              <IoSettingsOutline
                className=" text-3xl text-white hover:cursor-pointer "
                onClick={() => setSettOpen((settOpen) => !settOpen)}
              />
              {settOpen && (
                <ul
                  id="settingMenu   "
                  className="  notification-dropdown absolute top-[70%]  z-50 left-8  w-28        bg-white border-2   shadow-2xl  border-main border-solid             rounded-md         "
                >
                  <Link to={'./accountsetting'}>
                    <li
                      className="p-3 border-b
              border-[#eee] border-solid   last:border-none  hover:cursor-pointer "
                    >
                      {t('Account')}
                    </li>
                  </Link>
                  <li
                    className="p-3 border-b
              border-[#eee] border-solid   last:border-none  hover:cursor-pointer"
                  >
                    <select
                      name="lang"
                      id="lang"
                      className="w-full hover:cursor-pointer"
                      onChange={(e) => changeLanguage(e.target.value)}
                    >
                      <option value="ar">{t('Arabic')} </option>
                      <option value="en">{t('English')}</option>
                    </select>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
