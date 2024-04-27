
import MainLayout from "../../component/Main/MainLayout";
import {  LuUploadCloud } from "react-icons/lu";
import Swal from "sweetalert2";

const ShowAllReports = () => {
  const handleUpload = async () => {
    const { value: file } = await Swal.fire({
      title: "Select image",
      input: "file",
      inputAttributes: {
        accept: "image/*",
        "aria-label": "Upload your profile picture",
      },
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: "Your uploaded picture",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture",
        });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <MainLayout title={"التقارير "}>
      <div>
      <div className="flex justify-center w-100">
              <h1 className="text-3xl font-bold ">   كل التقارير التى تخص الطالب :   </h1>
            </div>
        <div>
          
        </div>
      </div>
    </MainLayout>
  );
};

export default ShowAllReports;
