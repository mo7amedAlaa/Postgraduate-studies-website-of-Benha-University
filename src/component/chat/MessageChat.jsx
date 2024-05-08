import { Add, img } from '../../assets/images/chat/indexChat';

function MessageChat() {
  return (
    <div className={'message  owner'}>
      <div className="messageInfo">
        <img src={Add} alt="lpl" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p> grrgg</p>
        <img src={img} alt="" />
      </div>
    </div>
  );
}

export default MessageChat;
