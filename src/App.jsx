import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';

import './App.css';
import './pages/chat/chatStyle.css';
import Home from './pages/MainPages/Home';
import Login from './pages/MainPages/Login';
import Layout from './pages/MainPages/Layout';
import Studentinformation from './pages/Employee/Studentinformation';
import StudentinformationReport from './pages/Employee/StudentinformationReport';
import Petition from './pages/Employee/Petition';
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
import UploadSchedule from './pages/Employee/UploadSchedule';
import UploadAllGrades from './pages/Employee/UploadAllGrades';
import ShowAllReports from './pages/Head of Department/ShowAllReports';
import headActions from './component/SideBar/LinksGroup/dataheaddepartment';
import ApplyPlanResearch from './pages/Head of Department/ApplyPlanResearch';
import RecordPoint from './pages/User/RecordPoint';
import ExtendRestriction from './pages/Professor/ExtendRestriction';
import StudentStuts from './pages/Professor/StudentStuts';
import Regulations from './pages/Employee/Regulations';
import ExamTable from './pages/User/ExamTable';
import StudyTable from './pages/User/StudyTable';
import HomeChat from './pages/chat/HomeChat';
import LoginChat from './pages/chat/LoginChat';
import RegisterChat from './pages/chat/RegisterChat';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import RestPassword from './pages/MainPages/restPassword';
import { useTranslation } from 'react-i18next';
import AcceptStudent from './pages/Head of Department/AcceptStudent';
import UserProfile from './component/AccountSetting/UserProfile';
import { useSelector } from 'react-redux';

function App() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const { currentUser } = useContext(AuthContext);
  const userInfo = useSelector((state) => state.user.UserInfo);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/chatslogin" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home changeLanguage={changeLanguage} />,
    },
    {
      path: '/employee',
      element: <Layout Actions={employeeActions} />,
      children: [
        { path: '/employee/Regulations', element: <Regulations /> },

        {
          path: '/employee/studentinformation',
          element: <Studentinformation />,
        },
        {
          path: '/employee/studentinformationreport',
          element: <StudentinformationReport />,
        },
        { path: '/employee/petition', element: <Petition /> },
        { path: '/employee/uploadschedule', element: <UploadSchedule /> },
        { path: '/employee/uploadallgrades', element: <UploadAllGrades /> },
      ],
    },
    {
      path: '/professor',
      element: <Layout Actions={profActions} />,
      children: [
        { path: '/professor/gradesstudent', element: <GradesStudent /> },
        { path: '/professor/uploadmaterial', element: <UploadMaterial /> },
        {
          path: '/professor/extendRestriction',
          element: <ExtendRestriction />,
        },
        {
          path: '/professor/studentstuts',
          element: <StudentStuts />,
        },
      ],
    },
    {
      path: '/headofdepartment',
      element: <Layout Actions={headActions} />,
      children: [
        {
          path: '/headofdepartment/acceptstudent',
          element: <AcceptStudent />,
        },
        {
          path: '/headofdepartment/applyplanresearch',
          element: <ApplyPlanResearch />,
        },
        {
          path: '/headofdepartment/showralleports',
          element: <ShowAllReports />,
        },
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
    { path: '/accountsetting', element: <UserProfile /> },
    { path: '/restpassword', element: <RestPassword /> },
    { path: '/payment', element: <Payment /> },
    { path: '/registration', element: <RegistrationToApply /> },
    { path: '/course', element: <EnrolCourse /> },
    { path: '/material', element: <Material /> },
    { path: '/showgrade', element: <Grade /> },
    { path: '/recordpoint', element: <RecordPoint /> },
    { path: '/examtable', element: <ExamTable /> },
    { path: '/studytable', element: <StudyTable /> },
    {
      path: '/chats',
      element: (
        <ProtectedRoute>
          <HomeChat />,
        </ProtectedRoute>
      ),
    },
    {
      path: '/chatslogin',
      element: <LoginChat />,
    },
    {
      path: '/chatsregister',
      element: <RegisterChat />,
    },
  ]);
  return (
    <div className="font-bodyFont min-h-screen  ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
