import React from 'react';
import MainLayout from '../../component/Main/MainLayout';
import { personaLogo } from '../../assets';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoCaretBack } from 'react-icons/io5';
import { DataGrid } from '@mui/x-data-grid';
import { CiSearch } from "react-icons/ci";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'code', headerName: '  كود الطالب', width: 200 },
  { field: 'subName', headerName: ' اسم الطالب', width: 200 },
  { field: 'deg', headerName: 'الدرجة', width: 200 },
  { field: 'qpa', headerName: 'التقدير', width: 200 },
  { field: 'underrated', headerName: 'الرأفة', width: 200 },

];
const courses = [
  {
    id: 1,
    subName: 'اسم الطالب',
    code: 'SC2X',
    deg: 79,
    qpa: 3.6,
    underrated:10
  },
  {
    id: 2,
    subName: 'اسم الطالب',
    code: 'SC2X',
    deg: 96,
    qpa: 4.6,
    underrated:8
  },
  {
    id: 3,
    subName: 'اسم الطالب',
    code: 'SC2X',
    deg: 55,
    qpa: 3.1,
    underrated:15

  },
  {
    id: 4,
    subName: 'اسم الطالب',
    code: 'SC2X',
    deg: 79,
    qpa: 3.6,
    underrated:10
  },
  {
    id: 5,
    subName: 'اسم الطالب',
    code: 'SC2X',
    deg: 96,
    qpa: 4.6,
    underrated:8
  },
  {
    id: 6,
    subName: 'اسم الطالب',
    code: 'SC2X',
    deg: 55,
    qpa: 3.1,
    underrated:15

  },
  {
    id: 7,
    subName: 'اسم الطالب',
    code: 'SC2X',
    deg: 79,
    qpa: 3.6,
    underrated:10
  },
  {
    id: 8,
    subName: 'اسم الطالب',
    code: 'SC2X',
    deg: 96,
    qpa: 4.6,
    underrated:8
  },
  {
    id: 9,
    subName: 'اسم الطالب',
    code: 'SC2X',
    deg: 55,
    qpa: 3.1,
    underrated:15

  },
  {
    id: 10,
    subName: 'اسم الطالب',
    code: 'SC2X',
    deg: 79,
    qpa: 3.6,
    underrated:10
  },
  {
    id:11,
    subName: 'اسم الطالب',
    code: 'SC2X',
    deg: 96,
    qpa: 4.6,
    underrated:8
  },
  {
    id: 12,
    subName: 'اسم الطالب',
    code: 'SC2X',
    deg: 55,
    qpa: 3.1,
    underrated:15

  },
  {
    id: 13,
    subName: 'اسم الطالب',
    code: 'SC2X',
    deg: 72,
    qpa: 3.2,
    underrated:15

  },
  {
    id: 14,
    subName: 'اسم الطالب',
    code: 'SC2X',
    deg: 45,
    qpa: 2.5,
    underrated:12
  },
  {
    id: 15,
    subName: 'اسم الطالب',
    code: 'SC2X',
    deg: 79,
    qpa: 3.6,
    underrated:3
  },
];
function GradesStudent() {
  return (

    <MainLayout>
      
     
      <div>
        <form action="">
          <div>
            <fieldset className="border my-2 border-gray-600 p-3 ">
              <legend>درجات الطالب بالتفصيل </legend>
              <div className="inline-block my-2">
                <label htmlFor="" className=" mx-5  ">
                  اسم الطالب
                </label>
                <input type="text" placeholder='ادخل اسمك الكامل' className="inputStyle p-4 outline-none rounded-md hover:border-main transition-all cursor-pointer" />
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className=" mx-5 ">
                  كود الطالب
                </label>
                <input type="text" placeholder='ادخل الكود الخاص بك' className="inputStyle p-4 outline-none rounded-md hover:border-main transition-all cursor-pointer"  />
              </div>

              <div className="inline-block my-2">
                <label htmlFor="" className=" mx-5  ">
                  كود المادة
                </label>
                <input type="text"  placeholder='ادخل كود المادة' className="inputStyle p-4 outline-none rounded-md hover:border-main transition-all cursor-pointer"  />
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className=" mx-5  ">
                  الدرجة
                </label>
                <input type="text" className="inputStyle p-4 outline-none rounded-md hover:border-main transition-all cursor-pointer"  placeholder='ادخل الدرجة' />
              </div>
            </fieldset>
          </div>
          <div className="flex justify-center gap-5 mt-1 mb-3">
            <div className="relative ">
              <input type="submit" value={'اضافة'} className="main-btn" />
              <IoMdAddCircleOutline className=" absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2  right-4" />
            </div>
            <div className="relative">
              <button type="button" className="main-btn ">
                بحث
              </button>
              <CiSearch 
               className=" absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2  right-4" />
            </div>
          </div>
        </form>
      </div>
      <div className=" bg-slate-100     min-h-screen">
      
      <div className="p-10 container mx-auto">
        <div style={{ height: 400, width: '100%', direction: 'ltr' }}>
          <DataGrid
              checkboxSelection
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
   
  );
}

export default GradesStudent;
