import { DataGrid } from '@mui/x-data-grid';
import { graduatedMenIcon, uniLogo } from '../../assets';
import Copyrights from '../../component/Footer/Copyrights';
import { Checkbox } from '@mui/material';

function RecordPoint() {
  const columns = [
    { field: 'ID', headerName: 'م', width: 130 },
    { field: 'name', headerName: 'الاسم', width: 250 },
    { field: 'degree', headerName: ' الدرجةالعلمية', width: 130 },
    { field: 'jobdirc', headerName: ' جهة العمل', width: 250 },
    { field: 'signature', headerName: ' التوقيع', width: 130 },
  ];
  const prof = [
    {
      ID: 1,
      name: '   ',
      degree: '  ',
      jobdirc: '  ',
      signature: '  ',
    },
    {
      ID: 2,
      name: '   ',
      degree: '  ',
      jobdirc: '  ',
      signature: '  ',
    },
    {
      ID: 3,
      name: '   ',
      degree: '  ',
      jobdirc: '  ',
      signature: '  ',
    },
    {
      ID: 4,
      name: '   ',
      degree: '  ',
      jobdirc: '  ',
      signature: '  ',
    },
    {
      ID: 5,
      name: '   ',
      degree: '  ',
      jobdirc: '  ',
      signature: '  ',
    },
  ];
  return (
    <>
      <div className="flex flex-col  h-screen font-bold">
        <div className="flex  bg-main   items-center justify-around">
          <div>
            <img src={uniLogo} alt="" width={'100px'} height={'100px'} />
          </div>
          <div className="flex-1 text-center">
            <p className=" text-lg md:text-3xl   font-bold ">
              جامعة بنهــــــــــــــا تسجيل النقطة البحثية
            </p>
          </div>
          <div>
            <img
              src={graduatedMenIcon}
              alt=""
              width={'100px'}
              height={'100px'}
            />
          </div>
        </div>
        <div className="container p-5  flex-1  ">
          <form
            action=""
            className="border bg-gray-100 tracking-wider h-full  p-5 rounded-md"
          >
            <div className="my-3">
              <label htmlFor="welcome" className="me-5">
                السيد الأستاذ الدكتور/ رئيس قسم
              </label>
              <select id="welcome" className="px-2 text-center  bg-withe  ">
                <option value="is">IS</option>
                <option value="ai">AI</option>
                <option value="cs">CS</option>
                <option value="sc">SC</option>
              </select>
              <p> تحية طيبة وبعد،، </p>
            </div>
            <div className="my-3">
              <span>
                أرجو من سيادتكم التكرم بالموافقة علي مد التسجيل لرسالة
              </span>
              <Checkbox value={'  ماجستير '} id="studytype" name="master" />
              <label htmlFor="Studytype">ماجستير </label>
              <Checkbox value={' الدكتوراة '} id="studytype" name="doctor" />
              <label htmlFor="Studytype">الدكتوراة </label>
            </div>
            <div className="flex justify-around items-center gap-5">
              <div className="my-3 flex-1 flex">
                <label htmlFor="name" className="me-2 ">
                  للطالب
                </label>
                <input type="text" id="name" className="px-2 flex-1" />
              </div>
              <div className="my-3 flex-1 ">
                <label htmlFor="dep" className="me-2 ">
                  المقيد بالقسم التخصصي
                </label>
                <select id="dep" className="px-2 text-center  bg-withe  ">
                  <option value="is">IS</option>
                  <option value="ai">AI</option>
                  <option value="cs">CS</option>
                  <option value="sc">SC</option>
                </select>
              </div>
            </div>
            <div className=" flex flex-col gap-3 my-4">
              <label htmlFor="titleAr">عنوان الرسالة باللغة العربية :</label>
              <textarea
                name=""
                id="titleAr"
                className="w-full h-28 rounded-md   border  resize-none   "
              ></textarea>
            </div>
            <div className=" flex flex-col gap-3 my-4">
              <label htmlFor="titlEn">عنوان الرسالة باللغة الانجليزية : </label>
              <textarea
                name=""
                id="titleEn"
                className="w-full h-28 rounded-md   border  resize-none   "
              ></textarea>
            </div>
            <div>
              <p>علي أن تتكون لجنةالإشراف من السادةالاتي أسمائهم:</p>
              <DataGrid
                rows={prof}
                getRowId={(row) => row.ID}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
              />
            </div>

            <p className="text-center">وتفضلوا بقبول وافر الشكر والتقدير،،،</p>
            <div className="flex  flex-row-reverse items-center justify-between ">
              <div className="flex mt-10 flex-col gap-3 justify-center text-center items-end   flex-1  ">
                <p> المشرف الرئيسى /المرشد الأكاديمى :</p>
                <div>
                  <label htmlFor="namej">الاسم :</label>
                  <input type="text" id="namej" />
                </div>
                <div>
                  <label htmlFor="ku"> التوقيع:</label>
                  <input type="text" id="ku" />
                </div>
                <div>
                  <label htmlFor="datej">التاريخ :</label>
                  <input type="date" id="datej" />
                </div>
              </div>
              <div className="flex gap-6 flex-1 flex-col justify-start  items-start ">
                <input
                  type="submit"
                  value={'ارسال الطلب'}
                  className=" main-btn  w-full  "
                />
                <input
                  type="submit"
                  value={'اعادة ملئ بيانات الطلب'}
                  className="main-btn  w-full "
                />
              </div>
            </div>
          </form>
        </div>
        <div className="bg-main  px-2  ">
          <Copyrights />
        </div>
      </div>
    </>
  );
}

export default RecordPoint;
