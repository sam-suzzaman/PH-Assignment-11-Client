import React, { useEffect } from "react";
import SecTitle from "../../Components/SecTitle/SecTitle";
import "./InventoriesPage.css";
import useFetch from "./../../hooks/useFetch";

const invenotry = {
    id: "1",
    name: "Like a Pro Headphone",
    img: "https://i.ibb.co/w4RnFj8/headphone-1.jpg",
    info: "this is a beautiful and comfortable headphone. One of the best selling product.",
    price: "$5",
    quantity: "100",
    supplier: "Albert",
};

const InventoriesPage = () => {
    const { name, img, quantity, price, supplier } = invenotry;

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
                            <tr>
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
                                    <a href="#" className="table-btn">
                                        delete
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default InventoriesPage;
