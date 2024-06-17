import Copyrights from '../Footer/copyrights';
import { Link } from 'react-router-dom';
import { FaAddressCard } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';

export default function MainLayout({ title, children }) {
  return (
    <div className=" h-[calc(100vh-(5.3rem))] mt-3  ">
      <ToastContainer />

      <div className=" h-[90%]  shadow-slate-400  shadow-inner       rounded-2xl   ">
        <div className="flex justify-start gap-2 h-[5%] rounded-t-2xl px-5 py-1 items-center w-full  bg-main ">
          <div className="">
            <FaAddressCard />
          </div>
          <span>{title}</span>
        </div>
        <div className=" overflow-y-scroll h-[90%] py-5 px-3 bg-slate-100     ">
          {children}
        </div>
        <div className=" flex justify-center gap-2 h-[5%]  rounded-b-2xl px-5 py-1 items-center w-full  bg-main">
          <Link to={'/admin'}>الرجوع الي شاشة الانظمة</Link>|<Link>الخروج</Link>
        </div>
      </div>
      <Copyrights />
    </div>
  );
}
