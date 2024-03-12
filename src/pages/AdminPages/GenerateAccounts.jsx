import React from 'react'
import MainLayout from '../../component/Main/MainLayout'
import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoCaretBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';
import Copyrights from '../../component/Footer/Copyrights';

function GenerateAccounts() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'code', headerName: 'كود المادة', width: 200 },
    { field: 'subName', headerName: ' اسم المادة', width: 200 },
    { field: 'deg', headerName: 'الدرجة', width: 200 },
    { field: 'qpa', headerName: 'التقدير', width: 200 },
  ];

  const courses = [
    {
      id: 1,
      subName: 'اسم المادة',
      code: 'SC2X',
      deg: 79,
      qpa: 3.6,
    },
    {
      id: 2,
      subName: 'اسم المادة',
      code: 'SC2X',
      deg: 96,
      qpa: 4.6,
    },
    {
      id: 3,
      subName: 'اسم المادة',
      code: 'SC2X',
      deg: 55,
      qpa: 3.1,
    },
    {
      id: 4,
      subName: 'اسم المادة',
      code: 'SC2X',
      deg: 72,
      qpa: 3.2,
    },
    {
      id: 5,
      subName: 'اسم المادة',
      code: 'SC2X',
      deg: 45,
      qpa: 2.5,
    },
    {
      id: 6,
      subName: 'اسم المادة',
      code: 'SC2X',
      deg: 79,
      qpa: 3.6,
    },
  ];
  return (
    <MainLayout>
         <fieldset className="border my-2 border-gray-600 p-3 ">
              <legend>   انشاء ايميل جامعى للطالب</legend>

              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5 ">
                  اسم الطالب
                </label>
                <input type="text" className="inputStyle " />
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                   الرقم القومى
                </label>
                <input type="text" className="inputStyle " />
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                   كود الطالب
                </label>
                <input type="text" className="inputStyle " />
                
              </div>
              <div className="flex justify-center gap-5 mt-5">

              <div className="relative ">
              <input type="submit" value={'انشاء'} className="main-btn" />
              <IoMdAddCircleOutline className=" absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2  right-4" />
            </div>
            <div className="relative">
              <button type="button" className="main-btn ">
                الرجوع
              </button>
              <IoCaretBack className=" absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2  right-4" />
            </div>
             </div>
       
            </fieldset>
            <div className="graduates mt-5 mb-5 flex lg:justify-center flex-col">
        <div className="  w-[100%] gap-10 text-center">
          <h2 className="bg-main text-white text-4xl p-2 font-sans lg:w-[100%] text-center rounded-md">
            الاجراءات المتبعة لانشاء الايميل الجامعى للطالب
          </h2>
        </div>
        <div className="">
          <div className="text-2xl p-2 font-semibold font-sans w-[100%] text-start mt-3 flex flex-col">
            <Link to="/upload-data">
           1.  اسم الطالب بناخد اسمه وناخد اخر 6 ارقام من رقمه القومى 
            </Link>
            <Link to="" className="mt-5">
            2.اختصار اسم الكلية 

            </Link>
            <Link to="" className="mt-5">
              3. اختصار اسم الجامعة
            </Link>
            <Link to="" className="mt-5">
              4.   نطاق إلكتروني أو امتداد للمواقع الإلكترونية 
            </Link>
            <Link to="" className="mt-5">
              5.  اختصار الدولة الذى يدرس فيها الطالب   
            </Link>
            
          </div>
        </div>
      </div>
      <div className=" bg-slate-100     min-h-screen">
      <div className="p-10 container mx-auto">
        <div style={{ height: 400, width: '100%', direction: 'ltr' }}>
          <DataGrid
            rows={courses}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
      </div>
    
       </div>
    </MainLayout>
  )
}

export default GenerateAccounts
