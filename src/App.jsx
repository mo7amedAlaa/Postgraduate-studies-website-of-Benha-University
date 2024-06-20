import React, { useContext } from 'react';
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
import { AuthContext } from './context/AuthContext';
import RestPassword from './pages/MainPages/restPassword';
import { useTranslation } from 'react-i18next';
import AcceptStudent from './pages/Head of Department/AcceptStudent';
import UserProfile from './component/AccountSetting/UserProfile';
import Swal from 'sweetalert2';
import ReportList from './pages/User/Reports';
import SeminarRequestForm from './pages/User/seminars';

function App() {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const ProtectedChatRoute = ({ children }) => {
    const { currentUser } = useContext(AuthContext);
    if (!currentUser) {
      toast.error('You must be logged in to access the chat');
      return <Navigate to="/chatslogin" />;
    }
    return children;
  };

  const ProtectedRoute = ({ children, roles }) => {
    const userInfo = useSelector((state) => state.user.UserInfo);

    // if (!userInfo) {
    //   Swal.fire(
    //     'Error',
    //     'You must be logged in to access this page login required',
    //     'error'
    //   );
    //   return <Navigate to="/login" />;
    // }

    // if (roles && !roles.includes(userInfo.user_data.login_type)) {
    //   Swal.fire(
    //     'Error',
    //     'You do not have permission to access this page',
    //     'error'
    //   );
    //   return <Navigate to="/" />;
    // }

    return children;
  };

  const PaidRoute = ({ children }) => {
    const userPaid = useSelector(
      (state) => state.user.UserInfo.user_data?.payment
    );
    // if (userPaid === 'pending') {
    //   toast.error('You must complete the payment first');
    //   return <Navigate to="/payment" />;
    // }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home changeLanguage={changeLanguage} />,
    },
    {
      path: '/employee',
      element: (
        <ProtectedRoute roles={['employee']}>
          <Layout Actions={employeeActions} />
        </ProtectedRoute>
      ),
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
      element: (
        <ProtectedRoute roles={['professor']}>
          <Layout Actions={profActions} />
        </ProtectedRoute>
      ),
      children: [
        { path: '/professor/gradesstudent', element: <GradesStudent /> },
        { path: '/professor/uploadmaterial', element: <UploadMaterial /> },
        {
          path: '/professor/extendRestriction',
          element: <ExtendRestriction />,
        },
        { path: '/professor/studentstuts', element: <StudentStuts /> },
      ],
    },
    {
      path: '/headofdepartment',
      element: (
        <ProtectedRoute roles={['heads']}>
          <Layout Actions={headActions} />
        </ProtectedRoute>
      ),
      children: [
        { path: '/headofdepartment/acceptstudent', element: <AcceptStudent /> },
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
      element: (
        <ProtectedRoute roles={['admin']}>
          <Layout Actions={AdminActions} />
        </ProtectedRoute>
      ),
      children: [
        { path: '/admin/GenerateAccount', element: <GenerateAccounts /> },
      ],
    },
    {
      path: '/CollegeVice',
      element: (
        <ProtectedRoute roles={['CollegeVice']}>
          <Layout Actions={AdminActions} />
        </ProtectedRoute>
      ),
    },
    { path: '/login', element: <Login /> },
    {
      path: '/accountsetting',
      element: (
        <ProtectedRoute roles={['students']}>
          <UserProfile />
        </ProtectedRoute>
      ),
    },
    {
      path: '/restpassword',
      element: (
        <ProtectedRoute
          roles={['admin', 'employee', 'professor', 'heads', 'students']}
        >
          <RestPassword />
        </ProtectedRoute>
      ),
    },
    {
      path: '/payment',
      element: (
        <ProtectedRoute roles={['students']}>
          <Payment />
        </ProtectedRoute>
      ),
    },
    {
      path: '/registration',
      element: <RegistrationToApply />,
    },
    {
      path: '/course',
      element: (
        <ProtectedRoute roles={['students']}>
          <PaidRoute>
            <EnrolCourse />
          </PaidRoute>
        </ProtectedRoute>
      ),
    },
    {
      path: '/material',
      element: (
        <ProtectedRoute roles={['students']}>
          <PaidRoute>
            <Material />
          </PaidRoute>
        </ProtectedRoute>
      ),
    },
    {
      path: '/showgrade',
      element: (
        <ProtectedRoute roles={['students']}>
          <PaidRoute>
            <Grade />
          </PaidRoute>
        </ProtectedRoute>
      ),
    },
    {
      path: '/recordpoint',
      element: (
        <ProtectedRoute roles={['students']}>
          <PaidRoute>
            <RecordPoint />
          </PaidRoute>
        </ProtectedRoute>
      ),
    },
    {
      path: '/examtable',
      element: (
        <ProtectedRoute roles={['students']}>
          <PaidRoute>
            <ExamTable />
          </PaidRoute>
        </ProtectedRoute>
      ),
    },
    {
      path: '/studytable',
      element: (
        <ProtectedRoute roles={['students']}>
          <PaidRoute>
            <StudyTable />
          </PaidRoute>
        </ProtectedRoute>
      ),
    },
    {
      path: '/reports',
      element: (
        <ProtectedRoute roles={['students']}>
          <PaidRoute>
            <ReportList />
          </PaidRoute>
        </ProtectedRoute>
      ),
    },
    {
      path: '/seminar-request',
      element: (
        <ProtectedRoute roles={['students']}>
          <PaidRoute>
            <SeminarRequestForm />
          </PaidRoute>
        </ProtectedRoute>
      ),
    },
    {
      path: '/chats',
      element: (
        <ProtectedChatRoute>
          <HomeChat />
        </ProtectedChatRoute>
      ),
    },
    { path: '/chatslogin', element: <LoginChat /> },
    { path: '/chatsregister', element: <RegisterChat /> },
  ]);

  return (
    <div className="font-bodyFont min-h-screen">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
