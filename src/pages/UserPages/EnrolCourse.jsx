import { DataGrid } from '@mui/x-data-grid';
import { graduatedMenIcon, uniLogo } from '../../assets';
import { LuAlertOctagon } from 'react-icons/lu';
import Copyrights from '../../component/Footer/copyrights';
export default function EnrolCourse() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'code', headerName: 'كود المادة', width: 130 },
    { field: 'subName', headerName: 'اسم المادة', width: 130 },
    { field: 'hourNum', headerName: 'عدد الساعات', width: 130 },
    { field: 'maxGrade', headerName: 'الدرجة العظمي', width: 130 },
    { field: 'minGrade', headerName: 'الدرجة الصغري', width: 130 },
  ];

  const courses = [
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
      id: 4,
      subName: 'اسم المادة',
      code: 'SC2X',
      hourNum: 3,
      maxGrade: 100,
      minGrade: 50,
    },
    {
      id: 5,
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
  ];

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
        <p className=" font-bold text-3xl italic m-10  ">المواد المسجلة</p>
        <div
          className="my-3"
          style={{ height: 400, width: '100%', direction: 'ltr' }}
        >
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
      </div>
      <div className="bg-main  px-2  ">
        <Copyrights />
      </div>
    </div>
  );
}
