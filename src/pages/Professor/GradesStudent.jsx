import React, { useEffect, useState } from 'react';
import MainLayout from '../../component/Main/MainLayout';
import { personaLogo } from '../../assets';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { IoCaretBack } from 'react-icons/io5';
import { DataGrid } from '@mui/x-data-grid';
import { CiSearch } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { createGrade, fetchStudentGrades } from '../../Redux/Slices/professorSlice';
import notify from '../../Hook/Toast';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'title', headerName: 'كود المادة', width: 130 },
  { field: 'description', headerName: 'اسم المادة', width: 130 },
  { field: 'price', headerName: 'عدد الساعات', width: 130 },
  { field: 'category', headerName: 'الدرجة العظمي', width: 130 },
  { field: 'rating', headerName: 'الدرجة الصغري', width: 130 },
];

function GradesStudent() {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.professor.data)
  useEffect(()=>{
      dispatch(fetchStudentGrades())
      console.log(data)
  },[])
  const [name , setName] = useState()
  const [codest , setCodeSt] = useState()
  const [codecour , setCodeCour] = useState()
  const [grades , setGrades] = useState()
  const handelSubmit = async (event) => {
    event.preventDefault();
    if (name === "" || codecour === "" || codest === "" || grades === "" ) {
        console.log('من فضلك اكمل البيانات')
        notify('من فضلك اكمل البيانات', "warn");
        return;
    }
    const formData = new FormData()
    formData.append('id', Date.now().toString()); // Ensure this ID is unique
    formData.append("title" , name)
    formData.append("description" , codest)
    formData.append("price" , codecour)
    formData.append("category" , grades)
    await dispatch(createGrade(formData))
        console.log(formData)
        console.log(data)
    }
  return (
    <div>
      <MainLayout>
        <div>
          <form action="">
            <div>
              <fieldset className="border my-2 border-gray-600 p-3 ">
                <legend>درجات الطالب بالتفصيل </legend>
                <div className="inline-block my-2">
                  <label htmlFor="" className=" mx-5  ">
                    اسم الطالب
                  </label>
                  <input
                    type="text"
                    placeholder="ادخل اسمك الكامل"
                    className="inputStyle p-4 outline-none rounded-md hover:border-main transition-all cursor-pointer"
                    onChange={(e)=>setName(e.target.value)}
                  />
                </div>
                <div className="inline-block my-2">
                  <label htmlFor="" className=" mx-5 ">
                    كود الطالب
                  </label>
                  <input
                    type="text"
                    placeholder="ادخل الكود الخاص بك"
                    className="inputStyle p-4 outline-none rounded-md hover:border-main transition-all cursor-pointer"
                    onChange={(e)=>setCodeSt(e.target.value)}
                  />
                </div>

                <div className="inline-block my-2">
                  <label htmlFor="" className=" mx-5  ">
                    كود المادة
                  </label>
                  <input
                    type="text"
                    placeholder="ادخل كود المادة"
                    className="inputStyle p-4 outline-none rounded-md hover:border-main transition-all cursor-pointer"
                    onChange={(e)=>setCodeCour(e.target.value)}

                  />
                </div>
                <div className="inline-block my-2">
                  <label htmlFor="" className=" mx-5  ">
                    الدرجة
                  </label>
                  <input
                    type="text"
                    className="inputStyle p-4 outline-none rounded-md hover:border-main transition-all cursor-pointer"
                    placeholder="ادخل الدرجة"
                    onChange={(e)=>setGrades(e.target.value)}

                  />
                </div>
              </fieldset>
            </div>
            <div className="flex justify-center gap-5 mt-1 mb-3">
              <div className="relative ">
                <input type="submit" value={'اضافة'} className="main-btn" onClick={handelSubmit} />
                <IoMdAddCircleOutline className=" absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2  right-4" />
              </div>
              <div className="relative">
                <button type="button" className="main-btn ">
                  بحث
                </button>
                <CiSearch className=" absolute top-[50%] transform -translate-x-1/2 -translate-y-1/2  right-4" />
              </div>
            </div>
          </form>
        </div>
        <div className="p-10 container mx-auto">
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

export default GradesStudent;
