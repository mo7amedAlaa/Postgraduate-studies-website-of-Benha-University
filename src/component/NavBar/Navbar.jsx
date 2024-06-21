import LogoWuni from '../../assets/images/شعار_جامعة_بنها.png';
import { FiPhone, FiInstagram } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedinIn, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { GrNotification } from 'react-icons/gr';
import { MdOutlineDarkMode } from 'react-icons/md';
import { IoReorderThreeOutline, IoSettingsOutline } from 'react-icons/io5';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../../Redux/Slices/darkModeSlice';
import { Link } from 'react-router-dom';

function Navbar({ notS, count, handleSidebarOpen }) {
  const dispatch = useDispatch();
  const dark = useSelector((state) => state.theme.darkMode);
  const [settOpen, setSettOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav
      className={`w-full z-20 top-0 start-0 shadow-lg ${
        dark
          ? 'bg-main text-white border-gray-600'
          : 'bg-white text-black border-gray-200'
      }`}
    >
      <div className="flex flex-wrap items-center justify-between p-4">
        <img src={LogoWuni} className="h-8" alt="Flowbite Logo" />
        <span
          className={`self-center text-2xl font-semibold whitespace-nowrap ${
            dark ? 'text-white' : 'text-black'
          }`}
        >
          {t('BanhaUniversity')}
        </span>

        <div className="flex items-center gap-2">
          <FiPhone size={30} color={dark ? 'white' : 'black'} />
          <p className={dark ? 'text-white' : 'text-black'}>+20 106 528 467</p>
        </div>
        <div className="flex items-center gap-2">
          <HiOutlineMail size={30} color={dark ? 'white' : 'black'} />
          <p className={dark ? 'text-white' : 'text-black'}>
            Example@gmail.com
          </p>
        </div>

        <div className="flex gap-5 me-[15rem]">
          <button>
            <FaFacebookF color={dark ? 'white' : 'black'} size={20} />
          </button>
          <button>
            <FaLinkedinIn color={dark ? 'white' : 'black'} size={20} />
          </button>
          <button>
            <FaTwitter color={dark ? 'white' : 'black'} size={20} />
          </button>
          <button>
            <FiInstagram color={dark ? 'white' : 'black'} size={20} />
          </button>
        </div>
        <div className="text-5xl md:hidden " onClick={handleSidebarOpen}>
          <IoReorderThreeOutline color={dark ? 'white' : 'black'} />
        </div>
        <div className="flex relative items-center gap-2">
          <GrNotification
            className={`text-2xl cursor-pointer ${
              dark ? 'text-white' : 'text-black'
            }`}
            onClick={notS}
          />
          {count > 0 && (
            <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center rounded-lg bg-red-600 text-white">
              {count}
            </span>
          )}
          <MdOutlineDarkMode
            className={`text-3xl cursor-pointer ${
              dark ? 'text-white' : 'text-black'
            }`}
            onClick={() => dispatch(toggleDarkMode())}
          />
          <IoSettingsOutline
            className={`text-3xl cursor-pointer ${
              dark ? 'text-white' : 'text-black'
            }`}
            onClick={() => setSettOpen(!settOpen)}
          />
          {settOpen && (
            <ul className="absolute top-[70%] z-50 left-8 w-28 bg-white border-2 shadow-2xl border-main border-solid rounded-md">
              <Link to={'./accountsetting'}>
                <li className="p-3 border-b border-[#eee] cursor-pointer hover:bg-gray-200">
                  {t('Account')}
                </li>
              </Link>
              <li className="p-3 border-b border-[#eee] cursor-pointer hover:bg-gray-200">
                <select
                  name="lang"
                  id="lang"
                  className="w-full cursor-pointer"
                  onChange={(e) => changeLanguage(e.target.value)}
                >
                  <option value="ar">{t('Arabic')}</option>
                  <option value="en">{t('English')}</option>
                </select>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
