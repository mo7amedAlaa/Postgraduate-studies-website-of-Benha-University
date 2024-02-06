import React from 'react';
import MainLayout from '../../component/Main/MainLayout';
import { personaLogo } from '../../assets';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoCaretBack } from 'react-icons/io5';
import { DataGrid } from '@mui/x-data-grid';
import { graduatedMenIcon, ifoPdf, uniLogo } from '../../assets';
import { LuDownloadCloud } from 'react-icons/lu';
import Copyrights from '../../component/Footer/copyrights';
import { IoOpenOutline } from 'react-icons/io5';
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
function GradesStudent() {
  return (
    <div className="border rounded">
      <div className="flex  bg-main   items-center justify-around ">
        <div>
          <img src={uniLogo} alt="" width={'100px'} height={'100px'} />
        </div>
        <div className="flex-1 text-center">
          <p className=" text-lg md:text-3xl   font-bold ">
            جامعة بنهــــــــــــــا <br />
            اضافة الدرجات المستحقة للطالب
          </p>
        </div>
        <div>
          <img src={graduatedMenIcon} alt="" width={'100px'} height={'100px'} />
        </div>
      </div>
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
                الرجوع
              </button>
              <IoCaretBack className=" absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2  right-4" />
            </div>
          </div>
        </form>
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
      <div className="bg-main  px-2  ">
        <Copyrights />
      </div>
    </div>
      {/* <div class="relative overflow-x-auto mt-10">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-main dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-main text-white font-sans text-xl text-center">
              <th scope="col" class="px-6 py-3">
                كود الطالب
              </th>
              <th scope="col" class="px-6 py-3">
                اسم الطالب
              </th>
              <th scope="col" class="px-6 py-3">
                حالة الطالب
              </th>
              <th scope="col" class="px-6 py-3">
                نوع الامتحان
              </th>
              <th scope="col" class="px-6 py-3">
                المجموع
              </th>
              <th scope="col" class="px-6 py-3">
                الاحداث
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                302125756182
              </th>
              <td class="px-6 py-4 font-medium whitespace-nowrap dark:text-white text-xl">
                محمد السيد
              </td>
              <td class="px-6 py-4 font-medium whitespace-nowrap dark:text-white text-xl">
                ناجح
              </td>
              <td class="px-6 py-4 font-medium whitespace-nowrap dark:text-white text-xl">
                ميدترم
              </td>
              <td class="px-6 py-4 font-medium whitespace-nowrap dark:text-white text-xl">
                13
              </td>
              <td className="px-6 py-4">
                <div className="flex gap-5">
                  <button className="font-sans bg-main shadow-md text-white p-2 rounded">
                    Edit
                  </button>
                  <button className="font-sans bg-red-500 shadow-md text-white p-2 rounded">
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
}

export default GradesStudent;
