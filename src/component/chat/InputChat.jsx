import { attach, img } from '../../assets/images/chat/indexChat';

function InputChat() {
  return (
    <div className="input">
      <input type="text" placeholder="Type something..." />
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{ display: 'none' }} id="file" />
        <label htmlFor="file">
          <img src={img} alt="ss" />
        </label>
        <button>Send</button>
      </div>
    </div>
  );
}

export default InputChat;
