import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route } from 'react-router-dom';
import Default from './components/Default';
import {BrowserRouter as Router, Routes,Link} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename='/'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Default />}></Route>
          <Route path='/default' element={<Default />}></Route>
        <Route path='/invoices' element={<p>Raju iss invoice</p>}></Route>
        <Route path='/expenses' element={<p>Raju iss expense</p>}></Route>
        </Route>
      </Routes>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
