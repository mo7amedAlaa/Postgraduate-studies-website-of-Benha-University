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
          </div>
        </div>
      </MainLayout>
    </div>
  );
}

export default StudentinformationReport;
