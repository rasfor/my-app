import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, { addPost, updateNewPostText, subscribe } from './redux/state';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

let renderPage = (state) => {
  root.render(
    <React.StrictMode>
      <App appState={state} newPostFn={addPost} updateNewPostText={updateNewPostText} />
    </React.StrictMode>
  );
}

renderPage(state);
subscribe(renderPage);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
