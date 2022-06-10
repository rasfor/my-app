import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Contact from './components/Dialogs/Contact/Contact';
import Message from './components/Dialogs/Message/Message';

let contacts = [
  { id: 1, name: 'Hinata' },
  { id: 2, name: 'Sasuke' },
  { id: 3, name: 'Sakura' },
  { id: 4, name: 'Kakashi' }
]

let messages = [
  { id: 1, messageText: 'Hello' },
  { id: 2, messageText: 'Yo' },
  { id: 3, messageText: 'Watashi backa' },
  { id: 4, messageText: 'kek' },
  { id: 5, messageText: 'chebureck' }
]


let contactElements = contacts.map((contact) => {
  return <Contact id={contact.id} name={contact.name} />
})

let messageElements = messages.map((message) => {
  return <Message id={message.id} messageText={message.messageText} />
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App contactElements={contactElements} messageElements={messageElements} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
