import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bannar from "../../Components/Bannar/Bannar";
import ClientInfo from "../../Components/ClientInfo/ClientInfo";
import Inventory from "../../Components/Inventory/Inventory";
import SecTitle from "../../Components/SecTitle/SecTitle";
import Service from "../../Components/Service/Service";
import useFetch from "../../hooks/useFetch";
import "./HomePage.css";

const HomePage = () => {
    const [inventories, setInventories] = useState([]);
    const [services, setServices] = useState([]);
    const clientInfos = useFetch("clientInfo.json");

    // for Inentories
    useEffect(() => {
        fetch("http://localhost:5000/inventories")
            .then((res) => res.json())
            .then((result) => setInventories(result))
            .catch((err) => console.log(err));
    }, []);

    // for Services
    useEffect(() => {
        fetch("http://localhost:5000/services")
            .then((res) => res.json())
            .then((result) => setServices(result))
            .catch((err) => console.log(err));
    }, []);

    const navigate = useNavigate();
    const handleMangeInventories = () => {
        navigate("/allinventories");
    };
    return (
        <>
            <Bannar />
            <section className="services-wrapper">
                <SecTitle title="our services" />
                <div className="sec-container">
                    <div className="content-row">
                        {services.map((service) => (
                            <Service key={service._id} service={service} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="inventory-wrapper">
                <SecTitle title="our inventory" />
                <div className="sec-container">
                    <div className="content-row">
                        {inventories.map((inventory) => (
                            <Inventory
                                key={inventory._id}
                                inventory={inventory}
                            />
                        ))}
                    </div>
                </div>
                <button
                    className="vally-btn single-inventory-btn"
                    onClick={handleMangeInventories}
                >
                    manage inventories
                </button>
            </section>
            <section className="client-info-wrapper">
                <div className="sec-container">
                    <div className="client-row">
                        {clientInfos.map((client) => (
                            <ClientInfo key={client.id} client={client} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
