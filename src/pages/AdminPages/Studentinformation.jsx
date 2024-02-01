import React from 'react';
import MainLayout from '../../component/Main/MainLayout';
import { personaLogo } from '../../assets';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoCaretBack } from 'react-icons/io5';

export default function Studentinformation() {
  return (
    <MainLayout title={'بيانات الطالب'}>
      <div>
        <form action="">
          <div className="flex">
            <div className="flex-1">
              <div className=" pb-2">
                <label htmlFor="IDNUM" className="lableStyle">
                  الرقم القومي:
                </label>
                <input type="text" id="IDNUM" className="inputStyle" />
              </div>
              <div className=" pb-2">
                <label htmlFor="IDNUM" className="lableStyle">
                  الديانة:
                </label>
                <select
                  name="Religion"
                  className="inputStyle  text-center"
                  id="Religion"
                >
                  <option value="مسلم"> مسلم </option>
                  <option value="مسيحي"> مسيحي</option>
                  <option value="اخري"> اخري</option>
                </select>
              </div>
              <div className="pb-2">
                <label htmlFor="gender" className="  lableStyle">
                  النوع:
                </label>
                <div className="inline-block  ">
                  <div className="inline  m-3  ">
                    <input type="radio" name="gender" id="male" />
                    <label htmlFor="male">ذكر</label>
                  </div>
                  <div className="inline m-3 ">
                    <input type="radio" name="gender" id="female" />
                    <label htmlFor="female">انثي</label>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex w-[200px] h-[100px]  justify-end">
              <img
                src={personaLogo}
                alt=""
                width={'100px'}
                className="rounded-sm"
                height={'100px'}
              />
            </div>
          </div>
          <div>
            <fieldset className="border my-2 border-gray-600 p-3 ">
              <legend>اسم الطالب بالغة العربية</legend>

              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5 ">
                  اسم الطالب
                </label>
                <input type="text" className="inputStyle " />
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  اسم الاب
                </label>
                <input type="text" className="inputStyle " />
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  اسم الجد
                </label>
                <input type="text" className="inputStyle " />
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  اللقب
                </label>
                <input type="text" className="inputStyle" />
              </div>
              <div className="flex items-center  my-2">
                <label htmlFor="" className="lableStyle  mx-5">
                  الاسم بالكامل
                </label>
                <input type="text" className="inputStyle flex-grow  " />
              </div>
            </fieldset>
          </div>
          <div>
            <fieldset className="border my-2 border-gray-600 p-3 ">
              <legend>اسم الطالب بالغة الإنجليزية</legend>

              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5 ">
                  اسم الطالب
                </label>
                <input type="text" className="inputStyle " />
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  اسم الاب
                </label>
                <input type="text" className="inputStyle " />
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  اسم الجد
                </label>
                <input type="text" className="inputStyle " />
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  اللقب
                </label>
                <input type="text" className="inputStyle" />
              </div>
              <div className="flex items-center  my-2">
                <label htmlFor="" className="lableStyle  mx-5">
                  الاسم بالكامل
                </label>
                <input type="text" className="inputStyle flex-grow  " />
              </div>
            </fieldset>
          </div>
          <div>
            <div className="inline-block my-2">
              <label htmlFor="" className="lableStyle mx-5  ">
                الجنسية الاولي
              </label>
              <select
                name="Nationality"
                className="inputStyle  text-center"
                id="Nationality"
              >
                <option value="مصري"> مصري </option>
                <option value="سعودي"> سعودي</option>
                <option value="اخري"> اخري</option>
              </select>
            </div>
            <div className="inline-block my-2">
              <label htmlFor="" className="lableStyle mx-5  ">
                الجنسية الثانية
              </label>
              <select
                name="Nationality"
                className="inputStyle  text-center"
                id="Nationality"
              >
                <option value="مصري"> مصري </option>
                <option value="سعودي"> سعودي</option>
                <option value="اخري"> اخري</option>
              </select>
            </div>
            <div className="inline-block my-2">
              <label htmlFor="GuardiaName" className="lableStyle mx-5  ">
                اسم ولي الامر
              </label>
              <input type="text" className="inputStyle" id="GuardiaName" />
            </div>
            <div className="inline-block my-2">
              <label htmlFor="maritalStatus" className="lableStyle mx-5  ">
                الحالة الاجتماعية
              </label>
              <select
                name="maritalStatus"
                className="inputStyle  text-center"
                id="maritalStatus"
              >
                <option value="اعزب"> اعزب </option>
                <option value="متزوج"> متزوج</option>
                <option value="مطلق"> مطلق</option>
                <option value="اخري"> اخري</option>
              </select>
            </div>
            <div className="inline-block my-2">
              <label htmlFor="" className="lableStyle mx-5  ">
                وظيفة الطالب
              </label>
              <input type="text" className="inputStyle" id="GuardiaName" />
            </div>
            <div className="inline-block my-2">
              <label htmlFor="maritalStatus" className="lableStyle mx-5  ">
                درجة القرابة
              </label>
              <select
                name="maritalStatus"
                className="inputStyle  text-center"
                id="maritalStatus"
              >
                <option value="درجة اولي"> درجة اولي </option>
                <option value="درجة ثانية"> درجة ثانية</option>
                <option value="اخري"> اخري</option>
              </select>
            </div>
          </div>
          <div>
            <fieldset className="border my-2 border-gray-600 p-3 ">
              <legend>الطالب الوافد</legend>

              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  جنسية الاب
                </label>
                <select
                  name="Nationality"
                  className="inputStyle  text-center"
                  id="Nationality"
                >
                  <option value="مصري"> مصري </option>
                  <option value="سعودي"> سعودي</option>
                  <option value="اخري"> اخري</option>
                </select>
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  جنسية الام
                </label>
                <select
                  name="Nationality"
                  className="inputStyle  text-center"
                  id="Nationality"
                >
                  <option value="مصري"> مصرية </option>
                  <option value="سعودي"> سعودية</option>
                  <option value="اخري"> اخري</option>
                </select>
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  المورد المالي
                </label>
                <select
                  name="Nationality"
                  className="inputStyle  text-center"
                  id="Nationality"
                >
                  <option value="حيازات السندات المتداولة">
                    {' '}
                    حيازات السندات المتداولة
                  </option>
                  <option value="الشيكات"> الشيكات</option>
                  <option value="اخري"> اخري</option>
                </select>
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  جهة التموبل
                </label>
                <input type="text" className="inputStyle " />
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  تاريخ موافقة الامن
                </label>
                <input type="date" className="inputStyle " />
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  جهة الرجوع
                </label>
                <input type="text" className="inputStyle" />
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  تاريخ بداية الاقامة
                </label>
                <input type="date" className="inputStyle " />
              </div>
              <div className="inline-block my-2">
                <label htmlFor="" className="lableStyle mx-5  ">
                  تاريخ نهاية الاقامة
                </label>
                <input type="date" className="inputStyle " />
              </div>
            </fieldset>
          </div>
          <div className="flex justify-center gap-5">
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
    </MainLayout>
  );
}
