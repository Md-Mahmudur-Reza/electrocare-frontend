import React from 'react'

import ServiceBox from '../serviceBox/ServiceBox'

import styles from "./Services.module.css"

export default function Services() {

    const serviceData = [
        {
            image: "./Services/service_1.jpeg",
            title: "Home Appliance",
            description: "Fast, hassle-free installation and expert repairs for all major household electronics and appliances—keeping your kitchen, laundry, and entertainment gear running like new.",
        },
        {
            image: "./Services/service_2.jpg",
            title: "Electrical Wiring",
            description: "Safe, code-compliant wiring for new builds, renovations, and upgrades. From panel upgrades to smart-home circuits, we ensure reliable power where you need it.",
        },
        {
            image: "./Services/service_3.jpg",
            title: "HVAC Installation and Mantaiance",
            description: "Energy-efficient heating and cooling installation, maintenance, and troubleshooting. Enjoy year-round comfort with optimized airflow, lower utility bills, and 24/7 emergency support.",
        },
    ]


    return (
        <div className={styles.body}>
            <div className={styles.title}>SERVICE</div>
            <div className={styles.serviceSection}>
                {serviceData.map((service, index) => (
                    <ServiceBox key={index} {...service} />
                ))}
            </div>
        </div>
    )
}
