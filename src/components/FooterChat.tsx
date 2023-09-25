import React, { useState } from "react";
import footerchat from "src/styles/FooterChat.module.css";

const FooterChat = () => {
  const [showComponent, setShowComponent] = useState<boolean>(false);

  const handleClick = () => {
    setShowComponent(!showComponent);
  };
  return (
    <>
      <div className={footerchat.footerchat}>
        <div className={footerchat.container}>
          <p>&#169; 2019 Инфинити травел. Сите права се задржани</p>
          <img
            className={footerchat.liveChat}
            src="/liveChat.png"
            alt="liveChat"
            onClick={handleClick}
          />
          {showComponent && (
            <div className={footerchat.liveChatContainer}>
              <div className={footerchat.closeChat}>
                <img src="/x.png" alt="" onClick={handleClick} />
              </div>
              <div className={footerchat.chatDiv}>
                <div className={footerchat.chat}>
                  Ви благодариме што не исконтактиравте
                </div>
              </div>
              <div className={footerchat.chatTime}>08:30</div>
              <div className={footerchat.chatInput}>
                <input type="text" />
                <button>ИСПРАТИ</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FooterChat;
