import { LuUploadCloud } from 'react-icons/lu';
import Swal from 'sweetalert2';
import MainLayout from '../../component/Main/MainLayout';
// import LayoutProf from './LayoutProf';
// import LayoutProf from './LayoutProf';
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
function ApplyPlanResearch() {
  return (
    <>
      <MainLayout>
        <div>
          <div className="container mx-auto border rounded-md my-5  ">
            <form
              action=""
              className="p-14"
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div>
                <h2 className=" font-sans text-3xl font-semibold  text-center mb-5">
                  {' '}
                  الخطط البحثية
                </h2>
                <fieldset className="border my-2 border-gray-600 p-3 ">
                  <legend> رفع الخطة البحثية </legend>
                  <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
                    <div className=" flex items-center justify-between my-2">
                      <label
                        htmlFor=""
                        className=" text-2xl font-bold  mx-5 "
                      >
                        الخطط البحثية لعام 2024 / 2025
                      </label>
                      <div className="flex  gap-10">
                        <button
                          className="main-btn flex-1 flex items-center justify-center gap-3 p-3"
                          onClick={handleUpload}
                        >
                          رفع
                          <LuUploadCloud />
                        </button>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </form>
          </div>
          <div className="programs flex justify-center items-center gap-[3rem] flex-wrap  p-3 font-sans  ">
            <div className="w-[80%] grid lg:grid-cols-3 md:grid-cols-2  gap-[2rem] ">
              <div className="card-program  mb-10 border shadow-md rounded-md hover:scale-110 transition-all border-main ">
                <img
                  src="https://png.pngtree.com/element_origin_min_pic/17/03/29/e90c1dab2691c73f7a37bdf3da6e3b52.jpg"
                  className="w-[100%] h-[13rem]"
                  alt="program"
                />

                <p className="text-center font-sans text-2xl p-4">
                  الخطة البحثية
                </p>
              </div>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default ApplyPlanResearch;
