import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SecTitle from "../../Components/SecTitle/SecTitle";
import "./InventoriesPage.css";

const InventoriesPage = () => {
    const [inventories, setInventories] = useState([]);
    const navigate = useNavigate();

    // for Inentories
    useEffect(() => {
        fetch("http://localhost:5000/inventories")
            .then((res) => res.json())
            .then((result) => setInventories(result))
            .catch((err) => console.log(err));
    }, []);

    // To delete an item
    const handleDeleteItem = (ID) => {
        const proceed = window.confirm("Are You Sure? ");
        if (proceed) {
            const url = `http://localhost:5000/inventories/${ID}`;
            fetch(url, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    const remaining = inventories.filter(
                        (inventory) => inventory._id !== ID
                    );
                    setInventories(remaining);
                    toast("Item Deleted Successfully");
                })
                .catch((err) => console.log(err));
        }
    };

    const handleItemDetails = (id) => {
        navigate(`/inventory/${id}`);
    };

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
                                <th>details</th>
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
                                            <button
                                                onClick={() =>
                                                    handleDeleteItem(_id)
                                                }
                                                className="table-btn"
                                            >
                                                delete
                                            </button>
                                        </td>
                                        <td className="item-control">
                                            <button
                                                onClick={() =>
                                                    handleItemDetails(_id)
                                                }
                                                className="table-btn"
                                            >
                                                details
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <button
                    className="vally-btn single-inventory-btn"
                    onClick={() => navigate("/additem")}
                >
                    add new item
                </button>
            </div>
        </section>
    );
};

export default InventoriesPage;
