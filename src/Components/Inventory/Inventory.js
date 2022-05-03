import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonCom from "../ButtonCom/ButtonCom";
import "./Inventory.css";

const Inventory = (props) => {
    const { id, name, img, info, price, quantity, supplier } = props.inventory;
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/inventory/${id}`);
    };
    return (
        <div className="inventory">
            <img src={img} alt={name} />
            <h4 className="inventory-title">{name}</h4>
            <p className="inventory-info">{info}</p>
            <h4 className="price">
                price <span>{price}</span>{" "}
            </h4>
            <h4 className="quantity">
                quantity: <span>{quantity}</span>
            </h4>
            <h4 className="supplier">
                supplier: <span>{supplier}</span>
            </h4>
            <button
                className="inventory-btn"
                onClick={() => handleNavigate(id)}
            >
                update now
            </button>
        </div>
    );
};

export default Inventory;
