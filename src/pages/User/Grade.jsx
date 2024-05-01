import { DataGrid } from '@mui/x-data-grid';
import { graduatedMenIcon, ifoPdf, uniLogo } from '../../assets';

import Copyrights from '../../component/Footer/copyrights';

export default function Grade() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'code', headerName: 'كود المادة', width: 200 },
    { field: 'subName', headerName: ' اسم المادة', width: 200 },
    { field: 'deg', headerName: 'الدرجة', width: 200 },
    { field: 'qpa', headerName: 'التقدير', width: 200 },
  ];

  const courses = [
    {
      id: 1,
      subName: 'اسم المادة',
      code: 'SC2X',
      deg: 79,
      qpa: 3.6,
    },
    {
      id: 2,
      subName: 'اسم المادة',
      code: 'SC2X',
      deg: 96,
      qpa: 4.6,
    },
    {
      id: 3,
      subName: 'اسم المادة',
      code: 'SC2X',
      deg: 55,
      qpa: 3.1,
    },
    {
      id: 4,
      subName: 'اسم المادة',
      code: 'SC2X',
      deg: 72,
      qpa: 3.2,
    },
    {
      id: 5,
      subName: 'اسم المادة',
      code: 'SC2X',
      deg: 45,
      qpa: 2.5,
    },
    {
      id: 6,
      subName: 'اسم المادة',
      code: 'SC2X',
      deg: 79,
      qpa: 3.6,
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
