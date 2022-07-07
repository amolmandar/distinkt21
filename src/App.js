import logo from './logo.svg';
import './App.css';
import Default from './components/Default';

import {Outlet,Link} from "react-router-dom";
function App() {
  return (
    <div>
    <p>This is Apppppp</p>
    <nav>
    <Link to="/invoices">Invoices</Link> |{" "}
    <Link to="/expenses">Expenses</Link>|{" "}
    <Link to="/default">Default</Link>
    </nav>
    <Outlet></Outlet>
    </div>
  );
}

export default App;
