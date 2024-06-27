import { DataGrid } from '@mui/x-data-grid';
import { graduatedMenIcon, uniLogo } from '../../assets';

import Copyrights from '../../component/Footer/copyrights';

export default function Grade() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'student_id', headerName: 'كود المادة', width: 200 },
    { field: 'course_id', headerName: ' كود المادة', width: 200 },
    { field: 'grade', headerName: 'الدرجة', width: 200 },
    { field: 'firstOrSecond', headerName: 'التقدير', width: 200 },
    { field: 'updated_at', headerName: 'التقدير', width: 200 },
  ];

  const courses = [
    {
      id: 65,
      student_id: 130,
      course_id: 4,
      grade: null,
      firstOrSecond: 'first',
      created_at: null,
      updated_at: null,
    },
    {
      id: 87,
      student_id: 130,
      course_id: 20,
      grade: null,
      firstOrSecond: 'first',
      created_at: null,
      updated_at: null,
    },
    {
      id: 88,
      student_id: 130,
      course_id: 16,
      grade: null,
      firstOrSecond: 'first',
      created_at: null,
      updated_at: null,
    },
    {
      id: 89,
      student_id: 130,
      course_id: 17,
      grade: null,
      firstOrSecond: 'first',
      created_at: null,
      updated_at: null,
    },
  ];

  return (
    <div className=" bg-slate-100  flex flex-col     min-h-screen">
      <div className="flex  bg-main   items-center justify-around">
        <div>
          <img src={uniLogo} alt="" width={'100px'} height={'100px'} />
        </div>
        <div className="flex-1 text-center">
          <p className=" text-lg md:text-3xl   font-bold ">
            جامعة بنهــــــــــــــا <br />
            رؤية المحتوي العلمي للمواد المسجلة
          </p>
        </div>
        <div>
          <img src={graduatedMenIcon} alt="" width={'100px'} height={'100px'} />
        </div>
      </div>
      <div className="p-10 container flex-1 mx-auto">
        <h2 className="text-2xl text-center tracking-wider my-3  ">
          {' '}
          نتائج المواد المسجلة{' '}
        </h2>
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
  );
}
