import { DataGrid } from '@mui/x-data-grid';
import { graduatedMenIcon, uniLogo } from '../../assets';
import { LuAlertOctagon } from 'react-icons/lu';
import Copyrights from '../../component/Footer/Copyrights';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { UseApiRequest } from '../../Hooks/RestApi';
import { Button } from '@mui/material';

export default function EnrolCourse() {
  const [ids, Setids] = useState([]);
  const [slectedCourses, SetSlectedCourses] = useState([]);
  const enrrolCourse = (course) => {
    Setids([...ids, course.id]);
    setCourses(courses.filter((res) => res.id !== course.id));
    SetSlectedCourses([...slectedCourses, course]);
    console.log('course with id: ', course.id);
  };
  const deleteCourse = (course) => {
    Setids([...ids.filter((ider) => ider != course.id)]);
    setCourses([...courses, course]);
    SetSlectedCourses(slectedCourses.filter((res) => res.id !== course.id));
    console.log('course with id: ', course.id);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'subName', headerName: 'كود المادة', width: 130 },
    { field: 'code', headerName: 'اسم المادة', width: 130 },
    { field: 'hourNum', headerName: 'عدد الساعات', width: 130 },
    { field: 'maxGrade', headerName: 'الدرجة العظمي', width: 130 },
    { field: 'minGrade', headerName: 'الدرجة الصغري', width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginRight: 8 }}
          onClick={() => enrrolCourse(params.row)}
        >
          تسجيل
        </Button>
      ),
    },
  ];
  const columns2 = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'subName', headerName: 'كود المادة', width: 130 },
    { field: 'code', headerName: 'اسم المادة', width: 130 },
    { field: 'hourNum', headerName: 'عدد الساعات', width: 130 },
    { field: 'maxGrade', headerName: 'الدرجة العظمي', width: 130 },
    { field: 'minGrade', headerName: 'الدرجة الصغري', width: 130 },

    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginRight: 8 }}
          onClick={() => deleteCourse(params.row)}
        >
          الغاء التسجيل{' '}
        </Button>
      ),
    },
  ];
  const [courses, setCourses] = useState([
    {
      id: 1,
      subName: 'اسم المادة',
      code: 'SC2X',
      hourNum: 3,
      maxGrade: 100,
      minGrade: 50,
    },
    {
      id: 2,
      subName: 'اسم المادة',
      code: 'SC2X',
      hourNum: 3,
      maxGrade: 100,
      minGrade: 50,
    },
    {
      id: 3,
      subName: 'اسم المادة',
      code: 'SC2X',
      hourNum: 3,
      maxGrade: 100,
      minGrade: 50,
    },
    {
      id: 6,
      subName: 'اسم المادة',
      code: 'SC2X',
      hourNum: 3,
      maxGrade: 100,
      minGrade: 50,
    },
    {
      id: 9,
      subName: 'اسم المادة',
      code: 'SC2X',
      hourNum: 3,
      maxGrade: 100,
      minGrade: 50,
    },
    {
      id: 10,
      subName: 'اسم المادة',
      code: 'SC2X',
      hourNum: 3,
      maxGrade: 100,
      minGrade: 50,
    },
    {
      id: 12,
      subName: 'اسم المادة',
      code: 'SC2X',
      hourNum: 3,
      maxGrade: 100,
      minGrade: 50,
    },
    {
      id: 13,
      subName: 'اسم المادة',
      code: 'SC2X',
      hourNum: 3,
      maxGrade: 100,
      minGrade: 50,
    },
  ]);

  const token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZWNlNC0xOTctNjItMTAyLTUxLm5ncm9rLWZyZWUuYXBwL2FwaS9hdXRoL2xvZ2luc3R1ZGVudCIsImlhdCI6MTcxODMxNzUzNSwiZXhwIjoxNzE4Njc3NTM1LCJuYmYiOjE3MTgzMTc1MzUsImp0aSI6ImZvMGM4ZDc4c3JmcmdURGsiLCJzdWIiOiIzNSIsInBydiI6IjljNDI5ZTZhNjBjZDUyODU0NzNmMmM4YmM3MDFlYzA5NDhkZjRkOGMifQ.X2VKJOBR3ahjbPgFev0A84Dh3UGoLg6M7X7e_JY8j9k';
  // const {
  //   data: GetCourses,
  //   loading: GetLoad,
  //   error: GetError,
  //   callApi,
  // } = UseApiRequest('/courses', 'GET', null, token);

  // useEffect(() => {
  //   callApi();
  // }, []);

  return (
    <div className=" bg-slate-100     min-h-screen">
      <div className="flex  bg-main   items-center justify-around">
        <div>
          <img src={uniLogo} alt="" width={'100px'} height={'100px'} />
        </div>
        <div className="flex-1 text-center">
          <p className=" text-lg md:text-3xl   font-bold ">
            جامعة بنهــــــــــــــا <br />
            تسجيل الكورسات ورؤية الكورسات المسجلة
          </p>
        </div>
        <div>
          <img src={graduatedMenIcon} alt="" width={'100px'} height={'100px'} />
        </div>
      </div>
      <div className="p-10 container mx-auto">
        <p className="font-bold text-sm my-3 flex items-center  ">
          <LuAlertOctagon className="mx-2" />
          برجاء استكمال البيانات التالية والتحقق من وضوحها وسلامتها لضمان وصولها
        </p>
        <div>
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
              checkboxSelection
            />
          </div>
          <div className="my-5  text-center ">
            <button className=" px-12 py-3 mx-auto  text-xl font-bold tracking-wider text-white       bg-main  rounded-md   ">
              تسجيل المقرر
            </button>
          </div>
        </div>
        <div>
          <p className=" font-bold text-3xl italic m-10  ">المواد المسجلة</p>
          <div
            className="my-3"
            style={{ height: 400, width: '100%', direction: 'ltr' }}
          >
            <DataGrid
              rows={slectedCourses}
              columns={columns2}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          </div>
        </div>
      </div>
      <div className="bg-main  px-2  ">
        <Copyrights />
      </div>
    </div>
  );
}
