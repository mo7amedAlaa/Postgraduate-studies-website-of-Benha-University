import { Add } from '../assets';

function Chats() {
  return (
    <div className="chats">
      <div className="userChat">
        <img src={Add} alt="" />
        <div className="userChatInfo">
          <span> mohamed</span>
          <p> hello</p>
        </div>
      </div>
    </div>
  );
}

export default Chats;
