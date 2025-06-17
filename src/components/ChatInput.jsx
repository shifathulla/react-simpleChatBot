import { useState } from 'react'
import { Chatbot } from 'supersimpledev'
import './ChatInput.css'
export function ChatInput({chatMessages, setChatMessages}){
        const [inputText, setInputText]= useState('')

        function saveInputText(){
          setInputText(event.target.value)
        }
        function sendMessage(){
          const newChatMessages=[
              ...chatMessages,
          {
            message: inputText,
            sender: 'user',
            id: crypto.randomUUID()
          }
        ];
        setChatMessages(newChatMessages);

 

        const response= Chatbot.getResponse(inputText)
        
          setChatMessages([
          ...newChatMessages,
          {
            message: response,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);

        setInputText('');
        }
        return (
          <div className="chat-input-container">
            <input 
              placeholder="Send message to Chatbot" 
              size="30"
              onChange={saveInputText}
              value={inputText}
              className="chat-input"
              />
            <button onClick={sendMessage}
            className="send-button">Send</button>
          </div>
        );
      }
