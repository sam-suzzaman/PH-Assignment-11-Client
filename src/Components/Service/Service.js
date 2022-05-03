import React from "react";
import "./Service.css";

const Service = ({ service }) => {
    const { icon, title, des } = service;
    return (
        <div className="service">
            <div className="icon-container">
                <i className={icon}></i>
            </div>
            <h4 className="service-title">{title}</h4>
            <p className="service-info">{des}</p>
        </div>
    );
};

export default Service;
