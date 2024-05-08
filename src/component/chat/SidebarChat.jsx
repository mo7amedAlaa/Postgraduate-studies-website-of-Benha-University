import Chats from '../../pages/MainPages/Chats';
import NavbarChat from './NavbarChat';
import SearchChat from './SearchChat';

const SidebarChat = () => {
  return (
    <div className="sidebar">
      <NavbarChat />
      <SearchChat />
      <Chats />
    </div>
  );
};

export default SidebarChat;
