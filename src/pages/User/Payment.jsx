import React, { useState } from 'react';
import { graduatedMenIcon, uniLogo } from '../../assets';
import { LuAlertOctagon } from 'react-icons/lu';
import { IoDocumentLockOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2'; // استيراد مكتبة SweetAlert
import { SetUserInfo } from '../../Redux/Slices/userStatusSlice';
import { setStudentNotifaction } from '../../Redux/Slices/notificationsSlice';

export default function Payment() {
  const userInfo = useSelector((state) => state.user.UserInfo);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    cardNumber: '',
    expiryMonth: '01',
    expiryYear: '2024',
    securityCode: '',
    paymentType: 'card1',
  });

  const [errors, setErrors] = useState({});

  const cardInfo = {
    card1: {
      name: 'Mohamed Alaa',
      cardNumber: '1287 5678 9012 3456',
      expiryMonth: '01',
      expiryYear: '2024',
      securityCode: '745',
    },
    card2: {
      name: 'Ali Ahmed',
      cardNumber: '9876 5432 1098 7654',
      expiryMonth: '02',
      expiryYear: '2025',
      securityCode: '456',
    },
    card3: {
      name: 'Au Err',
      cardNumber: '1234 5678 9012 3456',
      expiryMonth: '01',
      expiryYear: '2024',
      securityCode: '705',
    },
    card4: {
      name: 'Ali Ahmed',
      cardNumber: '9878 5432 1098 7654',
      expiryMonth: '02',
      expiryYear: '2025',
      securityCode: '406',
    },
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    const selectedCard = cardInfo[formData.paymentType];

    if (!formData.name) newErrors.name = 'اسم البطاقة مطلوب';
    if (!formData.cardNumber) newErrors.cardNumber = 'رقم البطاقة مطلوب';
    else if (formData.cardNumber !== selectedCard.cardNumber)
      newErrors.cardNumber = 'رقم البطاقة غير صحيح';
    if (!formData.expiryMonth || !formData.expiryYear)
      newErrors.expiryDate = 'تاريخ انتهاء الصلاحية مطلوب';
    else if (
      formData.expiryMonth !== selectedCard.expiryMonth ||
      formData.expiryYear !== selectedCard.expiryYear
    )
      newErrors.expiryDate = 'تاريخ انتهاء الصلاحية غير صحيح';
    if (!formData.securityCode) newErrors.securityCode = 'رمز الحماية مطلوب';
    else if (formData.securityCode !== selectedCard.securityCode)
      newErrors.securityCode = 'رمز الحماية غير صحيح';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      Swal.fire({
        title: 'تأكيد عملية الدفع',
        text: 'هل أنت متأكد أنك تريد تنفيذ عملية الدفع؟',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'نعم، تأكيد',
        cancelButtonText: 'لا، إلغاء',
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(
            SetUserInfo({
              user_data: { ...userInfo.user_data, payment: 'Done' },
              token: userInfo.token,
            })
          );
          dispatch(
            setStudentNotifaction({
              id: 1,
              message: 'تم الدفع بنجاح تم فتح الخدمات المتوقفة',
              type: 'suc',
            })
          );
          Swal.fire('تمت العملية!', 'تمت عملية الدفع بنجاح.', 'success');
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('تم الإلغاء', 'تم إلغاء عملية الدفع.', 'error');
        }
      });
    }
  };

  return (
    <div className="min-h-screen min-w-screen bg-gray-200 flex items-center justify-center px-5 pb-10 pt-16">
      <form
        className="w-full mx-auto rounded-lg bg-white shadow-lg p-5 text-gray-700"
        onSubmit={handleSubmit}
      >
        <div className="w-full pt-1 pb-5">
          <div className="bg-indigo-500 text-white overflow-hidden rounded-full w-20 h-20 -mt-16 mx-auto shadow-lg flex justify-center items-center">
            <img src={graduatedMenIcon} alt="Graduated Men Icon" />
          </div>
        </div>
        <div className="mb-7">
          <h1 className="text-center font-bold text-xl uppercase">
            معلومات الدفع الآمنة الخاصة بالدراسات العليا
          </h1>
          <p className="font-bold text-sm mt-3 flex items-center">
            <LuAlertOctagon className="mr-2" />
            هذه المعلومات خاصة بحسابك المسجل به الآن وبناءً عليه سيتم إتمام
            عملية الدفع للحساب الأكاديمي المسجل به.
          </p>
        </div>
        <div className="mb-3 flex -mx-2">
          <div className="px-2">
            <label htmlFor="card1" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-indigo-500"
                name="paymentType"
                id="card1"
                value="card1"
                checked={formData.paymentType === 'card1'}
                onChange={handleChange}
              />
              <img
                src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                className="h-8 ml-3"
                alt="Card Type 1"
              />
            </label>
          </div>
          <div className="px-2">
            <label htmlFor="card2" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className="form-radio h-5 w-5 text-indigo-500"
                name="paymentType"
                id="card2"
                value="card2"
                checked={formData.paymentType === 'card2'}
                onChange={handleChange}
              />
              <img
                src="https://www.sketchappsources.com/resources/source-image/PayPalCard.png"
                className="h-8 ml-3"
                alt="Card Type 2"
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
              className={`w-full px-3 py-2 mb-1 border-2 rounded-md focus:outline-none transition-colors ${
                errors.name
                  ? 'border-red-500'
                  : 'border-gray-200 focus:border-indigo-500'
              }`}
              placeholder={cardInfo[formData.paymentType].name}
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
          </div>
        </div>
        <div className="mb-3">
          <label className="font-bold text-sm mb-2 ml-1">رقم البطاقة</label>
          <div>
            <input
              className={`w-full px-3 py-2 mb-1 border-2 rounded-md focus:outline-none transition-colors ${
                errors.cardNumber
                  ? 'border-red-500'
                  : 'border-gray-200 focus:border-indigo-500'
              }`}
              placeholder={cardInfo[formData.paymentType].cardNumber}
              name="cardNumber"
              type="text"
              value={formData.cardNumber}
              onChange={handleChange}
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-xs">{errors.cardNumber}</p>
            )}
          </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
          <div className="px-2 w-1/2">
            <label className="font-bold text-sm mb-2 ml-1">
              تاريخ انتهاء الصلاحية
            </label>
            <div>
              <select
                className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
                name="expiryMonth"
                value={formData.expiryMonth}
                onChange={handleChange}
              >
                {Array.from({ length: 12 }, (_, i) => (
                  <option key={i} value={String(i + 1).padStart(2, '0')}>
                    {String(i + 1).padStart(2, '0')} -{' '}
                    {new Date(0, i).toLocaleString('ar', { month: 'long' })}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="px-2 w-1/2">
            <select
              className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"
              name="expiryYear"
              value={formData.expiryYear}
              onChange={handleChange}
            >
              {Array.from({ length: 10 }, (_, i) => (
                <option key={i} value={2024 + i}>
                  {2024 + i}
                </option>
              ))}
            </select>
          </div>
        </div>
        {errors.expiryDate && (
          <p className="text-red-500 text-xs">{errors.expiryDate}</p>
        )}
        <div className="mb-10 flex gap-9">
          <div className="w-1/2">
            <label className="font-bold text-sm mb-2 ml-1">رمز الحماية</label>
            <div>
              <input
                className={`w-full px-3 py-2 mb-1 border-2 rounded-md focus:outline-none transition-colors ${
                  errors.securityCode
                    ? 'border-red-500'
                    : 'border-gray-200 focus:border-indigo-500'
                }`}
                placeholder="رمز الحماية"
                name="securityCode"
                type="text"
                value={formData.securityCode}
                onChange={handleChange}
              />
              {errors.securityCode && (
                <p className="text-red-500 text-xs">{errors.securityCode}</p>
              )}
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-700 transition-colors"
        >
          إتمام عملية الدفع
        </button>
      </form>
    </div>
  );
}
