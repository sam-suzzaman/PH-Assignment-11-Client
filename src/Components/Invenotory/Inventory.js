import React from "react";
import "./Inventory.css";

const Inventory = (props) => {
    const { name, img, info, price, quantity, supplier } = props.inventory;
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
            <button className="inventory-btn">update now</button>
        </div>
    );
};

export default Inventory;
