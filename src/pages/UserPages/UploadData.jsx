import { cx, graduatedMenIcon, ifoPdf, uniLogo } from '../../assets';
import { LuAlertOctagon, LuDownloadCloud, LuUploadCloud } from 'react-icons/lu';
import Swal from 'sweetalert2';

export default function UploadData() {
  const handleUpload = async () => {
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        accept: 'image/*',
        'aria-label': 'Upload your profile picture',
      },
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: 'Your uploaded picture',
          imageUrl: e.target.result,
          imageAlt: 'The uploaded picture',
        });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div>
      <div className="flex container mx-auto items-center justify-around ">
        <div>
          <img src={uniLogo} alt="" width={'100px'} height={'100px'} />
        </div>
        <div className="flex-1 text-center ">
          <p className=" text-lg md:text-3xl   font-bold ">
            جامعة بنهــــــــــــــا <br />
            رفع البيانات المطلوبة للدرسات العليا{' '}
          </p>
        </div>
        <div>
          <img src={graduatedMenIcon} alt="" width={'100px'} height={'100px'} />
        </div>
      </div>
      <div className="main container mx-auto">
        <p className="font-bold text-sm mt-3 flex items-center  ">
          <LuAlertOctagon className="mx-2" />
          برجاء استكمال البيانات التالية والتحقق من وضوحها وسلامتها لضمان وصولها
          بشكل صحيح .
        </p>
      </div>
      <div className="container mx-auto border rounded-md my-5  ">
        <form
          action=""
          className="p-14"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex gap-5  justify-between my-5">
            <h1 className="text-2xl ">1- الاوراق والملفات المطلوبة </h1>
            <div className="flex w-1/6 items-center  gap-10">
              <a
                href={ifoPdf}
                download="reqFile"
                className="main-btn flex-1 flex items-center justify-center"
              >
                تنزيل
                <LuDownloadCloud />
              </a>
            </div>
          </div>
          <div className="flex gap-5 my-5  justify-between ">
            <h1 className="text-2xl">
              {' '}
              2- شهادة البكالوريوس(مؤقتة)العدد 1 اصل + صورة
            </h1>
            <div className="flex w-1/6 gap-10">
              <button
                className="main-btn flex-1 flex items-center justify-center gap-3"
                onClick={handleUpload}
              >
                رفع
                <LuUploadCloud />
              </button>
            </div>
          </div>
          <div className="flex gap-5 my-5  justify-between ">
            <h1 className="text-2xl">
              {' '}
              3- شهادة تقديرات اربع سنوات دراسية العدد 1 اصل + صورة{' '}
            </h1>
            <div className="flex w-1/6 gap-10">
              <button
                className="main-btn flex flex-1 items-center justify-center gap-3"
                onClick={handleUpload}
              >
                رفع
                <LuUploadCloud />
              </button>
            </div>
          </div>
          <div className="flex gap-5 my-5  justify-between ">
            <h1 className="text-2xl">
              {' '}
              4. شهادة الماجستير(بالنسبة للقيد لدرجة الدكتوراة) العدد 1 اصل +
              صورة{' '}
            </h1>
            <div className="flex w-1/6 gap-10">
              <button
                className="main-btn flex flex-1 items-center justify-center gap-3"
                onClick={handleUpload}
              >
                رفع
                <LuUploadCloud />
              </button>
            </div>
          </div>
          <div className="flex gap-5 my-5  justify-between ">
            <h1 className="text-2xl"> 5- شهادة الميلاد + صورة منها</h1>
            <div className="flex w-1/6 gap-10">
              <button
                className="main-btn flex flex-1 items-center justify-center gap-3"
                onClick={handleUpload}
              >
                رفع
                <LuUploadCloud />
              </button>
            </div>
          </div>
          <div className="flex gap-5 my-5  justify-between ">
            <h1 className="text-2xl">6- صورة البطاقة الشخصية </h1>
            <div className="flex w-1/6 gap-10">
              <button
                className="main-btn flex flex-1 items-center justify-center gap-3"
                onClick={handleUpload}
              >
                رفع
                <LuUploadCloud />
              </button>
            </div>
          </div>
          <div className="flex gap-5 my-5  justify-between ">
            <h1 className="text-2xl">7- الموقف التجنيدي للذكور + صورة منه </h1>
            <div className="flex w-1/6 gap-10">
              <button
                className="main-btn flex flex-1 items-center justify-center gap-3"
                onClick={handleUpload}
              >
                رفع
                <LuUploadCloud />
              </button>
            </div>
          </div>
          <div className="flex gap-5 my-5  justify-between ">
            <h1 className="text-2xl ">8- موافقة جهة العمل + صورة منها </h1>
            <div className="flex w-1/6 gap-10">
              <button
                className="main-btn flex flex-1  items-center justify-center gap-3"
                onClick={handleUpload}
              >
                رفع
                <LuUploadCloud />
              </button>
            </div>
          </div>
          <div className="flex gap-5 my-5  justify-between ">
            <h1 className="text-2xl">9- عدد 4 صورة شخصية 4*6</h1>
            <div className="flex w-1/6 gap-10">
              <button
                className="main-btn flex flex-1 items-center justify-center gap-3"
                onClick={handleUpload}
              >
                رفع
                <LuUploadCloud />
              </button>
            </div>
          </div>
          <div className="flex gap-5 my-5  justify-between ">
            <h1 className="text-2xl">
              {' '}
              10- طلب قيد باسم الاستاذ الدكتور\وكيل الكلية للدراسات العليا
              والبحوث
            </h1>
            <div className="flex w-1/6 gap-10">
              <a
                href={cx}
                download="طلب قيد"
                className="main-btn flex-1 flex items-center justify-center gap-3"
              >
                تنزيل
                <LuDownloadCloud />
              </a>
              <button
                className="main-btn flex flex-1 items-center justify-center gap-3"
                onClick={handleUpload}
              >
                رفع
                <LuUploadCloud />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
