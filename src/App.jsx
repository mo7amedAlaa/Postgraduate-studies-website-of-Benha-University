import './App.css';
import perPicTest from './assets/images/persona-logo.jpg';
import { Route, Routes } from 'react-router-dom';
import Navbar from './component/NavBar/Navbar';
import Sidebar from './component/SideBar/Sidebar';
import LinksGroup from './component/SideBar/LinksGroup/LinksGroup';
import Body from './component/Body/Body';
import About from './component/Body/pages/About';
import Contact from './component/Body/pages/Contact';
import Home from './component/Body/pages/Home';
import { linksGroupInfo } from './component/SideBar/LinksGroup/data';
function App() {
  return (
    <>
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="flex justify-between w-full items-center h-[90vh]">
        <Sidebar userImg={perPicTest} userName={'مدام ليلي مسعد'}>
          {linksGroupInfo.map((data) => (
            <LinksGroup key={data.id} title={data.title} links={data.links} />
          ))}
        </Sidebar>
        <Body>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Body>
      </div>
    </>
  );
}

export default App;
