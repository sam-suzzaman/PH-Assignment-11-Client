import React from "react";
import "./clientInfo.css";

const ClientInfo = (props) => {
    const { name, value } = props.client;
    return (
        <div className="client-info">
            <h3 className="value">{value}</h3>
            <p className="text">{name}</p>
        </div>
    );
};

export default ClientInfo;
