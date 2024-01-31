import React from "react";
import Navbar from "../NavBar/Navbar";
import LogoUniversity from "../../assets/images/شعار_جامعة_بنها.png";
import { TfiEmail } from "react-icons/tfi";
import { MdOutlinePhoneEnabled } from "react-icons/md";

function MainPage() {
  return (
    <>
      <Navbar />
      <div className="grid grid-cols-3 justify-center items-center gap-4 p-1 font-sans   ">
        <div className=" text-center flex justify-center items-center gap-5">
          <MdOutlinePhoneEnabled size={43} />
          <div className=" ">
            <h2 className="text-md text-start font-semibold		">تواصل معنا</h2>
            <p className="text-gray-400">اترك لنا رسالة لنتواصل معك</p>
          </div>
        </div>
        <div className=" flex justify-center items-center">
          <img
            src={LogoUniversity}
            className=""
            style={{ width: "170px" }}
            alt="شعار الجامعة"
          />
        </div>
        <div className=" text-center flex justify-center items-center gap-6 ">
          <TfiEmail size={43} />
          <div className=" ">
            <h2 className="text-md text-start font-semibold		">تواصل معنا</h2>
            <p className="text-gray-400">اترك لنا رسالة لنتواصل معك</p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-t from-[#51ACD0] to-[#5dc6f0] mt-3 flex justify-center items-center flex-wrap gap-[6rem] p-3 font-sans">
        <div className="">
          <i class="fas fa-book-reader  rounded-md p-1 ml-2"></i>
          الطلاب
        </div>
        <div>
          <i class="fa fa-users  rounded-md p-1 ml-2"></i>هيئة التدريس{" "}
        </div>
        <div>
          الدراسات العليا{" "}
          <i class="fas fa-user-graduate  rounded-md p-1 ml-2"></i>{" "}
        </div>
        <div>
          الخريجين <i class="fas fa-graduation-cap  rounded-md p-1 ml-2"></i>
        </div>
        <div>
          الموظفون <i class="fa fa-users  rounded-md p-1 ml-2"></i>
        </div>
        <div>
          الزائرون <i class="fas fa-globe  rounded-md p-1 ml-2"></i>
        </div>
      </div>
    </>
  );
}

export default MainPage;
