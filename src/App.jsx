import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/MainPages/Home';
import Login from './pages/MainPages/Login';
import Layout from './pages/MainPages/Layout';
import Page1 from './pages/Employee/Page1';
import Page2 from './pages/Employee/Page1';
import Page3 from './pages/Employee/Page1';
import Page4 from './pages/Employee/Page1';
import Page5 from './pages/Employee/Page1';
import Studentinformation from './pages/Employee/Studentinformation';
import StudentinformationReport from './pages/Employee/StudentinformationReport';
import Petition from './pages/Employee/Petition';
import LayoutProf from './pages/Professor/LayoutProf';
import GradesStudent from './pages/Professor/GradesStudent';
import UploadMaterial from './pages/Professor/UploadMaterial';

import GenerateAccounts from './pages/Admin/GenerateAccounts';
import RegistrationToApply from './pages/User/RegistrationToApply';
import Payment from './pages/User/Payment';
import EnrolCourse from './pages/User/EnrolCourse';
import Material from './pages/User/Material';
import Grade from './pages/User/Grade';
import employeeActions from './component/SideBar/LinksGroup/dataemp';
import AdminActions from './component/SideBar/LinksGroup/dataAdmin';
import profActions from './component/SideBar/LinksGroup/dataProf';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/employee',
      element: <Layout Actions={employeeActions} />,
      children: [
        { path: '/employee/page1', element: <Page1 /> },
        { path: '/employee/page2', element: <Page2 /> },
        { path: '/employee/page3', element: <Page3 /> },
        { path: '/employee/page4', element: <Page4 /> },
        { path: '/employee/page5', element: <Page5 /> },
        {
          path: '/employee/studentinformation',
          element: <Studentinformation />,
        },
        {
          path: '/employee/studentinformationreport',
          element: <StudentinformationReport />,
        },
        { path: '/employee/petition', element: <Petition /> },
      ],
    },
    {
      path: '/professor',
      element: <Layout Actions={profActions} />,
      children: [
        { path: '/professor/gradesstudent', element: <GradesStudent /> },
        { path: '/professor/uploadmaterial', element: <UploadMaterial /> },
      ],
    },
    {
      path: '/admin',
      element: <Layout Actions={AdminActions} />,
      children: [
        {
          path: '/admin/GenerateAccount',
          element: <GenerateAccounts />,
        },
      ],
    },
    {
      path: '/CollegeVice',
      element: <Layout Actions={AdminActions} />,
    },
    { path: '/login', element: <Login /> },
    { path: '/payment', element: <Payment /> },
    { path: '/registration', element: <RegistrationToApply /> },
    { path: '/course', element: <EnrolCourse /> },
    { path: '/material', element: <Material /> },
    { path: '/showgrade', element: <Grade /> },
  ]);
  return (
    <div className="font-bodyFont min-h-screen  ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
