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
    <nav className="bg-white dark:bg-main     w-full z-20 top-0 start-0 border-gray-200 dark:border-gray-600 shadow-lg">
      <div className=" flex flex-wrap items-center justify-between   p-4">
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
        </div>
      </div>
    </nav>
  );
}

export default Main;
