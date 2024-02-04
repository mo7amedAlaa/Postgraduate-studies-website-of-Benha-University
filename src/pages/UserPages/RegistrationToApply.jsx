import React from 'react';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoCaretBack } from 'react-icons/io5';
import { graduatedMenIcon, personaLogo, uniLogo } from '../../assets';

export default function RegistrationToApply() {
  return (
    <div className=" bg-blue-800  min-h-screen">
      <div className="flex container mx-auto items-center justify-around">
        <div>
          <img src={uniLogo} alt="" width={'100px'} height={'100px'} />
        </div>
        <div className="flex-1 text-center">
          <p className=" text-lg md:text-3xl   font-bold ">
            جامعة بنهــــــــــــــا <br />
            التسجيل للتقدم للدراسات العليا
          </p>
        </div>
        <div>
          <img src={graduatedMenIcon} alt="" width={'100px'} height={'100px'} />
        </div>
      </div>
      <div className="  w-3/4 mt-5 mx-auto rounded-xl p-4  bg-white">
        <form action="">
          <div className=" flex items-center mb-5 justify-center">
            <label htmlFor="" className="lableStyle w-1/4  mx-5  ">
              الكلية المراد التسجيل بها(*)
            </label>
            <select
              name="fact"
              className="inputStyle w-2/4  text-center"
              id="fact"
            >
              <option value="الحاسبات والذكاء الاصطناعي ">
                {' '}
                الحاسبات والذكاء الاصطناعي{' '}
              </option>
              <option value="الهندسة"> الهندسة</option>
              <option value=" التربية الرياضية"> التربية الرياضية</option>
              <option value="التربية"> التربية</option>
              <option value="التمريض"> التمريض</option>
              <option value="تجارة"> تجارة</option>
              <option value="اداب"> اداب</option>
            </select>
          </div>

          <div>
            <fieldset className="border my-2 border-gray-600 p-3 ">
              <legend>اسم الطالب بالغة العربية</legend>

              <div className="inline-block  my-2">
                <label htmlFor="" className="lableStyle   mx-5 ">
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
                  الاسم بالكامل(*)
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
                  الاسم بالكامل(*)
                </label>
                <input type="text" className="inputStyle flex-grow  " />
              </div>
            </fieldset>
          </div>
          <div>
            <div className="inline-block my-2">
              <label htmlFor="" className="lableStyle mx-5  ">
                البريد الالكتروني (*){' '}
              </label>
              <input
                type="email  "
                placeholder="example@gmail.com"
                className="inputStyle text-sm"
              />
            </div>
            <div className="inline-block my-2">
              <label htmlFor="" className="lableStyle mx-5  ">
                الجنسية
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
            <div className="inline-block">
              <label htmlFor="IDNUM" className="lableStyle mx-5">
                الرقم القومي:
              </label>
              <input type="text" id="IDNUM" className="inputStyle" />
            </div>
            <div className=" inline-block pb-2">
              <label htmlFor="IDNUM" className="lableStyle mx-5">
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
            <div className="inline-block my-2">
              <label htmlFor="GuardiaName" className="lableStyle mx-5  ">
                كلمة المرور (*){' '}
              </label>
              <input type="text" className="inputStyle" id="GuardiaName" />
            </div>
            <div className="inline-block my-2">
              <label htmlFor="GuardiaName" className="lableStyle mx-5  ">
                تأكيد كلمة المرور (*){' '}
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
              <label htmlFor="maritalStatus" className="lableStyle mx-5  ">
                النوع{' '}
              </label>
              <select
                name="maritalStatus"
                className="inputStyle  text-center"
                id="maritalStatus"
              >
                <option value="ذكر"> ذكر </option>
                <option value="انثي"> انثي</option>
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
                المحمول (*){' '}
              </label>
              <input type="text" className="inputStyle" id="GuardiaName" />
            </div>
          </div>

          <div className="flex justify-center mt-4 gap-5">
            <div className="relative ">
              <input type="submit" value={'حفظ'} className="main-btn" />
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
    </div>
  );
}
