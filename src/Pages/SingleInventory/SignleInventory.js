import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import SecTitle from "../../Components/SecTitle/SecTitle";
import "./SignleInventory.css";

const SignleInventory = () => {
    // const { id } = useParams();
    const navigate = useNavigate();

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
                            ID: <span>13234348834</span>
                        </h6>
                        <h5>
                            Name: <span>exclusive headphone</span>
                        </h5>
                        <p>
                            Price: <span>$5</span>
                        </p>
                        <p>
                            Quantity: <span>100</span>
                        </p>
                        <p>
                            Supplier: <span>Robert</span>
                        </p>
                        <p>Sold</p>
                        <button className="vally-btn">deliverd</button>
                    </div>
                </div>
                {/* form to update */}
                <div className="form-row">
                    <form>
                        <input
                            type="number"
                            name="quantity"
                            id=""
                            placeholder="Enter value to Update"
                        />
                        <button>update</button>
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
