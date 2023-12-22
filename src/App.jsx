import './App.css';
import Navbar from './component/Navbar';
import Sidebar from './component/Sidebar';
import perPicTest from './assets/images/persona-logo.jpg';
import LinksGroup from './component/LinksGroup';
function App() {
  return (
    <>
      <Navbar />
      <Sidebar userImg={perPicTest} userName={'مدام ليلي مسعد'}>
        <LinksGroup />
        <LinksGroup />
        <LinksGroup />
        <LinksGroup />
        <LinksGroup />
        <LinksGroup />
        <LinksGroup />
        <LinksGroup />
      </Sidebar>
    </>
  );
}

export default App;
