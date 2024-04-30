import { LuUploadCloud } from 'react-icons/lu';
import Swal from 'sweetalert2';
import MainLayout from '../../component/Main/MainLayout';
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
function UploadAllGrades() {
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
                  رفع درجات المقرر لعام الدراسى 2024 / 2025
                </h2>
                <fieldset className="border my-2 border-gray-600 p-3 ">
                  <legend> رفع درجات المقرر </legend>
                  <div className=" flex items-center justify-center my-2">
                    <div className="flex  gap-10">
                      <button
                        className="main-btn flex-1 flex items-center justify-center gap-3  p-3"
                        onClick={handleUpload}
                      >
                        رفع
                        <LuUploadCloud />
                      </button>
                    </div>
                  </div>
                </fieldset>
              </div>
            </form>
          </div>
          <div className="programs flex justify-center items-center gap-[3rem] flex-wrap  p-3 font-sans  ">
            {/* <div className="w-[80%] grid lg:grid-cols-3 md:grid-cols-2  gap-[2rem] ">
          <div className="card-program  mb-10 border shadow-md rounded-md hover:scale-110 transition-all border-main ">
            <img
              src="https://png.pngtree.com/element_origin_min_pic/17/03/29/e90c1dab2691c73f7a37bdf3da6e3b52.jpg"
              className="w-[100%] h-[13rem]"
              alt="program"
            />

            <p className="text-center font-sans text-2xl p-4">
              المحاضرة الاولى
            </p>
          </div>
          <div className="card-program  mb-10 border shadow-md rounded-md hover:scale-110 transition-all border-main ">
            <img
              src="https://png.pngtree.com/thumb_back/fh260/background/20220314/pngtree-close-up-of-hand-gestures-for-homework-in-class-image_1048146.jpg"
              className="w-[100%] h-[13rem]"
              alt="program"
            />

            <p className="text-center font-sans text-2xl p-4">التمرين الاول</p>
          </div>
          <div className="card-program  mb-10 border shadow-md rounded-md hover:scale-110 transition-all border-main ">
            <img
              src="data:image/jpeg;base64,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"
              className="w-[100%] h-[13rem]"
              alt="program"
            />

            <p className="text-center font-sans text-2xl p-4">
              المشروع النهائى
            </p>
          </div>
        </div> */}
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export default UploadAllGrades;
