import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetUserInfo } from '../../Redux/Slices/userStatusSlice';
import { useNavigate } from 'react-router-dom';
import { URLImage } from '../../API/constant';
const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.user.UserInfo);
  const handleLogout = () => {
    dispatch(SetUserInfo(null));
    navigate('/');
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <div className="w-2/3   h-2/3 flex items-center justify-center    mx-auto p-6 bg-white shadow-md rounded-lg">
        <div className="">
          <h1 className=" text-center  text-2xl font-bold mb-4">
            {' '}
            حساب المستخدم
          </h1>
          <div className="mb-6 flex flex-col gap-3">
            <p className=" flex gap-5 items-center justify-between text-gray-700">
              <strong>الصورة الشخصية:</strong>{' '}
              {userInfo.user_data.student_photos.personalImage && (
                <div className="w-24 h-24 rounded-full bg-slate-500   ">
                  {userInfo.user_data.student_photos.personalImage && (
                    <img
                      src={`${URLImage}/${userInfo.user_data.student_photos.personalImage}`}
                      alt="userImage"
                      className="w-full h-full rounded-full"
                    />
                  )}
                </div>
              )}
            </p>
            <p className="flex gap-5 items-center justify-between text-gray-700">
              <strong>الاسم:</strong> {userInfo.user_data?.english_name}
            </p>
            <p className="flex gap-5 items-center justify-between text-gray-700">
              <strong>الاكونت:</strong> {userInfo.user_data?.account}
            </p>
            <p className="flex gap-5 items-center justify-between text-gray-700">
              <strong>تاريخ التسجيل:</strong> {userInfo.user_data?.created_at}
            </p>
          </div>
          <button
            className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
