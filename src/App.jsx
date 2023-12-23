import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Bar/Sidebar';
import perPicTest from './assets/images/persona-logo.jpg';
import LinksGroup from './component/Groups/LinksGroup';
import { Route, Routes } from 'react-router-dom';
import Body from './component/Bar/Body';
import About from './component/pages/About';
import Contact from './component/pages/Contact';
function App() {
  
  return (
    <>
      <Navbar />
      <Sidebar userImg={perPicTest} userName={'مدام ليلي مسعد'}>
        <LinksGroup title=" الوائح" item1 ="تقرير بطلاب الدراسات العليا"  item2= "رفع صور الطلاب"  item3 = "رفع البيانات الاساسية للطلاب"  item4 = "التقديم الالكترونى" />
        <LinksGroup title=" بيانات الطالب" item1 ="رفع بيانات الطالب   "  item2= "  تقرير بطلاب الدراسات العليا الغير مسجل لهم ارقام قومية"  item3 = "وسائل اتصال الطلاب   "  item4 = "رفع البيانات الاساسية للطالب  " />
        <LinksGroup title=" ادارة التسجيل الالكترونى" item1 ="صلاحيات التسجيل الالكترونى"   item2= "اعدادات التسجيل الالكترونى  "  item3 = "الطلاب الممنوعين من التسجيل   "  item4 = "انواع مقررارت مقترح التسجيل " />
        <LinksGroup title=" الدفع بكل تفاصيله" item1 =" الدفع بكل تفاصيله"  item2= "رفع  الطلاب"  item3 = "رفع  الاساسية للطلاب"  item4 = "التقديم الالكترونى" />
        <LinksGroup title=" توزيع الطلاب على السكاشن" item1 ="   توزيع الطلاب على مجموعات وسكاشن"  item2= "الرفع  "  item3 = "رفع  الاساسية للطلاب"  item4 = "التقديم الالكترونى" />
        <LinksGroup title=" تسجيل نتائج الامتحانات"  item1 ="   الالتماس"  item2= "الرفع  "  item3 = "رفع  الاساسية للطلاب"  item4 = "التقديم الالكترونى" />
      </Sidebar>
      <Routes>
        {/** Test Routes */}
        <Route path='/' element={<Body/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
      
    </>
  );
}

export default App;
