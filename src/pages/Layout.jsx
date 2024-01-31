import { Outlet } from 'react-router-dom';
import Navbar from '../component/NavBar/Navbar';
import Sidebar from '../component/SideBar/Sidebar';
import { linksGroupInfo } from '../component/SideBar/LinksGroup/data';
import LinksGroup from '../component/SideBar/LinksGroup/LinksGroup';
import { personaLogo } from '../assets';
function Layout() {
  return (
    <>
      <div className="grid grid-rows-1">
        <div className=" grid  grid-cols-1">
          <Navbar />
        </div>
      </div>
      <div className="grid grid-rows-1">
        <div className="grid grid-cols-12">
          <div className="grid col-span-3">
            <Sidebar userName={' انس محمد'} userImg={personaLogo}>
              {linksGroupInfo.map((info) => (
                <LinksGroup
                  key={info.id}
                  title={info.title}
                  links={info.links}
                />
              ))}
            </Sidebar>
          </div>
          <div className=" grid col-span-9  ">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
