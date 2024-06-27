import MainLayout from '../../component/Main/MainLayout';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoCaretBack } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { DataGrid } from '@mui/x-data-grid';

function GenerateAccounts() {
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'code', headerName: ' اسم الطالب', width: 150 },
    { field: 'subName', headerName: '  الايميل', width: 150 },
    { field: 'deg', headerName: 'الباسورد', width: 150 },
  ];

  const courses = [
    {
      id: 1,
      subName: 'محمد السيد عبدالله ',
      code: 'moh@fci.edu.eg',
      deg: 123456789,
      qpa: 3.6,
    },
    {
      id: 1,
      subName: 'إبراهيم أحمد عادل',
      code: 'ibr@fci.edu.eg',
      deg: 123456789,
      qpa: 3.6,
    },
    {
      id: 1,
      subName: 'محمد عماد سيد',
      code: 'mohem@fci.edu.eg',
      deg: 123456789,
      qpa: 3.6,
    },
    {
      id: 1,
      subName: 'أحمد سيد عادل ',
      code: 'ahm@fci.edu.eg',
      deg: 123456789,
      qpa: 3.6,
    },
  ];
  return (
    <MainLayout title={'انشاء حساب للموظفين'}>
      <fieldset className="border my-2 border-gray-600 p-3 ">
        <legend> انشاء ايميل جامعى للطالب</legend>

        <div className="inline-block my-2">
          <label htmlFor="" className="lableStyle mx-5 ">
            اسم
          </label>
          <input type="text" className="inputStyle " />
        </div>
        <div className="inline-block my-2">
          <label htmlFor="" className="lableStyle mx-5  ">
            الايميل
          </label>
          <input type="text" className="inputStyle " />
        </div>
        <div className="inline-block my-2">
          <label htmlFor="" className="lableStyle mx-5  ">
            الباسورد
          </label>
          <input type="text" className="inputStyle " />
        </div>
        <div className="flex justify-center gap-5 mt-5">
          <div className="relative ">
            <input type="submit" value={'انشاء'} className="main-btn" />
            <IoMdAddCircleOutline className=" absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2  right-4" />
          </div>
          <div className="relative">
            <button type="button" className="main-btn ">
              الرجوع
            </button>
            <IoCaretBack className=" absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2  right-4" />
          </div>
        </div>
      </fieldset>
      <div className="graduates mt-5 mb-5 flex lg:justify-center flex-col"></div>
      <div className=" bg-slate-100     min-h-screen">
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
      </div>
    </MainLayout>
  );
}

export default GenerateAccounts;
