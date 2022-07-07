import React from 'react';
import {Link} from 'react-router-dom';
{/* <script src="http://169.254.18.10:8097"></script> */}
export const Default = () => {
  return (
    <div>
      <h1>Raju The Onlyyy Keeper</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
    </div>
  )
}

export default Default;