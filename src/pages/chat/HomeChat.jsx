import Chat from '../../component/chat/Chat';
import Sidebar from '../../component/chat/Sidebar';

export default function HomeChat() {
  return (
    <div className="home">
      <div className="container">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
}
