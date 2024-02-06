import { Outlet } from 'react-router-dom';
import Navbar from '../../component/NavBar/Navbar';
import Sidebar from '../../component/SideBar/Sidebar';
import  linksGroupInfo  from '../../component/SideBar/LinksGroup/dataProf';
import LinksGroup from '../../component/SideBar/LinksGroup/LinksGroup';
import  LogProf  from '../../assets/images/logProf.png';
import { useState } from 'react';
function LayoutProf() {
  const [sideOpen, setSideOpen] = useState(false);
  const handleSidebarOpen = () => {
    setSideOpen(!sideOpen);
  };
  return (
    <>
      <div className="grid grid-rows-1">
        <div className=" grid  grid-cols-1">
          <Navbar side={sideOpen} handleSidebarOpen={handleSidebarOpen} />
        </div>
      </div>
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-12 gap-2">
          <div className="grid col-span-3">
            <Sidebar
              userName={'  د . منى عرفة'}
              side={sideOpen}
              userImg={LogProf}
              
            >
              {linksGroupInfo.map((info) => (
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

export default LayoutProf;
