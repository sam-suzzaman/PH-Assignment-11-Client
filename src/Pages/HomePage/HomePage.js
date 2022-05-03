import React from "react";
import Bannar from "../../Components/Bannar/Bannar";
import Inventory from "../../Components/Invenotory/Inventory";
import useFetch from "../../hooks/useFetch";
import "./HomePage.css";

const HomePage = () => {
    const inventories = useFetch("inventory.json");
    console.log(inventories);
    return (
        <>
            <Bannar />
            <section className="inventory-wrapper">
                <div className="sec-container">
                    <div className="inventory-row">
                        {inventories.map((inventory) => (
                            <Inventory
                                key={inventory.id}
                                inventory={inventory}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
