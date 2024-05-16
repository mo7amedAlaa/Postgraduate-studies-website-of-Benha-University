import React, { useContext } from 'react';
import { ChatContext } from '../../context/ChatContext';
import { Add, cam, more } from '../../assets/images/chat/indexChat';
import Messages from './Messages';
import Input from './Input';

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <span>{data.user?.displayName}</span>
        <div className="chatIcons">
          <img src={cam} alt="" />
          <img src={Add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
