import { Outlet } from 'react-router-dom';
import Navbar from '../../component/NavBar/Navbar';
import Sidebar from '../../component/SideBar/Sidebar';

import LinksGroup from '../../component/SideBar/LinksGroup/LinksGroup';
import { personaLogo } from '../../assets';
import { useState } from 'react';
import MainLayout from '../../component/Main/MainLayout';
import { useSelector } from 'react-redux';
import Notifications from '../User/Notification';
import { useTranslation } from 'react-i18next';
function Layout({ Actions }) {
  const darkMode = useSelector((state) => state.theme.darkMode);
  const userInfo = useSelector((state) => state.user?.UserInfo);
  const [sideOpen, setSideOpen] = useState(false);
  const handleSidebarOpen = () => {
    setSideOpen(!sideOpen);
  };
  const notifications = useSelector((state) => state.notifications.student);
  const [t] = useTranslation();

  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  return (
    <>
      <div className="grid grid-rows-1">
        <div className=" grid  grid-cols-1 relative">
          <Navbar
            side={sideOpen}
            handleSidebarOpen={handleSidebarOpen}
            notS={toggleDropdown}
            count={notifications?.length}
          />
          {isDropdownVisible && <Notifications notifications={notifications} />}
        </div>
      </div>
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-12 gap-2">
          <div className="grid col-span-3">
            <Sidebar
              userName={userInfo?.user_data?.name}
              side={sideOpen}
              userImg={personaLogo}
            >
              {Actions.map((info) => (
                <LinksGroup
                  key={info.id}
                  title={info.title}
                  links={info.links}
                />
              ))}
            </Sidebar>
          </div>
          <div className=" grid md:col-span-9  col-span-12 px-1  ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
