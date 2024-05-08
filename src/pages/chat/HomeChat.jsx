import Chate from '../../component/chat/Chat';
import SidebarChat from '../../component/chat/SidebarChat';

export default function HomeChat() {
  return (
    <div className="home">
      <div className="container">
        <SidebarChat />
        <Chate />
      </div>
    </div>
  );
}
