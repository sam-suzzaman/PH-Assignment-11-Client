import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SecTitle from "../../Components/SecTitle/SecTitle";
import "./SignleInventory.css";

const SignleInventory = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/inventories/${id}`;
        fetch(url)
            .then((res) => res.json())
            .then((result) => setInventory(result))
            .catch((err) => console.log(err.message));
    }, [inventory]);

    const [update, setUpdate] = useState("");
    const handleInventoryUpdate = (e) => {
        e.preventDefault();
        const updateNumValue = parseFloat(update);
        if (updateNumValue == 0) {
            toast("Enter a value Greater than 0");
        } else if (updateNumValue < 0) {
            toast("Enter a Positive Value");
        } else if (!Number.isInteger(updateNumValue)) {
            toast("Enter an Integer Number");
        } else {
            const { quantity, ...restInventory } = inventory;
            const newInventory = { quantity: update, ...restInventory };
            const url = `http://localhost:5000/inventories/${id}`;
            fetch(url, {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(newInventory),
            })
                .then((res) => res.json())
                .then((result) => {
                    toast("Item added successfully");
                });
        }
        setUpdate("");
    };

    return (
        <section className="single-inventory-container">
            <div className="sec-container">
                <div className="info-row">
                    <div className="left-img">
                        <img
                            src="https://i.ibb.co/w4RnFj8/headphone-1.jpg"
                            alt="product"
                        />
                    </div>
                    <div className="right-text">
                        <h6>
                            ID: <span>{inventory._id}</span>
                        </h6>
                        <h5>
                            Name: <span>{inventory.name}</span>
                        </h5>
                        <p>
                            Price: <span>{inventory.price}</span>
                        </p>
                        <p>
                            Quantity: <span>{inventory.quantity}</span>
                        </p>
                        <p>
                            Supplier: <span>{inventory.supplier}</span>
                        </p>
                        <p>Sold</p>
                        <button className="vally-btn">deliverd</button>
                    </div>
                </div>
                {/* form to update */}
                <div className="form-row">
                    <form onSubmit={handleInventoryUpdate}>
                        <input
                            type="number"
                            name="quantity"
                            value={update}
                            onChange={(e) => setUpdate(e.target.value)}
                            placeholder="Enter value to Update"
                        />
                        <button type="submit">update</button>
                    </form>
                </div>
                {/* Buttons row */}
                <SecTitle title="For Product management" />
                <div className="buttons-row">
                    <button
                        className="vally-btn single-inventory-btn"
                        onClick={() => navigate("/allinventories")}
                    >
                        manage inventories
                    </button>
                    <button
                        className="vally-btn single-inventory-btn"
                        onClick={() => navigate("/additem")}
                    >
                        add new item
                    </button>
                </div>
            </div>
        </section>
    );
};

export default SignleInventory;
