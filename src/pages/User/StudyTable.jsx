import Copyrights from '../../component/Footer/Copyrights';
import { Laypdf, StudyTables, graduatedMenIcon, uniLogo } from '../../assets';

function StudyTable() {
  return (
    <div className="bg-slate-100  flex flex-col    min-h-screen">
      <div className="flex  bg-main   items-center justify-around">
        <div>
          <img src={uniLogo} alt="" width={'100px'} height={'100px'} />
        </div>
        <div className="flex-1 text-center">
          <p className=" text-lg md:text-3xl   font-bold ">
            جامعة بنهــــــــــــــا <br />
            رؤية جدول الامتحانات
          </p>
        </div>
        <div>
          <img src={graduatedMenIcon} alt="" width={'100px'} height={'100px'} />
        </div>
      </div>
      <div className="p-10 container flex-1 mx-auto">
        <h1 className="text-3xl tracking-wider font-bold ">
          جداول الدراسات العليا
        </h1>
        <div>
          <div className="my-5">
            <h2 className="my-5 ">جداول الدراسات العليا 2024-2023</h2>
            <embed
              src={StudyTables}
              type=" "
              className="w-[70%]  min-h-80 mx-auto  "
            />
          </div>
        </div>
      </div>
      <div className="bg-main  px-2  ">
        <Copyrights />
      </div>
    </div>
  );
}

export default StudyTable;
