import React, { useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import "./LoginPage.css";
import SecTitle from "../../Components/SecTitle/SecTitle";
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import firebaseAuth from "../../firebase.init";

const LogInPage = () => {
    const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(firebaseAuth);
    const [signInWithGoogle, googleUser, googleLoading, googleError] =
        useSignInWithGoogle(firebaseAuth);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);

    // errors
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    // for private route
    let navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const handleLogInSubmit = (e) => {
        e.preventDefault();
        if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email)) {
            setEmailError(true);
            setPasswordError(false);
        } else if (password.length < 6) {
            setEmailError(false);
            setPasswordError(true);
        } else {
            signInWithEmailAndPassword(email, password).then(() => {
                setEmail("");
                setPassword("");
                setRemember(false);
                // for error
                setEmailError(false);
                setPasswordError(false);
                navigate(from, { replace: true });
            });
        }
    };

    const handleGoogleSignIn = (e) => {
        e.preventDefault();
        signInWithGoogle().then(() => {
            navigate(from, { replace: true });
        });
    };

    return (
        <div className="form-container">
            <SecTitle title="Log In First" />
            <h4
                style={{
                    textAlign: "center",
                    fontSize: "0.8rem",
                    color: "red",
                    marginBottom: "1rem",
                }}
            >
                {error?.message || googleError?.message}
            </h4>
            <form onSubmit={handleLogInSubmit}>
                <div className="input-control">
                    <label htmlFor="email">enter Your email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        id="email"
                    />
                    {emailError && <p className="error">enter a valid email</p>}
                </div>
                <div className="input-control">
                    <label htmlFor="password">enter Your password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        id="password"
                    />
                    {passwordError && (
                        <p className="error">Password length be atleast 6</p>
                    )}
                </div>
                <div className="form-info-row">
                    <div className="check-box">
                        <input
                            type="checkbox"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                            name="checkbox"
                            id="checkbox"
                        />
                        <label htmlFor="checkbox">remember me</label>
                    </div>
                    <NavLink to="/passwordReset">forget password</NavLink>
                </div>
                <input className="submit-btn" type="submit" value="login" />
                <p className="form-text">
                    Don't have an account?{" "}
                    <Link to="/register">register now</Link>
                </p>
            </form>
            <div className="form-footer">
                {/* social login  */}
                <div className="form-divider">
                    <div className="divider-left divider"></div>
                    <p className="divider-text">or</p>
                    <div className="divider-right divider"></div>
                </div>
                <div className="social-login-container">
                    <button onClick={handleGoogleSignIn}>
                        <i className="fa-brands fa-google"></i>{" "}
                        <span className="btn-text">google</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogInPage;
