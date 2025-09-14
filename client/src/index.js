import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Chatbot  from './components/chatbot/Chatbot'
import { Provider } from 'react-redux'
import store from './app/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
      <Chatbot/>
    </React.StrictMode>
  </Provider>
);

