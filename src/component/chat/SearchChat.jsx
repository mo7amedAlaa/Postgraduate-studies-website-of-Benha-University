import { Add } from '../../assets/images/chat/indexChat';

function SearchChat() {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>
      {/* <span>User not found!</span> */}
      <div className="userChat">
        <img src={Add} alt="" />
        <div className="userChatInfo">
          <span>eeecf</span>
        </div>
      </div>
    </div>
  );
}

export default SearchChat;
