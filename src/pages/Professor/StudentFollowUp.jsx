import React from "react";
import { cx, ifoPdf } from "../../assets";

import MainLayout from "../../component/Main/MainLayout";
import { LuDownloadCloud, LuUploadCloud } from "react-icons/lu";
import Swal from "sweetalert2";

const StudentFollowUp = () => {
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
    <MainLayout title={"تقرير لمتابعة الطالب"}>
      <div>
      <div className="flex justify-center w-100">
              <h1 className="text-3xl font-bold ">   تقديم التقرير به كل تفاصيل الطالب اثناء المتابعة </h1>
            </div>
        <div>
          <div className="flex gap-5  justify-center my-5">
            <div className="flex flex-col items-center justify-center gap-5 my-5">
              <h1 className="text-2xl">
                {" "}
                ارسال التقرير الى رئيس القسم للمتابعة
              </h1>
              <div className="flex gap-1">
                
                <button
                  className="main-btn flex flex-1 items-center justify-center gap-3"
                  onClick={handleUpload}
                >
                  ارسال
                  <LuUploadCloud />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudentFollowUp;
