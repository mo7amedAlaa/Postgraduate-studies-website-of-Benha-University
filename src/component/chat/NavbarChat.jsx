import { Add } from '../../assets/images/chat/indexChat';

const NavbarChat = () => {
  return (
    <div className="navbar">
      <span className="logo">Lama Chat</span>
      <div className="user">
        <img src={Add} alt="jjj" />
        <span>MOHAMED</span>
        <button>logout</button>
      </div>
    </div>
  );
};

export default NavbarChat;
