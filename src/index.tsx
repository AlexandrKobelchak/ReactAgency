import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ClientTagService} from "./data/TagViewModel";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// @ts-ignore
// @ts-ignore
root.render(
  <React.StrictMode>
      <App><div className="loader"></div></App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
