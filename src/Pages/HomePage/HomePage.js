import React from "react";
import Bannar from "../../Components/Bannar/Bannar";
import ClientInfo from "../../Components/ClientInfo/ClientInfo";
import Inventory from "../../Components/Inventory/Inventory";
import SecTitle from "../../Components/SecTitle/SecTitle";
import Service from "../../Components/Service/Service";
import useFetch from "../../hooks/useFetch";
import "./HomePage.css";

const HomePage = () => {
    const inventories = useFetch("inventory.json");
    const services = useFetch("services.json");
    const clientInfos = useFetch("clientInfo.json");
    return (
        <>
            <Bannar />
            <section className="services-wrapper">
                <SecTitle title="our services" />
                <div className="sec-container">
                    <div className="content-row">
                        {services.map((service) => (
                            <Service key={service.id} service={service} />
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
                                key={inventory.id}
                                inventory={inventory}
                            />
                        ))}
                    </div>
                </div>
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
