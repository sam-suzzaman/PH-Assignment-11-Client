import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SecTitle from "../../Components/SecTitle/SecTitle";
import "./MyItemsPage.css";
import { useAuthState } from "react-firebase-hooks/auth";
import firebaseAuth from "../../firebase.init";

const MyItemsPage = () => {
    const [user] = useAuthState(firebaseAuth);
    const [inventories, setInventories] = useState([]);

    // for Inentories
    useEffect(() => {
        const userEmail = user.email;
        const url = `https://fierce-anchorage-64625.herokuapp.com/myitems?email=${userEmail}`;
        fetch(url)
            .then((res) => res.json())
            .then((result) => setInventories(result))
            .catch((err) => console.log(err));
    }, [user]);

    // To delete an item
    const handleDeleteItem = (ID) => {
        const proceed = window.confirm("Are You Sure? ");
        if (proceed) {
            const url = `https://fierce-anchorage-64625.herokuapp.com/inventories/${ID}`;
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
    return (
        <section className="my-items-wrapper">
            <SecTitle title="My added items" />
            <div className="sec-container">
                <div className="my-items-container">
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
                                                <button
                                                    onClick={() =>
                                                        handleDeleteItem(_id)
                                                    }
                                                    className="table-btn"
                                                >
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
            </div>
        </section>
    );
};

export default MyItemsPage;
