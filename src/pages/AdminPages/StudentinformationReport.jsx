import MainLayout from '../../component/Main/MainLayout';
import { DataGrid } from '@mui/x-data-grid';
import { TbReportMedical } from 'react-icons/tb';
const columns = [
  { field: 'id', headerName: 'ID' },

  { field: 'Name', headerName: ' اسم الطالب' },
  { field: 'قث', headerName: ' الاوراق المطلوبة' },
];
const data = [
  {
    id: 1,
    Name: 'محمد علاء الدين',
  },
];
function StudentinformationReport() {
  return (
    <div>
      <MainLayout title={'كشف باسماء الطلاب المسجلين'}>
        <div>
          <p className="m-1">
            ✨ الطلاب المقدمين للدراسات العليا وفي انتظار القبول{' '}
          </p>
          <div style={{ height: 400, width: '100%', direction: 'ltr' }}>
            <DataGrid
              checkboxSelection
              rows={data}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
            <div className="flex gap-56   py-5 ">
              <button className=" main-btn tracking-wider  w-full flex justify-center items-center gap-6  text-lg ">
                <TbReportMedical className="text-3xl " />
                ارسال التقرير لوكيل الكلية للدرسلت العليا
              </button>
              <button className=" main-btn tracking-wider  w-full flex justify-center items-center gap-6  text-lg ">
                ارسال التقرير لرئيس القسم
                <TbReportMedical className="text-3xl " />
              </button>
            </div>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default StudentinformationReport;
