import React from "react";
import "./LoginPage.css";
import SecTitle from "../../Components/SecTitle/SecTitle";

const LogInPage = () => {
    return (
        <div className="form-container">
            <SecTitle title="Log In First" />
            <form>
                <div className="input-control">
                    <label htmlFor="email">enter Your email:</label>
                    <input type="email" name="email" id="" />
                </div>
                <div className="input-control">
                    <label htmlFor="password">enter Your password:</label>
                    <input type="password" name="password" id="" />
                </div>
                <div className="form-info-row">
                    <div className="check-box">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <label htmlFor="checkbox">remember me</label>
                    </div>
                    <p className="forget-password">forget password</p>
                </div>
                <input className="submit-btn" type="submit" value="login" />
                <p className="form-text">
                    Don't have an account? <span>Register now</span>
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
                    <button>
                        <i className="fa-brands fa-google"></i>{" "}
                        <span className="btn-text">google</span>
                    </button>
                    {/* if get time */}
                    {/* <button>
                        <i className="fa-brands fa-github"></i>{" "}
                        <span className="btn-text">github</span>
                    </button>
                    <button>
                        <i className="fa-brands fa-facebook"></i>{" "}
                        <span className="btn-text">facebook</span>
                    </button> */}
                </div>
            </div>
        </div>
    );
};

export default LogInPage;
