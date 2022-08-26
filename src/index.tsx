import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./authConfig";

export const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(
  <React.StrictMode>
    <App msalInstance={msalInstance}/>
  </React.StrictMode>,
  document.getElementById('root')
);