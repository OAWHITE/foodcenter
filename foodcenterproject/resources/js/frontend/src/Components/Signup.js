import * as React from "react";
import { Link } from "react-router-dom";
import "../Styles/Form.css";
import BackGround from "./Background";

export default function Signup () {
    return (
        <>
            <BackGround />
            <main className="main-container">
                <section className="content-section">
                    <div className="content-wrapper">
                        <div className="text-content">
                            <h1 className="title">Create a free Account!</h1>
                            <p className="description"> You can sign up into Food center for Free </p>
                        </div>
                    </div>
                </section>
            </main>
            <div>
                <form className="signup-form">
                    <div className="name-fields">
                        <div class="name-field">
                            <label for="Nom" class="signup-form-label">Nom</label>
                            <input id="Nom" class="signup-form-input" placeholder="Kaamouchi"/>
                        </div>
                        <div class="name-field">
                            <label for="Prenom" class="signup-form-label">Prenom</label>
                            <input id="Prenom" class="signup-form-input" placeholder="Fadi" />
                        </div>
                    </div>
                    <div className="signup-form-body">
                        <label className="signup-form-label"> E-mail </label>
                        <input className="signup-form-input" type="email" id="email" value="foodcenter@gmail.com" placeholder="E-mail" />
                        <label className="signup-form-label"> Password </label>
                        <input className="signup-form-input" type="password" id="password" placeholder="Password"/>
                    </div>
                    <button className="submit-button" type="submit"> Sign up </button>
                    <section className="signin-section">
                        <p className="signin-text">Already have an Account? <Link className="login-signup-link" to="/login">Sign in here</Link></p>
                    </section>
                </form>
            </div>
        </>
    )
}