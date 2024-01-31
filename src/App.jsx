import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Page1 from './pages/usr-adminPages/page1';
import Page2 from './pages/usr-adminPages/page2';
import Page3 from './pages/usr-adminPages/page3';
import Page4 from './pages/usr-adminPages/page4';
import Page5 from './pages/usr-adminPages/page5';
import Home from './pages/Home';
import Signin from './pages/usr-adminPages/Signin';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/admin',
      element: <Layout />,
      children: [
        { path: '/admin/page1', element: <Page1 /> },
        { path: '/admin/page2', element: <Page2 /> },
        { path: '/admin/page3', element: <Page3 /> },
        { path: '/admin/page4', element: <Page4 /> },
        { path: '/admin/page5', element: <Page5 /> },
      ],
    },
    { path: '/signin', element: <Signin /> },
  ]);
  return (
    <div className="font-bodyFont min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;