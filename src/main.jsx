import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import Usercontext from './context/Usercontext.jsx';
import { CacheProvider } from '@emotion/react';
import { Provider } from "react-redux";
import store from "./redux/store";
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Usercontext>
    <App />
  </Usercontext>
  </Provider>
)
