import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Bannar from "../../Components/Bannar/Bannar";
import ClientInfo from "../../Components/ClientInfo/ClientInfo";
import Inventory from "../../Components/Inventory/Inventory";
import SecTitle from "../../Components/SecTitle/SecTitle";
import Service from "../../Components/Service/Service";
import "./HomePage.css";

const HomePage = () => {
    const [inventories, setInventories] = useState([]);
    const [services, setServices] = useState([]);
    const [clientInfos, setClientInfos] = useState([]);

    // for Inentories
    useEffect(() => {
        fetch("https://fierce-anchorage-64625.herokuapp.com/inventoryCount")
            .then((res) => res.json())
            .then((result) => setInventories(result))
            .catch((err) => console.log(err));
    }, []);

    // for Services
    useEffect(() => {
        fetch("https://fierce-anchorage-64625.herokuapp.com/services")
            .then((res) => res.json())
            .then((result) => setServices(result))
            .catch((err) => console.log(err));
    }, []);

    // for Client-Informations
    useEffect(() => {
        fetch("https://fierce-anchorage-64625.herokuapp.com/companyinfo")
            .then((res) => res.json())
            .then((result) => setClientInfos(result))
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
                            <ClientInfo key={client._id} client={client} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
