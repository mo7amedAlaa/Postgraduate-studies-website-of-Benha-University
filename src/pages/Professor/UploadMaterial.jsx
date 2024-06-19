// import { LuUploadCloud } from 'react-icons/lu';
// import Swal from 'sweetalert2';
// import MainLayout from '../../component/Main/MainLayout';
// import { useState } from 'react';
// const handleUpload = async () => {
//   console.log("Clicking upload")
//   console.log(sub)
//   const { value: file } = await Swal.fire({
//     title: 'Select image',
//     input: 'file',
//     inputAttributes: {
//       accept: 'image/*',
//       'aria-label': 'Upload your profile picture',
//     },
//   });
//   if (file) {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       Swal.fire({
//         title: 'Your uploaded picture',
//         imageUrl: e.target.result,
//         imageAlt: 'The uploaded picture',
//       });
//     };
//     reader.readAsDataURL(file);
//   }
// };
// function UploadMaterial() {
//   const [sub , setSub] = useState('')
//   const [dep , setDep] = useState('')

//   const handleChageSub = (e)=>{
//     setSub(e.target.value)

//   }
//   const handleChageDep = (e)=>{
//     setDep(e.target.value)

//   }

//   // const handleSubmit = (e)=>{
//   //   e.preventDefault()
//   //   console.log("Clicked")
//   // }


//   return (
//     <>
//       <MainLayout>
//         <div>
//           <div className="container mx-auto border rounded-md my-5  ">
//             <form
//               action=""
//               className="p-14"
//               onSubmit={(e) => {
//                 e.preventDefault();
//               }}
//             >
//               <div>
//                 <div>
//                   <h2 className=" font-sans text-3xl font-semibold  text-center mb-5">
//                     {' '}
//                     المادة المراد رفع المقرارت لها
//                   </h2>
//                   <fieldset className="border my-2 border-gray-600 p-3 ">
//                     <legend>اسم المقرر والقسم التبع لها</legend>
//                     <div className=" flex justify-around items-center  ">
//                       <div className=" flex items-center justify-between  my-2">
//                         <label htmlFor="" className="   mx-5 ">
//                           المادة
//                         </label>
//                         <select name="sub" id="sub" onChange={handleChageSub}>
//                           <option value="1">sub1</option>
//                           <option value="1">sub1</option>
//                           <option value="1">sub1</option>
//                           <option value="1">sub1</option>
//                           <option value="2">CS</option>
//                         </select>
//                       </div>
//                       <div className=" flex items-center justify-between  my-2">
//                         <label htmlFor="" className="   mx-5 ">
//                           القسم
//                         </label>
//                         <select name="sub" id="sub" onChange={handleChageDep}>
//                           <option value="1">IS</option>
//                           <option value="2">CS</option>
//                           <option value="3">AI</option>
//                           <option value="4">SC</option>
//                         </select>
//                       </div>
//                     </div>
//                   </fieldset>
//                 </div>

//                 <div>
//                   <h2 className=" font-sans text-3xl font-semibold  text-center mb-5">
//                     {' '}
//                     مقررات العام الدراسي
//                   </h2>
//                   <fieldset className="border my-2 border-gray-600 p-3 ">
//                     <legend> كل مايتعلق بالمقرر</legend>
//                     <div className=" flex justify-around items-center  ">
//                       <div className=" flex items-center justify-between  my-2">
//                         <label htmlFor="" className="   mx-5 ">
//                           محاضرات المقرر
//                         </label>
//                         <div className="flex  gap-10">
//                           <button
//                             className="main-btn flex-1 flex items-center justify-center gap-3 p-3"
//                             onClick={handleUpload}
//                           >
//                             رفع
//                             <LuUploadCloud />
//                           </button>
//                         </div>
//                       </div>
//                       <div className=" flex items-center my-2">
//                         <label htmlFor="" className="   mx-5 ">
//                           مصادر اخرى
//                         </label>
//                         <div className="flex  gap-10">
//                           <button
//                             className="main-btn flex-1 flex items-center justify-center gap-3 p-3"
//                             onClick={handleUpload}
//                           >
//                             رفع
//                             <LuUploadCloud />
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </fieldset>
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="programs flex justify-center items-center gap-[3rem] flex-wrap  p-3 font-sans  "></div>
//         </div>
//       </MainLayout>
//     </>
//   );
// }

// export default UploadMaterial;




import { LuUploadCloud } from 'react-icons/lu';
import Swal from 'sweetalert2';
import MainLayout from '../../component/Main/MainLayout';
import { useState } from 'react';

function UploadMaterial() {
  const [sub, setSub] = useState('');
  const [dep, setDep] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleUpload = async () => {
    console.log('Clicking upload');
    console.log(sub);
    const { value: file } = await Swal.fire({
      title: 'Select image',
      input: 'file',
      inputAttributes: {
        accept: 'image/*',
        'aria-label': 'Upload your profile picture',
      },
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal.fire({
          title: 'Your uploaded picture',
          imageUrl: e.target.result,
          imageAlt: 'The uploaded picture',
        });
      };
      reader.readAsDataURL(file);

      // Set the uploaded file to state
      setUploadedFile(file);
    }
  };

  const handleChangeSub = (e) => {
    setSub(e.target.value);
  };

  const handleChangeDep = (e) => {
    setDep(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    console.log('Subject:', sub);
    console.log('Department:', dep);
    console.log('Uploaded File:', uploadedFile);
    // You can now process the uploaded file as needed
  };

  return (
    <>
      <MainLayout>
        <div>
          <div className="container mx-auto border rounded-md my-5">
            <form className="p-14" onSubmit={handleSubmit}>
              <div>
                <div>
                  <h2 className="font-sans text-3xl font-semibold text-center mb-5">
                    المادة المراد رفع المقرارت لها
                  </h2>
                  <fieldset className="border my-2 border-gray-600 p-3">
                    <legend>اسم المقرر والقسم التبع لها</legend>
                    <div className="flex justify-around items-center">
                      <div className="flex items-center justify-between my-2">
                        <label htmlFor="sub" className="mx-5">
                          المادة
                        </label>
                        <select name="sub" id="sub" onChange={handleChangeSub}>
                          <option value="1">sub1</option>
                          <option value="2">sub2</option>
                          <option value="3">sub3</option>
                          <option value="4">sub4</option>
                          <option value="5">CS</option>
                        </select>
                      </div>
                      <div className="flex items-center justify-between my-2">
                        <label htmlFor="dep" className="mx-5">
                          القسم
                        </label>
                        <select name="dep" id="dep" onChange={handleChangeDep}>
                          <option value="1">IS</option>
                          <option value="2">CS</option>
                          <option value="3">AI</option>
                          <option value="4">SC</option>
                        </select>
                      </div>
                    </div>
                  </fieldset>
                </div>

                <div>
                  <h2 className="font-sans text-3xl font-semibold text-center mb-5">
                    مقررات العام الدراسي
                  </h2>
                  <fieldset className="border my-2 border-gray-600 p-3">
                    <legend>كل مايتعلق بالمقرر</legend>
                    <div className="flex justify-around items-center">
                      <div className="flex items-center justify-between my-2">
                        <label htmlFor="lectures" className="mx-5">
                          محاضرات المقرر
                        </label>
                        <div className="flex gap-10">
                          <button
                            className="main-btn flex-1 flex items-center justify-center gap-3 p-3"
                            onClick={handleUpload}
                            type="button"
                          >
                            رفع
                            <LuUploadCloud />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center my-2">
                        <label htmlFor="otherSources" className="mx-5">
                          مصادر اخرى
                        </label>
                        <div className="flex gap-10">
                          <button
                            className="main-btn flex-1 flex items-center justify-center gap-3 p-3"
                            onClick={handleUpload}
                            type="button"
                          >
                            رفع
                            <LuUploadCloud />
                          </button>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
              <button type="submit" className="main-btn mt-5">
                Submit
              </button>
            </form>
          </div>
          <div className="programs flex justify-center items-center gap-[3rem] flex-wrap p-3 font-sans"></div>
        </div>
      </MainLayout>
    </>
  );
}

export default UploadMaterial;

