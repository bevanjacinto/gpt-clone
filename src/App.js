import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import rocket from './assets/rocket.svg';
import saved from './assets/bookmark.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from "./openai";
import { useState } from "react";

function App() {

  const [input, setInput] = useState("");

  const handleSend = async () => {
    const res = await sendMsgToOpenAI(input);
    console.log(res);
  }

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop"><img src={gptLogo} alt="Logo" className="logo" /><span className="brand">ChatGPT</span></div>
          <button className="midBtn"><img src={addBtn} alt="new chat" className="addBtn" />New Chat</button>
          <div className="upperSideBottom">
            <button className="query"><img src={msgIcon} alt="Query" />What is programming?</button>
            <button className="query"><img src={msgIcon} alt="Query" />How to use an API</button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems"><img src={home} alt="Home" className="listItemsImg" />Home</div>
          <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
          <div className="listItems"><img src={rocket} alt="Upgrade" className="listItemsImg" />Upgrade to Pro</div>
        </div>
      </div>
      <div className="main">
        <div className="chats">
          <div className="chat"><img className="chatimg" src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium expedita consequuntur exercitationem a suscipit nisi earum quidem minus labore. Mollitia.</p></div>
          <div className="chat bot"><img className="chatimg" src={gptImgLogo} alt="" /><p className="txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero excepturi minima repudiandae necessitatibus laboriosam vel. Beatae dolor mollitia corporis, deserunt, expedita, voluptas at harum ipsam maiores quaerat vitae voluptatem perspiciatis aliquam. Ea dolore eveniet vero alias illo? Nemo modi tempora quam, totam, fugit ipsum unde animi repellendus fuga velit dicta ea optio pariatur explicabo ullam qui assumenda. Harum ullam quasi dicta ipsum eveniet repudiandae! Tempora illo inventore iusto voluptatibus officiis repellat ea at ipsam quisquam ex animi unde enim quaerat aspernatur totam similique, recusandae saepe nostrum vitae, rerum sed consectetur. Voluptas magni doloremque voluptate iusto! Voluptatum, praesentium rem. Omnis, consequuntur.</p></div>
        </div>
        <div className="chatFooter">
          <div className="inp">
            <input type="text" placeholder="Send a message" value={input} onChange={(e) => {setInput(e.target.value)}} /><button className="send" onClick={handleSend} ><img src={sendBtn} alt="Send" /></button>
          </div>
          <p>ChatGPT may produce inaccurate information about people, places or facts</p>
        </div>
      </div>
    </div>
  );
}

export default App;
