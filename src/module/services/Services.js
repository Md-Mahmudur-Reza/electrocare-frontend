import React from 'react'

import ServiceBox from '../serviceBox/ServiceBox'

import styles from "./Services.module.css"

export default function Services() {

    const serviceData = [
        {
            image: "./dummy_image.jpg",
            title: "Electrical House Wiring",
            description: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
        },
        {
            image: "./dummy_image.jpg",
            title: "Electronic Appliance",
            description: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
        },
        {
            image: "./dummy_image.jpg",
            title: "Machinary",
            description: "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.",
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
