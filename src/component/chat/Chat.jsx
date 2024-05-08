import { Add, cam, more } from '../../assets/images/chat/indexChat';
import InputChat from './InputChat';
import MessagesChat from './MessagesChat';

function Chate() {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>fff</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={Add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <MessagesChat />
      <InputChat />
    </div>
  );
}

export default Chate;
