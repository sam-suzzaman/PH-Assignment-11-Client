import React, { useState } from "react";
import { toast } from "react-toastify";
import SecTitle from "../../Components/SecTitle/SecTitle";
import "./AddItemPage.css";

const AddItemPage = () => {
    const [email, setEmail] = useState("");
    const [product, setProduct] = useState("");
    const [img, setImg] = useState("");
    const [info, setInfo] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [supplier, setSupplier] = useState("");

    const handleAddItem = (e) => {
        e.preventDefault();

        // to send item
        const inventory = {
            email,
            name: product,
            img,
            info,
            price,
            quantity,
            supplier,
        };
        const url = `https://fierce-anchorage-64625.herokuapp.com/inventories`;
        fetch(url, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(inventory),
        })
            .then((res) => res.json())
            .then((result) => {
                toast("Item added successfully");
            });
        setEmail("");
        setImg("");
        setInfo("");
        setPrice("");
        setProduct("");
        setQuantity("");
        setSupplier("");
    };
    return (
        <section className="add-item-wrapper">
            <SecTitle title="Add New Item" />
            <div className="sec-container">
                <div className="add-item-container">
                    <form onSubmit={handleAddItem}>
                        <div className="input-control">
                            <label htmlFor="email">Your email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                name="email"
                                id="email"
                                required
                            />
                        </div>
                        <div className="input-control">
                            <label htmlFor="productTitle">
                                {" "}
                                product Title:
                            </label>
                            <input
                                type="text"
                                value={product}
                                onChange={(e) => setProduct(e.target.value)}
                                name="productTitle"
                                id="productTitle"
                                required
                            />
                        </div>
                        <div className="input-control">
                            <label htmlFor="img"> photo url:</label>
                            <input
                                type="text"
                                value={img}
                                onChange={(e) => setImg(e.target.value)}
                                name="img"
                                id="img"
                                required
                            />
                        </div>
                        <div className="input-control">
                            <label htmlFor="info"> product desctiption:</label>
                            <input
                                type="text"
                                value={info}
                                onChange={(e) => setInfo(e.target.value)}
                                name="info"
                                id="info"
                                required
                            />
                        </div>
                        <div className="input-control">
                            <label htmlFor="price"> product price:</label>
                            <input
                                type="text"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                name="price"
                                id="price"
                                required
                            />
                        </div>
                        <div className="input-control">
                            <label htmlFor="setQuantity">
                                {" "}
                                product quantity:
                            </label>
                            <input
                                type="text"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                name="setQuantity"
                                id="setQuantity"
                                required
                            />
                        </div>
                        <div className="input-control">
                            <label htmlFor="img"> Supplier name:</label>
                            <input
                                type="text"
                                value={supplier}
                                onChange={(e) => setSupplier(e.target.value)}
                                name="supplier"
                                id="supplier"
                                required
                            />
                        </div>
                        <input
                            className="submit-btn"
                            type="submit"
                            value="add item"
                        />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddItemPage;
