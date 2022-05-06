import React from "react";
import { useNavigate } from "react-router-dom";
import SecTitle from "../../Components/SecTitle/SecTitle";
import "./NotFoundPage.css";

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <section className="not-found-wrapper">
            <div className="sec-container">
                <SecTitle title="Sorry page not found" />
                <button
                    className="vally-btn single-inventory-btn"
                    onClick={() => navigate("/")}
                >
                    back to home
                </button>
            </div>
        </section>
    );
};

export default NotFoundPage;
