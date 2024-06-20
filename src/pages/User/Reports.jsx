import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { URLng } from '../../API/constant';
import { useSelector } from 'react-redux';
import Copyrights from '../../component/Footer/Copyrights';
import { graduatedMenIcon, uniLogo } from '../../assets';

const ReportList = () => {
  const [reports, setReports] = useState(null);
  const token = useSelector((state) => state.user.UserInfo?.token);
  console.log(token);
  useEffect(() => {
    async function fetchReports() {
      const res = await axios.post(
        `${URLng}/showreportsstudent`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setReports(res.data);
      console.log(res.data);
    }
    fetchReports();
  }, []);
  return (
    <div className="flex flex-col  items-center h-screen font-bold">
      <div className="flex  bg-main  w-full  items-center justify-around">
        <div>
          <img src={uniLogo} alt="" width={'100px'} height={'100px'} />
        </div>
        <div className="flex-1 text-center">
          <p className=" text-lg md:text-3xl   font-bold ">
            جامعة بنهــــــــــــــا كل التقرارير والاعلانات التي تخص الطالب
          </p>
        </div>
        <div>
          <img src={graduatedMenIcon} alt="" width={'100px'} height={'100px'} />
        </div>
      </div>
      <div className="container flex-1  mx-auto p-4">
        {reports?.lenth > 0 ? (
          reports.map((report) => (
            <div
              key={report.id}
              className="border rounded-lg p-4 mb-4 bg-white shadow-md"
            >
              <p className="text-gray-700">
                <strong>ID:</strong> {report.id}
              </p>
              <p className="text-gray-700">
                <strong>Content:</strong> {report.content}
              </p>
              <p className="text-gray-700">
                <strong>Date:</strong> {report.date}
              </p>
              <p className="text-gray-700">
                <strong>Type:</strong> {report.type}
              </p>
              <p className="text-gray-700">
                <strong>Professor ID:</strong>{' '}
                {report.prof_id ? report.prof_id : 'N/A'}
              </p>
              <p className="text-gray-700">
                <strong>Student ID:</strong>{' '}
                {report.student_id ? report.student_id : 'N/A'}
              </p>
              <p className="text-gray-700">
                <strong>Head ID:</strong> {report.head_id}
              </p>
              <p className="text-gray-700">
                <strong>Created At:</strong>{' '}
                {new Date(report.created_at).toLocaleString()}
              </p>
              <p className="text-gray-700">
                <strong>Updated At:</strong>{' '}
                {new Date(report.updated_at).toLocaleString()}
              </p>
              <p className="text-gray-700">
                <strong>Status:</strong> {report.status}
              </p>
              <p className="text-gray-700">
                <strong>Research Point:</strong>{' '}
                {report.researchpoint ? report.researchpoint : 'N/A'}
              </p>
            </div>
          ))
        ) : (
          <div className="flex items-center h-full bg-slate-200 border border-main  rounded-md text-xl  tracking-widest font-semibold  justify-center">
            No Reports To Show
          </div>
        )}
      </div>
      <div className="bg-main  w-full  px-2  ">
        <Copyrights />
      </div>
    </div>
  );
};

export default ReportList;
