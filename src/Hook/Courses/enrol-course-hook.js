import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const EnrolCourseHook = () => {
  const [totalcourses, setTotalCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (allcourses) {
  //     setTotalCourses(allcourses);
  //     setLoading(false);
  //     console.log(loading);
  //     console.log(totalcourses);
  //   } else {
  //     setTotalCourses([]);
  //     setLoading(true);
  //   }
  // }, [allcourses]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'كود المادة', width: 130 },
    { field: 'description', headerName: 'اسم المادة', width: 130 },
    { field: 'price', headerName: 'عدد الساعات', width: 130 },
    { field: 'category', headerName: 'الدرجة العظمي', width: 130 },
    { field: 'rating', headerName: 'الدرجة الصغري', width: 130 },
  ];

  return [totalcourses, columns];
};

export default EnrolCourseHook;
