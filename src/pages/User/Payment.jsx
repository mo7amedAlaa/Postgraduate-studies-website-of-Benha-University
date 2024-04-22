import { graduatedMenIcon, uniLogo } from '../../assets';
import { LuAlertOctagon } from 'react-icons/lu';
import { IoDocumentLockOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

export default function Payment() {
  return (
    <div className="">
      <div className="   min-h-screen min-w-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
        <div className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700">
          <div className="w-full pt-1 pb-5">
            <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
              <img src={graduatedMenIcon} alt="" />
            </div>
          </div>
          <div className="mb-7">
            <h1 className="text-center font-bold text-xl uppercase">
              معلومات الدفع الآمنة الخاصة بالدرسات العليا
            </h1>
            <p className="font-bold text-sm mt-3 flex items-center  ">
              <LuAlertOctagon />
              هذه المعلومات خاصة بحسابك المسجل به الان وبناءعليه سيتم إتمام
              عملية الدفع للحساب الاكاديمي المسجل به .
            </p>
          </div>
          <div className="mb-3 flex -mx-2">
            <div className="px-2">
              <label
                htmlFor="type1"
                className="flex items-center cursor-pointer"
              >
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type1"
                  checked
                />
                <img
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  className="h-8 ml-3"
                />
              </label>
            </div>
            <div className="px-2">
              <label
                htmlFor="type2"
                className="flex items-center cursor-pointer"
              >
                <input
                  type="radio"
                  className="form-radio h-5 w-5 text-indigo-500"
                  name="type"
                  id="type2"
                />
                <img
                  src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                  className="h-8 ml-3"
                />
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">
              الاسم على البطاقة
            </label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="محمد علاء"
                type="text"
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">رقم البطاقة</label>
            <div>
              <input
                className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="0000 0000 0000 0000"
                type="text"
              />
            </div>
          </div>
          <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
              <label className="font-bold text-sm mb-2 ml-1">
                تاريخ انتهاء الصلاحية
              </label>
              <div>
                <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                  <option value="01">01 - يناير</option>
                  <option value="02">02 - فبراير</option>
                  <option value="03">03 - مارس</option>
                  <option value="04">04 - أبريل</option>
                  <option value="05">05 - مايو</option>
                  <option value="06">06 - يونيو</option>
                  <option value="07">07 - يوليو</option>
                  <option value="08">08 - أغسطس</option>
                  <option value="09">09 - سبتمبر</option>
                  <option value="10">10 - أكتوبر</option>
                  <option value="11">11 - نوفمبر</option>
                  <option value="12">12 - ديسمبر</option>
                </select>
              </div>
            </div>
            <div className="px-2 w-1/2">
              <select className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
                <option value="2028">2028</option>
                <option value="2029">2029</option>
              </select>
            </div>
          </div>
          <div className="mb-10">
            <label className="font-bold text-sm mb-2 ml-1">رمز الحماية</label>
            <div>
              <input
                className="w-32 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                placeholder="000"
                type="text"
              />
            </div>
          </div>
          <div>
            <button className="flex items-center justify-center w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">
              <IoDocumentLockOutline />
              ادفع الآن
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <Link
            to="/#"
            className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
          >
            <img
              className="object-cover object-center w-full h-full rounded-full"
              src={uniLogo}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
