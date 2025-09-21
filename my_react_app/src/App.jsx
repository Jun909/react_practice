import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  function ChatInput() {
    return (
      <>
        <input placeholder='Enter your message here' size={30}/>
        <button>Send</button>
      </>
            
    );
  }

  function ChatMessage(props) {
    // const message = props.message;
    // const sender = props.sender;
    const { message, sender } = props;

    if (sender === "robot") {
      return (
        <div>
          <img src="robot.png" width={50}/>
          {message}          
        </div>
      )
    }
    return (
      <div>
        {message}
        <img src="user.png" width={50}/>
      </div>
    )
  }

  return (
    <>
      {ChatInput()}
      <ChatMessage message="Hello Chatbot" sender="user"/>
      <ChatMessage message="Hello, how can I help you?" sender="robot"/>
      <ChatMessage message="Can you get me today's date?" sender="user"/>
      <ChatMessage message="Today is 27th of September" sender="robot"/>
      <ChatMessage message="How about flip a coin?" sender="user"/>
      <ChatMessage message="Sure, you got tails :)" sender="robot"/>
    </>
    
  )
}

export default App
