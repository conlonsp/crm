import React from "react";
import { NavLink } from "react-router-dom"

function LoginPage() {
  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <NavLink
        to="/"
        exact
      >
        Back to Dashboard
      </NavLink>
    </div>
  )
}

export default LoginPage;