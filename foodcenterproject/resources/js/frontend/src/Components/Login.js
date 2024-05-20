import * as React from "react";
import { Link } from "react-router-dom";
import "../Styles/Form.css";
import Background from "./Background";

export default function Login () {
  return (
    <>
      <Background />
      <main className="main-container">
        <section className="content-section">
          <div className="content-wrapper">
            <div className="text-content">
              <h1 className="title">Great to have you back!</h1>
              <p className="description"> You can sign in to Food center with your existing account. </p>
            </div>
          </div>
        </section>
      </main>
      <div>
        <form className="login-form">
          <label className="login-form-label"> E-mail </label>
          <input type="email" id="email" className="login-form-input" placeholder="foodceter@gmail.com"/>
          <label className="login-form-label"> Password </label>
          <input type="password" id="password" className="login-form-input"/>
          <button type="submit" className="submit-button"> Log in </button>
          <div className="login-form-signup">
            <span>New here?</span>
            <Link className="login-signup-link" to="/Signup">Create a new account</Link>
          </div>
        </form>
      </div>
    </>
  )
}