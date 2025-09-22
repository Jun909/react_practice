import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [chatMessages, setChatMessages] = useState([{
      message: "Hello Chatbot", sender: "user", id:"id1"
    }, {
      message: "Hello, how can I help you?", sender: "robot", id:"id2"
    },
    {
      message: "Can you get me today's date?", sender: "user", id:"id3"
    },
    {
      message: "Today is 27th of September", sender: "robot", id:"id4"
    },
    {
      message: "How about flip a coin?", sender: "user", id:"id5"
    },
    {
      message: "Sure, you got tails :)", sender: "robot", id:"id6"
    }
    ]);

  function ChatMessages() {
    // const [chatMessages, setChatMessages] = useState([{
    //   message: "Hello Chatbot", sender: "user", id:"id1"
    // }, {
    //   message: "Hello, how can I help you?", sender: "robot", id:"id2"
    // },
    // {
    //   message: "Can you get me today's date?", sender: "user", id:"id3"
    // },
    // {
    //   message: "Today is 27th of September", sender: "robot", id:"id4"
    // },
    // {
    //   message: "How about flip a coin?", sender: "user", id:"id5"
    // },
    // {
    //   message: "Sure, you got tails :)", sender: "robot", id:"id6"
    // }
    // ]);

    return (
      <>
        {chatMessages.map((chatMessage) => {
          return (
          <ChatMessage 
          message={chatMessage.message} 
          sender={chatMessage.sender} 
          key={chatMessage.id}/>
          );
        })}
      </>
    )
    };

  function ChatInput() {

    const [inputText, setInputText] = useState("");

    function saveInputText(event) {
      setInputText(event.target.value);
    }

    function sendMessage(){
      setChatMessages([...chatMessages, {message: inputText, sender: "user", id: crypto.randomUUID()}]);

      return (
        <>
          {chatMessages.map((chatMessage) => {
            return (
            <ChatMessage 
            message={chatMessage.message} 
            sender={chatMessage.sender} 
            key={chatMessage.id}/>
            );
          })}
        </>
        
      )
    }

    return (
      <>
        <input placeholder='Enter your message here' 
        size={30} 
        onChange={saveInputText}/>
        <button onClick={sendMessage}>Send</button>
      </>
            
    );
  }

  function ChatMessage({message, sender}) {

    return (
      <div>
        { sender === "robot" && <img src="robot.png" width={50}/> }
        {message}
        { sender === "user" && <img src="user.png" width={50}/> }
      </div>
    )
  }

  return (
    <>
      <ChatInput />
      {/* <ChatMessages/> */}
    </>
    
  )
}

export default App
