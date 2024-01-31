import { facLogo, graduatedMenIcon, uniLogo } from '../../assets';

export default function Navbar() {
  return (
    <nav className="nav bg-gradient-to-t from-[#51ACD0] to-[#5dc6f0] px-2  py-2 h-16 lg:mb-3 ">
      <div className="container mx-auto flex flex-row justify-between  items-center">
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
