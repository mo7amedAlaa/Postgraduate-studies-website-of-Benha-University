import { facLogo, graduatedMenIcon, uniLogo } from '../../assets';
import { IoReorderThreeOutline } from 'react-icons/io5';

export default function Navbar({ handleSidebarOpen }) {
  return (
<<<<<<< HEAD
    <nav className="nav bg-gradient-to-t from-main to-[#5dc6f0] px-2  py-2 h-16  mb-3 ">
=======
    <nav className="nav bg-gradient-to-t from-[#51ACD0] to-[#5dc6f0] px-2  py-2 h-16 lg:mb-3 font-sans ">
>>>>>>> aba7f9573758f6220b6bf17876210e06c633006e
      <div className="container mx-auto flex flex-row justify-between  items-center">
        <div className="text-5xl md:hidden " onClick={handleSidebarOpen}>
          <IoReorderThreeOutline />
        </div>
        <div className="logo flex items-center justify-between gap-2 ">
          <img
            src={graduatedMenIcon}
            alt="درسات عليا"
            className="w-12 float-start"
          />
          <span className="text-black font-[900] text-[18px]  inline-block     ">
            الدرسات العليا
          </span>
        </div>
        <div className="pageTitle hidden  md:flex  items-center justify-between gap-2 ">
          <img src={facLogo} alt="درسات عليا" className="w-12 float-start" />
          <span className="text-black font-[900] text-[18px]  inline-block font-[Tajawal]     ">
            كلية الحاسبات والذكاء الاصطناعي - جامعة بنها
          </span>
        </div>
        <div className="BUlogo flex items-center justify-between gap-2">
          <img src={uniLogo} alt="درسات عليا" className="w-12 float-start" />
          <span className="text-black font-[900] text-[18px]  inline-block font-[Tajawal]     ">
            جامعة بنها
          </span>
        </div>
      </div>
    </nav>
  );
}
