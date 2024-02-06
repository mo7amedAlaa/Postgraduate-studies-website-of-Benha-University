import React from 'react';
import MainLayout from '../../component/Main/MainLayout';
import { personaLogo } from '../../assets';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoCaretBack } from 'react-icons/io5';

function GradesStudent() {
  return (
    <div className="border rounded">
      <div>
        <form action="">
          <div>
            <fieldset className="border my-2 border-gray-600 p-3 ">
              <legend>درجات الطالب بالتفصيل </legend>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  اسم الطالب
                </label>
                <input type="text" className="inputStyle " />
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5 ">
                  كود الطالب
                </label>
                <input type="text" className="inputStyle" />
              </div>

              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  الدرجة تنسب الى امتحان
                </label>
                <select
                  name="Nationality"
                  className="inputStyle  text-center"
                  id="Nationality"
                >
                  <option value="مصري"> الميدترم </option>
                  <option value="سعودي"> العملى</option>
                  <option value="اخري"> الشفوى</option>
                  <option value="اخري"> الفاينل</option>
                </select>
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  حالة الطالب من الامتحان
                </label>
                <select
                  name="Nationality"
                  className="inputStyle  text-center"
                  id="Nationality"
                >
                  <option value="مصري"> غايب </option>
                  <option value="سعودي"> حاضر</option>
                  <option value="اخري"> اعتذر</option>
                  <option value="اخري"> اخرى</option>
                </select>
              </div>
            </fieldset>
          </div>
          <div className="flex justify-center gap-5 mt-10">
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

      <div class="relative overflow-x-auto mt-10">
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
      </div>
    </div>
  );
}

export default GradesStudent;
