import LogoWuni from '../../assets/images/شعار_جامعة_بنها.png';
import { FiPhone } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookF } from 'react-icons/fa';
import EygptFlg from '../../assets/images/flag.png';
function Main() {
  return (
    <nav className="bg-white dark:bg-main fixed w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600 shadow-lg">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={LogoWuni} className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            جامعة بنها
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
        </a>
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
          <div className="flex gap-7 to">
            <button className="dark:text-white text-xl EN">الإنجليزية</button>
            <button className="dark:text-white text-xl AR">العربية</button>

            <img src={EygptFlg} alt="egyptlogo" />
          </div>
          {/* <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
        <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
      </li>
    </ul> */}
        </div>
      </div>
    </nav>
  );
}

export default Main;
