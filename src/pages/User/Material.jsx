import { DataGrid } from '@mui/x-data-grid';
import { graduatedMenIcon, ifoPdf, uniLogo } from '../../assets';
import { LuDownloadCloud } from 'react-icons/lu';
import Copyrights from '../../component/Footer/copyrights';
import { IoOpenOutline } from 'react-icons/io5';

export default function Material() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'code', headerName: 'كود المادة', width: 200 },
    { field: 'subName', headerName: ' سم المادة', width: 200 },
    { field: 'dr', headerName: 'المحاضر', width: 200 },
    {
      field: 'action',
      headerName: ' المحتوي العلمي والمصادر',
      width: 500,
      disableClickEventBubbling: true,
      renderCell: () => (
        <div className="flex items-center gap-5 justify-between ">
          <a
            href={ifoPdf}
            download="reqFile"
            className="main-btn flex-1 flex items-center gap-2  justify-center"
          >
            تنزيل
            <LuDownloadCloud />
          </a>
          <a
            href={ifoPdf}
            className="main-btn flex-1 flex items-center gap-2 justify-center"
          >
            فتح
            <IoOpenOutline />
          </a>
        </div>
      ),
    },
  ];

  const courses = [
    {
      id: 1,
      subName: 'اسم المادة',
      code: 'SC2X',
      dr: 'د/محمد',
      material: '',
    },
    {
      id: 2,
      subName: 'اسم المادة',
      code: 'SC2X',
      dr: 'د/محمد',
      material: '',
    },
    {
      id: 3,
      subName: 'اسم المادة',
      code: 'SC2X',
      dr: 'د/مصطفي',
      material: '',
    },
    {
      id: 4,
      subName: 'اسم المادة',
      code: 'SC2X',
      dr: 'د/مي',
      material: '',
    },
    {
      id: 5,
      subName: 'اسم المادة',
      code: 'SC2X',
      dr: 'د/طارق',
      material: '',
    },
    {
      id: 6,
      subName: 'اسم المادة',
      code: 'SC2X',
      dr: 'د/مني',
      material: '',
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
            رؤية المحتوي العلمي للمواد المسجلة
          </p>
        </div>
        <div>
          <img src={graduatedMenIcon} alt="" width={'100px'} height={'100px'} />
        </div>
      </div>
      <div className="p-10 container mx-auto">
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
