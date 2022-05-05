import React, { useEffect, useState } from "react";
import SecTitle from "../../Components/SecTitle/SecTitle";
import "./InventoriesPage.css";

const InventoriesPage = () => {
    const [inventories, setInventories] = useState([]);

    // for Inentories
    useEffect(() => {
        fetch("http://localhost:5000/inventories")
            .then((res) => res.json())
            .then((result) => setInventories(result))
            .catch((err) => console.log(err));
    }, []);

    return (
        <section className="all-inventories-wrapper">
            <SecTitle title=" All Inventories" />
            <div className="sec-container">
                <div className="inventory-table-row">
                    <table>
                        <thead>
                            <tr>
                                <th>photo</th>
                                <th>name-supplier</th>
                                <th>quantity</th>
                                <th>price</th>
                                <th>control</th>
                            </tr>
                        </thead>
                        <tbody>
                            {inventories.map((inventory) => {
                                const {
                                    name,
                                    _id,
                                    img,
                                    quantity,
                                    price,
                                    supplier,
                                } = inventory;
                                return (
                                    <tr key={_id}>
                                        <td>
                                            <img src={img} alt="product" />
                                        </td>
                                        <td>
                                            <h4>{name}</h4>
                                            <p> {supplier}</p>
                                        </td>
                                        <td>{quantity}</td>
                                        <td>{price}</td>
                                        <td className="item-control">
                                            <button className="table-btn">
                                                delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default InventoriesPage;
