import { Laypdf, graduatedMenIcon, uniLogo } from '../../assets';
import Copyrights from '../../component/Footer/Copyrights';

function ExamTable() {
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
          جداول امتحانات الدراسات العليا
        </h1>
        <div>
          <div className="my-5">
            <h2 className="my-5 ">جداول امتحانات الدراسات العليا 2024-2023</h2>
            <ul className="list-disc ms-10  ">
              <li>
                <a href={Laypdf} target="_blank" rel="noopener noreferrer">
                  الفصل الدراسى الأول
                </a>
              </li>
              <li>
                <a href="">الفصل الدراسى الثاني</a>
              </li>
            </ul>
          </div>
          <div className="my-5">
            <h2 className="my-5 ">جداول امتحانات الدراسات العليا 2023-2022</h2>
            <ul className="list-disc ms-10  ">
              <li>
                <a href="">الفصل الدراسى الأول</a>
              </li>
              <li>
                <a href="">الفصل الدراسى الثاني</a>
              </li>
            </ul>
          </div>
          <div className="my-5">
            <h2 className="my-5 ">جداول امتحانات الدراسات العليا 2022-2021</h2>
            <ul className="list-disc ms-10  ">
              <li>
                <a href="">الفصل الدراسى الأول</a>
              </li>
              <li>
                <a href="">الفصل الدراسى الثاني</a>
              </li>
            </ul>
          </div>
          <div className="my-5">
            <h2 className="my-5 ">جداول امتحانات الدراسات العليا 2021-2020</h2>
            <ul className="list-disc ms-10  ">
              <li>
                <a href="">الفصل الدراسى الأول</a>
              </li>
              <li>
                <a href="">الفصل الدراسى الثاني</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-main  px-2  ">
        <Copyrights />
      </div>
    </div>
  );
}

export default ExamTable;
